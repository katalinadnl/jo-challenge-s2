import { getFooterStructure } from "../components/Footer.js";

export default function Page404Struct() {
    return {
        tag: "div",
        children: [
            {
                tag: "h1",
                children: ["Oops"]
            },
            {
                tag: "p",
                children: ["Page not found!"]
            },
            getFooterStructure()
        ]
    };
}
