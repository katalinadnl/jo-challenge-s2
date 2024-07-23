import Component from "../components/Component.js";

export function isClassComponent(component) {
    if (typeof component !== 'function') { //a tester component.toString().startsWith('class ')
        return false;
    }
    try {
        component();
        return false;
    } catch (error) {
        if (/^[C|c]lass constructor/.test(error.message)) { //
            return true;
        }
        return false;
    }
}

export function createElement(component, props, ...children) {
    if (isClassComponent(component)) {
        const instance = new component(props);
        component = instance.render();
        component.instance = instance;
        instance.isRender = true;
    } else if (typeof component === "function") {
        return component(props);
    }

    if (typeof component === "object") {
        component.props = { ...component.props, ...props };

        if (!component.children) component.children = [];

        children.forEach((child) => {
            if (Array.isArray(child)) {
                component.children.push(...child);
            } else {
                component.children.push(child);
            }
        });

        return component;
    } else {
        return {
            type: component,
            props: props,
            children: children,
        };
    }
}

export function generateStructure(structure) {
    if (structure.tag === 'TEXT_NODE') {
        return document.createTextNode(structure.content);
    }

    const element = document.createElement(structure.tag);

    if (structure.children) {
        structure.children.forEach(child => {
            const childNode = generateStructure(child);
            element.appendChild(childNode);
        });
    }

    if (structure.props) {
        for (const propName in structure.props) {
            if (propName === "style") {
                Object.assign(element.style, structure.props[propName]);
            } else if (propName.startsWith("data-")) {
                element.dataset[propName.replace("data-", "")] =
                    structure.props[propName];
            } else {
                element.setAttribute(propName, structure.props[propName]);
            }
        }
    }

    if (structure.events) {
        for (const eventName in structure.events) {
            for (const eventListeners of structure.events[eventName]) {
                if (eventName === "scroll") {
                    window.addEventListener(eventName, eventListeners);
                }

                element.addEventListener(eventName, eventListeners);
            }
        }
    }

    if (structure.instance && structure.instance.setRoot) {
        structure.instance.setRoot(element);

        // Remove this part to avoid multiple calls to componentDidMount
         if (structure.instance.isRender && structure.instance.componentDidMount) {
             setTimeout(()=>structure.instance.componentDidMount(), 0);
         }
    }

    return element;
}

export const DOM = {
    createElement,
    Component: Component,
};
