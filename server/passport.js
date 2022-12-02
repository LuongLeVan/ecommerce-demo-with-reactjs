const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "863898235383-1k2losp2hffj7sm6dkv3fgj8nqj1lf4b.apps.googleusercontent.com";
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