import {getNavbarStructure} from "../components/Navbar.js";
import {getFooterStructure} from "../components/Footer.js";
import {createHeroComponent} from "../components/HeroSection.js";
import CardComponent from "../components/CardComponent.js";
import {DOM} from "../core/generateStructure.js";

const eventsHeroContent = {
    headingText: "DÉCOUVREZ LES ÉVÉNEMENTS QUI VOUS PLAISENT",
    paragraphText: "Explorez les moments inoubliables des Jeux Olympiques de Paris 2024 et trouvez les événements qui vous passionnent.",
};

const cardEventProps = {
    title: "Cérémonie d'ouverture",
    description: "Assistez à la cérémonie d'ouverture des Jeux Olympiques de Paris 2024, un spectacle inoubliable pour tous les fans de sport."
};

export default class EventsStruct extends DOM.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return {
            tag: "div",
            props: {class: "event"},
            children: [
                new getNavbarStructure().render(),
                createHeroComponent(eventsHeroContent),
                {
                    tag: "main",
                    props: {class: "body-content"},
                    children: [
                        DOM.createElement(CardComponent, cardEventProps, []),
                    ]
                },
                {
                    tag: "button",
                    props: {
                        class: "load-more",
                        type: "button"
                    },
                    events: {
                        click: [() => {
                            console.log("Voir plus d'événements");
                        }]
                    },
                    children: [
                        {
                            type: 'TEXT_NODE',
                            content: `Click me`,
                        },
                    ],
                },
                getFooterStructure()
            ]
        };
    }
}
