import getNavbarStructure from "../components/Navbar.js";
import { getFooterStructure } from "../components/Footer.js";
import { createHeroComponent } from "../components/HeroSection.js";
import { DOM } from "../core/generateStructure.js";
import CardComponent from "../components/CardComponent.js";
import { fetchEventsData } from "../api/fetchData.js";
import { populateDropdowns } from "../components/populateDropdowns.js";
import { addMarkers, clearMarkers } from "../components/mapFunctions.js";
import { getFilterValues, filterSites } from "../components/filterFunctions.js";

const eventsHeroContent = {
  headingText: "Carte intéractive",
  paragraphText: " Découvrez Paris 2024 en détail ! Plongez dans l'Aventure des jeux à travers notre carte interactive.",
};

let map;
let markers = [];
let sitesData = []; // Variable pour stocker les sites

// Initialize and populate dropdowns and map on page load
document.addEventListener("DOMContentLoaded", async () => {
  console.log('DOMContentLoaded event fired'); // Debugging

  try {
    const data = await fetchEventsData();
    sitesData = data; // Stocker les données des sites
    console.log('Fetched data:', data); // Debugging
    populateDropdowns(data);
    await createGMap(data); // Ensure createGMap is awaited if it contains asynchronous operations

    // Ajouter le gestionnaire d'événements pour le bouton "Appliquer"
    document.getElementById("applyFilters").addEventListener("click", () => {
      const filters = getFilterValues();
      const filteredSites = filterSites(sitesData, filters);
      console.log('Filtered sites:', filteredSites); // Debugging
      addMarkers(filteredSites, google.maps.Marker, map, markers); // Pass the markers array
    });
  } catch (error) {
    console.error('Error during initialization:', error);
  }
});

// Function to create the Google Map and add markers
async function createGMap(sites) {
  try {
    ((g) => {
      var h,
        a,
        k,
        p = "The Google Maps JavaScript API",
        c = "google",
        l = "importLibrary",
        q = "__ib__",
        m = document,
        b = window;
      b = b[c] || (b[c] = {});
      var d = b.maps || (b.maps = {}),
        r = new Set(),
        e = new URLSearchParams(),
        u = () =>
          h ||
          (h = new Promise(async (f, n) => {
            await (a = m.createElement("script"));
            e.set("libraries", [...r] + "");
            for (k in g)
              e.set(
                k.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()),
                g[k]
              );
            e.set("callback", c + ".maps." + q);
            a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
            d[q] = f;
            a.onerror = () => (h = n(Error(p + " could not load.")));
            a.nonce = m.querySelector("script[nonce]")?.nonce || "";
            m.head.append(a);
          }));
      d[l]
        ? console.warn(p + " only loads once. Ignoring:", g)
        : (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)));
    })({
      key: "AIzaSyAWXpDhNwacHzpeSieCl9alCgsKuSXebeU",
      v: "weekly",
      // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
      // Add other bootstrap parameters as needed, using camel case.
    });

    // initMap is now async
    async function initMap() {
      // Request libraries when needed, not in the script tag.
      const { Map } = await google.maps.importLibrary("maps");
      const { Marker } = await google.maps.importLibrary("marker");
      // Short namespaces can be used.
      map = new Map(document.getElementById("map"), {
        center: { lat: 48.86010463673363, lng: 2.2933603275527727 },
        zoom: 12,
      });

      addMarkers(sites, Marker, map, markers); // Add markers to the map with fetched data
    }

    await initMap(); // Ensure initMap is awaited
  } catch (error) {
    console.error('Error creating map:', error);
  }
}

// Function to create the filter component
function createFilterComponent() {
  return {
    tag: "div",
    props: { class: "filter-component" },
    children: [
      {
        tag: "select",
        props: { class: "filter", id: "sport" },
        children: [{ tag: "option", props: { value: "" }, children: [{ tag: 'TEXT_NODE', content: "Sport",}] }],
      },
      {
        tag: "select",
        props: { class: "filter", id: "date" },
        children: [{ tag: "option", props: { value: "" }, children: [{ tag: 'TEXT_NODE', content: "Date",}] }],
      },
      {
        tag: "select",
        props: { class: "filter", id: "location" },
        children: [{ tag: "option", props: { value: "" }, children: [{ tag: 'TEXT_NODE', content: "Lieu",}] }],
      },
      {
        tag: "select",
        props: { class: "filter", id: "spot" },
        children: [{ tag: "option", props: { value: "" }, children: [{ tag: 'TEXT_NODE', content: "Spot",}] }],
      },
      {
        tag: "button",
        props: { class: "filter-button", id: "applyFilters" },
        children: [{ tag: 'TEXT_NODE', content: "Appliquer",}],
      },
    ],
  };
}

// Function to create the results section with cards
function createResultsSection() {
  const cardData = [{
    type: "spot",
    label1: "Lieu",
    label2: "Sport",
    label3: "Capacité d'accueil",
    title: "Parc Montsouris",
    buttonDetails: "Voir en détails",
    buttonMap: "Voir sur la carte",
  }];

  const cardComponents = cardData.map(cardProps =>
    DOM.createElement(CardComponent, cardProps, [])
  );

  return {
    tag: "section",
    props: { class: "results-section" },
    children: [
      {
        tag: "h2",
        children: [{ tag: 'TEXT_NODE', content: "Résultats"}],
      },
      {
        tag: "div",
        props: { class: "results-cards", id: "results-cards" },
        children: cardComponents, // Placeholder for 3 cards
      },
    ],
  };
}

export default class MapStruct extends DOM.Component {
    constructor(props) {
      super(props);
    }

    render() {
      const navbar = DOM.createElement(getNavbarStructure, []);

      return {
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
                      { tag: 'TEXT_NODE', content: "BIENVENUE SUR LA CARTE INTERACTIVE DES JEUX OLYMPIQUES" }
                    ],
                  },
                  {
                    tag: "p",
                    children: [
                      { tag: 'TEXT_NODE', content: "Explorez les différents sites et événements des Jeux Olympiques avec notre carte interactive." },
                      { tag: "br" },
                      { tag: 'TEXT_NODE', content: "Utilisez les filtres ci-dessous pour personnaliser vos recherches et découvrir les événements par date, type et localisation." }
                    ],
                  },
                  createFilterComponent(),
                  {
                    tag: "div",
                    props: { class: "map-item", id: "map" },
                  },
                ],
              },
            ],
          },
          createResultsSection(),
          getFooterStructure(),
        ],
      };
    }
}
