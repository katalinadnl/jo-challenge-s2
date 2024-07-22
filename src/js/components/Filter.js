import { DOM } from "../core/generateStructure.js";
import { fetchEventsData } from "../api/fetchData.js";
import { getFilterValues, filterSites } from "../functions/filterFunctions.js";
import { updateResultsSection } from "../functions/updateResultsSection.js";
import { populateDropdowns } from "../functions/populateDropdowns.js";

export class filterComponent extends DOM.Component {
    constructor(props) {
        super(props);
        this.state = {
            siteNames: [],
            sportLabels: [],
            startDateLabels: [],
            endDateLabels: [],
            eventsData: []
        };
    }

    async componentDidMount() {
        try {
            const eventsData = await fetchEventsData();
            this.setState({ eventsData });

            const siteNames = [...new Set(eventsData.map(event => event.fields.site_name))];
            const sportLabels = [...new Set(eventsData.map(event => event.fields.sports))];
            const startDateLabels = [...new Set(eventsData.map(event => event.fields.start_date))];
            const endDateLabels = [...new Set(eventsData.map(event => event.fields.end_date))];

            this.setState({ siteNames, sportLabels, startDateLabels, endDateLabels });

            // Ensure DOM elements for dropdowns are rendered before populating
            setTimeout(() => {
                populateDropdowns(eventsData);
                this.attachEventListeners();
            }, 0);

            updateResultsSection(eventsData);
        } catch (error) {
            console.error("Error in componentDidMount:", error);
        }
    }

    createDropdown = (id, placeholder, labels = []) => ({
        tag: "select",
        props: { id, class: "dropdown" },
        children: [
            { tag: "option", props: { value: "" }, children: [{ tag: 'TEXT_NODE', content: placeholder }] },
            ...labels.map(label => ({
                tag: "option",
                props: { value: label },
                children: [{ tag: 'TEXT_NODE', content: label }]
            }))
        ]
    });

    handleApplyFilters = () => {
        const filters = getFilterValues();
        const filteredSites = filterSites(this.state.eventsData, filters);
        console.log('Filtered Sites:', filteredSites);
        updateResultsSection(filteredSites);
    }

    attachEventListeners = () => {
        const applyButton = document.getElementById("applyFilters");
        if (applyButton) {
            applyButton.addEventListener("click", this.handleApplyFilters);
        }
    }

    render() {
        const { siteNames, sportLabels, startDateLabels, endDateLabels } = this.state;

        return {
            tag: "div",
            props: { class: "filter-component" },
            children: [
                this.createDropdown("site-name", "Select Site", siteNames),
                this.createDropdown("sport", "Select Sport", sportLabels),
                this.createDropdown("start-date", "Select Start Date", startDateLabels.map(date => new Date(date).toISOString().split("T")[0])),
                this.createDropdown("end-date", "Select End Date", endDateLabels.map(date => new Date(date).toISOString().split("T")[0])),
                {
                    tag: "button",
                    props: {
                        id: "applyFilters",
                        class: "filter-button"
                    },
                    children: [{ tag: 'TEXT_NODE', content: "Appliquer" }]
                }
            ]
        };
    }
}