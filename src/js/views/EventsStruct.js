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
                type: "event",
                title: event.fields.sports,
                date: formatDate(event.fields.start_date),
                description: "Description not provided"
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
                            props: { class: "events-section" },
                            children: [
                                {
                                    tag: "h2",
                                    children: [{ tag: 'TEXT_NODE', content: "Événements"}],
                                },
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
