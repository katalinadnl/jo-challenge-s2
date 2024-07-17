import { getNavbarStructure } from "../components/Navbar.js";
import { getFooterStructure } from "../components/Footer.js";
import { createHeroComponent } from "../components/HeroSection.js";
import CardComponent from "../components/CardComponent.js";
import { DOM } from "../core/generateStructure.js";

const eventsHeroContent = {
    headingText: "Agenda Olympique Paris 2024",
    paragraphText: "Ne manquez aucun moment clé des Jeux Olympiques de Paris 2024. Vivez l'excitation des compétitions en temps réel",
};

export default class AgendaStruct extends DOM.Component  {
    render () {
        return {
            tag: "div",
            props: { class: "agenda" },
            children: [
                new getNavbarStructure().render(),
                createHeroComponent(eventsHeroContent),
                {
                    tag: "main",
                    props: { class: "body-content" },
                    children: [
                        {
                            tag: "section",
                            props: { class: "calendar" },
                            children: [
                                {
                                    tag: "h2",
                                    props: { class: "title" },
                                    children: [{
                                        tag: 'TEXT_NODE',
                                        content: "Calendrier des événements",
                                    }]
                                },
                                {
                                    tag: "p",
                                    props: { class: "subtitle" },
                                    children: [{
                                        tag: 'TEXT_NODE',
                                        content: "Planifiez votre expérience olympique avec notre calendrier interactif",
                                    }]
                                },
                                {
                                    tag: "div",
                                    props: { class: "calendar-container" },
                                    children: [
                                        {
                                            tag: "p",
                                            props: { class: "text-calendar" },
                                            children: [{
                                                tag: 'TEXT_NODE',
                                                content: "Notre calendrier des événements vous permet de rester à jour avec le programme complet des Jeux. Organisé par jour et par sport, vous pouvez facilement trouver quand et où vos événements préférés auront lieu. Utilisez notre fonctionnalité d'ajout au calendrier pour ne rater aucun moment crucial – suivez les finales passionnantes ou soutenez vos athlètes favoris en un clic. Restez engagé grâce à des mises à jour en temps réel et des rappels personnalisés.",
                                            }]
                                        }
                                    ]
                                }

                            ]
                        },
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
                        }
                    ]
                },
                getFooterStructure()
            ]
        };
    }
}
