const defaultNavbarProps = {
    navLinks: [
        {href: "/evenements", text: "Événements", imgSrc: "../../styles/images/Event.png"},
        {href: "/carte", text: "Carte", imgSrc: "../../styles/images/map.png"},
        {href: "/agenda", text: "Agenda", imgSrc: "../../styles/images/Agenda.png"},
        {href: "/spots", text: "Spots", imgSrc: "../../styles/images/spots.png"}
    ],
    logoSrc: "../../styles/images/logo_desktop.png"
};

function validateNavbarProps(props) {
    let {navLinks, logoSrc} = props;

    if (!Array.isArray(navLinks)) {
        console.error('La propriété "navLinks" doit être un tableau comprenant un objet pour chaque lien de navigation');
        navLinks = defaultNavbarProps.navLinks;
    } else {
        navLinks = navLinks.map(link => {
            if (typeof link.href !== 'string' || typeof link.text !== 'string' || typeof link.imgSrc !== 'string') {
                console.error('Chaque élément de "navLinks" doit être un objet avec les propriétés "href", "text" et "imgSrc" de type chaîne de caractères');
                return defaultNavbarProps.navLinks.find(defaultLink => defaultLink.href === link.href) || defaultNavbarProps.navLinks[0];
            }
            return link;
        });
    }

    if (typeof logoSrc !== 'string') {
        console.error('La propriété "logoSrc" doit être une chaîne de caractères');
        logoSrc = defaultNavbarProps.logoSrc;
    }

    return {navLinks, logoSrc};
}

export function getNavbarStructure(props = {}) {
    const finalProps = validateNavbarProps({...defaultNavbarProps, ...props});

    return {
        tag: "div",
        props: {class: "page-size"},
        children: [
            {
                props: {class: "navbar"},
                children: [
                    {
                        tag: "div",
                        props: {class: "page-size"},
                        children: [
                            {

                                tag: "nav",
                                props: {class: "nav"},
                                children: [
                                    {
                                        tag: "div",
                                        props: {class: "logo-navbar"},
                                        children: [
                                            {
                                                tag: "a",
                                                props: {href: "/"},
                                                children: [
                                                    {
                                                        tag: "img",
                                                        props: {src: finalProps.logoSrc}
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        tag: "div",
                                        props: {class: "nav-link"},
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
                                                    props: {src: link.imgSrc, class: "nav-icon"}
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
            }
        ]
    };
}