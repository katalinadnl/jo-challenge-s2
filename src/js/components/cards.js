export function cardsComponent({ type, title, description, label1, label2, label3, address, buttonDetails, buttonMap }) {
    if (type === "event") {
        return {
            tag: "div",
            props: { class: "event-card card", onclick: function () {
                window.location.href = "/evenements";
            } },
            children: [
                {
                    tag: "div",
                    props: { class: "date-time" },
                    children: ["30/07 | 11:30"]
                },
                {
                    tag: "div",
                    props: { class: "text-section" },
                    children: [
                        {
                            tag: "h4",
                            children: [title]
                        },
                        {
                            tag: "div",
                            props: { class: "card-description spots-card-description" },
                            children: [description]
                        }
                    ]
                }
            ]
        };
    }
    if (type === "spot") {
        return {
            tag: "div",
            props: { class: "spots-card" },
            children: [
                {
                tag: "div",
                props: { class: "label-list" },
                children : [
                    {
                    tag: "p",
                    props: { class: "spots-card-label" },
                    children: [label1],
                    },
                    {
                        tag: "p",
                        props: { class: "spots-card-label" },
                        children: [label2],
                    },
                    {
                        tag: "p",
                        props: { class: "spots-card-label" },
                        children: [label3],
                    },
                    ]
                },

                {
                    tag: "div",
                    props: { class: "spots-card-description" },
                    children: [
                        {
                            tag: "h4",
                            children: [title]
                        },
                        {
                            tag: "div",
                            props: { class: "spots-card-buttons " },
                            children:
                            [

                            {
                                tag: "div",
                                props: { class: "spots-card-button spots-card-button-details" },
                                children: [buttonDetails]
                            },
                            {
                                tag: "div",
                                props: { class: "spots-card-button spots-card-button-map" },
                                children: [buttonMap]
                            }
                        ]
                        },
                    ]
                }
            ]
            }

        };
}
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', toggleDescription);
    });
});

function toggleDescription(event) {
    const card = event.currentTarget;
    const textSection = card.querySelector('.text-section');
    const description = card.querySelector('.card-description');

    if (textSection.style.height === '100%') {
        textSection.style.height = '180px';
        description.style.display = 'none';
    } else {
        textSection.style.height = '100%';
        description.style.display = 'block';
    }
}

