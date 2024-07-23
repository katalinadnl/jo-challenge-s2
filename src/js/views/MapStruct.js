import getNavbarStructure from "../components/Navbar.js";
import { getFooterStructure } from "../components/Footer.js";
import { createHeroComponent } from "../components/HeroSection.js";
import { DOM } from "../core/generateStructure.js";
import { fetchEventsData } from "../api/fetchData.js";
import { populateDropdowns } from "../functions/populateDropdowns.js";
import { getFilterValues, filterSites } from "../functions/filterFunctions.js";
import { updateResultsSection } from "../functions/updateResultsSection.js";
import { createResultsSection } from "../functions/ResultsSection.js";
import createFilterComponent from "../components/FilterComponent.js";
import { createGMap, addMarkers, clearMarkers } from "../functions/map.js";
import imageMapping from "../mappings/sportsImagesMapping.js";


const eventsHeroContent = {
  headingText: "Carte intéractive",
  paragraphText: " Découvrez Paris 2024 en détail ! Plongez dans l'Aventure des jeux à travers notre carte interactive.",
};

let map;
export default class MapStruct extends DOM.Component {
  constructor(props) {
    super(props);
    this.state = {
      sitesData: [],
      markers: []
    };
  }

  async componentDidMount() {
    const mapElement = document.getElementById("map");
    if (!mapElement) {
      console.error('No map element found');
      return;
    }

    console.log('componentDidMount called'); // Debugging log

    try {
      const data = await fetchEventsData();
      this.setState({ sitesData: data }); // Stocker les données des sites
      console.log('Fetched data:', data); // Debugging log
      populateDropdowns(data);
      map = await createGMap(data); // Ensure createGMap is awaited if it contains asynchronous operations

      // Afficher toutes les cartes par défaut
      updateResultsSection(this.state.sitesData);

      // Ajouter le gestionnaire d'événements pour le bouton "Appliquer"
      const applyFiltersButton = document.getElementById("applyFilters");
      if (applyFiltersButton) {
        applyFiltersButton.addEventListener("click", () => {
          const filters = getFilterValues();
          const filteredSites = filterSites(this.state.sitesData, filters);
          console.log('Filtered sites:', filteredSites); // Debugging log
          clearMarkers(this.state.markers); // Clear previous markers
          this.state.markers = addMarkers(filteredSites, google.maps.Marker, map, this.state.markers); // Update markers array

          // Afficher les cartes filtrées
          updateResultsSection(filteredSites);
        });
      }
    } catch (error) {
      console.error('Error during initialization:', error);
    }
  }

  render() {
    const navbar = DOM.createElement(getNavbarStructure, []);
    const structure = {
      tag: "div",
      props: { class: "map body-content" },
      children: [
        navbar,
        createHeroComponent(eventsHeroContent),
        {
          tag: "section",
          props: { class: "section1" },
          children: [
            {
              tag: "div",
              props: { class: "map" },
              children: [
                {
                  tag: "h2",
                  children: [
                    { tag: 'TEXT_NODE', content: "DÉCOUVREZ LES MEILLEURS SITES OLYMPIQUES" }
                  ],
                },
                {
                  tag: "p",
                  children: [
                    { tag: 'TEXT_NODE', content: "Explorez les sites emblématiques des Jeux Olympiques de Paris 2024. " },
                    { tag: "br" },
                    { tag: 'TEXT_NODE', content: "Utilisez notre carte interactive pour localiser les événements sportifs, découvrir les lieux historiques, et vivre l'excitation des Jeux Olympiques de près. " },
                    { tag: "br" },
                    { tag: 'TEXT_NODE', content: "Filtrez les résultats par sport, date, sport, et emplacement pour personnaliser votre expérience olympique." },
                  ],
                },
                createFilterComponent({ applyFilters: this.applyFilters }),
                {
                  tag: "div",
                  props: { class: "map-item", id: "map" },
                },
                {
                  tag: "h3",
                  children: [
                    { tag: 'TEXT_NODE', content: "Résultats" }
                  ],
                },
                {
                  tag: "div",
                  props: { id: "results-container" }, // Ajout de l'ID results-container
                }
              ],
            },
          ],
        },
        getFooterStructure(),
      ],
    };
    console.log("Generated structure:", structure); // Debugging log
    return structure;
  }
}
