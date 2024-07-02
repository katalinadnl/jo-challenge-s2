export function cardsComponent({ type, title, description }) {
    this.open = false;
    if (type === "event") {
        return {
            tag: "div",
            props: { class: "event-card card", onclick: () => { this.open = !this.open; }},
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
                            props: { class: "card-description"+(!this.open ? ' hide': '') },
                            children: [description]
                        }
                    ]
                }
            ]
        };
    }
    if (type === "spot") {

    }
    if (type === "map") {

    }
}

//document.addEventListener('DOMContentLoaded', () => {
//    document.querySelectorAll('.card').forEach(card => {
//        card.addEventListener('click', toggleDescription);
//    });
//});
//
//function toggleDescription(event) {
//    const card = event.currentTarget;
//    const textSection = card.querySelector('.text-section');
//    const description = card.querySelector('.card-description');
//
//    if (textSection.style.height === '100%') {
//        textSection.style.height = '180px';
//        description.style.display = 'none';
//    } else {
//        textSection.style.height = '100%';
//        description.style.display = 'block';
//    }
//}

