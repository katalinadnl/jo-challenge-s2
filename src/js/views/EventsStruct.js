import getNavbarStructure from "../components/Navbar.js";
import {getFooterStructure} from "../components/Footer.js";
import {createHeroComponent} from "../components/HeroSection.js";
import CardComponent from "../components/CardComponent.js";
import {DOM} from "../core/generateStructure.js";
import {fetchAllEventsDates, fetchAllEventsLocation, fetchAllEventsTitle, fetchEvents} from "../api/fetchEventsData.js";
import {filterComponent} from "../components/Filter.js";
import moment from "../lib/moment/moment.js";
import { truncateDescriptionEvent } from "../functions/truncateFunctions.js";

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
            allEvents: [],
            allEventsLocation: [],
            allEventsTitle: [],
            allEventsDate: [],
            cardComponents: [],
            start: 0,
            rowsPerPage: 10,
            totalCount: 0,
            loading: false,
            selectedValue: {}
        };
    }

    async componentDidMount() {
        const allEventsLocation = [...new Set((await fetchAllEventsLocation()).records)];
        const allEventsTitle = [...new Set((await fetchAllEventsTitle()).records)];
        const allEventsDate = [...new Set((await fetchAllEventsDates()).records)];
        this.setState({
            allEventsLocation: allEventsLocation,
            allEventsTitle: allEventsTitle,
            allEventsDate: allEventsDate
        });
        await this.loadMore();
    }

    async loadMore() {
        if (this.state.loading || (this.state.totalCount && this.state.cardComponents.length >= this.state.totalCount)) {
            console.log('No more data to load or already loading.');
            return;
        }

        this.setState({loading: true});

        try {
            const {start, rowsPerPage, cardComponents, selectedValue} = this.state;
            console.log(`Loading more data from start=${start}, rowsPerPage=${rowsPerPage}`);

            const {
                totalCount,
                records
            } = await fetchEvents(start, rowsPerPage, selectedValue.fieldToFilterOn, selectedValue.value);

            const allEvents = records.map(record => {
                return {
                    type: "event",
                    title: record.title,
                    date: formatDate(record.starting_date),
                    description: truncateDescriptionEvent(record.title || "Title not provided", record.description || "Description not provided" , record.address || "Address not provided"),
                    tarif: record.tarif || "Pas de tarif indiqué",
                    address: record.address,
                    linkJO: record.external_link || "https://olympics.com/fr/paris-2024",
                    textLinkJO: "En savoir plus",
                    linkMap: `/carte?lat=${record.latitude}&lon=${record.longitude}`,
                    textLinkMap: "Voir sur la carte",
                    location: record.location,
                };
            });
            console.log(`Fetched ${records.length} records, total count is ${totalCount}`);

            const newCardComponents = allEvents.map(event => {
                return DOM.createElement(CardComponent, event, []);
            });

            this.setState({
                allEvents: allEvents,
                cardComponents: cardComponents.concat(newCardComponents),
                start: start + rowsPerPage,
                totalCount,
                loading: false,
            }, () => {
                this.reinitializeObserver();
            });
        } catch (error) {
            console.error('Error loading more events:', error);
            this.setState({loading: false});
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

    updateEventData = (fieldToFilterOn, value) => {
        if (value === "reset") {
            this.setState({selectedValue: {}, cardComponents: [], start: 0, totalCount: 0});
            this.loadMore();
        } else if (fieldToFilterOn === "startDate") {
            this.setState({selectedValue: {fieldToFilterOn: "starting_date", value: moment(value, "dd/MM/yyyy").toDate().toISOString()}, cardComponents: [], start: 0, totalCount: 0});
            this.loadMore();
        } else {
            this.setState({selectedValue: {fieldToFilterOn, value}, cardComponents: [], start: 0, totalCount: 0});
            this.loadMore();
        }
    }

    render() {
        const {
            allEventsLocation, allEventsTitle, allEventsDate, cardComponents, loading, allEvents, selectedValue
        } = this.state;
        const filterData = [];
        for (let i = 0; i < allEventsTitle.length ; i++) {
            filterData.push({
                title: allEventsTitle[i].title,
                location: allEventsLocation[i].location,
                starting_date: formatDate(allEventsDate[i].starting_date)
            });
            }


        return {
            tag: "div",
            props: {class: "event"},
            children: [
                DOM.createElement(getNavbarStructure, []),
                createHeroComponent(eventsHeroContent),
                {
                    tag: "main",
                    props: {class: "body-content"},
                    children: [
                        DOM.createElement(filterComponent, {
                            fieldsToFilterOn: [
                                {name: "title", placeholder: "L'événement"},
                                {name: "location", placeholder: "Le lieu"},
                                {name: "starting_date", placeholder: "La date de début"}],
                            onChangeEvent: this.updateEventData,
                            data: filterData,
                            selectedValue: selectedValue,
                        }),
                        {
                            tag: "section",
                            props: {class: "events-cards-section"},
                            children: [
                                ...cardComponents,
                                {
                                    tag: "div",
                                    events: {
                                        scroll: [this.handleLoadMore],
                                    },
                                    props: {class: "load-more-trigger"},
                                    children: []
                                },
                                loading && {
                                    tag: "div",
                                    props: {class: "loading"},
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
