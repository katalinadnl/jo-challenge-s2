import getNavbarStructure  from "../components/Navbar.js";
import { getFooterStructure } from "../components/Footer.js";
import { createHeroComponent } from "../components/HeroSection.js";
import CardComponent from "../components/CardComponent.js";
import { DOM } from "../core/generateStructure.js";

const eventsHeroContent = {
    headingText: "DÉCOUVREZ LES ÉVÉNEMENTS QUI VOUS PLAISENT",
    paragraphText: "Explorez les moments inoubliables des Jeux Olympiques de Paris 2024 et trouvez les événements qui vous passionnent.",
};

//tableau des objets
const cardEventsProps = [
    { type: "event", title: "Cérémonie d'ouverture", description: "Assistez à la cérémonie d'ouverture des Jeux Olympiques de Paris 2024, un spectacle inoubliable pour tous les fans de sport." },
    { type: "event", title: "Épreuve de natation", description: "Venez voir les meilleurs nageurs du monde s'affronter dans une compétition féroce." },
    { type: "event", title: "Match de football", description: "Assistez à des matchs palpitants de football avec les meilleures équipes internationales." },
    { type: "event", title: "Tournoi de basketball", description: "Voyez les géants du basketball s'affronter pour la médaille d'or." },
    { type: "event", title: "Compétition de gymnastique", description: "Admirez la grâce et la force des gymnastes du monde entier." },
    { type: "event", title: "Course d'athlétisme", description: "Encouragez les athlètes dans les courses les plus rapides du monde." },
    { type: "event", title: "Tournoi de tennis", description: "Regardez les matchs de tennis les plus intenses et les plus excitants." },
    { type: "event", title: "Épreuve d'escrime", description: "Venez voir les duels d'escrime les plus élégants et les plus compétitifs." },
    { type: "event", title: "Compétition de cyclisme", description: "Encouragez les cyclistes dans des courses spectaculaires." },
    { type: "event", title: "Épreuve de tir à l'arc", description: "Admirez la précision et le calme des archers en compétition." },
    { type: "event", title: "Tournoi de volleyball", description: "Assistez à des matchs de volleyball palpitants." },
    { type: "event", title: "Compétition de judo", description: "Venez voir les meilleurs judokas du monde en action." },
    { type: "event", title: "Tournoi de rugby", description: "Regardez les matchs de rugby les plus intenses." },
    { type: "event", title: "Épreuve de triathlon", description: "Encouragez les triathlètes dans l'une des compétitions les plus difficiles des Jeux." }
];

export default class EventsStruct extends DOM.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const cardComponents = cardEventsProps.map(cardProps =>
            DOM.createElement(CardComponent, cardProps, [])
        );
        const navbar = DOM.createElement(getNavbarStructure, []);
        return {
            tag: "div",
            props: { class: "event" },
            children: [
                navbar,
                createHeroComponent(eventsHeroContent),
                {
                    tag: "main",
                    props: { class: "body-content" },
                    children: cardComponents
                },
                getFooterStructure()
            ]
        };
    }
}
