export function createHeroComponent({ headingText, paragraphText, videoSrc }) {
    return {
        tag: "section",
        props: { class: "hero-section"},
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
                    },
                    {
                        tag: "video",
                        props: { class: "hero-video", src: videoSrc, autoplay: true, loop: true, muted: true },
                        children: []
                    }
                ]
            }
        ]
    };
}
