const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "863898235383-mbltb9bjflal2bb89il0fuarntrf5o51.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

GITHUB_CLIENT_ID="fd25bd0180281973e0bd"
GITHUB_CLIENT_SECRET="93bb990fa3832e7349f27796a063742dedb57409"

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);


passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});