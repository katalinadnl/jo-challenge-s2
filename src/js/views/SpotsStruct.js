import { getNavbarStructure } from "../components/Navbar.js";
import { getFooterStructure } from "../components/Footer.js";
import { createHeroComponent } from "../components/HeroSection.js";
import CardComponent from "../components/CardComponent.js";
import { DOM } from "../core/generateStructure.js";

const eventsHeroContent = {
    headingText: "Découvrez les meilleurs spots",
    paragraphText: "Nous avons recensé tous les meilleurs endroits d’où observer les Jeux Olympiques. Chaque spot est étiqueté par épreuve, lieu et capacité d’accueil",
};

const cardspot = [{
    type: "spot",
    label1: "Lieu",
    label2: "Sport",
    label3: "Capacité d'accueil",
    //labels: [label1, label2, label3],
    title: "Parc Montsouris",
    //address: "7 rue adrienne Lecouvreur, 75019 Paris",
    buttonDetails: "Voir en détails",
    buttonMap: "Voir sur la carte"
},{
    type: "spot",
    label1: "Lieu",
    label2: "Sport",
    label3: "Capacité d'accueil",
    //labels: [label1, label2, label3],
    title: "Parc Montsouris",
    //address: "7 rue adrienne Lecouvreur, 75019 Paris",
    buttonDetails: "Voir en détails",
    buttonMap: "Voir sur la carte"
},{
    type: "spot",
    label1: "Lieu",
    label2: "Sport",
    label3: "Capacité d'accueil",
    //labels: [label1, label2, label3],
    title: "Parc Montsouris",
    //address: "7 rue adrienne Lecouvreur, 75019 Paris",
    buttonDetails: "Voir en détails",
    buttonMap: "Voir sur la carte"
},{
    type: "spot",
    label1: "Lieu",
    label2: "Sport",
    label3: "Capacité d'accueil",
    //labels: [label1, label2, label3],
    title: "Parc Montsouris",
    //address: "7 rue adrienne Lecouvreur, 75019 Paris",
    buttonDetails: "Voir en détails",
    buttonMap: "Voir sur la carte"
}]



//const cards = cardsComponent(cardspot);

export default class SpotsStruct extends DOM.Component {
    constructor(props) {
        super(props);
    };
    render() {
        const cardComponents = cardspot.map(cardProps =>
            DOM.createElement(CardComponent, cardProps, [])
        );
        return {
            tag: "div",
            props: { class: "spots body-content" },
            children: [
            new getNavbarStructure().render(),
            createHeroComponent(eventsHeroContent),
                {
                    tag: "h1",
                    children: [""]
                },

                {
                    tag: "section",
                    props: { class: "section-selection" },
                    children: [
                        {
                            tag: "h2",
                            children: [{
                                tag: 'TEXT_NODE',
                                content: "Notre sélection",
                            }]
                        },
                        {
                            tag: "p",
                            children: [{
                                tag: 'TEXT_NODE',
                                content: "Les plus beaux spots de Paris",
                            }]
                        },
                        {
                            tag: "div",
                            props: { class: "slider-container" },
                            children: [
                                {
                                    tag: "div",
                                    props: { class: "slider" },
                                    children: cardComponents //Array(6).fill(cards)
                                }
                            ]
                        }
                    ]
                },
                {
                    tag: "section",
                    props: { class: "section-selection" },
                    children: [
                        {
                            tag: "h2",
                            children: [{
                                tag: 'TEXT_NODE',
                                content: "Trouvez l'endroit idéal",
                            }]
                        },
                        {
                            tag: "p",
                            children: [{
                                tag: 'TEXT_NODE',
                                content: "Dénichez le spot qu’il vous faut avec notre filtre de recherche",
                            }]
                        },
                        {
                            tag: "div",
                            props: { class: "spots-list-container", id: "spots-list-container" },
                            children: [
                                {
                                tag: "div",
                                props: { class: "spots-list" },
                                children: cardComponents //Array(15).fill(cards)

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


