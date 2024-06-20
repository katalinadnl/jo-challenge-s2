import { getNavbarStructure } from "../components/Navbar.js";
import { getFooterStructure } from "../components/Footer.js";

export default function AgendaStruct() {
    return {
        tag: "div",
        children: [
            getNavbarStructure(),
            {
                tag: "h1",
                children: ["Agenda"]
            },
            {
                tag: "div",
                props: { class: "page-size" },
                children: [
                    {
                        tag: "p",
                        children: ["Retrouvez toutes nos dates ici !"]
                    }
                ]
            },
            getFooterStructure()
        ]
    };
}
