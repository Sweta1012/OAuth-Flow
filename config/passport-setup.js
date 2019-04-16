const passport = require('passport');
const googleStrategy = require('pssport-google-oauth20');
const keys = require('./keys');

passport.use(
    new googleStrategy({
    // options for the google strategy
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, () => {
        // passport callback function
})
)