import { generateStructure }  from "../core/generateStructure.js";// import the generateStructure function
// This is a base class for all components. It has a setState method which updates the state and re-renders the component.
export default class Component {

    constructor(props = {}) {
        this.state = {};
        this.props = props;
    }

    setState(newState) { // method to update the state
        this.state = { ...this.state, ...newState }; // update the state
        this.updateComponent(); // call the updateComponent
    }

    updateComponent() { // method to update the component
        this.isRender = false; // set the isRender to false
        const newElement = generateStructure(this.render()); // generate the new structure
        const element = this.__rootElement; // get the root element
        const parent = element ? element.parentElement : null; // get the parent element

        if (parent && element) {
            if (this.componentWillUnmount) {
                this.componentWillUnmount();
            }

            parent.replaceChild(newElement, element);

            if (this.componentDidUpdate) {
                this.componentDidUpdate();
            }

            this.__rootElement = newElement;
        }
    }

    setRoot(element) { // method to set the root element
        this.__rootElement = element; // set the root element
    }


    render() {
        return null;
    }
}
