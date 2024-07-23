export function createResultsSection() {
    return {
      tag: "section",
      props: { class: "results-section" },
      children: [
        {
          tag: "h2",
          children: [{ tag: 'TEXT_NODE', content: "Résultats" }],
        },
        {
          tag: "div",
          props: { class: "results-cards", id: "results-cards" },
          children: [], // Initial empty results
        },
      ],
    };
  }
  