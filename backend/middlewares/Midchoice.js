
import auth0Authenticate from './auth0Autenticate.js';
import customAuthenticate from './isAuthenticated.js';

const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({ message: "Authorization header missing" });
        }

        const token = authHeader.split(" ")[1];

        // Check if the token is from Auth0
        if (token && token.includes(process.env.AUTH0_DOMAIN)) {
            return auth0Authenticate[0](req, res, async () => {
                return auth0Authenticate[1](req, res, next); // Call both middleware steps for Auth0
            });
        }

        // Otherwise, use custom JWT validation
        return customAuthenticate(req, res, next);
    } catch (error) {
        console.error("Middleware error:", error.message);
        return res.status(500).json({ message: "Authentication error", details: error.message });
    }
};

export default authMiddleware;
