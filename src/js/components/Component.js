import { generateStructure }  from "../core/generateStructure.js";// import the generateStructure function
// This is a base class for all components. It has a setState method which updates the state and re-renders the component.
export default class Component {

    constructor(props = {}) {
        this.state = {};
        this.props = props;
    }

    setState(newState) { // method to update the state
        this.state = newState; // update the state
        this.updateComponent(); // call the updateComponent
    }

    updateComponent() { // method to update the component
        const newStructure = this.render(); // call the render method
        const newElement = generateStructure(newStructure); // generate the new structure
        const element = this.rootElement; // get the root element
        console.log(element);
        const parent = element.parentElement; // get the parent element

        if (parent && currentElement) {

            parent.replaceChild(oldElement, currentElement);

            this.rootElement = newElement;
        }

    }

    setRoot(element) { // method to set the root element
        this.rootElement = element; // set the root element
    }


    render() {
        return null;
    }
}
