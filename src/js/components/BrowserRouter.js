import generateStructure from "../core/generateStructure.js";

const BrowserRouter = function (routes, rootElement) { // function to handle the browser routing
    const generatePage = () => { // function to generate the page
        const pathname = window.location.pathname; // get the pathname
        const route = routes.find(route => route.path === pathname) || routes.find(route => route.path === '*'); // find the route

        if (route) { // if the route is found
            const Component = route.component; // get the component
            const props = {};
            const componentInstance = new Component(props); // create a new instance of the component
            const structure = componentInstance.render(); // get the structure of the component

            if (rootElement.childNodes.length) { // if the root element has child nodes
                rootElement.replaceChild( // replace the child node
                    generateStructure(structure), // generate the structure
                    rootElement.childNodes[0], // get the first child node
                );
            } else {
                rootElement.appendChild(generateStructure(structure)); // append the structure to the root element
            }
        } else {
            console.error(`No route found for path "${pathname}"`);
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
