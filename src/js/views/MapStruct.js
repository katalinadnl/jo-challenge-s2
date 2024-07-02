import { getNavbarStructure } from "../components/Navbar.js";
import { getFooterStructure } from "../components/Footer.js";
import { createHeroComponent } from "../components/HeroSection.js";
//added by Catalina
const eventsHeroContent = {
    backgroundImage: "../../styles/images/fireworks.jpg",
    headingText: "Carte intéractive",
    paragraphText: " Découvrez Paris 2024 en détail ! Plongez dans l'Aventure des jeux à travers notre carte interactive.",
    height: "650px"
};

function createGMap() {
    (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
        key: "AIzaSyAWXpDhNwacHzpeSieCl9alCgsKuSXebeU",
        v: "weekly",
        // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
        // Add other bootstrap parameters as needed, using camel case.
    });

    let map;
// initMap is now async
    async function initMap() {
        // Request libraries when needed, not in the script tag.
        const { Map } = await google.maps.importLibrary("maps");
        // Short namespaces can be used.
        map = new Map(document.getElementById("map"), {
            center: { lat: 48.86010463673363, lng: 2.2933603275527727 },
            zoom: 8,
        });
    }



    initMap();
}

//finish added by Catalina

// Fonction pour créer le composant de filtre
function createFilterComponent() {
    return {
        tag: "div",
        props: { class: "filter-component" },
        children: [
            { tag: "select", props: { class: "filter", id: "eventType" }, children: [{ tag: "option", props: { value: "" }, children: ["Épreuve"] }] },
            { tag: "select", props: { class: "filter", id: "date" }, children: [{ tag: "option", props: { value: "" }, children: ["Date"] }] },
            { tag: "select", props: { class: "filter", id: "location" }, children: [{ tag: "option", props: { value: "" }, children: ["Lieu"] }] },
            { tag: "select", props: { class: "filter", id: "category" }, children: [{ tag: "option", props: { value: "" }, children: ["Catégorie"] }] },
            { tag: "select", props: { class: "filter", id: "sport" }, children: [{ tag: "option", props: { value: "" }, children: ["Sport"] }] },
            { tag: "button", props: { class: "filter-button", id: "applyFilters" }, children: ["Appliquer"] }
        ]
    };
}

export default function MapStruct() {
    return {
        tag: "div",
        props: { class: "map body-content" },
        children: [

            getNavbarStructure(),
            createHeroComponent(eventsHeroContent),
            {
                tag: "section",
                props: { class: "section1" },
                children: [
                    {
                        tag: "div",
                        props: { class: "map" },
                        children: [
                            {
                                tag: "h2",
                                children: ["BIENVENUE SUR LA CARTE INTERACTIVE DES JEUX OLYMPIQUES"]
                            },
                            {
                                tag: "p",
                                children: [
                                    "Explorez les différents sites et événements des Jeux Olympiques avec notre carte interactive.",
                                    { tag: "br" },
                                    "Utilisez les filtres ci-dessous pour personnaliser vos recherches et découvrir les événements par date, type et localisation."
                                ]
                            },
                            createFilterComponent(),
                            {
                                tag: "div",
                                props: { class:"map-item", id: "map"}
                
                            },
                            createGMap(),
                        ]
                    },
                ]
            },
            getFooterStructure(),
        ]
    };
}
