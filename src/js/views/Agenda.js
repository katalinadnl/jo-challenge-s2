import AbstractView from "./AbstractView.js";
import { getNavbarHtml } from "./Navbar.js";
import { getFooterHtml } from "./Footer.js";



export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Agenda");
    }

    async getHtml() {
        return `
            ${getNavbarHtml()}
            <h1>Agenda</h1>
            <div class="page-size">
                <p>Retrouvez toutes nos dates ici !</p>
            </div>
            ${getFooterHtml()}
        `;
    }

}
