import {generateStructure, createElement, isClassComponent, DOM} from "../core/generateStructure.js";

const BrowserRouter = function (routes, rootElement) { // function to handle the browser routing
    const generatePage = () => { // function to generate the page
        const pathname = window.location.pathname; // get the pathname
        const route = routes.find(route => route.path === pathname) || routes.find(route => route.path === '*'); // find the route
        let g;
        if (route) {
            if(isClassComponent(route.component)) {
                const component = route.component;
                const page = DOM.createElement(component);
                g = generateStructure(page);
            } else if (typeof route.component === "function") {
                g = new route.component();
            } else {
                g = generateStructure(route.component);
            }

            if (rootElement.childNodes.length) {
                rootElement.replaceChild(g, rootElement.childNodes[0]);
            } else {
                rootElement.appendChild(g);
            }
        } else {
            console.error(`Pas de route pour la route "${pathname}"`);
        }
    };

    generatePage(); // generate the page

    const oldPushState = history.pushState; // save the old push state
    history.pushState = function (state, title, url) { // override the push state
        oldPushState.call(history, state, title, url); // call the old push state
        window.dispatchEvent(new Event('popstate')); // dispatch a popstate event
    };

    window.onpopstate = generatePage; // on popstate, generate the page
};

export default BrowserRouter;

export function BrowserLink(props) { // function to create a link
    return {
        tag: "a",
        props: {
            href: props.path,
            onClick: (e) => {
                e.preventDefault();
                window.history.pushState({}, null, props.path);
                window.dispatchEvent(new Event("pushstate"));
            },
        },
        children: [props.title],
    };
}
