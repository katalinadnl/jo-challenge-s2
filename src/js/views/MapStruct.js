import getNavbarStructure from "../components/Navbar.js";
import { getFooterStructure } from "../components/Footer.js";
import { createHeroComponent } from "../components/HeroSection.js";
import { DOM } from "../core/generateStructure.js";
import CardComponent from "../components/CardComponent.js";

const eventsHeroContent = {
  headingText: "Carte intéractive",
  paragraphText: " Découvrez Paris 2024 en détail ! Plongez dans l'Aventure des jeux à travers notre carte interactive.",
};

let map;
let markers = [];
let sitesData = []; // Variable pour stocker les sites

// Fetch data from API
async function fetchData() {
  const response = await fetch(
    "https://data.paris2024.org/api/records/1.0/search/?dataset=paris-2024-sites-de-competition"
  );
  const data = await response.json();
  return data.records;
}

// Populate dropdowns with data
function populateDropdowns(data) {
  const sportDropdown = document.getElementById("sport");
  const locationDropdown = document.getElementById("location");
  const spotDropdown = document.getElementById("spot");
  const dateDropdown = document.getElementById("date");

  const sportsSet = new Set();
  const locationsSet = new Set();
  const spotsSet = new Set();
  const datesSet = new Set();

  data.forEach((record) => {
    const site = record.fields;
    sportsSet.add(site.sports);
    locationsSet.add(site.nom_site);
    spotsSet.add(site.address || site.nom_site);
    datesSet.add(site.start_date);
  });

  sportsSet.forEach((sport) => {
    const option = document.createElement("option");
    option.value = sport;
    option.textContent = sport;
    sportDropdown.appendChild(option);
  });

  locationsSet.forEach((location) => {
    const option = document.createElement("option");
    option.value = location;
    option.textContent = location;
    locationDropdown.appendChild(option);
  });

  spotsSet.forEach((spot) => {
    const option = document.createElement("option");
    option.value = spot;
    option.textContent = spot;
    spotDropdown.appendChild(option);
  });

  datesSet.forEach((date) => {
    const option = document.createElement("option");
    option.value = new Date(date).toISOString().split("T")[0]; // Format ISO
    option.textContent = new Date(date).toLocaleDateString('fr-FR'); // Format localisé
    dateDropdown.appendChild(option);
  });
}

// Function to add markers to the map
function addMarkers(sites, Marker) {
  clearMarkers();
  const customIconUrl = "../../styles/images/icone_courir.png";
  sites.forEach((site) => {
    // Extraire la latitude et la longitude des données de site
    let lat = parseFloat(site.fields.latitude.replace(",", "."));
    let lng = parseFloat(site.fields.longitude.replace(",", "."));

    // Si les valeurs sont invalides, essayer d'utiliser les coordonnées de géométrie
    if (isNaN(lat) || isNaN(lng)) {
      if (site.geometry && site.geometry.coordinates) {
        lng = site.geometry.coordinates[0];
        lat = site.geometry.coordinates[1];
      }
    }

    // Validation des données de latitude et longitude
    if (isNaN(lat) || isNaN(lng)) {
      console.error(`Invalid position for site: ${site.fields.nom_site}`, site);
      return; // Ignore ce site si la position n'est pas valide
    }

    const marker = new Marker({
      position: { lat: lat, lng: lng },
      map,
      title: site.fields.nom_site,
      icon: {
        url: customIconUrl,
        scaledSize: new google.maps.Size(55, 55), // Définir la taille de l'icône
      },
    });
    markers.push(marker);
  });
}

// Function to clear existing markers from the map
function clearMarkers() {
  markers.forEach((marker) => marker.setMap(null));
  markers = [];
}

// Function to get filter values
function getFilterValues() {
  const sport = document.getElementById("sport").value;
  const location = document.getElementById("location").value;
  const spot = document.getElementById("spot").value;
  const date = document.getElementById("date").value;
  return { sport, location, spot, date };
}

// Function to filter sites based on filters applied
function filterSites(sites, filters) {
  return sites.filter((site) => {
    const matchesSport = !filters.sport || site.fields.sports === filters.sport;
    const matchesLocation = !filters.location || site.fields.nom_site === filters.location;
    const matchesSpot = !filters.spot || (site.fields.address && site.fields.address.includes(filters.spot)) || site.fields.nom_site.includes(filters.spot);
    const matchesDate = !filters.date || new Date(site.fields.start_date).toISOString().split("T")[0] === filters.date;
    return matchesSport && matchesLocation && matchesSpot && matchesDate;
  });
}

// Initialize and populate dropdowns and map on page load
document.addEventListener("DOMContentLoaded", async () => {
  const data = await fetchData();
  sitesData = data; // Stocker les données des sites
  populateDropdowns(data);
  createGMap(data);

  // Ajouter le gestionnaire d'événements pour le bouton "Appliquer"
  document.getElementById("applyFilters").addEventListener("click", () => {
    const filters = getFilterValues();
    const filteredSites = filterSites(sitesData, filters);
    addMarkers(filteredSites, google.maps.Marker);
  });
});

// Function to create the Google Map and add markers
async function createGMap(sites) {
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

    addMarkers(sites, Marker); // Add markers to the map with fetched data
  }

  initMap();
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
        children: [{ tag: "option", props: { value: "" }, children: [{ tag: 'TEXT_NODE', content: "Sport",}] },
        ],
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
        children: Array(3).fill(cards), // Placeholder for 3 cards
      },
    ],
  };
}

// Placeholder card data
const cardData = [{
  type: "spot",
  label1: "Lieu",
  label2: "Sport",
  label3: "Capacité d'accueil",
  title: "Parc Montsouris",
  //address: "7 rue adrienne Lecouvreur, 75019 Paris",
  buttonDetails: "Voir en détails",
  buttonMap: "Voir sur la carte",
}];

// Generate cards
//const cards = cardsComponent(cardData);


export default class MapStruct extends DOM.Component {
    constructor(props) {
      super(props);
    }

    render() {
      const cardComponents = cardData.map(cardProps =>
        DOM.createElement(CardComponent, cardProps, [])
      );
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
          {
            tag: "section",
            props: { class: "results-section" },
            children: [
              {
                tag: "h2",
                children: [
                  { tag: 'TEXT_NODE', content: "Résultats" }
                ],
              },
              {
                tag: "div",
                props: { class: "results-cards", id: "results-cards" },
                children: cardComponents
              },
            ],
          },
          getFooterStructure(),
        ],
      };
    }
  }
