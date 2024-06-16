import { getNavbarStructure } from "../components/Navbar.js";
import { getFooterStructure } from "../components/Footer.js";

export default function HomeStruct() {
    return {
        tag: "div",
        props: { class: "page-size" },
        children: [
            getNavbarStructure(),
            {
                tag: "h1",
                children: ["Jeux Olympiques 2024"]
            },
                {
                    tag: "section",
                    props: { class: "section1" },
                    children: [
                        {
                            tag: "p",
                            props: { class: "header-desc" },
                            children: ["Bienvenue aux Jeux Olympiques 2024 à Paris ! Découvrez l'excitation de cet événement prestigieux au cœur de la capitale."]
                        }
                    ]
                },
                {
                    tag: "section",
                    props: { class: "section2" },
                    children: [
                        {
                            tag: "h2",
                            children: ["Les différents spots"]
                        },
                        {
                            tag: "p",
                            children: ["Découvrez les lieux emblématiques des compétitions."]
                        }
                    ]
                },
                {
                    tag: "section",
                    props: { class: "section3" },
                    children: [
                        {
                            tag: "h2",
                            children: ["Les différents sports olympiques"]
                        },
                        {
                            tag: "p",
                            children: ["Explorez les sports qui feront vibrer la France."]
                        }
                    ]
                },
                {
                    tag: "section",
                    props: { class: "section4" },
                    children: [
                        {
                            tag: "h2",
                            children: ["La carte"]
                        },
                        {
                            tag: "p",
                            children: ["Planifiez facilement vos sorties avec notre carte interactive."]
                        },
                        {
                            tag: "h3",
                            children: ["Planifiez vos sorties en un clin d'œil." +
                            "Paris n'a jamais été aussi accessible !"]
                        },
                        {
                            tag: "p",
                            children: ["Explorez les événements sportifs et les meilleurs spots de Paris grâce à notre carte interactive. Que vous soyez amateur de sport ou simplement à la recherche de nouvelles expériences, cette carte vous guidera à travers les incontournables de la capitale."]
                        },
                        {
                            tag: "img",
                            props: { src: "img/map.png", alt: "Carte interactive" }
                        },
                        {
                            tag: "h6",
                            children: ["Appuyez sur la carte pour plus de détails"]
                        }
                    ]
                },
            getFooterStructure()
        ]
    };
}
