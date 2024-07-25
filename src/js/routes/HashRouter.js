// initialise le router en utilisant le hash de l'url pour gérer les changements de page
export default function HashRouter(rootElement, routes) {
    function managePath() {
        const path = window.location.hash.slice(1);
        const pageGenerator = routes[path] ?? routes["*"];
        return pageGenerator();
    }

    window.addEventListener("hashchange", function () {
        rootElement.replaceChild(managePath(), rootElement.childNodes[0]);
    });
    rootElement.appendChild(managePath());
}