export function getNavbarStructure() {
    return {
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
                    { tag: "a", props: { href: "/", class: "nav__link home", "data-link": true }, children: ["Accueil"] },
                    { tag: "a", props: { href: "/agenda", class: "nav__link events", "data-link": true }, children: ["Agenda"] },
                    { tag: "a", props: { href: "/spots", class: "nav__link spots", "data-link": true }, children: ["Spots"] },
                    { tag: "a", props: { href: "/map", class: "nav__link diary", "data-link": true }, children: ["Carte"] }
                ]
            }
        ]
    };
}
