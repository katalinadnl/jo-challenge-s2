import { getNavbarStructure } from "../components/Navbar.js";
import { getFooterStructure } from "../components/Footer.js";
import { createHeroComponent } from "../components/HeroSection.js";

const eventsHeroContent = {
    headingText: "Agenda Olympique Paris 2024",
    paragraphText: "Ne manquez aucun moment clé des Jeux Olympiques de Paris 2024. Vivez l'excitation des compétitions en temps réel",
    height: "650px"
};

export default function EventsStruct() {
    return {
        tag: "div",
        props: { class: "agenda body-content" },
        children: [
            getNavbarStructure(),
            createHeroComponent(eventsHeroContent),
            {
                tag: "section",
                props: { class: "events-content" },
                children: [
                    {
                        tag: "div",
                        props: { class: "page-size" },
                        children: [

                        ]
                    }
                ]
            },
            getFooterStructure()
        ]
    };
}
