export function getFooterStructure(props = {}) {
    const finalProps = {
        footerText: props.footerText || "Retrouvez-nous!",
        socialLinks: props.socialLinks || [
            { href: "https://www.facebook.com/Paris2024", imgSrc: "../../styles/images/Facebook.png" },
            { href: "https://x.com/Paris2024", imgSrc: "../../styles/images/Twitter.png" },
            { href: "https://www.instagram.com/Paris2024", imgSrc: "../../styles/images/Instagram.png" },
            { href: "https://www.linkedin.com/Paris2024", imgSrc: "../../styles/images/LinkedIn.png" },
            { href: "https://www.youtube.com/Paris2024", imgSrc: "../../styles/images/Youtube.png" },
            { href: "", imgSrc: "../../styles/images/TikTok.png" }
        ]
    };

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
