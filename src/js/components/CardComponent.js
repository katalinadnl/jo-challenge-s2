import {DOM} from "../core/generateStructure.js";

export default class CardComponent extends DOM.Component {
    constructor(props) {
        super(props);
        this.state = { expanded: false };
    }

    handleClick = (event) => {
        event.preventDefault();
        console.log(this.state.expanded);
        this.setState({ expanded: !this.state.expanded });
    }

    render() {
        const { expanded } = this.state;

        if (this.props.type === "sport") {
            return {
                tag: "div",
                events: {
                    click: [this.handleClick],
                },
                props: {
                    class: "sport-card card",
                },
                children: [
                    {
                        tag: "div",
                        props: { class: "date-time" },
                        children: [{
                            tag: 'TEXT_NODE',
                            content: this.props.date,
                        }]
                    },
                    {
                        tag: "div",
                        props: {
                            class: "text-section",
                            style: { height: expanded ? '100%' : '180px' },
                        },
                        children: [
                            {
                                tag: "h4",
                                children: [
                                    {
                                        tag: 'TEXT_NODE',
                                        content: this.props.title,
                                    },
                                ],

                            },
                            {
                                tag: "div",
                                props: {
                                    class: "card-description",
                                    style: { display: expanded ? 'block' : 'none' },
                                },
                                children: [
                                    {
                                        tag: 'TEXT_NODE',
                                        content: `Où aller? - ${this.props.site}`,
                                    },
                                ],
                            },
                        ]
                    }
                ]
            };
        } else if (this.props.type === "spot") {
            return {
                tag: "div",
                props: { class: "spots-card" },
                children: [
                    {
                    tag: "div",
                    props: { class: "label-list" },
                    children : [
                        {
                        tag: "p",
                        props: { class: "spots-card-label" },
                        children: [
                            {
                                tag: 'TEXT_NODE',
                                content: this.props.label1,
                            }
                        ],
                        },
                        {
                            tag: "p",
                            props: { class: "spots-card-label" },
                            children: [{
                                tag: 'TEXT_NODE',
                                content: this.props.label2,
                            }],
                        },
                        {
                            tag: "p",
                            props: { class: "spots-card-label" },
                            children: [{
                                tag: 'TEXT_NODE',
                                content: this.props.label3,
                            }],
                        },
                        ]
                    },

                    {
                        tag: "div",
                        props: { class: "spots-card-description" },
                        children: [
                            {
                                tag: "h4",
                                children: [{
                                    tag: 'TEXT_NODE',
                                    content: this.props.title,
                                },]
                            },
                            {
                                tag: "div",
                                props: { class: "spots-card-buttons " },
                                children:
                                [

                                {
                                    tag: "div",
                                    props: { class: "spots-card-button spots-card-button-details" },
                                    children: [{
                                        tag: 'TEXT_NODE',
                                        content: this.props.buttonDetails,
                                    }]
                                },
                                {
                                    tag: "div",
                                    props: { class: "spots-card-button spots-card-button-map" },
                                    children: [
                                        {
                                            tag: 'TEXT_NODE',
                                            content: this.props.buttonMap,
                                        }

                                    ]
                                }
                            ]
                            },
                        ]
                    }
                ]
            }
        } else if (this.props.type === "event") {
            return {
                tag: "div",
                props: {
                    class: "event-card card",
                },
                children: [
                    {
                        tag: "div",
                        props: { class: "tags-informations" },
                        children: [
                            {
                                tag: "div",
                                props: { class: "info" },
                                children: [{
                                    tag: 'TEXT_NODE',
                                    content: this.props.address,
                                }]
                            },
                            {
                                tag: "div",
                                props: { class: "info" },
                                children: [{
                                    tag: 'TEXT_NODE',
                                    content: this.props.tarif,
                                }]
                            },
                            {
                                tag: "div",
                                props: { class: "info" },
                                children: [{
                                    tag: 'TEXT_NODE',
                                    content: this.props.date,
                                }]
                            },
                        ]
                    },
                    {
                        tag: "div",
                        props: { class: "text-section" },
                        children: [
                            {
                                tag: "h4",
                                children: [{
                                    tag: 'TEXT_NODE',
                                    content: this.props.title,
                                }]
                            },
                            {
                                tag: "div",
                                props: { class: "card-description" },
                                children: [{
                                    tag: 'TEXT_NODE',
                                    content: this.props.description,
                                }]
                            }
                        ]
                    },
                ]
            };
        }

    }
}
