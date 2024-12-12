// // import express from "express";
// // import cookieParser from "cookie-parser";
// // import cors from "cors";
// // import dotenv from "dotenv";
// // import connectDB from "./utils/db.js";
// // import userRoute from "./routes/user.route.js";
// // import companyRoute from "./routes/company.route.js";
// // import jobRoute from "./routes/job.route.js";
// // import applicationRoute from "./routes/application.route.js";

// // dotenv.config({});

// // const app = express();

// // // middleware
// // app.use(express.json());
// // app.use(express.urlencoded({extended:true}));
// // app.use(cookieParser());
// // const corsOptions = {
// //     origin:'http://localhost:5173',
// //     credentials:true
// // }

// // app.use(cors(corsOptions));

// // const PORT = process.env.PORT || 3000;


// // // api's
// // app.use("/api/v1/user", userRoute);
// // app.use("/api/v1/company", companyRoute);
// // app.use("/api/v1/job", jobRoute);
// // app.use("/api/v1/application", applicationRoute);



// // app.listen(PORT,()=>{
// //     connectDB();
// //     console.log(`Server running at port ${PORT}`);
// // })

// import express from "express";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./utils/db.js";
// import userRoute from "./routes/user.route.js";
// import companyRoute from "./routes/company.route.js";
// import jobRoute from "./routes/job.route.js";
// import applicationRoute from "./routes/application.route.js";
// import passport from './utils/passport.js';
// import session from 'express-session';

// dotenv.config({});

// const app = express();

// // middleware
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.use(cookieParser());
// const corsOptions = {
//     origin:'http://localhost:5173',
//     credentials:true
// }

// app.use(cors(corsOptions));
// app.use(
//     session({
//         secret: process.env.SESSION_SECRET_KEY, // Corrected variable name
//         resave: false,
//         saveUninitialized: true,
//         cookie: {
//             httpOnly: true,
//             secure: process.env.NODE_ENV === 'production', // Only set 'secure' in production
//             maxAge: 24 * 60 * 60 * 1000 // Set session expiration (1 day)
//         }
//     })
// );
// // Initialize passport
// app.use(passport.initialize());
// app.use(passport.session());

// const PORT = process.env.PORT || 3000;


// // api's
// app.use("/api/v1/user", userRoute);
// app.use("/api/v1/company", companyRoute);
// app.use("/api/v1/job", jobRoute);
// app.use("/api/v1/application", applicationRoute);



// app.listen(PORT,()=>{
//     connectDB();
//     console.log(`Server running at port ${PORT}`);
// })

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import passport from './utils/passport.js';
import session from 'express-session';
// import chatbotRoute from "./routes/chatbot.route.js";
dotenv.config({});

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(cors({
    origin: 'http://localhost:5173', // Allow only your frontend's domain
    credentials: true, // Allow cookies
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
}));

// Session configuration (if you're using sessions instead of JWT)
app.use(
    session({
        secret: process.env.SESSION_SECRET_KEY, // Make sure you have this set in .env
        resave: false,
        saveUninitialized: true,
        cookie: {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Only set 'secure' in production
            maxAge: 24 * 60 * 60 * 1000 // Session expires in 1 day
        }
    })
);

// Initialize Passport for authentication
app.use(passport.initialize());
app.use(passport.session());

// Route API setup
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);
// app.use("/api/v1/chatbot", chatbotRoute);
// Global error handler (for unhandled errors)
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(500).send({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    connectDB(); // Make sure your database is connected
    console.log(`Server running at port ${PORT}`);
});
