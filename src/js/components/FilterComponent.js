export default function createFilterComponent({ applyFilters }) {
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
          props: { class: "filter-button", id: "applyFilters", onclick: applyFilters },
          children: [{ tag: 'TEXT_NODE', content: "Appliquer",}],
        },
      ],
    };
  }
  