import { getNavbarStructure } from "../components/Navbar.js";
import { getFooterStructure } from "../components/Footer.js";

export default function SpotsStruct(props = {}) {
    return {
        tag: "div",
        children: [
            getNavbarStructure(),
            {
                tag: "h1",
                children: ["Nos Spots"]
            },
            {
                tag: "div",
                props: { class: "page-size" },
                children: [
                    {
                        tag: "p",
                        children: ["Découvrez tous nos spots."]
                    }
                ]
            },
            getFooterStructure(props.footer)
        ]
    };
}
