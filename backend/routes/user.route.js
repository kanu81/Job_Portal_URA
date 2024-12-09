// import express from "express";
// import { login, logout, register, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

import express from "express";
import userController from "../controllers/user.controller.js";
import { singleUpload } from "../middlewares/mutler.js";

import passport from "../utils/passport.js";
import jwt from "jsonwebtoken";
import auth0Config from "../utils/auth0Provider.js";
import { User } from "../models/user.model.js";
const router = express.Router();

const { register, login, logout, updateProfile, findOrCreateUserFromAuth0,verifyEmail} = userController;

router.route("/register").post(singleUpload, register);
router.route("/login").post(login);
router.route("/logout").get(logout);

router.route("/profile/update").post(isAuthenticated, singleUpload, updateProfile);

router.get("/verify-email", verifyEmail);

router.get(
    "/auth0/login",
    passport.authenticate("auth0", {
        scope: "openid email profile",
        prompt: "login",
    })
);

router.get("/auth0/callback", (req, res, next) => {
    passport.authenticate("auth0", async (err, user, info) => {
        if (err) {
            console.error("Error during authentication:", err);
            return res.redirect("/login?error=auth");
        }

        if (!user) {
            console.error("No user found from Auth0");
            return res.redirect("/login?error=nouser");
        }

        try {
            console.log("User from Passport Auth:", user);

            // Handle user creation/updating in your database
            const dbUser = await findOrCreateUserFromAuth0({
                sub: user.id,
                email: user.emails?.[0]?.value || "",
                fullname: user.displayName || "",
                profilePhoto: user.picture || "",
            });

            console.log("User synced with database:", dbUser);

            // Generate a token (JWT) for the user
            const token = jwt.sign(
                { userId: dbUser._id },
                process.env.SECRET_KEY,
                { expiresIn: "48h" }
            );

            console.log("Generated JWT Token:", token);

            // Set the token in cookies
            // res.cookie("token", token, {
            //     httpOnly: true,
            //     secure: process.env.NODE_ENV === "production",
            //     sameSite: "strict",
            //     maxAge: 48 * 60 * 60 * 1000, // 48 hours
            // });
            res.cookie("token", token, {
                httpOnly: true,
                secure: false, // Change to false in development
                sameSite: "lax", // Try 'lax' for cross-origin requests
                maxAge: 48 * 60 * 60 * 1000 // 48 hours
            });
            

            // Redirect to the frontend
            return res.redirect("http://localhost:5173/auth/callback");
        } catch (error) {
            console.error("Auth0 callback error:", error.message);
            return res
                .status(500)
                .send({ message: "Internal server error during Auth0 login" });
        }
    })(req, res, next);
});

router.get("/auth0/logout", (req, res) => {
    req.logout((err) => {
        if (err) console.error("Logout error:", err.message);

        res.redirect(
            `https://${auth0Config.domain}/v2/logout?client_id=${auth0Config.clientId}&returnTo=http://localhost:5173`
        );
    });
});

router.route("/profile").get(async (req, res) => {
    try {
        const token = req.cookies.token;
        // const token= req.headers.authorization?.split(' ')[1];
        console.log("Token from cookies:", req.cookies.token);

        if (!token) {
            return res.status(401).json({ message: "User not authenticated" });
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findById(decoded.userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Ensure profilePhoto is either from Auth0 or fallback to ui-avatars if missing
        const profilePhoto = user.profile?.profilePhoto || user.auth0Id
            ? user.profile?.profilePhoto || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.fullname)}`
            : '';
        
        user.profile.profilePhoto = profilePhoto;  // Make sure the profile has the correct photo

        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching user profile:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
});

export default router;
