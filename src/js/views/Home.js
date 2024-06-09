import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Accueil");
    }

    async getHtml() {
        return `
            <h1>Accueil</h1>
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
        `;
    }
}
