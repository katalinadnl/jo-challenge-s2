import AbstractView from "./AbstractView.js";
import { getNavbarHtml } from "./navbar.js";
import { getFooterHtml } from "./Footer.js";



export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Carte");
    }

    async getHtml() {
        return `
            ${getNavbarHtml()}
            <h1>Carte intéractive</h1>
            <div class="page-size">
                <p>Ne vous perdez plus !</p>
            </div>
            ${getFooterHtml()}
        `;
    }
}
