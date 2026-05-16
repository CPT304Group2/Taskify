const { urlencoded } = require("express");
const express = require("express");
const path = require("path");
const cookieParser = require('cookie-parser');
require("dotenv").config();
require("../src/db/conn");
const translations = require("./translations/translations");
const views_path = path.join(__dirname, "../views");
const static_path = path.join(__dirname, "../static");
const app = express();
const port = process.env.PORT || 80;


app.use("/static", express.static(static_path));
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: false }));


app.set("view engine", "ejs");
app.set("views", views_path);
// Cookie consent middleware
app.use((req, res, next) => {
    res.locals.cookiesAccepted = req.cookies.cookies_accepted === 'true';
    next();
});

// Language middleware
app.use((req, res, next) => {
    const lang = req.cookies.language || 'en';
    res.locals.lang = lang;
    res.locals.t = translations[lang];
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

// Language switch endpoint
app.post("/switch-language", (req, res) => {
    const { language } = req.body;
    if (language === 'en' || language === 'zh') {
        res.cookie('language', language, { maxAge: 365 * 24 * 60 * 60 * 1000 }); // 1 year
        res.json({ success: true });
    } else {
        res.status(400).json({ success: false, message: 'Invalid language' });
    }
});



//* listen

if (require.main === module) {
    app.listen(port, () => {
        console.log(`The application started successfully on port ${port}`);
    });
}

module.exports = app;