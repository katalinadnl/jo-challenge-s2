import getNavbarStructure from "../components/Navbar.js";
import { getFooterStructure } from "../components/Footer.js";
import { createHeroComponent } from "../components/HeroSection.js";
import CardComponent from "../components/CardComponent.js";
import { DOM } from "../core/generateStructure.js";
import { fetchSpotsData } from "../api/fetchSpotsData.js";
import { formatDate, isToday, isThisWeek } from "../functions/dateFunctions.js";
import { filterComponent } from "../components/Filter.js";

import spotsMapping from "../mappings/spotsMapping.js";

const spotsHeroContent = {
    headingText: "Découvrez les meilleurs spots",
    paragraphText: "Nous avons recensé tous les meilleurs endroits d’où observer les Jeux Olympiques. Chaque spot est étiqueté par épreuve, lieu et dates de début et de fin.",
};

export default class SpotsStruct extends DOM.Component {
    constructor(props) {
        super(props);
        this.state = {
            allCardComponents: [],
            selectedCardComponents: [],
            filteredCardComponents: [],
            selectedValue: {},
            filterData: { SpotNames: [], SportLabels: [] },
        };
    }

    async componentDidMount() {
        const spotsData = await fetchSpotsData();
        const CardComponents = [];
        let filterData = { SpotNames: [], SportLabels: [] };

        spotsData.forEach(event => {
            const mappingKey = event.fields.sports;
            const spotData = spotsMapping[mappingKey] || spotsMapping.default;
            const spotId = spotData.id;


            const cardProps = {
                id: spotId,
                type: "spot",
                SpotName: spotData.spot,
                SiteNameLabel: event.fields.nom_site,
                SportLabel: event.fields.sports,
                StartDateLabel: formatDate(event.fields.start_date),
                EndDateLabel: formatDate(event.fields.end_date),
                image: spotsMapping[event.fields.sports] || spotsMapping.default,
                spotLinkMap: `/carte?lat=${event.fields.end_date}&lon=${event.fields.end_date}`, //TODO: change to real coordinates               spotLinkMap: `/carte?lat=${event.fields.end_date}&lon=${event.fields.end_date}`, //TODO: change to real coordinates

                spotTextLinkMap: "Voir sur la carte",
                spotLinkDetails: `/spots/${spotId}`, 
                spotTextLinkDetails: "Voir en détails",
            };

            if (!filterData.SpotNames.includes(cardProps.SpotName)) {
                filterData.SpotNames.push(cardProps.SpotName);
            }
            if (!filterData.SportLabels.includes(cardProps.SportLabel)) {
                filterData.SportLabels.push(cardProps.SportLabel);
            }

            const cardComponent = DOM.createElement(CardComponent, cardProps, []);
            CardComponents.push(cardComponent);
        });

        const selectedCardComponents = CardComponents.slice(0, 6);

        this.setState({
            allCardComponents: CardComponents,
            selectedCardComponents,
            filteredCardComponents: CardComponents,
            filterData
        });
    }

    updateEventData = (fieldToFilterOn, value) => {
        let filteredEvents = [];
        if (value === 'reset') {
            filteredEvents = this.state.allCardComponents;
        } else {
            filteredEvents = this.state.allCardComponents.filter(card => card.props[fieldToFilterOn] === value);
        }

        this.setState({ selectedValue: { fieldToFilterOn, value }, filteredCardComponents: filteredEvents });
    }

    render() {
        const {
            selectedCardComponents,
            filteredCardComponents,
            filterData,
            selectedValue
        } = this.state;

        const navbar = DOM.createElement(getNavbarStructure, []);
        return {
            tag: "div",
            props: { class: "spots" },
            children: [

                DOM.createElement(getNavbarStructure, []),
                createHeroComponent(spotsHeroContent),
                {
                    tag: "main",
                    props: { class: "body-content" },
                    children: [
                            {
                    tag: "section",
                    props: { class: "section-selection" },
                    children: [
                        {
                            tag: "h3",
                            children: [{
                                tag: 'TEXT_NODE',
                                content: "Notre sélection",
                            }]
                        },
                        {
                            tag: "p",
                            children: [{
                                tag: 'TEXT_NODE',
                                content: "Faites défiler horizontalement pour découvrir les plus beaux spots de Paris 2024",
                            }]
                        },
                        {
                            tag: "div",
                            props: { class: "slider-container" },
                            children: [
                                {
                                    tag: "div",
                                    props: { class: "slider slider-slide" },
                                    children: selectedCardComponents
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
                            tag: "h3",
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
                        DOM.createElement(filterComponent, {
                            fieldsToFilterOn: [
                                { name: "SpotName", placeholder: "Les spots", options: filterData.SpotNames },
                                { name: "SportLabel", placeholder: "Les sports", options: filterData.SportLabels }
                            ],
                            onChangeEvent: this.updateEventData,
                            data: this.state.allCardComponents.map(component => ({
                                SpotName: component.props.SpotName,
                                SportLabel: component.props.SportLabel
                            })),
                            selectedValue: selectedValue,
                        }),
                        {
                            tag: "div",
                            props: { class: "spots-list-container", id: "spots-list-container" },
                            children: [
                                {
                                    tag: "div",
                                    props: { class: "spots-list" },
                                    children: filteredCardComponents
                                }
                            ]
                        }
                    ]
                },
            ]
        },
                getFooterStructure()
            ]
        };
    }
}
