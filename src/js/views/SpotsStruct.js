import getNavbarStructure from "../components/Navbar.js";
import { getFooterStructure } from "../components/Footer.js";
import { createHeroComponent } from "../components/HeroSection.js";
import CardComponent from "../components/CardComponent.js";
import { DOM } from "../core/generateStructure.js";
import { fetchSpotsData } from "../api/fetchSpotsData.js";
import { formatDate, isToday, isThisWeek } from "../functions/dateFunctions.js";

import spotsMapping from "../mappings/spotsMapping.js";


const spotsHeroContent = {
    headingText: "Découvrez les meilleurs spots",
    paragraphText: "Nous avons recensé tous les meilleurs endroits d’où observer les Jeux Olympiques. Chaque spot est étiqueté par épreuve, lieu et capacité d’accueil",
};

/*function cleanSportName(sport) {
    return sport.replace(/\s*\([^)]*\)/g, '');
}*/

export default class SpotsStruct extends DOM.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardspot: [],
        };
    }

    async componentDidMount() {
        const spotsData = await fetchSpotsData();
        const CardComponents = [];

        spotsData.forEach(event => {
            const mappingKey = event.fields.sports;
            const spotData = spotsMapping[mappingKey] || spotsMapping.default;

            const cardProps = {
                type: "spot",
                SpotName : spotData.spot,
                SiteNameLabel: event.fields.nom_site,
                SportLabel:  event.fields.sports,
                StartDateLabel: formatDate(event.fields.start_date), //ajouter début
                EndDateLabel: formatDate(event.fields.end_date),
                image: spotsMapping[event.fields.sports] || spotsMapping.default,
                spotLinkMap: `/carte?lat=${event.fields.end_date}&lon=${event.fields.end_date}`, //TODO: change to real coordinates
                spotTextLinkMap: "Voir sur la carte",
                spotLinkDetails: `/spot?=${spotData.spot}`, //TODO: chager pour lien détails
                spotTextLinkDetails: "Voir en détails",
            };

            const cardComponent = DOM.createElement(CardComponent, cardProps, []);
            CardComponents.push(cardComponent);

            if (!spotsMapping[event.fields.sports]) {
                console.log(`Missing image for spot: ${event.fields.sports}`);
            }
        });

        this.setState({ CardComponents });
    }

    render() {
        const { CardComponents } = this.state;


        const navbar = DOM.createElement(getNavbarStructure, []);
        return {
            tag: "main",
            props: { class: "spots body-content" },
            children: [
            DOM.createElement(getNavbarStructure, []),
             
            createHeroComponent(spotsHeroContent),
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
                                    props: { class: "slider slider-slide" },
                                    children: CardComponents //Array(6).fill(cards)
                                }
                            ]
                        }
                    ]
                },
                {
                    tag: "section",
                    props: { class: "section-selection sport-section" },
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
                                children: CardComponents //Array(15).fill(cards)

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
