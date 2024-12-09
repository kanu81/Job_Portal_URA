// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     fullname: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     phoneNumber: {
//         type: Number,
//         required: true
//     },
//     password:{
//         type:String,
//         required:true,
//     },
//     role:{
//         type:String,
//         enum:['student','recruiter'],
//         required:true
//     },
//     profile:{
//         bio:{type:String},
//         skills:[{type:String}],
//         resume:{type:String}, // URL to resume file
//         resumeOriginalName:{type:String},
//         company:{type:mongoose.Schema.Types.ObjectId, ref:'Company'}, 
//         profilePhoto:{
//             type:String,
//             default:""
//         }
//     },
// },{timestamps:true});
// export const User = mongoose.model('User', userSchema);

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: String, // Changed to String to allow non-numeric formats
        required: false, // Made optional for Auth0 users
    },
    password: {
        type: String,
        required: function () {
            // Password is required only if the user is not from Auth0
            return !this.auth0Id;
        },
    },
    auth0Id: {
        type: String, // Auth0 unique identifier
        required: false,
    },
    role: {
        type: String,
        enum: ['student', 'recruiter'],
        required: true,
        default: 'student', // Default role is 'student'
    },
    isVerified: { type: Boolean, default: false },
    profile: {
        bio: { type: String },
        skills: [{ type: String }],
        resume: { type: String }, // URL to resume file
        resumeOriginalName: { type: String },
        company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
        profilePhoto: {
            type: String,
            default: "",
        },
    },
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);
