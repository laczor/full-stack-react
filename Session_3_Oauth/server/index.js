const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;             //This is a seperate module which will help us with the googlOauth.
const keys = require('./config/keys');                                          //Secret keys

const app = express();

//This is the defined Strategy for handil google OAuth request
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'                  //This is where we will be redirected
    },
    (accessToken, refreshToken, profile, done) => {         //This is the function where we will recieve all of the information if the user granted permission
      console.log('access token', accessToken);
      console.log('refresh token', refreshToken);
      console.log('profile', profile);
    }
  )
);
// Our route to request authentication from google
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);
//This is our route to extract data when google gives userinformation, in the redirect url
app.get('/auth/google/callback', passport.authenticate('google'));

const PORT = process.env.PORT || 5000;
app.listen(PORT);
