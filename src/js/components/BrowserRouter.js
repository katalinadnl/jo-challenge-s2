import generateStructure from "../core/generateStructure.js";

const BrowserRouter = function (routes, rootElement) {
    const generatePage = () => {
        const pathname = window.location.pathname;
        const route = routes[pathname] || routes['*'];

        if (route) {
            const Component = route;
            const props = {};
            const componentInstance = new Component(props);
            const structure = componentInstance.render();

            if (rootElement.childNodes.length) {
                rootElement.replaceChild(
                    generateStructure(structure),
                    rootElement.childNodes[0],
                );
            } else {
                rootElement.appendChild(generateStructure(structure));
            }
        } else {
            console.error(`Pas de route pour la route "${pathname}"`);
        }
    };

    generatePage();

    const oldPushState = history.pushState;
    history.pushState = function (state, title, url) {
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
