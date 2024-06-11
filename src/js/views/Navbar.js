export function getNavbarHtml() {
    return `
        <div class="page-size">
            <nav class="nav">
                <div class="logo-navbar">
                    <a href="/">
                        <img src="/styles/images/logo_desktop.png">
                    </a>
                </div>
                <a href="/" class="nav__link home" data-link>Accueil</a>
                <a href="/evenements" class="nav__link events" data-link>Événements</a>
                <a href="/spots" class="nav__link spots" data-link>Spots</a>
                <a href="/agenda" class="nav__link diary" data-link>Agenda</a>
                <a href="/carte" class="nav__link map" data-link>Carte</a>
            </nav>
        </div>
    `;
}
