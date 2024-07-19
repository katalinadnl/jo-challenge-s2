import { DOM } from "../core/generateStructure.js";

const finalProps = {
    navLinks: [
        { href: "/evenements", text: "Événements", imgSrc: "../../styles/images/Event.png" },
        { href: "/carte", text: "Carte", imgSrc: "../../styles/images/map.png" },
        { href: "/agenda", text: "Agenda", imgSrc: "../../styles/images/Agenda.png" },
        { href: "/spots", text: "Spots", imgSrc: "../../styles/images/spots.png" }
    ],
    logoSrc: "../../styles/images/logo_desktop.png"
};

export class getNavbarStructure extends DOM.Component {
    constructor(props) {
        super(props);
        this.state = { isBurgerMenuOpen: false };
        // Lier la méthode toggleBurgerMenu au contexte de this
        this.toggleBurgerMenu = this.toggleBurgerMenu.bind(this);
    }

    toggleBurgerMenu(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({ isBurgerMenuOpen: !this.state.isBurgerMenuOpen });
    }

    render() {
        const { isBurgerMenuOpen } = this.state;
        return {
            tag: "header",
            props: { class: "header-container" },
            children: [
                {
                    tag: "div",
                    props: { class: "navbar" },
                    children: [
                        {
                            tag: "nav",
                            props: { class: "nav" },
                            children: [
                                {
                                    tag: "div",
                                    props: { class: "logo-navbar" },
                                    children: [
                                        {
                                            tag: "a",
                                            props: { href: "/" },
                                            children: [
                                                {
                                                    tag: "img",
                                                    props: { src: finalProps.logoSrc }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    tag: "div",
                                    props: { class: "nav-link" },
                                    children: finalProps.navLinks.map(link => ({
                                        tag: "a",
                                        props: {
                                            href: link.href,
                                            class: `nav__link ${link.text.toLowerCase()}`,
                                            "data-link": true
                                        },
                                        children: [
                                            {
                                                tag: "div",
                                                props: { class: "img-link-navbar" },
                                                children: [
                                                    {
                                                        tag: "img",
                                                        props: { src: link.imgSrc, class: "nav-icon" }
                                                    }
                                                ]
                                            },
                                            {
                                                tag: 'TEXT_NODE',
                                                content: link.text,
                                            }
                                        ]
                                    }))
                                }
                            ]
                        }
                    ]
                },
                {
                    tag: "div",
                    props: {
                        class: "burgermenu ${isBurgerMenuOpen ? 'active' : ''}",
                    },
                    children: [
                        {
                            tag: "div",
                            props: { class: "burgermenu-navbar" },
                            children: [
                                {
                                    tag: "div",
                                    props: { class: "burgermenu-button" },
                                    events: {
                                        click: this.toggleBurgerMenu
                                    },
                                    children: [
                                        {
                                            tag: "div",
                                            props: { class: "burgermenu-line" }
                                        },
                                        {
                                            tag: "div",
                                            props: { class: "burgermenu-line" }
                                        },
                                        {
                                            tag: "div",
                                            props: { class: "burgermenu-line" }
                                        }
                                    ]
                                },
                                {
                                    tag: "div",
                                    props: { class: "logo-navbar" },
                                    children: [
                                        {
                                            tag: "a",
                                            props: { href: "/" },
                                            children: [
                                                {
                                                    tag: "img",
                                                    props: { src: finalProps.logoSrc }
                                                }
                                            ]
                                        }
                                    ]
                                },
                            ]
                        }
                    ]
                },
                {
                    tag: "div",
                    props: { class: `burgermenu-on ${isBurgerMenuOpen ? 'active' : ''}`,
                        children: [
                        {
                            tag: "div",
                            props: { class: "burgermenu-close", onClick: this.toggleBurgerMenu },
                            children: [
                                {
                                    tag: "div",
                                    props: { class: "burgermenu-button-close" },
                                    children: [
                                        {
                                            tag: "div",
                                            props: { class: "burgermenu-line close" }
                                        },
                                        {
                                            tag: "div",
                                            props: { class: "burgermenu-line close" }
                                        },
                                        {
                                            tag: "div",
                                            props: { class: "burgermenu-line close" }
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            tag: "nav",
                            props: { class: "burgermenu-navbar" },
                            children: finalProps.navLinks.map(link => ({
                                tag: "a",
                                props: {
                                    href: link.href,
                                    class: `burgermenu-nav__link ${link.text.toLowerCase()}`,
                                    "data-link": true
                                },
                                children: [
                                    {
                                        tag: "img",
                                        props: { src: link.imgSrc, class: "burgermenu-nav-icon" }
                                    },
                                    {
                                        tag: 'TEXT_NODE',
                                        content: link.text,
                                    }
                                ]
                            }))
                        }
                        ]
                    }
                }
            ]
        };
    }
}