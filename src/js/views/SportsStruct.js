import getNavbarStructure from "../components/Navbar.js";
import { getFooterStructure } from "../components/Footer.js";
import { createHeroComponent } from "../components/HeroSection.js";
import CardComponent from "../components/CardComponent.js";
import { DOM } from "../core/generateStructure.js";
import { fetchEventsData } from "../api/fetchData.js";

const eventsHeroContent = {
    headingText: "DÉCOUVREZ LES ÉVÉNEMENTS QUI VOUS PLAISENT",
    paragraphText: "Explorez les moments inoubliables des Jeux Olympiques de Paris 2024 et trouvez les événements qui vous passionnent.",
};

// Function to format the date
function formatDate(dateString) {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
}

export default class EventsStruct extends DOM.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardComponents: []
        };
    }

    async componentDidMount() {
        const eventsData = await fetchEventsData();
        const cardComponents = eventsData.map(event => {
            const cardProps = {
                type: "sport",
                title: event.fields.sports,
                date: formatDate(event.fields.start_date),
                site: event.fields.nom_site,
            };
            return DOM.createElement(CardComponent, cardProps, []);
        });
        this.setState({ cardComponents });
    }

    render() {
        const { cardComponents } = this.state;

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
                    children: [
                        {
                            tag: "section",
                            props: { class: "events" },
                            children: [
                                {
                                    tag: "h2",
                                    props: { class: "title" },
                                    children: [{
                                        tag: 'TEXT_NODE',
                                        content: "Et alors? C'est quand les JO?",
                                    }]
                                },
                                {
                                    tag: "p",
                                    props: { class: "subtitle" },
                                    children: [{
                                        tag: 'TEXT_NODE',
                                        content: "Explorez chaque sport avec nos cartes détaillées. Que vous aimiez la rapidité du tir à l'arc, l'endurance du marathon ou l'intensité du basketball, chaque discipline vous réserve des moments inoubliables",
                                    }]
                                },
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
                                            props: { class: "today-cards" },
                                            children: []
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
                                            props: { class: "this-week-cards" },
                                            children: []
                                        }

                                    ]
                                }
                            ]
                        },
                        {
                            tag: "section",
                            props: { class: "events-section" },
                            children: [
                                {
                                    tag: "div",
                                    props: { class: "events-cards" },
                                    children: cardComponents,
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
