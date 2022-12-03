const GithubStrategy = require("passport-github2").Strategy;
const passport = require("passport");


GITHUB_CLIENT_ID="fd25bd0180281973e0bd"
GITHUB_CLIENT_SECRET="93bb990fa3832e7349f27796a063742dedb57409"


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