const express = require("express");
const path = require("path");

const app = express();

// Middleware pour journaliser les requêtes entrantes
app.use((req, res, next) => {
    console.log(`Request URL: ${req.url}`);
    next();
});

// Sert les fichiers statiques du dossier src
app.use("/src", express.static(path.resolve(__dirname, "src"), {
    extensions: ['js', 'css', 'html']
}));

// Sert les fichiers statiques du dossier public
app.get("/*", (req, res) => {
    console.log(`Serving index.html for route: ${req.url}`);
    res.sendFile(path.resolve(__dirname, "src", "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running..., port: ${port}`));
