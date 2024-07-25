import { generateStructure, isClassComponent, DOM } from "../core/generateStructure.js";

const BrowserRouter = function(routes, rootElement) {
    const generatePage = () => {
        const pathname = window.location.pathname;

        // trouver la route correspondante
        let route = routes.find(route => {
            if (route.path === '*') return false;
            const routePath = route.path.replace(/:\w+/g, '([^/]+)');
            const match = pathname.match(new RegExp(`^${routePath}$`));
            return match;
        });

        // si aucune route n'est trouvée, on prend la route par défaut
        if (!route) {
            route = routes.find(route => route.path === '*');
        }

        let g;
        if (route) {
            let match;
            if (route.path !== '*') {
                const routePath = route.path.replace(/:\w+/g, '([^/]+)');
                match = pathname.match(new RegExp(`^${routePath}$`));
            }

            if (isClassComponent(route.component)) {
                const component = route.component;
                const page = DOM.createElement(component, { params: match && match.slice(1) });
                g = generateStructure(page);
            } else if (typeof route.component === "function") {
                g = new route.component({ params: match && match.slice(1) });
            } else {
                g = generateStructure(route.component);
            }

            if (rootElement.childNodes.length) {
                rootElement.replaceChild(g, rootElement.childNodes[0]);
            } else {
                rootElement.appendChild(g);
            }
        } else {
            console.error('No route found');
        }
    };

    generatePage();

    const oldPushState = history.pushState;
    history.pushState = function(state, title, url) {
        oldPushState.call(history, state, title, url);
        window.dispatchEvent(new Event('popstate'));
    };

    window.onpopstate = generatePage;
};

export default BrowserRouter;

export function BrowserLink(props) {
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
