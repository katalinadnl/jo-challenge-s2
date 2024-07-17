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
        const { type, title, description, label1, label2, label3, buttonDetails, buttonMap } = this.props;
        const { expanded } = this.state;

        if (type === "event") {
            return {
                tag: "div",
                events: {
                    click: [this.handleClick],
                },
                props: {
                    class: "event-card card",
                },
                children: [
                    {
                        tag: "div",
                        props: { class: "date-time" },
                        children: [{
                            tag: 'TEXT_NODE',
                            content: "30/07 | 11:30",
                        }]
                    },
                    {
                        tag: "div",
                        props: { class: "text-section", style: { height: expanded ? '100%' : '180px' } },
                        children: [
                            {
                                tag: "h4",
                                children: [
                                    {
                                        tag: 'TEXT_NODE',
                                        content: title,
                                    },
                                ],

                            },
                            {
                                tag: "div",
                                props: {
                                    class: "card-description",
                                    style: { display: expanded ? 'block' : 'none' }
                                },
                                children: [
                                    {
                                        tag: 'TEXT_NODE',
                                        content: description,
                                    },
                                ],
                            }
                        ]
                    }
                ]
            };
        } else if (type === "spot") {
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
                                content: label1,
                            }
                        ],
                        },
                        {
                            tag: "p",
                            props: { class: "spots-card-label" },
                            children: [{
                                tag: 'TEXT_NODE',
                                content: label2,
                            }],
                        },
                        {
                            tag: "p",
                            props: { class: "spots-card-label" },
                            children: [{
                                tag: 'TEXT_NODE',
                                content: label3,
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
                                    content: title,
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
                                        content: buttonDetails,
                                    }]
                                },
                                {
                                    tag: "div",
                                    props: { class: "spots-card-button spots-card-button-map" },
                                    children: [
                                        {
                                            tag: 'TEXT_NODE',
                                            content: buttonMap,
                                        }

                                    ]
                                }
                            ]
                            },
                        ]
                    }
                ]
            }
        }

    }
}
