import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.postId = params.id;
        this.setTitle("Spots");
    }

    async getHtml() {
        return `
            <h1>Nos Spots</h1>
            <p>Découvrez tous nos spots #${this.postId}.</p>
        `;
    }
}