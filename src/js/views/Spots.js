import AbstractView from "./AbstractView.js";
import { getNavbarHtml } from "./navbar.js";
import { getFooterHtml } from "./Footer.js";



export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.postId = params.id;
        this.setTitle("Spots");
    }

    async getHtml() {
        return `
            ${getNavbarHtml()}
            <h1>Nos Spots</h1>
            <div class="page-size">
                 <p>Découvrez tous nos spots #${this.postId}.</p>
            </div>
            ${getFooterHtml()}
        `;
    }
}