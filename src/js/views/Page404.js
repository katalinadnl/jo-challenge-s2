import AbstractView from "./AbstractView.js";
import { getFooterHtml } from "./Footer.js";


export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Page 404");
    }

    async getHtml() {
        return `
            <h1>Oops</h1>
            <p>Page not found!</p>
            ${getFooterHtml()}
        `;
    }
}