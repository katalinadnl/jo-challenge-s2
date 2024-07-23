// components/EventsStruct.js
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

export default class EventsStruct extends DOM.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardComponents: [],
            start: 0,
            rowsPerPage: 10,
            totalCount: 0,
            loading: false,
        };
    }

    async componentDidMount() {
        await this.loadMore();
    }

    async loadMore() {
        if (this.state.loading || (this.state.totalCount && this.state.cardComponents.length >= this.state.totalCount)) {
            console.log('No more data to load or already loading.');
            return;
        }

        this.setState({ loading: true });

        try {
            const { start, rowsPerPage, cardComponents } = this.state;
            console.log(`Loading more data from start=${start}, rowsPerPage=${rowsPerPage}`);

            const { totalCount, records } = await fetchEvents(start, rowsPerPage);
            console.log(`Fetched ${records.length} records, total count is ${totalCount}`);

            const newCardComponents = records.map(event => {
                const cardProps = {
                    type: "event",
                    title: event.title,
                    date: formatDate(event.starting_date),
                    description: event.description,
                    tarif: event.tarif || "Pas de tarif indiqué",
                    address: event.address,
                    linkJO: event.external_link || "https://olympics.com/fr/paris-2024",
                    textLinkJO: "En savoir plus",
                    linkMap: `/carte?lat=${event.latitude}&lon=${event.longitude}`,
                    textLinkMap: "Voir sur la carte",
                };
                console.log('Card props:', cardProps);
                return DOM.createElement(CardComponent, cardProps, []);
            });

            this.setState({
                cardComponents: cardComponents.concat(newCardComponents),
                start: start + rowsPerPage,
                totalCount,
                loading: false,
            }, () => {
                this.reinitializeObserver();
            });
        } catch (error) {
            console.error('Error loading more events:', error);
            this.setState({ loading: false });
        }
    }


    handleLoadMore = (e) => {
        e.preventDefault();

        const documentHeight = document.documentElement.scrollHeight;
        const currentScroll = window.scrollY + window.innerHeight;

        if (currentScroll >= documentHeight) {
            this.loadMore();
        }
    }

    render() {
        const { cardComponents, loading } = this.state;

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
                            children: [
                                ...cardComponents,
                                {
                                    tag: "div",
                                    events: {
                                        scroll: [this.handleLoadMore],
                                    },
                                    props: { class: "load-more-trigger" },
                                    children: []
                                },
                                loading && {
                                    tag: "div",
                                    props: { class: "loading" },
                                    children: ["Loading..."]
                                }
                            ].filter(Boolean),
                        },
                    ],
                },
                getFooterStructure(),
            ],
        };
    }
}
