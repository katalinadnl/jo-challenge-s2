import {DOM} from "../core/generateStructure.js";

export class filterComponent extends DOM.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    updateEventData = (e) => {
        const {id, value} = e.target;
        this.props.onChangeEvent(id, value);
    }

    createDropdown = (id, placeholder, labels = [], selectedValue) => ({
        tag: "select",
        props: {id, class: "filter-dropdown"},
        events: {
            change: [(e) => this.updateEventData(e)]
        },
        children: [
            {
                tag: "option",
                props: {},
                children: [{tag: 'TEXT_NODE', content: placeholder}]
            },
            ...labels.map(label => {
                if (selectedValue === label) {
                    return ({
                        tag: "option",
                        props: {value: label, selected: ""},
                        children: [{tag: 'TEXT_NODE', content: label}]
                    })
                } else {
                    return ({
                        tag: "option",
                        props: {value: label},
                        children: [{tag: 'TEXT_NODE', content: label}]
                    })
                }

            })
        ]
    });

    render() {
        return {
            tag: "div",
            props: {class: "filter-component"},
            children: [
                ...this.props.fieldsToFilterOn.map(field => {
                    if (field.name === this.props.selectedValue.fieldToFilterOn) {
                        return this.createDropdown(field.name, field.placeholder, this.props.data.map(data => data[field.name]).sort(), this.props.selectedValue.value);
                    } else {
                        return this.createDropdown(field.name, field.placeholder, this.props.data.map(data => data[field.name]).sort());
                    }
                })
            ]
        };
    }
}