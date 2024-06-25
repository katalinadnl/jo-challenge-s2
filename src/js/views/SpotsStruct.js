import { getNavbarStructure } from "../components/Navbar.js";
import { getFooterStructure } from "../components/Footer.js";

  const cards = [
    {
        tag: "div",
        props: { class: "card" },
    },
    {
        tag: "div",
        props: { class: "card" },
    },
    {
        tag: "div",
        props: { class: "card" },
    },
    {
        tag: "div",
        props: { class: "card" },
    },
    {
        tag: "div",
        props: { class: "card" },
    },
    {
        tag: "div",
        props: { class: "card" },
    },
    {
        tag: "div",
        props: { class: "card" },
    },
    {
        tag: "div",
        props: { class: "card" },
    }
];

const tags = [  
    {
        tag: "p",
        children: ["Lieu"],
    },
    {
        tag: "p",
        children: ["Sport"],
    },
    {
        tag: "p",
        props: { class: "card-tag" },
        children: ["Capacité d'accueil"],
    }


]

export default function SpotsStruct() {
   
    return {
        tag: "div",
        children: [
            getNavbarStructure(),
            {
                tag: "h1",
                children: ["Découvrez les meilleurs spots"]
            },
            {
                tag: "section",
                props: { class: "section1" },
                children: [
                    {
                        tag: "p",
                        props: { class: "header-desc" },
                        children: ["Nous avons recensé tous les meilleurs endroits d’où observer les Jeux Olympiques. Chaque spot est étiqueté par épreuve, lieu et capacité d’accueil"]
                    }
                ]
            },
            {
                tag: "section",
                props: { class: "section-selection" },
                children: [
                    {
                        tag: "h2",
                        children: ["Notre sélection"]
                    },
                    {
                        tag: "p",
                        children: ["Les plus beaux spots de Paris"]
                    },
                    {
                        tag: "div",
                        props: { class: "slider-container" },
                        children: [
                            {
                                tag: "div",
                                props: { class: "slider" },
                                children: cards.slice(0, 6).map(card => ({
                                    tag: "div",
                                    props: { class: "card" },
                                    children: card.children
                                }))
                            }
                        ]
                    }
                ]
            },
            {
                tag: "section",
                props: { class: "section-selection" },
                children: [
                    {
                        tag: "h2",
                        children: ["Trouvez l'endroit idéal"]
                    },
                    {
                        tag: "p",
                        children: ["Dénichez le spot qu’il vous faut avec notre filtre de recherche"]
                    },
                    {
                        tag: "div",
                        props: { class: "spots-list-container" },
                        children: [
                            {
                            tag: "div",
                            props: { class: "spots-list" },
                            children: cards.map(card => ({
                                tag: "div",
                                props: { class: "card" },
                                children: [
                                    {
                                    tag: "div",
                                    props: { class: "tag-list" },
                                    children: tags.map(tag => ({
                                        tag: "div",
                                        props: { class: "card-tag" },
                            }))
                        }
                        ]
                        }))
                        }
                        ]
                    }
                
                ]
            },
            getFooterStructure()
        ]
    };
}


