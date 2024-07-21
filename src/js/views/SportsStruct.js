import getNavbarStructure from "../components/Navbar.js";
import { getFooterStructure } from "../components/Footer.js";
import { createHeroComponent } from "../components/HeroSection.js";
import CardComponent from "../components/CardComponent.js";
import { DOM } from "../core/generateStructure.js";
import { fetchEventsData } from "../api/fetchData.js";
import { formatDate, isToday, isThisWeek } from "../functions/dateFunctions.js";
import imageMapping from "../mappings/sportsImagesMapping.js";

const sportsHeroContent = {
    headingText: "Et alors? C'est quand les JO?",
    paragraphText: "Explorez chaque sport avec nos cartes détaillées. Que vous aimiez la rapidité du tir à l'arc, l'endurance du marathon ou l'intensité du basketball, chaque discipline vous réserve des moments inoubliables",
};

export default class EventsStruct extends DOM.Component {
    constructor(props) {
        super(props);
        this.state = {
            todayCardComponents: [],
            thisWeekCardComponents: [],
            allCardComponents: []
        };
    }

    async componentDidMount() {
        const eventsData = await fetchEventsData();
        const todayCardComponents = [];
        const thisWeekCardComponents = [];
        const allCardComponents = [];

        eventsData.forEach(event => {
            const sport = event.fields.sports;
            const imageUrl = imageMapping[sport] || "./../../sources/sports/Football_(FBL).jpg";

            if (!imageMapping[sport]) {
                console.log(`Missing image for sport: ${sport}`);
            }

            const cardProps = {
                type: "sport",
                title: sport,
                date: formatDate(event.fields.start_date),
                site: event.fields.nom_site,
                image: imageUrl
            };
            const cardComponent = DOM.createElement(CardComponent, cardProps, []);
            allCardComponents.push(cardComponent);

            if (isToday(event.fields.start_date)) {
                todayCardComponents.push(cardComponent);
            } else if (isThisWeek(event.fields.start_date)) {
                thisWeekCardComponents.push(cardComponent);
            }
        });

        this.setState({ todayCardComponents, thisWeekCardComponents, allCardComponents });
    }

    render() {
        const { todayCardComponents, thisWeekCardComponents, allCardComponents } = this.state;

        const navbar = DOM.createElement(getNavbarStructure, []);

        return {
            tag: "div",
            props: { class: "sport" },
            children: [
                navbar,
                createHeroComponent(sportsHeroContent),
                {
                    tag: "main",
                    props: { class: "body-content" },
                    children: [
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
                                                children: [{ tag: 'TEXT_NODE', content: "Aucun événement cette semaine." }]
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
                                    tag: "div",
                                    props: { class: "sport-cards" },
                                    children: allCardComponents,
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
