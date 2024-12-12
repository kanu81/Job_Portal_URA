// This is to send mail for status of job

import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE, // e.g., 'gmail'
    auth: {
        user: process.env.EMAIL_USERNAME, // Your email address
        pass: process.env.EMAIL_PASSWORD, // App-specific password
    },
});

export const sendEmail = async (to, subject, text) => {
    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USERNAME,
            to,
            subject,
            text,
        });
        console.log("Email sent successfully to", to);
    } catch (error) {
        console.error("Error sending email:", error);
    }
};
