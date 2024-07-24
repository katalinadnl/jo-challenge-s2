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
        const id = parseInt(this.props.params[0], 10); // prendre l'id du spot dans l'url
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
                props: { class: "information" },
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
            props: { class: "information" },
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
                            props: { class: "section2" },
                            children: [
                                {
                                    tag: "p",
                                    children: [{
                                        tag: 'TEXT_NODE',
                                        content: spotData.content,
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
