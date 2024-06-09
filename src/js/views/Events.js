import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Événements");
    }

    async getHtml() {
        return `
            <h1>Événements</h1>
            <p>Retrouvez tous nos événements ici !</p>
        `;
    }
}
