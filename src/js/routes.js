import HomeStruct from "./views/HomeStruct.js";
import SportsStruct from "./views/SportsStruct.js";
import EventsStruct from "./views/EventsStruct.js";
import MapStruct from "./views/MapStruct.js";
import SpotsStruct from "./views/SpotsStruct.js";
import InformationsStruct from "./views/InformationsStruct.js";
import Page404Struct from "./views/Page404Struct.js";
import { generateStructure } from "./core/generateStructure.js";

export const routes = [
    { path: "/", component: HomeStruct },
    { path: "/sports", component: SportsStruct },
    { path: "/evenements", component: EventsStruct },
    { path: "/carte", component: MapStruct },
    { path: "/spots", component: SpotsStruct },
    { path: "/spots/:id", component: InformationsStruct },
    { path: "*", component: Page404Struct }
];
