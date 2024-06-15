import { getNavbarStructure } from "../components/Navbar.js";
import { getFooterStructure } from "../components/Footer.js";

export default function HomeStruct() {
    return {
        tag: "div",
        children: [
            getNavbarStructure(),
            {
                tag: "h1",
                children: ["Accueil"]
            },
            {
                tag: "div",
                props: { class: "page-size" },
                children: [
                    {
                        tag: "p",
                        children: ["C'est les Jeux Olympiques ! Anne Hidalgo va se baigner dans la Seine !!!"]
                    },
                    {
                        tag: "p",
                        children: [
                            {
                                tag: "a",
                                props: { href: "/events", "data-link": true },
                                children: ["Voici nos prochains événements"]
                            }
                        ]
                    }
                ]
            },
            getFooterStructure()
        ]
    };
}
