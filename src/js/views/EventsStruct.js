import { getNavbarStructure } from "../components/Navbar.js";
import { getFooterStructure } from "../components/Footer.js";
import { createHeroComponent } from "../components/HeroSection.js";
import Component from "../components/Component.js";
import CardComponent from "../components/CardComponent.js";

const eventsHeroContent = {
    headingText: "DÉCOUVREZ LES ÉVÉNEMENTS QUI VOUS PLAISENT",
    paragraphText: "Explorez les moments inoubliables des Jeux Olympiques de Paris 2024 et trouvez les événements qui vous passionnent.",
};

const cardEventProps = {
    title: "Cérémonie d'ouverture",
    description: "Assistez à la cérémonie d'ouverture des Jeux Olympiques de Paris 2024, un spectacle inoubliable pour tous les fans de sport."
};

export default class EventsStruct extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return {
            tag: "div",
            props: { class: "event" },
            children: [
                getNavbarStructure(),
                createHeroComponent(eventsHeroContent),
                {
                    tag: "main",
                    props: { class: "body-content" },
                    children: [
                        new CardComponent(cardEventProps).render(),
                        {
                            tag: "section",
                            props: { class: "events-content" },
                            children: [
                                {
                                    tag: "div",
                                    props: { class: "page-size" },
                                    children: []
                                }
                            ]
                        }
                    ]
                },
                getFooterStructure()
            ]
        };
    }
}
