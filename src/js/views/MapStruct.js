import getNavbarStructure from "../components/Navbar.js";
import { getFooterStructure } from "../components/Footer.js";
import { createHeroComponent } from "../components/HeroSection.js";
import CardComponent from "../components/CardComponent.js";
import { DOM } from "../core/generateStructure.js";
import { fetchSports } from "../api/fetchSportsData.js";
import { fetchSpotsData } from "../api/fetchSpotsData.js";
import { fetchEvents } from "../api/fetchEventsData.js";
import imageMapping from "../mappings/sportsImagesMapping.js";
import spotsMapping from "../mappings/spotsMapping.js";
import { formatDate } from "../functions/dateFunctions.js";
import { createGMap, addMarkers } from "../functions/map.js";

const eventsHeroContent = {
  headingText: "Découverte interactive des sites",
  paragraphText:
    " Découvrez Paris 2024 en détail! Plongez dans l'aventure des jeux à travers notre carte interactive.",
};

let map;
export default class MapStruct extends DOM.Component {
  constructor(props) {
    super(props);
    this.state = {
      sitesData: [],
      markers: [],
      allCardComponents: [],
      allSpotComponents: [],
      allEventComponents: [],
    };
  }

  async componentDidMount() {
    const mapElement = document.getElementById("map");
    if (!mapElement) {
      console.error("No map element found");
      return;
    }

    try {
      const eventsData = await fetchSports();
      const spotsData = await fetchSpotsData();
      const { records: newEventsData } = await fetchEvents(0, 100);

      console.log("Fetched events data:", eventsData);
      console.log("Fetched spots data:", spotsData);
      console.log("Fetched new events data:", newEventsData);

      const allEventsData = eventsData.map((event) => ({
        codeSite: event.fields.code_site,
        type: "sport",
        title: event.fields.sports,
        date: formatDate(event.fields.start_date),
        site: event.fields.nom_site,
        image: imageMapping[event.fields.sports] || imageMapping.default,
      }));

      const allCardComponents = allEventsData.map((event) =>
        DOM.createElement(CardComponent, event, [])
      );

      const allSpotComponents = spotsData.map((event) => {
        const mappingKey = event.fields.sports;
        const spotData = spotsMapping[mappingKey] || spotsMapping.default;

        const cardProps = {
          type: "spot",
          SpotName: spotData.spot,
          SiteNameLabel: event.fields.nom_site,
          SportLabel: event.fields.sports,
          StartDateLabel: formatDate(event.fields.start_date),
          EndDateLabel: formatDate(event.fields.end_date),
          image: spotsMapping[event.fields.sports] || spotsMapping.default,
          spotLinkDetails: `/spots/${spotData.id}`,
          spotTextLinkDetails: "Voir en détails",
        };

        return DOM.createElement(CardComponent, cardProps, []);
      });

      const allEventComponents = newEventsData.map((event) => {
        const cardProps = {
          type: "event",
          title: event.title,
          date: formatDate(event.starting_date),
          description: event.description,
          tarif: event.tarif || "Pas de tarif indiqué",
          address: event.address,
          linkJO: event.external_link || "https://olympics.com/fr/paris-2024",
          textLinkJO: "En savoir plus",
          location: event.location,
        };

        return DOM.createElement(CardComponent, cardProps, []);
      });

      this.setState({
        sitesData: eventsData,
        allCardComponents,
        allSpotComponents,
        allEventComponents,
      });

      map = await createGMap(
        eventsData.concat(spotsData).concat(newEventsData)
      );
      if (map) {
        const markers1 = addMarkers(eventsData, google.maps.Marker, map);
        const markers2 = addMarkers(spotsData, google.maps.Marker, map);
        const markers3 = addMarkers(newEventsData, google.maps.Marker, map);
        console.log(
          "Markers added:",
          markers1.length + markers2.length + markers3.length
        );

        this.setState({ markers: [...markers1, ...markers2, ...markers3] });
      }
    } catch (error) {
      console.error("Error during initialization:", error);
    }
  }

  render() {
    const { allCardComponents, allSpotComponents, allEventComponents } =
      this.state;

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
                    {
                      tag: "TEXT_NODE",
                      content: "DÉCOUVREZ LES MEILLEURS SITES OLYMPIQUES",
                    },
                  ],
                },
                {
                  tag: "p",
                  children: [
                    {
                      tag: "TEXT_NODE",
                      content:
                        "Explorez les sites emblématiques des Jeux Olympiques de Paris 2024. ",
                    },
                    { tag: "br" },
                    {
                      tag: "TEXT_NODE",
                      content:
                        "Utilisez notre carte interactive pour localiser les événements sportifs, découvrir les lieux historiques, et vivre l'excitation des Jeux Olympiques de près. ",
                    },
                    { tag: "br" },
                  ],
                },
                {
                  tag: "div",
                  props: {
                    class: "map-item",
                    id: "map",
                  },
                },
                {
                  tag: "h3",
                  children: [{ tag: "TEXT_NODE", content: "Résultats-Sports" }],
                },
                {
                  tag: "div",
                  props: { id: "results-container" },
                  children: allCardComponents,
                },
                {
                  tag: "h3",
                  children: [{ tag: "TEXT_NODE", content: "Résultats-Spots" }],
                },
                {
                  tag: "div",
                  props: { id: "spots-container" },
                  children: allSpotComponents,
                },
                {
                  tag: "h3",
                  children: [
                    { tag: "TEXT_NODE", content: "Résultats-Événements" },
                  ],
                },
                {
                  tag: "div",
                  props: { id: "events-container" },
                  children: allEventComponents,
                },
              ],
            },
          ],
        },
        getFooterStructure(),
      ],
    };
    console.log("Generated structure:", structure);
    return structure;
  }
}
