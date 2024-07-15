import Component from "./Component.js";

export default class CardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { expanded: false };
    }

    handleClick = (event) => {
        event.preventDefault();
        this.setState({ expanded: !this.state.expanded });
    }

    render() {
        const { title, description } = this.props;
        const { expanded } = this.state;

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
                    children: ["30/07 | 11:30"]
                },
                {
                    tag: "div",
                    props: { class: "text-section", style: { height: expanded ? '100%' : '180px' } },
                    children: [
                        {
                            tag: "h4",
                            children: [title]
                        },
                        {
                            tag: "div",
                            props: {
                                class: "card-description",
                                style: { display: expanded ? 'block' : 'none' }
                            },
                            children: [description]
                        }
                    ]
                }
            ]
        };
    }
}
