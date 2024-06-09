import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Carte");
    }

    async getHtml() {
        return `
            <h1>Carte intéractive</h1>
            <p>Ne vous perdez plus !</p>
        `;
    }
}
