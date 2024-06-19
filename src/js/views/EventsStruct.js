import { getNavbarStructure } from "../components/Navbar.js";
import { getFooterStructure } from "../components/Footer.js";

export default function EventsStruct(props = {}) {
    return {
        tag: "div",
        children: [
            getNavbarStructure(),
            {
                tag: "h1",
                children: ["Événements"]
            },
            {
                tag: "div",
                props: { class: "page-size" },
                children: [
                    {
                        tag: "p",
                        children: ["Retrouvez tous nos événements ici !"]
                    }
                ]
            },
            getFooterStructure(props.footer)
        ]
    };
}
