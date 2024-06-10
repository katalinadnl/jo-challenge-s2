import AbstractView from "./AbstractView.js";
import { getNavbarHtml } from "./navbar.js";
import { getFooterHtml } from "./Footer.js";


export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Événements");
    }

    async getHtml() {
        return `
            ${getNavbarHtml()}
            <h1>Événements</h1>
            <div class="page-size">
                <p>Retrouvez tous nos événements ici !</p>
            </div>    
            ${getFooterHtml()}
        `;
    }
}
