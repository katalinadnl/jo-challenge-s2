import { getNavbarStructure } from "../components/Navbar.js";
import { getFooterStructure } from "../components/Footer.js";
import { createHeroComponent } from "../components/HeroSection.js";

const eventsHeroContent = {
    backgroundImage: "../../styles/images/ski.jpg",
    headingText: "DÉCOUVREZ LES ÉVÉNEMENTS QUI VOUS PLAISENT",
    paragraphText: "Explorez les moments inoubliables des Jeux Olympiques de Paris 2024 et trouvez les événements qui vous passionnent.",
    height: "650px"
};

export default function EventsStruct() {
    return {
        tag: "div",
        props: { class: "body-content" },
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
