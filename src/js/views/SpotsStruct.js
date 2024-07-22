import getNavbarStructure from "../components/Navbar.js";
import { getFooterStructure } from "../components/Footer.js";
import { createHeroComponent } from "../components/HeroSection.js";
import CardComponent from "../components/CardComponent.js";
import { DOM } from "../core/generateStructure.js";

const eventsHeroContent = {
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

    async fetchCardSpotData() {
        try {
            const response = await fetch('https://data.paris2024.org/api/explore/v2.1/catalog/datasets/games_map_events_fr/records');
            const data = await response.json();
            console.log(data); // Log the data to inspect its structure

            // Ensure records exist and map them correctly
            if (data.results) {
            const cardspot = data.results ? data.result.map(result => ({
                SportLabel: result.title,
                StartDateLabel: result.starting_date,
                EndDateLabel: result.ending_date,
                SiteName: result.location,
                buttonDetails: "Voir en détails",
                buttonMap: "Voir sur la carte" 
            })) : [];
            this.setState({ cardspot });
        } else {
            console.error('No results found in the API response');
            this.setState({ cardspot: [] });
        }
    } catch (error) {
        console.error('Error fetching card spot data:', error);
    }
}
    componentDidMount() {
        this.fetchCardSpotData();
    }


    render() {
        const { cardspot } = this.state;

        const cardComponents = cardspot.length > 0 
        ? cardspot.map(cardProps => DOM.createElement(CardComponent, cardProps, []))
        : [{ tag: 'p', children: [{ tag: 'TEXT_NODE', content: 'Loading spots...' }] }];


        return {
            tag: "div",
            props: { class: "spots body-content" },
            children: [
                DOM.createElement(getNavbarStructure, []),
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

