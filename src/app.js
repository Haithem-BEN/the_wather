const getWeatherData = require("../../Node-v3-first/app");

const express = require("express");
const path = require("path");
const hbs = require("hbs");

// Init The Server
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Define paths for Express config
const publicDirPath = path.join(__dirname, "../public");
const viewsDirPath = path.join(__dirname, "../templates/views");
const partialsDirPath = path.join(__dirname, "../templates/partials");

// Setup HBS
app.set("view engine", "hbs");
app.set("views", viewsDirPath);
hbs.registerPartials(partialsDirPath);

// Setup static pages directory
app.use(express.static(publicDirPath));

// Routes
// index
app.get("", (req, res) => {
    res.render("index", {
        title: "Weather",
        name: "Haitham",
    });
});
// about
app.get("/about", (req, res) => {
    res.render("about", {
        title: "About",
        name: "Haitham",
    });
});

// API
app.get("/api", (req, res) => {
    const location = req.query.q;
    if (!location) return res.send({ error: "error" });
    getWeatherData(location).then((data) => res.send(data));
});

// help
app.get("/help", (req, res) => {
    res.render("help", {
        title: "Help",
        name: "Haitham",
    });
});
// Sub-help
app.get("/help/data", (req, res) => {
    res.send("sub data is working");
});
app.get("/help/*", (req, res) => {
    res.render("404", {
        errorMsg: "sub-help path doen't exist exist",
    });
});

// 404 handler
app.get("*/ddd", (req, res) => {
    res.render("404", {
        errorMsg: "ddddddddddddddd",
    });
});

// 404 handler
app.get("*", (req, res) => {
    res.render("404", {
        errorMsg: "All athore routes   *   ",
    });
});

// Start The Server
app.listen(port);
