import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Agenda");
    }

    async getHtml() {
        return `
            <h1>Agenda</h1>
            <p>Retrouvez toutes nos dates ici !</p>
        `;
    }
}
