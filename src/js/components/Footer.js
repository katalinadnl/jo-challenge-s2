export function getFooterStructure() {
    return {
        tag: "div",
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
                                props: { href: "https://www.facebook.com/" },
                                children: ["Facebook"]
                            },
                            {
                                tag: "a",
                                props: { href: "https://www.twitter.com/" },
                                children: ["Twitter"]
                            },
                            {
                                tag: "a",
                                props: { href: "https://www.instagram.com/" },
                                children: ["Instagram"]
                            }
                        ]
                    }
                ]
            }
        ]
    };
}
