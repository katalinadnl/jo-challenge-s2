export default function generateStructure(structure) { // function to generate the structure of the page
    const createElement = (struct) => { // function to create the elements of the page
        let element;

        if (typeof struct.type === 'string') { // if the element is a string
            if (struct.type === 'TEXT_NODE') { // if the element is a text node
                return document.createTextNode(struct.content); // create a text node
            }
             element = document.createElement(struct.type);
        } else if (typeof struct === 'object') {
            element = document.createElement(struct.tag);
        } else {
            const state = struct.state || {};
            const props = struct.props || {};

            const instance = new struct(props, state);
            element = this.createElement(instance.render());
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
            for (const child of structure.children) {   // loop through children
                let subChild; // create subChild
                if (typeof child === "string") { // if child is a string
                    subChild = document.createTextNode(child); // create text node
                } else if (typeof child === "object" && child !== null) { // if child is an object
                    subChild = generateStructure(child); // create element
                }
                if (subChild) {
                    element.appendChild(subChild); // append child
                }
            }
        }

        return element;
    };

    return createElement(structure); // return the element
}
