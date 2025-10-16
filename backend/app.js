require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const cors = require("cors");
const userdb = require("./models/userSchema");
require("./db/conn");
const frontend = process.env.FRONTEND;
const secretnumber = process.env.SECRET;

const app = express();
const PORT = 8000;
app.use(express.json());
app.use(cors({ origin: frontend, credentials: true }));
app.use(session({
  secret: secretnumber,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

const clientid = process.env.GOOGLE_CLIENT_ID;
const clientsecret = process.env.GOOGLE_CLIENT_SECRET;

passport.use(
  new OAuth2Strategy(
    {
      clientID: clientid,
      clientSecret: clientsecret,
      callbackURL: "http://localhost:8000/auth/google/callback",
      scope: ["profile", "email"]
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log("profile", profile)
      try {
        let user = await userdb.findOne({ googleId: profile.id });
        if (!user) {
          user = new userdb({
            googleId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
            image: profile.photos[0].value
          });
          await user.save();
        }
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));
app.get("/auth/google/callback", passport.authenticate("google", {
  successRedirect: `${frontend}/dashboard`,
  failureRedirect: `${frontend}/login`
}));

app.get('/', (req, res) => res.status(200).json("Server started"));

app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));
