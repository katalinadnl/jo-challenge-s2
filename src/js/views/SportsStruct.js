import getNavbarStructure from "../components/Navbar.js";
import { getFooterStructure } from "../components/Footer.js";
import { createHeroComponent } from "../components/HeroSection.js";
import CardComponent from "../components/CardComponent.js";
import { DOM } from "../core/generateStructure.js";
import { fetchEventsData } from "../api/fetchData.js";
import { filterComponent } from "../components/Filter.js";
import { formatDate, isToday, isThisWeek } from "../functions/dateFunctions.js";
import imageMapping from "../mappings/sportsImagesMapping.js";
import moment from "../lib/moment/moment.js";
import { truncateTitleSport } from "../functions/truncateFunctions.js";


const sportsHeroContent = {
    headingText: "VIVEZ LES PLUS GRANDS ÉVÉNEMENTS SPORTIFS",
    paragraphText: "Plongez dans l'excitation des compétitions sportives mondiales et découvrez les événements à ne pas manquer cette saison.",
};

export default class SportsStruct extends DOM.Component {
    GET_ALL_COMPETITION_LOCATION_URL = 'https://data.paris2024.org/api/records/1.0/search/?dataset=paris-2024-sites-de-competition&rows=100';

    constructor(props) {
        super(props);
        this.state = {
            allEventsData: [],
            todayCardComponents: [],
            thisWeekCardComponents: [],
            allCardComponents: [],
            filteredCardComponents: null,
            selectedValue: {},
        };
    }

    async componentDidMount() {
        const eventsData = await fetchEventsData();
        const allEventsData = eventsData.map(event => {
            return {
                codeSite: event.fields.code_site,
                type: "sport",
                title: truncateTitleSport(event.fields.sports),
                date: formatDate(event.fields.start_date),
                startDate: event.fields.start_date, // Add the raw start date for comparison
                site: event.fields.nom_site,
                image: imageMapping[event.fields.sports] || imageMapping.default
            };
        });

        const todayCardComponents = [];
        const thisWeekCardComponents = [];
        const allCardComponents = [];

        allEventsData.forEach(event => {
            const cardComponent = DOM.createElement(CardComponent, event, []);
            allCardComponents.push(cardComponent);

            if (isToday(event.startDate)) {
                todayCardComponents.push(cardComponent);
            } else if (isThisWeek(event.startDate)) {
                thisWeekCardComponents.push(cardComponent);
            }
        });

        this.setState({ allEventsData, todayCardComponents, thisWeekCardComponents, allCardComponents });
    }

    updateEventData = (fieldToFilterOn, value) => {
        let filteredEvents = [];
        if (value === 'reset') {
            filteredEvents = this.state.allCardComponents;
        } else if (fieldToFilterOn === 'startDate') {
            filteredEvents = this.state.allCardComponents.filter(card => moment(card.props.date, "DD/MM/YYYY").toDate() >= moment(value, "DD/MM/YYYY").toDate());
        } else if (fieldToFilterOn === 'endDate') {
            filteredEvents = this.state.allCardComponents.filter(card => moment(card.props.date, "DD/MM/YYYY").toDate() <= moment(value, "DD/MM/YYYY").toDate());
        } else {
            filteredEvents = this.state.allCardComponents.filter(card => card.props[fieldToFilterOn] === value);
        }

        this.setState({ selectedValue: { fieldToFilterOn, value }, filteredCardComponents: filteredEvents });
    }

    render() {
        const {
            allEventsData,
            todayCardComponents,
            thisWeekCardComponents,
            allCardComponents,
            filteredCardComponents,
            selectedValue
        } = this.state;

        return {
            tag: "div",
            props: { class: "sport" },
            children: [
                DOM.createElement(getNavbarStructure, []),
                createHeroComponent(sportsHeroContent),
                {
                    tag: "main",
                    props: { class: "body-content" },
                    children: [
                        {
                            tag: "div",
                            props: { class: "info-slider-sports" },
                            children: [
                                {
                                    tag: "h6",
                                    children: [
                                        {
                                            tag: 'TEXT_NODE',
                                            content: "Faites défiler horizontalement pour découvrir les événements actuels",
                                        }
                                    ]
                                },
                                {
                                    tag: "div",
                                    props: { class: "arrow-container" },
                                    children: [
                                        {
                                            tag: "img",
                                            props: {
                                                src: "../../styles/images/arrow_2.png",
                                                alt: "Flèche",
                                                class: "arrow-desktop"
                                            },
                                        },
                                    ]
                                }
                            ]
                        },
                        {
                            tag: "section",
                            props: {},
                            children: [
                                {
                                    tag: "div",
                                    props: { class: "today" },
                                    children: [
                                        {
                                            tag: "h3",
                                            props: { class: "today-title" },
                                            children: [{
                                                tag: 'TEXT_NODE',
                                                content: "Aujourd'hui",
                                            }]
                                        },
                                        {
                                            tag: "div",
                                            props: { class: "slider-container" },
                                            children: todayCardComponents.length > 0 ? todayCardComponents.map(card => ({
                                                tag: "div",
                                                props: { class: "slider-slide" },
                                                children: [card]
                                            })) : [{
                                                tag: 'p',
                                                props: { class: 'no-cards-message' },
                                                children: [{ tag: 'TEXT_NODE', content: "Aucun événement aujourd'hui." }]
                                            }]
                                        }
                                    ]
                                },
                                {
                                    tag: "div",
                                    props: { class: "this-week" },
                                    children: [
                                        {
                                            tag: "h3",
                                            props: { class: "this-week-title" },
                                            children: [{
                                                tag: 'TEXT_NODE',
                                                content: "Cette semaine",
                                            }]
                                        },
                                        {
                                            tag: "div",
                                            props: { class: "slider-container" },
                                            children: thisWeekCardComponents.length > 0 ? thisWeekCardComponents.map(card => ({
                                                tag: "div",
                                                props: { class: "slider-slide" },
                                                children: [card]
                                            })) : [{
                                                tag: 'p',
                                                props: { class: 'no-cards-message' },
                                                children: [{
                                                    tag: 'TEXT_NODE',
                                                    content: "Aucun événement cette semaine."
                                                }]
                                            }]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            tag: "section",
                            props: { class: "sport-section" },
                            children: [
                                {
                                    tag: "h3",
                                    props: { class: "this-week-title" },
                                    children: [{
                                        tag: 'TEXT_NODE',
                                        content: "Tous les sports",
                                    }]
                                },
                                DOM.createElement(filterComponent, {
                                    fieldsToFilterOn: [
                                        { name: "title", placeholder: "Le sport" },
                                        { name: "site", placeholder: "Le lieu" },
                                        { name: "startDate", placeholder: "La date de début" }
                                    ],
                                    onChangeEvent: this.updateEventData,
                                    data: allEventsData.map(event => {
                                        return {
                                            ...event,
                                            startDate: event.date
                                        };
                                    }),
                                    selectedValue: selectedValue,
                                }),
                                {
                                    tag: "div",
                                    props: { class: "sport-cards" },
                                    children: filteredCardComponents || allCardComponents,
                                },
                            ],
                        },
                    ],
                },
                getFooterStructure()
            ]
        };
    }
}
