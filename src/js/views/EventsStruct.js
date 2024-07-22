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

function truncateDescription(title, description, maxLength = 350) {
    if (title.length < 60) {
        if (description.length > maxLength) {
            return `${description.substring(0, maxLength)}...`;
        }
    } else {
        if (description.length > 150) {
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
                    tarif: event.tarif,
                    address: event.address,
                    linkJO: event.external_link || "https://olympics.com/fr/paris-2024",
                    textLinkJO: "En savoir plus",
                    linkMap: "/carte",
                    textLinkMap: "Voir sur la carte",

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

        return {
            tag: "div",
            props: { class: "event" },
            children: [
                DOM.createElement(getNavbarStructure, []),
                createHeroComponent(eventsHeroContent),
                {
                    tag: "main",
                    props: { class: "body-content" },
                    children: [
                        {
                            tag: "section",
                            props: { class: "events-cards-section" },
                            children:
                                cardComponents,
                        },
                    ]
                },
                getFooterStructure()
            ]
        };
    }
}
