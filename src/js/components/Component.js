class Component {
    constructor(props) {
        this.props = props;
        this.state = {};
    }

    shouldUpdate(newProps) {
        return JSON.stringify(this.props) !== JSON.stringify(newProps);
    }

    display(newProps) {
        if (this.shouldUpdate(newProps)) {
            this.props = newProps;
            return this.render();
        }
        return null;
    }

    render() {
        throw new Error("Render method should be implemented by subclasses");
    }
}

class CardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    toggleDescription() {
        this.state.open = !this.state.open;
        this.display(this.props);
    }

    render() {
        const { type, title, description } = this.props;
        if (type === "event") {
            return {
                tag: "div",
                props: {
                    class: "event-card card",
                    onclick: () => { this.toggleDescription(); }
                },
                children: [
                    {
                        tag: "div",
                        props: { class: "date-time" },
                        children: ["30/07 | 11:30"]
                    },
                    {
                        tag: "div",
                        props: { class: "text-section" },
                        children: [
                            {
                                tag: "h4",
                                children: [title]
                            },
                            {
                                tag: "div",
                                props: { class: `card-description${!this.state.open ? ' hide' : ''}` },
                                children: [description]
                            }
                        ]
                    }
                ]
            };
        }
        return null;
    }
}

function createElement(node) {
    if (typeof node === 'string') {
        return document.createTextNode(node);
    }
    const element = document.createElement(node.tag);
    if (node.props) {
        Object.keys(node.props).forEach(prop => {
            if (prop.startsWith('on')) {
                element[prop.toLowerCase()] = node.props[prop];
            } else {
                element.setAttribute(prop, node.props[prop]);
            }
        });
    }
    if (node.children) {
        node.children
            .map(createElement)
            .forEach(child => element.appendChild(child));
    }
    return element;
}

document.addEventListener('DOMContentLoaded', () => {
    const cardProps = { type: "event", title: "Sample Event", description: "Event Description" };
    const cardComponent = new CardComponent(cardProps);
    const renderedCard = cardComponent.display(cardProps);

    if (renderedCard) {
        const cardElement = createElement(renderedCard);
        document.body.appendChild(cardElement);
    }
});

//prendre l'etat actuel de l'objet et le comparer avec le nouvel etat
//si l'etat a changé, on met à jour le composant appe
