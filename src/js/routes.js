import HomeStruct from "./views/HomeStruct.js";
import AgendaStruct from "./views/AgendaStruct.js";
import EventsStruct from "./views/EventsStruct.js";
import MapStruct from "./views/MapStruct.js";
import SpotsStruct from "./views/SpotsStruct.js";
import Page404Struct from "./views/Page404Struct.js";

export default {
    "/": HomeStruct,
    "/agenda": AgendaStruct,
    "/events": EventsStruct,
    "/map": MapStruct,
    "/spots": SpotsStruct,
    "*": Page404Struct
};
