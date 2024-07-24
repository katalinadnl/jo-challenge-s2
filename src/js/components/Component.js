import { generateStructure }  from "../core/generateStructure.js";

export default class Component {

    constructor(props = {}) {
        this.state = {};
        this.props = props;
    }

    setState(newState) { // method to set the state
        this.state = { ...this.state, ...newState };
        this.updateComponent();
    }

    updateComponent() { // method to update the component
        this.isRender = false;
        const newElement = generateStructure(this.render()); // generate the new struct
        const element = this.__rootElement;
        const parent = element ? element.parentElement : null;

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

    setRoot(element) {
        this.__rootElement = element;
    }


    render() {
        return null;
    }
}
