
import { auth } from "express-oauth2-jwt-bearer";
import findOrCreateUserFromAuth0 from "../controllers/user.controller.js";

const auth0Authenticate = auth({
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}/`,
    algorithms: ["RS256"],
});

const attachUserFromAuth0 = async (req, res, next) => {
    try {
        const decodedToken = req.auth;

        if (!decodedToken || !decodedToken.sub) {
            return res.status(401).json({ message: "Invalid or missing Auth0 token" });
        }

        const auth0UserId = decodedToken.sub;

        // Adjusted payload fields to match Auth0's response structure
        const user = await findOrCreateUserFromAuth0({
            sub: auth0UserId,
            email: decodedToken.email || "",
            fullname: decodedToken.name || "",
            profilePhoto: decodedToken.picture || "",
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Error attaching user:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export default [auth0Authenticate, attachUserFromAuth0];
