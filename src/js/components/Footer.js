const defaultFooterProps = {
    footerText: "Retrouvez-nous!",
    socialLinks: [
        { href: "https://www.facebook.com/Paris2024", imgSrc: "../../styles/images/Facebook.png" },
        { href: "https://x.com/Paris2024", imgSrc: "../../styles/images/Twitter.png" },
        { href: "https://www.instagram.com/Paris2024", imgSrc: "../../styles/images/Instagram.png" },
        { href: "https://www.linkedin.com/Paris2024", imgSrc: "../../styles/images/LinkedIn.png" },
        { href: "https://www.youtube.com/Paris2024", imgSrc: "../../styles/images/Youtube.png" },
        { href: "", imgSrc: "../../styles/images/TikTok.png" }
    ]
};

function validateFooterProps(props) {
    let { footerText, socialLinks } = props;

    if (typeof footerText !== 'string') {
        console.error('La propriété "footerText" doit être une chaîne de caractères');
        footerText = defaultFooterProps.footerText;
    }

    if (!Array.isArray(socialLinks)) {
        console.error('La propriété "socialLinks" doit être un tableau comprenant une image et un lien pour chaque réseau social');
        socialLinks = defaultFooterProps.socialLinks;
    } else {
        socialLinks = socialLinks.map(link => {
            if (typeof link.href !== 'string' || typeof link.imgSrc !== 'string') {
                console.error('Chaque élément de "socialLinks" doit être un objet avec les propriétés "href" et "imgSrc" de type chaîne de caractères');
                return defaultFooterProps.socialLinks.find(defaultLink => defaultLink.href === link.href) || defaultFooterProps.socialLinks[0];
            }
            return link;
        });
    }

    return { footerText, socialLinks };
}

export function getFooterStructure(props = {}) {
    const finalProps = validateFooterProps({ ...defaultFooterProps, ...props });

    return {
        tag: "footer",
        props: { class: "site-footer" },
        children: [
            {
                tag: "h5",
                children: [finalProps.footerText]
            },
            {
                tag: "div",
                props: { class: "socials" },
                children: finalProps.socialLinks.map(link => ({
                    tag: "a",
                    props: { href: link.href },
                    children: [
                        {
                            tag: "img",
                            props: { src: link.imgSrc }
                        }
                    ]
                }))
            },
            {
                tag: "p",
                props: { class: "copyright" },
                children: ["Jeux Olympiques © 2024. All rights reserved"]
            },
            {
                tag: "div",
                props: { class: "logo-footer" },
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
            }

        ]
    };
}
