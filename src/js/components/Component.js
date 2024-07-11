export default class Component {
  constructor(props = {}) {
      this.state = {};
      this.props = props;
  }

  setState(newState) {
      this.state = { ...this.state, ...newState };
      const rootElement = document.getElementById('root');
      const routes = window.routes; // Assuming routes are globally available
      const currentPath = window.location.pathname;
      const route = routes.find(route => route.path === currentPath) || routes.find(route => route.path === "*");
      if (route) {
          const ComponentClass = route.component;
          const componentInstance = new ComponentClass(this.props);
          const structure = componentInstance.render();
          rootElement.replaceChild(
              generateStructure(structure),
              rootElement.childNodes[0]
          );
      }
  }

  render() {
      return null;
  }
}
