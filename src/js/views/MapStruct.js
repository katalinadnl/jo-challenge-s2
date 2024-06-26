import { getNavbarStructure } from "../components/Navbar.js";
import { getFooterStructure } from "../components/Footer.js";
import { createHeroComponent } from "../components/HeroSection.js";
//added by Catalina
const eventsHeroContent = {
    backgroundImage: "",
    headingText: "Carte intéractive",
    paragraphText: "Bienvenue aux Jeux Olympiques 2024 à Paris ! Découvrez l'excitation de cet événement prestigieux au cœur de la capitale.",
    height: "650px"
};
//finish added by Catalina
export default function MapStruct() {
    return {
        tag: "div",
        children: [
            getNavbarStructure(),
            createHeroComponent(eventsHeroContent),
            {
                tag: "h1",
                children: ["Carte intéractive"]
            },
            {
                tag: "div",
                props: { class: "page-size" },
                children: [
                    {
                        tag: "p",
                        children: ["Ne vous perdez plus !"]
                    }
                ]
            },
            getFooterStructure()
        ]
    };
}
