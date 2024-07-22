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

            const cardProps = {
                type: "spot",
                SiteName: event.fields.nom_site,
                SportLabel:  event.fields.sports,
                StartDateLabel: formatDate(event.fields.start_date),
                EndDateLabel: formatDate(event.fields.end_date),
                image: spotsMapping[event.fields.nom_site] || spotsMapping.default, //permet de récupérer l'image correspondant au spot
                buttonDetails: "Voir en détails",
                buttonMap: "Voir sur la carte" 


            };
            const cardComponent = DOM.createElement(CardComponent, cardProps, []);
            CardComponents.push(cardComponent);

            if (!spotsMapping[event.fields.spots]) {
                console.log(`Missing image for spot: ${event.fields.spots}`);
            }
        });

        this.setState({ CardComponents });
    }

    render() {
        const { CardComponents } = this.state;

       
        const navbar = DOM.createElement(getNavbarStructure, []);
        return {
            tag: "div",
            props: { class: "spots body-content" },
            children: [
            navbar,
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
                                    props: { class: "slider" },
                                    children: CardComponents //Array(6).fill(cards)
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
