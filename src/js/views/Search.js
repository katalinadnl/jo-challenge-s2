import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Recherche");
    }

    async getHtml() {
        return `
            <h1>Votre recherche</h1>
            <p>Retrouvez ici votre recherche</p>
        `;
    }
}
