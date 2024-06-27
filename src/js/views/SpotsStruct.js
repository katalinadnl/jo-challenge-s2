import { getNavbarStructure } from "../components/Navbar.js";
import { getFooterStructure } from "../components/Footer.js";


//const à changer plus tard pour récupérer les données de la base de données
const tags = [  
    {
        tag: "p",
        props: { class: "card-tag" },
        children: ["Lieu"],
    },
    {
        tag: "p",
        props: { class: "card-tag" },
        children: ["Sport"],
    },
    {
        tag: "p",
        props: { class: "card-tag" },
        children: ["Capacité d'accueil"],
    }
]

 const card = 
    { 
        tag: "div",
        props: { class: "card" },
        children: [
            {
            tag: "div",
            props: { class: "tag-list" },
            children: tags.map(tag => ({
                tag: "div", 
                props: { class: "card-tag" },
                children: tag.children
            }))
            },
            {
                tag: "div",
                props: { class: "card-infos" },
                children: [
                    {
                        tag: "h3",
                        children: ["Parc Montsouris"]
                    },
                    {
                        tag: "p",
                        children: ["7 rue adrienne Lecouvreur, 75019 Paris"]
                    },
                    {
                        tag: "a",
                        props: { class: "card-infos-button", href: "/carte" },
                        children: [
                            {
                                tag: "img",
                                props: { src: "../../styles/images/bouton-voir-sur-carte.svg" }
                            }
                        ]
                    }
                ]
            }
        ]

    };

const cards =  Array(15).fill(card);

//test d'héritage
//checkbox pour toggle la class hide sur les cards : 


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
                    },
                    {
                        tag: "input",
                        props: { type: "checkbox", id: "toggle" },
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
                                children: card.children
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


