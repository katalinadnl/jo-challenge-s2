import getNavbarStructure from "../components/Navbar.js";
import { getFooterStructure } from "../components/Footer.js";
import { createHeroComponent } from "../components/HeroSection.js";
import { getCtaButtonStructure } from "../components/CtaButton.js";
import { DOM } from "../core/generateStructure.js";
import CardComponent from "../components/CardComponent.js";
import imageMapping from "../mappings/sportsImagesMapping.js";
import { fetchEventsData } from "../api/fetchData.js";
import { formatDate } from "../functions/dateFunctions.js";
import { fetchEvents } from "../api/fetchEventsData.js";

const eventsHeroContent = {
    headingText: "Jeux Olympiques 2024",
    paragraphText: "Bienvenue aux Jeux Olympiques 2024 à Paris ! Découvrez l'excitation de cet événement prestigieux au cœur de la capitale.",
    videoSrc: "../../styles/video/video_paris_JO2024.mov"
};

const ctaButtonSpots = {
    paragraphText: "En savoir plus",
    href: "/spots"
};

const ctaButtonEvents = {
    paragraphText: "En savoir plus",
    href: "/sports"
};

export default class HomeStruct extends DOM.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardsSportHP: []
        };
    }

    async componentDidMount() {
        const sportsData = await fetchEventsData();
        const validTitles = ["Para Equitation (PEQU)", "Surf (SRF)", "Canoë-kayak slalom (CSL)"];

        const cardsSportHP = sportsData.map(event => {
            const title = event.fields.sports;

            if (validTitles.includes(title)) {
                const cardProps = {
                    type: "sport",
                    title: event.fields.sports,
                    date: formatDate(event.fields.start_date),
                    site: event.fields.nom_site,
                    image: imageMapping[event.fields.sports] || imageMapping.default
                };
                return DOM.createElement(CardComponent, cardProps, []);
            }
            return null;
        }).filter(card => card !== null); // Filter out null values

        this.setState({ cardsSportHP });
    }

    render() {
        const navbar = DOM.createElement(getNavbarStructure, []);
        const { cardsSportHP } = this.state;

        return {
            tag: "div",
            props: { class: "home" },
            children: [
                navbar,
                createHeroComponent(eventsHeroContent),
                {
                    tag: "main",
                    props: { class: "body-content" },
                    children: [
                        {
                            tag: "section",
                            props: { class: "section1" },
                            children: [
                                {
                                    tag: "h2",
                                    children: [
                                        {
                                            tag: 'TEXT_NODE',
                                            content: "Les différents spots",
                                        },
                                    ]
                                },
                                {
                                    tag: "p",
                                    children: [
                                        {
                                            tag: 'TEXT_NODE',
                                            content: "Découvrez les lieux emblématiques des compétitions.",
                                        },
                                    ]
                                },
                                getCtaButtonStructure(ctaButtonSpots)
                            ]
                        },
                        {
                            tag: "section",
                            props: { class: "section2" },
                            children: [
                                {
                                    tag: "h2",
                                    children: [
                                        {
                                            tag: 'TEXT_NODE',
                                            content: "Les différents sports olympiques",
                                        }
                                    ]
                                },
                                {
                                    tag: "p",
                                    children: [
                                        {
                                            tag: 'TEXT_NODE',
                                            content: "Explorez les sports qui feront vibrer la France.",
                                        }
                                    ]
                                },
                                {
                                    tag: "div",
                                    props: { class: "sport-cards" },
                                    children: cardsSportHP
                                },
                                getCtaButtonStructure(ctaButtonEvents)
                            ]
                        },
                        {
                            tag: "section",
                            props: { class: "section3" },
                            children: [
                                {
                                    tag: "h2",
                                    children: [
                                        {
                                            tag: 'TEXT_NODE',
                                            content: "La carte",
                                        }
                                    ]
                                },
                                {
                                    tag: "p",
                                    children: [
                                        {
                                            tag: 'TEXT_NODE',
                                            content: "Planifiez facilement vos sorties avec notre carte interactive.",
                                        }
                                    ]
                                },
                                {
                                    tag: "div",
                                    props: { class: "map-item" },
                                    children: [
                                        {
                                            tag: "div",
                                            props: { class: "map-info" },
                                            children: [
                                                {
                                                    tag: "h3",
                                                    children: [
                                                        {
                                                            tag: 'TEXT_NODE',
                                                            content: "Planifiez vos sorties en un clin d'œil. Paris n'a jamais été aussi accessible !",
                                                        }
                                                    ]
                                                },
                                                {
                                                    tag: "p",
                                                    children: [
                                                        {
                                                            tag: 'TEXT_NODE',
                                                            content: "Explorez les événements sportifs et les meilleurs spots de Paris grâce à notre carte interactive. Que vous soyez amateur de sport ou simplement à la recherche de nouvelles expériences, cette carte vous guidera à travers les incontournables de la capitale.",
                                                        }
                                                    ]
                                                },
                                                {
                                                    tag: "div",
                                                    props: { class: "info-cta-map" },
                                                    children: [
                                                        {
                                                            tag: "h6",
                                                            children: [
                                                                {
                                                                    tag: 'TEXT_NODE',
                                                                    content: "Appuyez sur la carte pour plus de détails",
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
                                                                        src: "../../styles/images/arrow_HP.png",
                                                                        alt: "Flèche",
                                                                        class: "arrow-desktop"
                                                                    },
                                                                },
                                                                {
                                                                    tag: "img",
                                                                    props: {
                                                                        src: "../../styles/images/arrow_HP_mobile.png",
                                                                        alt: "Flèche",
                                                                        class: "arrow-mobile"
                                                                    },
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            tag: "a",
                                            props: { href: "/carte", class: "map-img" },
                                            children: [
                                                {
                                                    tag: "img",
                                                    props: { src: "../../styles/images/Map_HP.png", alt: "Carte interactive" }
                                                }
                                            ]
                                        }
                                    ]
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