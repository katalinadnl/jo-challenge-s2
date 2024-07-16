function type_check(arg1, conf) {
    if (conf.type) {
        if (conf.type === "null") {
            if (arg1 !== null) {
                return false;
            }
        } else if (conf.type === "array") {
            if (!Array.isArray(arg1)) {
                return false;
            }
        } else if (conf.type === "object") {
            if (arg1 === null || Array.isArray(arg1) || typeof arg1 !== 'object') {
                return false;
            }
        } else if (typeof arg1 !== conf.type) {
            return false;
        }
    }
    if (conf.value !== undefined) {
        if (typeof arg1 === 'object' && typeof conf.value === 'object') {
            if (JSON.stringify(arg1) !== JSON.stringify(conf.value)) {
                return false;
            }
        } else if (arg1 !== conf.value) {
            return false;
        }
    }
    if (conf.enum) {
        if (typeof arg1 === 'object') {
            if (!conf.enum.some(obj => JSON.stringify(obj) === JSON.stringify(arg1))) {
                return false;
            }
        } else if (!conf.enum.includes(arg1)) {
            return false;
        }
    }
    return true;
}

export function createHeroComponent({ headingText, paragraphText, videoSrc }) {
    if (!type_check(headingText, { type: 'string' })) {
        throw new Error('La propriété "headingText" doit être une chaîne de caractères');
    }

    if (!type_check(paragraphText, { type: 'string' })) {
        throw new Error('La propriété "paragraphText" doit être une chaîne de caractères');
    }

    return {
        tag: "section",
        props: { class: "hero-section" },
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
                                children: [{
                                    tag: 'TEXT_NODE',
                                    content: headingText
                                }
                                ]
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
                                        children: [{
                                            tag: 'TEXT_NODE',
                                            content: paragraphText
                                        }]
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
