import Events from "/js/views/Events.js";
import Agenda from "/js/views/Agenda.js";
import Map from "/js/views/Map.js";
import Spots from "/js/views/Spots.js";
import Home from "/js/views/Home.js";
import Page404 from "/js/views/Page404.js";

console.log("Hello, World!");

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url); // Change l'URL sans recharger la page
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: Home },
        { path: "/evenements", view: Events },
        { path: "/agenda", view: Agenda },
        { path: "/carte", view: Map },
        { path: "/spots", view: Spots },
        { path: "/*", view: Page404 }
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    document.querySelector("#root").innerHTML = await view.getHtml();
};



window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded");
    document.body.addEventListener("click", e => {
        console.log("click");
        if (e.target.matches("[data-link]")) {
            console.log("data-link");
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});
