import AbstractView from "./AbstractView.js";
import { getNavbarHtml } from "./navbar.js";
import { getFooterHtml } from "./Footer.js";



export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Accueil");
    }

    async getHtml() {
        return `
            ${getNavbarHtml()}
            <h1>Accueil</h1>
            <div class="page-size">
                <p>
                    C'est les Jeux Olympiques ! Anne Hidalgo va se baigner dans la Seine !!!
                    C'est les Jeux Olympiques ! Anne Hidalgo va se baigner dans la Seine !!!
                    C'est les Jeux Olympiques ! Anne Hidalgo va se baigner dans la Seine !!!
                    C'est les Jeux Olympiques ! Anne Hidalgo va se baigner dans la Seine !!!
                    C'est les Jeux Olympiques ! Anne Hidalgo va se baigner dans la Seine !!!
                    C'est les Jeux Olympiques ! Anne Hidalgo va se baigner dans la Seine !!!
                    C'est les Jeux Olympiques ! Anne Hidalgo va se baigner dans la Seine !!!
                    C'est les Jeux Olympiques ! Anne Hidalgo va se baigner dans la Seine !!!
                    C'est les Jeux Olympiques ! Anne Hidalgo va se baigner dans la Seine !!!
                    C'est les Jeux Olympiques ! Anne Hidalgo va se baigner dans la Seine !!!
                    C'est les Jeux Olympiques ! Anne Hidalgo va se baigner dans la Seine !!!
                    C'est les Jeux Olympiques ! Anne Hidalgo va se baigner dans la Seine !!!
                    C'est les Jeux Olympiques ! Anne Hidalgo va se baigner dans la Seine !!!
                    C'est les Jeux Olympiques ! Anne Hidalgo va se baigner dans la Seine !!!
                    C'est les Jeux Olympiques ! Anne Hidalgo va se baigner dans la Seine !!!
                    C'est les Jeux Olympiques ! Anne Hidalgo va se baigner dans la Seine !!!
                    C'est les Jeux Olympiques ! Anne Hidalgo va se baigner dans la Seine !!!
                    C'est les Jeux Olympiques ! Anne Hidalgo va se baigner dans la Seine !!!
                    C'est les Jeux Olympiques ! Anne Hidalgo va se baigner dans la Seine !!!
                    C'est les Jeux Olympiques ! Anne Hidalgo va se baigner dans la Seine !!!
                    C'est les Jeux Olympiques ! Anne Hidalgo va se baigner dans la Seine !!!
                    C'est les Jeux Olympiques ! Anne Hidalgo va se baigner dans la Seine !!!
                    C'est les Jeux Olympiques ! Anne Hidalgo va se baigner dans la Seine !!!
                    C'est les Jeux Olympiques ! Anne Hidalgo va se baigner dans la Seine !!!
                    C'est les Jeux Olympiques ! Anne Hidalgo va se baigner dans la Seine !!!
                    C'est les Jeux Olympiques ! Anne Hidalgo va se baigner dans la Seine !!!
                    C'est les Jeux Olympiques ! Anne Hidalgo va se baigner dans la Seine !!!
                    C'est les Jeux Olympiques ! Anne Hidalgo va se baigner dans la Seine !!!
                    C'est les Jeux Olympiques ! Anne Hidalgo va se baigner dans la Seine !!!
                    C'est les Jeux Olympiques ! Anne Hidalgo va se baigner dans la Seine !!!
                    C'est les Jeux Olympiques ! Anne Hidalgo va se baigner dans la Seine !!!
                    C'est les Jeux Olympiques ! Anne Hidalgo va se baigner dans la Seine !!!
                    C'est les Jeux Olympiques ! Anne Hidalgo va se baigner dans la Seine !!!
                    C'est les Jeux Olympiques ! Anne Hidalgo va se baigner dans la Seine !!!
                    C'est les Jeux Olympiques ! Anne Hidalgo va se baigner dans la Seine !!!
                    C'est les Jeux Olympiques ! Anne Hidalgo va se baigner dans la Seine !!!
                    C'est les Jeux Olympiques ! Anne Hidalgo va se baigner dans la Seine !!!
                </p>
                <p>
                        <a href="/events" data-link>Voici nos prochains événements</a>.
                </p>
            </div>
            ${getFooterHtml()}
        `;
    }
}
