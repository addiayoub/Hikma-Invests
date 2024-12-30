require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require('express-session');

const users = require("./routes/api/users");
const email = require("./routes/api/email");
const authentication = require("./routes/api/authentication");
const questionnaire = require("./routes/api/questionnaire");

// CORS middleware
app.use(cors({
    origin: ['https://my-floussi-front.onrender.com', 'http://localhost:5173', 'http://localhost:5174'],
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
}));

app.options('*', cors()); // Handle preflight requests

// Body parser middleware
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true }));

// DB Config
const db = require("./config/keys").mongoURI;
const welcomeMessages = [
    "Welcome to Hikma!",
    "Hello! Glad to see you at Hikma.",
    "Hi there! Welcome to Hikma.",
    "Greetings! Welcome to Hikma.",
    "Welcome! Enjoy your stay at Hikma."
];

// Connect to MongoDB
mongoose.connect(db)
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/auth", authentication);
app.use("/api", questionnaire);
app.use("/api/email", email);

app.use("/", (req, res) => {
    const randomMessages = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
    res.send(randomMessages);
});

app.use(session({ secret: 'SECRET_KEY', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port}`));
