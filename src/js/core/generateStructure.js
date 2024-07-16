/*export default function generateStructure(structure) { // function to generate the structure of the page
    const createElement = (struct) => {
        const element = document.createElement(struct.tag); // create an element with the tag

        if (typeof struct.type === 'string') { // if the element is a string
            if (struct.type === 'TEXT_NODE') { // if the element is a text node
                return document.createTextNode(struct.content); // create a text node
            }
             element = document.createElement(struct.type);
        } else if (isClassComponent(struct.type)) { // if the element is a class component
            const instance = new struct.type(struct.props); // create a new instance of the component
            instance.render(); // get the structure of the component
            struct.instance = instance;
            struct.instance.isRender = true;
            element = doocument.createElement(struct.tag);
        }

        if (struct.props) {
            for (const propName in struct.props) {
                if (propName === "style") {
                    Object.assign(element.style, struct.props[propName]);
                } else if (propName.startsWith("data-")) {
                    element.dataset[propName.replace("data-", "")] =
                        struct.props[propName];
                } else {
                    element.setAttribute(propName, struct.props[propName]);
                }
            }
        }

        if (struct.events) {
            for (const eventName in struct.events) {
                for (const eventListeners of struct.events[eventName]) {
                    element.addEventListener(eventName, eventListeners);
                }
            }
        }

        if (structure.children) { // if children exist
            for (const child of structure.children) {
                let subChild;
                if (typeof child === "string") {
                    subChild = document.createTextNode(child);
                } else if (typeof child === "object" && child !== null) {
                    subChild = generateStructure(child);
                }
                if (subChild) {
                    element.appendChild(subChild);
                }
            }
        }
        console.log(struct.instance);
        if (struct.instance && struct.instance.setRoot) { //changer le nom setRoot
            struct.instance.setRoot(element);

            if  ( struct.instance.isRender && struct.instance.componentDidMount ) {
                struct.instance.componentDidMount();
            }

        }

        return element;
    };

    return createElement(structure); // return the element
}*/

export function isClassComponent(component) {
    if (typeof component !== 'function') {
        return false;
    }
    try {
        component();
        return false;
    } catch (error) {
        if (/^[C|c]lass constructor/.test(error.message)) {
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
    if (structure.type === 'TEXT_NODE') {
        return document.createTextNode(structure.content);
    }

    const element = document.createElement(structure.type);

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
                element.addEventListener(eventName, eventListeners);
            }
        }
    }

    if (structure.instance && structure.instance.setRootElement) {
        structure.instance.setRootElement(element);

        if (structure.instance.isRender && structure.instance.componentDidMount) {
            structure.instance.componentDidMount();
        }
    }

    return element;
}

