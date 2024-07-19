import getNavbarStructure from "../components/Navbar.js";
import { getFooterStructure } from "../components/Footer.js";
import CardComponent from "../components/CardComponent.js";
import { DOM } from "../core/generateStructure.js";

export default class InformationsStruct extends DOM.Component{
    render() {
        const navbar = DOM.createElement(getNavbarStructure, []);
        return {
            tag: "div",
            props: { class: "information" },
            children: [
                navbar,
                {
                    tag: "main",
                    props: { class: "body-content" },
                    children: [
                        {
                            tag: "section",
                            props: { class: "section1" },
                            children: [
                                {
                                    tag: "h1",
                                    children: [{
                                        tag: 'TEXT_NODE',
                                        content: "La Felicità",
                                    }]
                                },
                            ]
                        },
                        {
                            tag: "section",
                            props: { class: "section2" },
                            children: [
                                {
                                    tag: "p",
                                    children: [{
                                        tag: 'TEXT_NODE',
                                        content: "La Felicità, c’est un immense food-market en direct producteurs où tout est 100% fait maison. 4.500 m2, 8 cuisines, 9 chefs, 3 bars et une grosse dose de love. Venez vous balader dans les allées, allez humer le fumet fou des pizz napolitaines dans le huge four à bois, allez faire un check à la trattoria ou à nos potos TopBun, des burgers bio de dingo, vous en mettre plein les doigts avec les crazy cookies pralinés de la caffeteria, enivrez-vous joyeusement avec les cocktails italodirty et la bière artigianale du clinquant biergarten, et juste kiffez",
                                    }]
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
