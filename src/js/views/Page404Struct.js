import { getFooterStructure } from "../components/Footer.js";
import Component  from "../components/Component.js";


export default class Page404Struct extends Component {
    render() {
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
}
