export function getFooterStructure() {
    return {
        tag: "footer",
        props: { class: "site-footer" },
        children: [
            {
                tag: "div",
                props: { class: "page-size" },
                children: [
                    {
                        tag: "h2",
                        children: ["Retrouvez-nous"]
                    },
                    {
                        tag: "div",
                        props: { class: "socials" },
                        children: [
                            {
                                tag: "a",
                                props: { href: "https://www.facebook.com/Paris2024" },
                                children: [
                                    {
                                        tag: "img",
                                        props: { src: "../../styles/images/Facebook.png" }
                                    }
                                ]                            },
                            {
                                tag: "a",
                                props: { href: "https://x.com/Paris2024" },
                                children: [
                                    {
                                        tag: "img",
                                        props: { src: "../../styles/images/Twitter.png" }
                                    }
                                ]
                            },
                            {
                                tag: "a",
                                props: { href: "https://www.instagram.com/paris2024/" },
                                children: [
                                    {
                                        tag: "img",
                                        props: { src: "../../styles/images/Instagram.png" }
                                    }
                                ]
                            },
                            {
                                tag: "a",
                                props: { href: "https://x.com/Paris2024" },
                                children: [
                                    {
                                        tag: "img",
                                        props: { src: "../../styles/images/Tiktok.png" }
                                    }
                                ]
                            },
                            {
                                tag: "a",
                                props: { href: "https://www.youtube.com/channel/UCg4W1uf-i5X1nVaeWJsKuyA" },
                                children: [
                                    {
                                        tag: "img",
                                        props: { src: "../../styles/images/youtube.png" }
                                    }
                                ]
                            },
                            {
                                tag: "a",
                                props: { href: "https://www.linkedin.com/company/paris-2024/" },
                                children: [
                                    {
                                        tag: "img",
                                        props: { src: "../../styles/images/LinkedIn.png" }
                                    }
                                ]
                            }

                        ]
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
            }
        ]
    };
}
