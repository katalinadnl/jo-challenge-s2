import { getNavbarStructure } from "../components/Navbar.js";
import { getFooterStructure } from "../components/Footer.js";
import { createHeroComponent } from "../components/HeroSection.js";
import { cardsComponent } from "../components/cards.js";
import Component from "../components/Component.js";

// Added by Catalina
const eventsHeroContent = {
  headingText: "Carte intéractive",
  paragraphText:
    " Découvrez Paris 2024 en détail ! Plongez dans l'Aventure des jeux à travers notre carte interactive.",
};
// Finish added by Catalina

let map;
let markers = [];

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
    option.value = date;
    option.textContent = new Date(date).toLocaleDateString();
    dateDropdown.appendChild(option);
  });
}

// Function to add markers to the map
function addMarkers(sites, Marker) {
  clearMarkers();
  const customIconUrl = "../../styles/images/icone_courir.png"; 
  sites.forEach((site) => {

    // Extraire la latitude et la longitude des données de site
    let lat = parseFloat(site.fields.latitude.replace(',', '.'));
    let lng = parseFloat(site.fields.longitude.replace(',', '.'));

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

// Initialize and populate dropdowns and map on page load
document.addEventListener("DOMContentLoaded", async () => {
  const data = await fetchData();
  populateDropdowns(data);
  createGMap(data); 
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
                children: [
                    { tag: "option", props: { value: "" }, children: ["Sport"] },
                ],
            },
            {
                tag: "select",
                props: { class: "filter", id: "date" },
                children: [{ tag: "option", props: { value: "" }, children: ["Date"] }],
            },
            {
                tag: "select",
                props: { class: "filter", id: "location" },
                children: [{ tag: "option", props: { value: "" }, children: ["Lieu"] }],
            },
            {
                tag: "select",
                props: { class: "filter", id: "spot" },
                children: [{ tag: "option", props: { value: "" }, children: ["Spot"] }],
            },
            {
                tag: "button",
                props: { class: "filter-button", id: "applyFilters" },
                children: ["Appliquer"],
            },
        ],
    };
}

export default class MapStruct extends Component {
  render() {
    return {
      tag: "div",
      props: { class: "map body-content" },
      children: [
        getNavbarStructure(),
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
                    "BIENVENUE SUR LA CARTE INTERACTIVE DES JEUX OLYMPIQUES",
                  ],
                },
                {
                  tag: "p",
                  children: [
                    "Explorez les différents sites et événements des Jeux Olympiques avec notre carte interactive.",
                    { tag: "br" },
                    "Utilisez les filtres ci-dessous pour personnaliser vos recherches et découvrir les événements par date, type et localisation.",
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
        getFooterStructure(),
      ],
    };
  }
}
