const { urlencoded } = require("express");
const express = require("express");
const path = require("path");

const cookieParser = require('cookie-parser');
require("dotenv").config();
require("../src/db/conn");
const views_path = path.join(__dirname, "../views");
const static_path = path.join(__dirname, "../static");
const app = express();
const port = process.env.PORT || 80;
const i18n = require('i18n');
i18n.configure({
    locales: ['en', 'zh'],
    directory: path.join(__dirname, '../locales'),
    defaultLocale: 'zh',
    cookie: 'lang',
    autoReload: true,
    updateFiles: false
});

app.use("/static", express.static(static_path));
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: false }));
app.use(i18n.init);


app.set("view engine", "ejs");
app.set("views", views_path);
app.use((req, res, next) => {
    res.locals.t = (key) => res.__(key);
    next();
});
// Cookie consent middleware
app.use((req, res, next) => {
    res.locals.cookiesAccepted = req.cookies.cookies_accepted === 'true';
    next();
});

app.get("/", (req, res) => {
    res.status(200).render("index.ejs");
});

app.get("/signup", (req, res) => {
    res.status(200).render("signup.ejs");
});

// In Future this dashboard will be rendered after authentication of users 
app.get("/dashboard", (req, res) => {
    res.status(200).render("dashboard/dashboard.ejs");
});
// Privacy Policy page
app.get("/privacy", (req, res) => {
    res.render("privacy");
});




//* listen

if (require.main === module) {
    app.listen(port, () => {
        console.log(`The application started successfully on port ${port}`);
    });
}

module.exports = app;