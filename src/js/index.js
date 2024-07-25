import BrowserRouter from "./routes/BrowserRouter.js";
import { routes } from "./routes/routes.js";

window.routes = routes;
BrowserRouter(routes, document.getElementById("root"));
