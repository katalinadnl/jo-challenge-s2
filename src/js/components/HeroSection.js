export function createHeroComponent({ backgroundImage, headingText, paragraphText, height }) {
    return {
        tag: "section",
        props: { class: "hero-section", style: `background: linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%), url(${backgroundImage}) lightgray 0.812px -0.096px / 100% 172.973% no-repeat; height: ${height}` },
        children: [
            {
                tag: "div",
                props: { class: "hero-container" },
                children: [
                    {
                        tag: "div",
                        props: { class: "hero-text" },
                        children: [
                            {
                                tag: "h1",
                                children: [headingText]
                            },
                            {
                                tag: "div",
                                props: { class: "line-and-text" },
                                children: [
                                    {
                                        tag: "div",
                                        props: { class: "line" }
                                    },
                                    {
                                        tag: "p",
                                        children: [paragraphText]
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
