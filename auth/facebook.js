var passport = require("passport"),
  FacebookStrategy = require("passport-facebook").Strategy;

passport.use(
  new FacebookStrategy(
    {
      clientID: "159030901322260",
      clientSecret: "0d641e47f5d55af221ec80346f3f2d43",
      callbackURL: process.env.url + "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
     
    }
  )
);

module.exports = passport;
