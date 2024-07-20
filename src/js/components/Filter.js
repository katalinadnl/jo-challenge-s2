import { getCtaButtonStructure } from "../components/CtaButton.js";
import { DOM } from "../core/generateStructure.js";

export class getFilterStructure extends DOM.Component {
    constructor(props) {
        super(props);
        this.state = {
            sportLabels: [],
            startDateLabels: [], 
            endDateLabels: [],
            siteNames: [],
        };
    }

    


        render()  {
            const { siteNames, sportLabels, startDateLabels, endDateLabels } = this.props;
    
  
  return{
        tag: "div",
        props: { class: "filter-component" },
        children: [
            {
                tag: "div",
                props: { class: "filter", id: "spot-name" },
                children: [
                
                    {
                        tag: "ul",
                        props: { class: "filter-list" },
                        children: siteNames
                    }
                ]
            },
            {
                tag: "div",
                props: { class: "filter", id: "start-date" },
                children: [
                
                    {
                        tag: "ul",
                        props: { class: "filter-list" },
                        children:  startDateLabels
                    }
                ]
            },
            {
                tag: "div",
                props: { class: "filter", id: "end-date" },
                children: [
                
                    {
                        tag: "ul",
                        props: { class: "filter-list" },
                        children: endDateLabels
                    }
                ]
            },
            {
                tag: "div",
                props: { class: "filter", id: "sport" },
                children: [
                
                    {
                        tag: "ul",
                        props: { class: "filter-list" },
                        children:  
                        {tag: "li",
                            props: { class: "filter-value" },
                            children: [
                                {
                                    tag: "label",
                                    props: { class: "filter-label" },
                                    children: [
                                        {
                                            tag: "input",
                                            props: { class: "checkbox", type: "checkbox", value: sport },
                                            children: []
                                        },
                                        sport
                                    ]
                                }
                            ]}
                    }
                ]
            },
            {
                tag: "div",
                props: { class: "cta-container" },
                children: [
                    {
                        tag: "button",
                        props: { class: "cta-white cta-search" },
                        children: ["rechercher"]
                    }
                ]
            },

           

        ]
    };
} }
        
  
                   
