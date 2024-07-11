import BrowserRouter from "./components/BrowserRouter.js";
import { routes } from "./routes.js";

window.routes = routes; // Make routes globally accessible
BrowserRouter(routes, document.getElementById("root"));
