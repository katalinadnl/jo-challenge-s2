export default function generateStructure(structure) {
    const createElement = (struct) => {
        if (typeof struct === 'string') {
            return document.createTextNode(struct);
        }

        const element = document.createElement(struct.tag);

        if (struct.props) {
            Object.keys(struct.props).forEach(attr => {
                const value = struct.props[attr];

                if (attr.startsWith('on')) {
                    element.addEventListener(attr.toLowerCase().substring(2), value);
                } else if (attr === 'style') {
                    Object.assign(element.style, value);
                } else {
                    element.setAttribute(attr, value);
                }
            });
        }

        if (struct.children) {
            struct.children.forEach(child => {
                element.appendChild(createElement(child));
            });
        }

        return element;
    };

    return createElement(structure);
}
