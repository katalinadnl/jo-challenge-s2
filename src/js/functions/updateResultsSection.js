// import { DOM, generateStructure } from "../core/generateStructure.js";
// import CardComponent from "../components/CardComponent.js";

// export function updateResultsSection(sites) {
//   const resultsContainer = document.getElementById("results-cards");
//   resultsContainer.innerHTML = ''; // Clear previous results

//   const cardComponents = sites.map(site => {
//     const { nom_site, sports, address, start_date } = site.fields;

//     // Check if the essential properties exist
//     if (!nom_site || !sports) {
//       console.warn('Skipping site due to missing properties:', site);
//       return null;
//     }

//     const cardProps = {
//       type: "spot",
//       label1: "Lieu",
//       label2: "Sport",
//       label3: "Capacité d'accueil",
//       title: nom_site,
//       buttonDetails: "Voir en détails",
//       buttonMap: "Voir sur la carte",
//     };

//     const cardElementStructure = DOM.createElement(CardComponent, cardProps, []);
//     const cardElement = generateStructure(cardElementStructure);
//     if (!(cardElement instanceof Node)) {
//       console.error('Failed to create a valid DOM node', cardElement);
//       return null;
//     }

//     return cardElement;
//   }).filter(card => card !== null); // Filter out any null values

//   cardComponents.forEach(card => {
//     resultsContainer.appendChild(card);
//   });
// }

// updateResultsSection.js
import CardComponent from "../components/CardComponent.js";
import { DOM } from "../core/generateStructure.js";

export function updateResultsSection(filteredSites) {
  const resultsContainer = document.getElementById("results-container");

  if (!resultsContainer) {
    console.error("Results container not found");
    return;
  }

  const cardComponents = filteredSites.map(site => 
    DOM.createElement(CardComponent, {
      site: site,
      type: "spot",
      image: site.fields.image || '', // Ensure image is defined
      SportLabel: site.fields.sports || '', // Ensure SportLabel is defined
      SiteNameLabel: site.fields.nom_site || '', // Ensure SiteNameLabel is defined
      StartDateLabel: site.fields.start_date || '', // Ensure StartDateLabel is defined
      EndDateLabel: site.fields.end_date || '', // Ensure EndDateLabel is defined
      SpotName: site.fields.nom_site || '', // Ensure SpotName is defined
      buttonDetails: "Voir en détails",
      buttonMap: "Voir sur la carte"
    })
  );

  const resultsStructure = {
    tag: "div",
    props: { id: "results-container" },
    children: cardComponents,
  };

  const generatedResults = DOM.generateStructure(resultsStructure);
  resultsContainer.innerHTML = "";
  resultsContainer.appendChild(generatedResults);
}
