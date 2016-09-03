const express = require('express');
const session = require('express-session');
const sessionStore = require('connect-mongo');
const nunjucks = require('nunjucks');
const passport = require('passport');
const passportGoogle = require('passport-google-oauth');
const mongoose = require('mongoose');
const User = require('./models.js').User;

var app = express();
var MongoStore = sessionStore(session);

app.use(express.static('static'));
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'le buttwatch xD',
    cookie: {
        // One year
        maxAge: 1000 * 60 * 60 * 24 * 365
    },
    store: new MongoStore({ 
        mongooseConnection: mongoose.connection
    })
}));
app.use(passport.initialize());
app.use(passport.session());

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

passport.use(new passportGoogle.OAuth2Strategy({
    clientID: '262334814009-4dh8fdut9u1aar68ce2al6plf5fk6olt.apps.googleusercontent.com',
    clientSecret: 'mh8DIU6mhMYuyywNW4HJ7VAu',
    callbackURL: 'http://127.0.0.1:3000/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id }, (err, user) => {
        if (err) {
            return done(err);
        }
        if (user) {
            return done(err, user);
        } else {
            User.create({
                googleId: profile.id
            }, (err, user) => {
                if (err) { return done(err); }
                return done(null, user);
            });
        }
    });
}));
passport.serializeUser((user, done) => {
    done(null, user._id);
});
passport.deserializeUser((id, done) => {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

exports.app = app;
