import { getFooterStructure } from "../components/Footer.js";
import Component  from "../components/Component.js";
import getNavbarStructure from "../components/Navbar.js";
import {DOM} from "../core/generateStructure";

function createCarousel() {
    const images = [
        "../../styles/images/carrousel_page404_1.png",
        "../../styles/images/carrousel_page404_2.png",
        "../../styles/images/carrousel_page404_3.png",
        "../../styles/images/carrousel_page404_4.png",
        "../../styles/images/carrousel_page404_5.png",
    ];

    let currentIndex = 0;

    function changeImage() {
        const imgElement = document.querySelector('.carousel img');
        imgElement.src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeImage, 2000);

    return {
        tag: "div",
        props: { class: "carousel" },
        children: [
            {
                tag: "img",
                props: { src: images[0] }
            }
        ]
    };
}

export default class Page404Struct extends Component {
    render() {
        return {
            tag: "div",
            props: {class: "page404"},
            children: [
                DOM.createElement(getNavbarStructure, []),
                {
                    tag: "main",
                    props: {class: "body-content"},
                    children: [
                        {
                            tag: "section",
                            props: {class: "section1"},
                            children: [
                                {
                                    tag: "div",
                                    props: {class: "description404"},
                                    children: [
                                        {
                                            tag: "h1",
                                            children: [{
                                                tag: 'TEXT_NODE',
                                                content: "Erreur 404",
                                            }]
                                        },
                                        {
                                            tag: "p",
                                            children: [{
                                                tag: 'TEXT_NODE',
                                                content: "Page non trouvée",
                                            }]
                                        },
                                        {
                                            tag: "a",
                                            props: {class: "cta404", href: "/"},
                                            children: [{
                                                tag: 'TEXT_NODE',
                                                content: "Retour à l'accueil?",
                                            }]
                                        },
                                    ]
                                },
                                {
                                    tag: "div",
                                    props: {class: "img404"},
                                    children: [
                                        createCarousel()
                                    ]
                                },
                            ]
                        }
                    ]
                },
                getFooterStructure()
            ]
        };
    }
}
