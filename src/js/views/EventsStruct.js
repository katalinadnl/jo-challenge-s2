import { getNavbarStructure } from "../components/Navbar.js";
import { getFooterStructure } from "../components/Footer.js";
import { createHeroComponent } from "../components/HeroSection.js";
import { cardsComponent } from "../components/cards.js";

const eventsHeroContent = {
    headingText: "DÉCOUVREZ LES ÉVÉNEMENTS QUI VOUS PLAISENT",
    paragraphText: "Explorez les moments inoubliables des Jeux Olympiques de Paris 2024 et trouvez les événements qui vous passionnent.",
    height: "650px"
};

const cardevent = {
    type: "event",
    title: "Cérémonie d'ouverture",
    description: "Assistez à la cérémonie d'ouverture des Jeux Olympiques de Paris 2024, un spectacle inoubliable pour tous les fans de sport."
}



const apiUrl = 'https://data.paris2024.org/api/explore/v2.1/catalog/datasets/'; // Replace with actual endpoint

async function fetchOlympicsData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data); // Replace with code to display data
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchOlympicsData();


export default function EventsStruct() {
    return {
        tag: "div",
        props: { class: "event body-content" },
        children: [
            getNavbarStructure(),
            createHeroComponent(eventsHeroContent),
            cardsComponent(cardevent),
            {
                tag: "section",
                props: { class: "events-content" },
                children: [
                    {
                        tag: "div",
                        props: { class: "page-size" },
                        children: [

                        ]
                    }
                ]
            },
            getFooterStructure()
        ]
    };
}
