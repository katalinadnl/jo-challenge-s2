import getNavbarStructure from "../components/Navbar.js";
import { getFooterStructure } from "../components/Footer.js";
import CardComponent from "../components/CardComponent.js";
import { DOM } from "../core/generateStructure.js";
import { createHeroComponent } from "../components/HeroSection.js";
import { fetchSpotsData } from "../api/fetchSpotsData.js";
import { formatDate, isToday, isThisWeek } from "../functions/dateFunctions.js";
import spotsMapping from "../mappings/spotsMapping.js";


export default class InformationsStruct extends DOM.Component{

    constructor(props) {
        super(props);
        this.state = {
            spotData: null,
        };
    }

    componentDidMount() {
        const path = window.location.hash.slice(1);  
        const pathSegments = path.split('/');
        const id = parseInt(pathSegments[2], 10);

        const spotData = this.getSpotDataById(id);

        if (spotData) {
            this.setState({ spotData });
        }
    }

            //faire une const avec l'id
            // faire const validTitles = ["Para Equitation (PEQU)", "Surf (SRF)", "Canoë-kayak slalom (CSL)"];mais avec l'id


    getSpotDataById(id) {
        const spotsArray = Object.keys(spotsMapping);
        if (id > 0 && id <= spotsArray.length) {
            const key = spotsArray[id - 1];
            return spotsMapping[key];
        }
        return null;
    }
 
    render() {
                const { spotData } = this.state;
        return {
            tag: "div",
            props: { class: "information" },
            children: [
                DOM.createElement(getNavbarStructure, []),
                {
                    tag: "main",
                    props: { class: "body-content" },
                    children: [
                        {
                            tag: "section",
                            props: { class: "section1" },
                            children: [
                                {
                                    tag: "h1",
                                    children: [{
                                        tag: 'TEXT_NODE',
                                        content: "bonjour",//this.props.spot,
                                    }]
                                },
                            ]
                        },
                        {
                            tag: "section",
                            props: { class: "section2" },
                            children: [
                                {
                                    tag: "p",
                                    children: [{
                                        tag: 'TEXT_NODE',
                                        content: "bonjour", //this.props.spotDetails,

                                    }]
                                },
                            ]
                        }
                    ]
                },
                getFooterStructure()
            ]
        };
    }
}