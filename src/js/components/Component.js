import generateStructure from '../core/generateStructure.js'; // import the generateStructure function
// This is a base class for all components. It has a setState method which updates the state and re-renders the component.
export default class Component {

  constructor(props = {}) {
      this.state = {};
      this.props = props;
  }

  setState(newState) { // method to update the state
      this.state = newState; // update the state
      const rootElement = document.getElementById('root'); // get the root element
      const routes = window.routes; // get the routes
      const currentPath = window.location.pathname; // get the current path
      const route = routes.find(route => route.path === currentPath) || routes.find(route => route.path === "*"); // find the route
      if (route) { // if the route is found
          const ComponentClass = route.component; // get the component class
          const componentInstance = new ComponentClass(this.props); // create a new instance of the component
          const structure = componentInstance.render(); // get the structure of the component
          rootElement.replaceChild( // replace the child node
              generateStructure(structure),
              rootElement.childNodes[0]
          );
      }
  }

  render() {
      return null;
  }
}
