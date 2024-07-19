import getNavbarStructure from "../components/Navbar.js";
import { getFooterStructure } from "../components/Footer.js";
import { createHeroComponent } from "../components/HeroSection.js";
import {getCtaButtonStructure} from "../components/CtaButton.js";
import CardComponent from "../components/CardComponent.js";
import { DOM } from "../core/generateStructure.js";

//added by catalina
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
    href: "/evenements"
};

export default class HomeStruct extends DOM.Component {

    render() {
        const navbar = DOM.createElement(getNavbarStructure, []);

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
                                        }
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
                                                        }]
                                                },
                                                {
                                                    tag: "h6",
                                                    children: [
                                                        {
                                                            tag: 'TEXT_NODE',
                                                            content: "Appuyez sur la carte pour plus de détails",
                                                        }]
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
