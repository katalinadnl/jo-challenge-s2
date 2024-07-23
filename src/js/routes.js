import HomeStruct from "./views/HomeStruct.js";
import SportsStruct from "./views/SportsStruct.js";
import EventsStruct from "./views/EventsStruct.js";
import MapStruct from "./views/MapStruct.js";
import SpotsStruct from "./views/SpotsStruct.js";
import InformationsStruct from "./views/InformationsStruct.js";
import Page404Struct from "./views/Page404Struct.js";
import { generateStructure } from "./core/generateStructure.js";

export const routes = [
    { path: "/", component: HomeStruct },
    { path: "/sports", component: SportsStruct },
    { path: "/evenements", component: EventsStruct },
    { path: "/carte", component: MapStruct },
    { path: "/spots", component: SpotsStruct },
    { path: "/informations", component: InformationsStruct },
    { path: "*", component: Page404Struct }
];
function renderComponent(ComponentClass) {
    const root = document.getElementById('root');
    root.innerHTML = ''; // Clear previous content

    const componentInstance = new ComponentClass();
    const renderedStructure = componentInstance.render();
    const generatedElement = generateStructure(renderedStructure);

    root.appendChild(generatedElement);
    componentInstance.setRoot(generatedElement);

    if (componentInstance.componentDidMount) {
        componentInstance.componentDidMount();
    }
}

function handleRouting() {
    const currentPath = window.location.pathname;
    const route = routes.find(r => r.path === currentPath) || routes.find(r => r.path === '*');

    if (route) {
        renderComponent(route.component);
    } else {
        console.error('No route found for path:', currentPath);
    }
}

window.addEventListener('popstate', handleRouting);
document.addEventListener('DOMContentLoaded', handleRouting);

export function navigateTo(path) {
    window.history.pushState({}, path, window.location.origin + path);
    handleRouting();
}