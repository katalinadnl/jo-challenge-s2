import BrowserRouter from "./components/BrowserRouter.js";
import { routes } from "./routes.js";

window.routes = routes;
BrowserRouter(routes, document.getElementById("root"));
