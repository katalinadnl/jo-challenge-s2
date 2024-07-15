import Component from "./Component.js";

export default class CardComponent extends Component {
    constructor() {
        super();
        this.state = {expanded: false};
    }

    render() {
        const {title, description, label1, label2, label3, address, buttonDetails, buttonMap} = this.props;
        const {expanded} = this.state;

        console.log('props')
        console.log(this.props);
        console.log('state')
        console.log(expanded);

        return {
            tag: "div",
            events: {
                click: [
                    function (event) {
                        event.preventDefault();
                        this.state = {expanded: expanded ? false : true};
                    },
                ],
            },
            props: {
                class: "event-card card",
            },
            children: [
                {
                    tag: "div",
                    props: {class: "date-time"},
                    children: ["30/07 | 11:30"]
                },
                {
                    tag: "div",
                    props: {class: "text-section", style: {height: expanded ? '100%' : '180px'}},
                    children: [
                        {
                            tag: "h4",
                            children: [title]
                        },
                        {
                            tag: "div",
                            props: {
                                class: "card-description ",
                                style: {display: expanded ? 'block' : 'none'}
                            },
                            children: [description]
                        }
                    ]
                }
            ]
        };
    }
}



        /*if (type === "spot") {
            return {
                tag: "div",
                props: { class: "spots-card" },
                children: [
                    {
                        tag: "div",
                        props: { class: "label-list" },
                        children: [
                            {
                                tag: "p",
                                props: { class: "spots-card-label" },
                                children: [label1],
                            },
                            {
                                tag: "p",
                                props: { class: "spots-card-label" },
                                children: [label2],
                            },
                            {
                                tag: "p",
                                props: { class: "spots-card-label" },
                                children: [label3],
                            },
                        ]
                    },
                    {
                        tag: "div",
                        props: { class: "spots-card-description" },
                        children: [
                            {
                                tag: "h4",
                                children: [title]
                            },
                            {
                                tag: "div",
                                props: { class: "spots-card-buttons" },
                                children: [
                                    {
                                        tag: "div",
                                        props: { class: "spots-card-button spots-card-button-details" },
                                        children: [buttonDetails]
                                    },
                                    {
                                        tag: "div",
                                        props: { class: "spots-card-button spots-card-button-map" },
                                        children: [buttonMap]
                                    }
                                ]
                            },
                        ]
                    }
                ]
            };
        }*/
