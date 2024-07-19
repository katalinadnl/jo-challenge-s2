import getNavbarStructure from "../components/Navbar.js";
import { getFooterStructure } from "../components/Footer.js";
import { createHeroComponent } from "../components/HeroSection.js";
import CardComponent from "../components/CardComponent.js";
import { DOM } from "../core/generateStructure.js";
import { fetchEvents } from "../api/fetchEventsData.js";

const eventsHeroContent = {
    headingText: "DÉCOUVREZ LES ÉVÉNEMENTS QUI VOUS PLAISENT",
    paragraphText: "Explorez les moments inoubliables des Jeux Olympiques de Paris 2024 et trouvez les événements qui vous passionnent.",
};

function formatDate(dateString) {
    const [date] = dateString.split('T');
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
}

function truncateDescription(title, description, maxLength = 250) {
    if (title.length < 40) {
        if (description.length > maxLength) {
            return `${description.substring(0, maxLength)}...`;
        }
    } else {
        if (description.length > 100) {
            return `${description.substring(0, 100)}...`;
        }
    }
    return description;
}

export default class EventsStruct extends DOM.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardComponents: []
        };
    }

    async componentDidMount() {
        try {
            const eventsData = await fetchEvents();
            console.log('Events data:', eventsData); // Debugging statement

            const cardComponents = eventsData.map(event => {
                const cardProps = {
                    type: "event",
                    title: event.title,
                    date: formatDate(event.starting_date),
                    description: truncateDescription(event.title || "Title not provided", event.description || "Description not provided"),
                    image: event.photo_link || "path/to/default/image.jpg"
                };
                console.log('Card props:', cardProps); // Debugging statement
                return DOM.createElement(CardComponent, cardProps, []);
            });
            this.setState({ cardComponents });
        } catch (error) {
            console.error('Error in componentDidMount:', error); // Debugging statement
        }
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
                                    props: { class: "events-cards", id: "events-cards" },
                                    children: cardComponents,
                                },
                            ],
                        },
                    ]
                },
                getFooterStructure()
            ]
        };
    }
}
