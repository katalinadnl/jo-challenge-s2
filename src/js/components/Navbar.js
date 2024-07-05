export function getNavbarStructure(props = {}) {
    const finalProps = {
        navLinks: props.navLinks || [
            { href: "/evenements", text: "Événements", imgSrc: "../../styles/images/Event.png" },
            { href: "/carte", text: "Carte", imgSrc: "../../styles/images/map.png" },
            { href: "/agenda", text: "Agenda", imgSrc: "../../styles/images/Agenda.png" },
            { href: "/spots", text: "Spots", imgSrc: "../../styles/images/spots.png" }
        ],
        logoSrc: props.logoSrc || "../../styles/images/logo_desktop.png"
    };

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
                                        link.text
                                    ]
                                }))
                            }
                        ]
                    }
                ]
            },
            {
                tag: "div",
                props: { class: "burgermenu" },
                children: [
                    {
                        tag: "div",
                        props: { class: "burgermenu-navbar" },
                        children: [
                            {
                                tag: "div",
                                props: { class: "burgermenu-button" },
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
                props: { class: "burgermenu-on" },
                children: [
                    {
                        tag: "div",
                        props: { class: "burgermenu-close" },
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
                        children: [
                            {
                                tag: "div",
                                props: { class: "burgermenu-logo-navbar" },
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
                                props: { class: "burgermenu-nav-link" },
                                children: finalProps.navLinks.map(link => ({
                                    tag: "a",
                                    props: {
                                        href: link.href,
                                        class: `nav__link ${link.text.toLowerCase()}`,
                                        "data-link": true
                                    },
                                    children: [
                                        {
                                            tag: "img",
                                            props: { src: link.imgSrc, class: "burgermenu-nav-icon" }
                                        },
                                        link.text
                                    ]
                                }))
                            }
                        ]
                    }
                ]
            }
        ]
    };
}

document.addEventListener("DOMContentLoaded", () => {
    const burgerButton = document.querySelector(".burgermenu-button");
    const overlay = document.querySelector(".burgermenu-on");
    const contentblurred = document.querySelectorAll("section, footer");
    const closeButton = document.querySelector(".burgermenu-close .burgermenu-button-close");
    const burgerNavbar = document.querySelector(".burgermenu-navbar");

    if (burgerButton && overlay && contentblurred.length > 0 && burgerNavbar && closeButton) {
        const toggleBurgerMenu = () => {
            overlay.classList.toggle("active");
            burgerButton.classList.toggle("active");
            closeButton.classList.toggle("active");
            burgerNavbar.style.display = overlay.classList.contains("active") ? "none" : "flex";
            contentblurred.forEach(section => section.classList.toggle("blurred"));
        };

        burgerButton.addEventListener("click", toggleBurgerMenu);
        closeButton.addEventListener("click", toggleBurgerMenu);
    } else {
        console.error("Element(s) not found:", { burgerButton, overlay, contentblurred, burgerNavbar, closeButton });
    }
});
