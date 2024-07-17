import { getNavbarStructure } from "../components/Navbar.js";
import { getFooterStructure } from "../components/Footer.js";
import { createHeroComponent } from "../components/HeroSection.js";
import CardComponent from "../components/CardComponent.js";
import { DOM } from "../core/generateStructure.js";

const eventsHeroContent = {
    headingText: "DÉCOUVREZ LES ÉVÉNEMENTS QUI VOUS PLAISENT",
    paragraphText: "Explorez les moments inoubliables des Jeux Olympiques de Paris 2024 et trouvez les événements qui vous passionnent.",
};

const cardEventsProps = [
    { title: "Cérémonie d'ouverture", description: "Assistez à la cérémonie d'ouverture des Jeux Olympiques de Paris 2024, un spectacle inoubliable pour tous les fans de sport." },
    { title: "Épreuve de natation", description: "Venez voir les meilleurs nageurs du monde s'affronter dans une compétition féroce." },
    { title: "Match de football", description: "Assistez à des matchs palpitants de football avec les meilleures équipes internationales." },
    { title: "Tournoi de basketball", description: "Voyez les géants du basketball s'affronter pour la médaille d'or." },
    { title: "Compétition de gymnastique", description: "Admirez la grâce et la force des gymnastes du monde entier." },
    { title: "Course d'athlétisme", description: "Encouragez les athlètes dans les courses les plus rapides du monde." },
    { title: "Tournoi de tennis", description: "Regardez les matchs de tennis les plus intenses et les plus excitants." },
    { title: "Épreuve d'escrime", description: "Venez voir les duels d'escrime les plus élégants et les plus compétitifs." },
    { title: "Compétition de cyclisme", description: "Encouragez les cyclistes dans des courses spectaculaires." },
    { title: "Épreuve de tir à l'arc", description: "Admirez la précision et le calme des archers en compétition." },
    { title: "Tournoi de volleyball", description: "Assistez à des matchs de volleyball palpitants." },
    { title: "Compétition de judo", description: "Venez voir les meilleurs judokas du monde en action." },
    { title: "Tournoi de rugby", description: "Regardez les matchs de rugby les plus intenses." },
    { title: "Épreuve de triathlon", description: "Encouragez les triathlètes dans l'une des compétitions les plus difficiles des Jeux." }
];

export default class EventsStruct extends DOM.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const cardComponents = cardEventsProps.map(cardProps =>
            DOM.createElement(CardComponent, cardProps, [])
        );

        return {
            tag: "div",
            props: { class: "event" },
            children: [
                new getNavbarStructure().render(),
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
