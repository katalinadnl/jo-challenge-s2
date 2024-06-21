export function getNavbarStructure() {
    return {
        tag: "div",
        props: { class: "navbar" },
        children: [
            {
                tag: "div",
                props: { class: "page-size" },
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
                                                props: { src: "../../styles/images/logo_desktop.png" }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                tag: "div",
                                props: { class: "nav-link" },
                                children: [
                                    {
                                        tag: "a",
                                        props: { href: "/evenements", class: "nav__link events", "data-link": true },
                                        children: [
                                            {
                                                tag: "img",
                                                props: { src: "../../styles/images/Event.png", class: "nav-icon" }
                                            },
                                            "Événements"
                                        ]
                                    },
                                    {
                                        tag: "a",
                                        props: { href: "/carte", class: "nav__link map", "data-link": true },
                                        children: [
                                            {
                                                tag: "img",
                                                props: { src: "../../styles/images/map.png", class: "nav-icon" }
                                            },
                                            "Carte"
                                        ]
                                    },
                                    {
                                        tag: "a",
                                        props: { href: "/agenda", class: "nav__link diary", "data-link": true },
                                        children: [
                                            {
                                                tag: "img",
                                                props: { src: "../../styles/images/Agenda.png", class: "nav-icon" }
                                            },
                                            "Agenda"
                                        ]
                                    },
                                    {
                                        tag: "a",
                                        props: { href: "/spots", class: "nav__link spots", "data-link": true },
                                        children: [
                                            {
                                                tag: "img",
                                                props: { src: "../../styles/images/spots.png", class: "nav-icon" }
                                            },
                                            "Spots"
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    };
}
