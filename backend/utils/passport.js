
import passport from 'passport';
import { Strategy as Auth0Strategy } from 'passport-auth0';
import auth0Config from './auth0Provider.js';

if (!auth0Config.domain || !auth0Config.clientId || !auth0Config.clientSecret) {
    throw new Error(
        'Auth0 configuration is invalid. Please ensure the following environment variables are set correctly: ' +
        `AUTH0_DOMAIN, AUTH0_CLIENT_ID, and AUTH0_CLIENT_SECRET`
    );
}

passport.use(
    new Auth0Strategy(
        {
            domain: auth0Config.domain,
            clientID: auth0Config.clientId,
            clientSecret: auth0Config.clientSecret,
            callbackURL: process.env.AUTH0_CALLBACK_URL || "http://localhost:8000/api/v1/user/auth0/callback",
            scope: "openid email profile",
        },
        async (accessToken, refreshToken, extraParams, profile, done) => {
            try {
                console.log("Auth0 Profile:", profile);
                done(null, profile); // Ensure correct data is passed here
            } catch (err) {
                console.error("Error in Auth0 strategy:", err.message);
                done(err, null);
            }
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

export default passport;
