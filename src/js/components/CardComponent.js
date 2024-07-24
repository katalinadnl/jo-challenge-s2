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
                    class: "sport-card",
                    style: {
                        backgroundImage: `url(${this.props.image})`,
                    },
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
                props: { class: "spots-card",
                    style: {
                        backgroundImage:  `url(${this.props.image.image})`
                    },
                },
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
                                content: this.props.SportLabel,
                            }
                        ],
                        },
                        {
                            tag: "p",
                            props: { class: "spots-card-label" },
                            children: [
                                {
                                    tag: 'TEXT_NODE',
                                    content: this.props.SiteNameLabel,
                                }
                            ],
                        },
                        {
                            tag: "p",
                            props: { class: "spots-card-label" },
                            children: [{
                                tag: 'TEXT_NODE',
                                content: this.props.StartDateLabel,
                            }],
                        },
                        {
                            tag: "p",
                            props: { class: "spots-card-label" },
                            children: [{
                                tag: 'TEXT_NODE',
                                content: this.props.EndDateLabel,
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
                                    content: this.props.SpotName,
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
                                    children: [
                                        {
                                            tag: "a",
                                            props: {
                                                href: this.props.spotLinkDetails,
                                            },
                                            children: [
                                                {
                                                tag: 'TEXT_NODE',
                                                content: this.props.spotTextLinkDetails,
                                                }
                                            ]
                                        }

                                    ]
                                },
                                {
                                    tag: "div",
                                    props: { class: "link spots-card-button spots-card-button-map" },
                                    href: this.props.spotLinkMap,

                                    children: [
                                        {
                                            tag: "a",
                                            props: {
                                                href: this.props.spotLinkMap,
                                            },
                                            children: [
                                                {
                                                tag: 'TEXT_NODE',
                                                content: this.props.spotTextLinkMap,
                                                }
                                            ]
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
                    class: "event-card",
                },
                children: [
                    {
                        tag: "div",
                        props: { class: "box-tarif" },
                        children: [
                            {
                                tag: 'TEXT_NODE',
                                content: this.props.tarif,
                            }
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
                                props: { class: "date-address" },
                                children: [
                                    {
                                        tag: "div",
                                        props: { class: "address"},
                                        children: [
                                            {
                                                tag: 'i',
                                                props: {
                                                    class: "fa-solid fa-location-dot",
                                                }
                                            },
                                            {
                                                tag: "a",
                                                props: {
                                                    href: this.props.linkMap,
                                                },
                                                children: [
                                                    {
                                                        tag: 'TEXT_NODE',
                                                        content: this.props.address,
                                                    }
                                                ]
                                            }
                                        ]

                                    },
                                    {
                                        tag: "div",
                                        props: { class: "date"},
                                        children: [
                                            {
                                                tag: 'i',
                                                props: {
                                                    class: "fa-solid fa-calendar-days",
                                                }
                                            },
                                            {
                                                tag: 'TEXT_NODE',
                                                content: this.props.date,
                                            }
                                        ]
                                    },
                                ]
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
                    {
                        tag: "div",
                        props: { class: "link" },
                        children: [
                            {
                                tag: "a",
                                props: {
                                    class: "link",
                                    href: this.props.linkJO,
                                    target: "_blank",
                                },
                                children: [
                                    {
                                        tag: 'TEXT_NODE',
                                        content: this.props.textLinkJO,
                                    },
                                    {
                                        tag: 'i',
                                        props: {
                                            class: "fa-sharp fa-solid fa-arrow-right fa-lg",
                                        }
                                    }
                                ]
                            },
                        ]
                    },
                ]
            };
        }
    }
}
