import HomeStruct from "./views/HomeStruct.js";
import AgendaStruct from "./views/AgendaStruct.js";
import EventsStruct from "./views/EventsStruct.js";
import MapStruct from "./views/MapStruct.js";
import SpotsStruct from "./views/SpotsStruct.js";
import InformationsStruct from "./views/InformationsStruct.js";
import Page404Struct from "./views/Page404Struct.js";

export const routes = [
    { path: "/", component: HomeStruct },
    { path: "/agenda", component: AgendaStruct },
    { path: "/evenements", component: EventsStruct },
    { path: "/carte", component: MapStruct },
    { path: "/spots", component: SpotsStruct },
    { path: "/informations", component: InformationsStruct },
    { path: "*", component: Page404Struct }
];
