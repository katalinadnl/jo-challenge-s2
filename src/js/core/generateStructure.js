export default function generateStructure(structure) { // function to generate the structure of the page
    const createElement = (struct) => { // function to create the elements of the page
        if (typeof struct === 'string') { // if the element is a string
            return document.createTextNode(struct); // return the text node
        }

        const element = document.createElement(struct.tag); // create the element with the tag

        if (struct.props) { // if the element has props
            Object.keys(struct.props).forEach(attr => { // for each prop
                const value = struct.props[attr]; // get the value of the prop

                if (attr.startsWith('on')) { // if the prop starts with 'on'
                    element.addEventListener(attr.toLowerCase().substring(2), value); // add an event listener
                } else if (attr === 'style') { // if the prop is style
                    Object.assign(element.style, value); // assign the style to the element
                } else {
                    element.setAttribute(attr, value); // set the attribute of the element
                }
            });
        }

        if (struct.children) { // if the element has children
            struct.children.forEach(child => { // for each child
                element.appendChild(createElement(child));  // append the child to the element
            });
        }

        return element;
    };

    return createElement(structure); // return the element
}
