const app = require('./app.js').app;
const passport = require('passport');

function loggedIn(req, res, next) {
    if (req.user) {
        next();
    } else {
        req.session.back = req.url;
        res.redirect('/login');
    }
}

app.get(['/', '/exercises', '/xd/xd'], loggedIn, (req, res) => {
    res.render('app.html');
});

app.get('/login', (req, res) => {
    res.render('login.html');
});

app.get('/auth/google', passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile']
}));

app.get(
    '/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        var back = req.session.back;
        req.session.back = null;
        res.redirect(back || '/');
    }
);
