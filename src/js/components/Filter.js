import {DOM} from "../core/generateStructure.js";
//import { getFilterValues, filterSites } from "../functions/filterFunctions.js";
//import { updateResultsSection } from "../functions/updateResultsSection.js";
//import { populateDropdowns } from "../functions/populateDropdowns.js";

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

     componentDidMount() {
        fetch(
            "https://data.paris2024.org/api/records/1.0/search/?dataset=paris-2024-sites-de-competition&rows=100"
        )
            .then((response) => response.json())
            .then((data) => {
                this.setState({ eventsData: data.records })
                this.setState({ siteNames: data.records.map(event => event.fields.nom_site) });
                this.setState({ sportLabels: data.records.map(event => event.fields.sports) });
                this.setState({ startDateLabels: data.records.map(event => event.fields.start_date) });
                this.setState({ endDateLabels: data.records.map(event => event.fields.end_date) });
            });
        ;
    }

    updateEventData = (e, type) => {
        e.preventDefault()
        const {id, value} = e.target;
        this.props.onChangeEvent({
            id: id,
            value: value,
            type: type
        });
    }

    createDropdown = (id, placeholder, labels = []) => ({
        tag: "select",
        props: {id, class: "dropdown"},
        events: {
            change: [(e) => this.updateEventData(e, id)]
        },
        children: [
            {
                tag: "option",
                props: {value: ""},
                children: [{tag: 'TEXT_NODE', content: placeholder}]
            },
            ...labels.map(label => ({
                tag: "option",
                props: {value: label},
                children: [{tag: 'TEXT_NODE', content: label}]
            }))
        ]
    });


    render() {
        const {siteNames, sportLabels, startDateLabels, endDateLabels, eventsData} = this.state;

        return {
            tag: "div",
            props: {class: "filter-component"},
            children: [
                this.createDropdown("site-name", "Select Site", siteNames),
                this.createDropdown("sport", "Select Sport", sportLabels),
                this.createDropdown("start-date", "Select Start Date", startDateLabels.map(date => new Date(date).toISOString().split("T")[0])),
                this.createDropdown("end-date", "Select End Date", endDateLabels.map(date => new Date(date).toISOString().split("T")[0])),
            ]
        };
    }
}