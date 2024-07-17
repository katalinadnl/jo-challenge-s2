export function getCtaButtonStructure({paragraphText, href}) {
    return {
        tag: "div",
        props: { class: "cta-container" },
        children: [
            {
                tag: "a",
                props: { class: "cta-white", href: href },
                children: [
                    {
                        tag: 'TEXT_NODE',
                        content: paragraphText,
                    },
                ],
            }
        ]
    };
}
