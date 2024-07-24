import getNavbarStructure from "../components/Navbar.js";
import { getFooterStructure } from "../components/Footer.js";
import { DOM } from "../core/generateStructure.js";
import spotsMapping from "../mappings/spotsMapping.js";

export default class InformationsStruct extends DOM.Component {
    constructor(props) {
        super(props);
        this.state = {
            spotData: null,
        };
    }


    componentDidMount() {
        const id = parseInt(this.props.params[0], 10);
        const spotData = this.getSpotDataById(id);

        if (spotData) {
            this.setState({ spotData });
        }
    }

    getSpotDataById(id) {
        const spotsArray = Object.keys(spotsMapping);
        if (id > 0 && id <= spotsArray.length) {
            const key = spotsArray[id - 1];
            return spotsMapping[key];
        }
        return null;
    }

    render() {
        const { spotData } = this.state;

        if (!spotData) {
            return {
                tag: "div",
                props: { class: "informations" },
                children: [
                    DOM.createElement(getNavbarStructure, []),
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
                                            content: "Spot not found",
                                        }]
                                    },
                                ]
                            },
                        ]
                    },
                    getFooterStructure()
                ]
            };
        }

        return {
            tag: "div",
            props: { class: "informations spots" },
            children: [
                DOM.createElement(getNavbarStructure, []),
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
                                        content: spotData.spot,
                                    }]
                                },
                            ]
                        },
                        {
                            tag: "section",
                            props: { class: "content-container" },
                            children: [
                                {
                                    tag: "section",
                                    props: { class: "section2" },
                                    children: [
                                        {
                                            tag: "div",
                                            props: { class: "img-spot" },
                                            children: [{
                                                tag: 'img',
                                                props: { src: spotData.image, alt: spotData.spot }
                                            }]
                                        },
                                    ]
                                },
                                {
                                    tag: "section",
                                    props: { class: "section3" },
                                    children: [
                                        {
                                            tag: "p",
                                            children: [{
                                                tag: 'TEXT_NODE',
                                                content: spotData.content,
                                            }]
                                        },
                                        {
                                            tag: "h3",
                                            children: [{
                                                tag: 'TEXT_NODE',
                                                content: 'Infos pratiques',
                                            }]
                                        },
                                        {
                                            tag: "div",
                                            children: [{
                                                tag: 'TEXT_NODE',
                                                content: spotData.horaires
                                            }]
                                        },
                                        {
                                            tag: "div",
                                            props: { class: "link" },
                                            children: [
                                                {
                                                    tag: 'a',
                                                    props: { href: `/carte?lat=${spotData.coordonnees.lat}&lon=${spotData.coordonnees.lon}` },
                                                    children: [
                                                        {
                                                            tag: 'TEXT_NODE',
                                                            content: "Voir sur la carte"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                    ]
                                },
                            ]
                        },
                    ]
                },
                getFooterStructure()
            ]
        };
    }
}