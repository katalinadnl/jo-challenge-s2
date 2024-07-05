import { getNavbarStructure } from "../components/Navbar.js";
import { getFooterStructure } from "../components/Footer.js";


export default function InformationsStruct() {
    return {
        tag: "div",
        props: { class: "information" },
        children: [
            getNavbarStructure(),
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
                                children: ["La Felicità"]
                            },
                        ]
                    },
                    {
                        tag: "section",
                        props: { class: "section2" },
                        children: [
                            {
                                tag: "p",
                                children: ["La Felicità, c’est un immense food-market en direct producteurs où tout est 100% fait maison. 4.500 m2, 8 cuisines, 9 chefs, 3 bars et une grosse dose de love. Venez vous balader dans les allées, allez humer le fumet fou des pizz napolitaines dans le huge four à bois, allez faire un check à la trattoria ou à nos potos TopBun, des burgers bio de dingo, vous en mettre plein les doigts avec les crazy cookies pralinés de la caffeteria, enivrez-vous joyeusement avec les cocktails italodirty et la bière artigianale du clinquant biergarten, et juste kiffez"]
                            },
                        ]
                    }
                ]
            },
            getFooterStructure()
        ]
    };
}
