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
                                        content: this.props.spot,
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
                                        content: this.props.spotDetails,

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