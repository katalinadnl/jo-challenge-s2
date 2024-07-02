import { getNavbarStructure } from "../components/Navbar.js";
import { getFooterStructure } from "../components/Footer.js";
import { createHeroComponent } from "../components/HeroSection.js";
//added by Catalina
const eventsHeroContent = {
    backgroundImage: "",
    headingText: "Carte intéractive",
    paragraphText: "Bienvenue aux Jeux Olympiques 2024 à Paris ! Découvrez l'excitation de cet événement prestigieux au cœur de la capitale.",
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
                                tag: "p",
                                children: ["Ne vous perdez plus !"]
                            },
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
