export default function generateStructure(structure) {
    if (structure && typeof structure === 'object' && structure.tag) {
        const elem = document.createElement(structure.tag); // create element with tag

        if (structure.props) { // if props exist
            for (const propName in structure.props) { // loop through props
                if (structure.props.hasOwnProperty(propName)) { // check if the property is directly on the object
                    if (/^on[A-Z]/.test(propName)) { // if propName starts with on
                        elem.addEventListener( // add event listener
                            propName.slice(2).toLowerCase(), // event name
                            structure.props[propName] // event handler
                        );
                    } else if (/^data[A-Z]/.test(propName)) { // if propName starts with data
                        elem.dataset[propName.slice(4).toLowerCase()] = structure.props[propName]; // set dataset
                    } else {
                        elem.setAttribute(propName, structure.props[propName]); // set attribute
                    }
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
                    elem.appendChild(subChild); // append child
                }
            }
        }
        return elem;
    }

    // Default case if structure is undefined or invalid
    return document.createElement("div");
}
