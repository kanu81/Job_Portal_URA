// import { User } from "../models/user.model.js";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import getDataUri from "../utils/datauri.js";
// import cloudinary from "../utils/cloudinary.js";

// export const register = async (req, res) => {
//     try {
//         const { fullname, email, phoneNumber, password, role } = req.body; 
         
//         if (!fullname || !email || !phoneNumber || !password || !role) {
//             return res.status(400).json({
//                 message: "Something is missing",
//                 success: false
//             });
//         };
//         const file = req.file;
//         const fileUri = getDataUri(file);
//         const cloudResponse = await cloudinary.uploader.upload(fileUri.content);

//         const user = await User.findOne({ email });
//         if (user) {
//             return res.status(400).json({
//                 message: 'User already exist with this email.',
//                 success: false,
//             })
//         }
//         const hashedPassword = await bcrypt.hash(password, 10);

//         await User.create({
//             fullname,
//             email,
//             phoneNumber,
//             password: hashedPassword,
//             role,
//             profile:{
//                 profilePhoto:cloudResponse.secure_url,
//             }
//         });

//         return res.status(201).json({
//             message: "Account created successfully.",
//             success: true
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }
// export const login = async (req, res) => {
//     try {
//         const { email, password, role } = req.body;
        
//         if (!email || !password || !role) {
//             return res.status(400).json({
//                 message: "Something is missing",
//                 success: false
//             });
//         };
//         let user = await User.findOne({ email });
//         if (!user) {
//             return res.status(400).json({
//                 message: "Incorrect email or password.",
//                 success: false,
//             })
//         }
//         const isPasswordMatch = await bcrypt.compare(password, user.password);
//         if (!isPasswordMatch) {
//             return res.status(400).json({
//                 message: "Incorrect email or password.",
//                 success: false,
//             })
//         };
//         // check role is correct or not
//         if (role !== user.role) {
//             return res.status(400).json({
//                 message: "Account doesn't exist with current role.",
//                 success: false
//             })
//         };

//         const tokenData = {
//             userId: user._id
//         }
//         const token = await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });

//         user = {
//             _id: user._id,
//             fullname: user.fullname,
//             email: user.email,
//             phoneNumber: user.phoneNumber,
//             role: user.role,
//             profile: user.profile
//         }

//         return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpsOnly: true, sameSite: 'strict' }).json({
//             message: `Welcome back ${user.fullname}`,
//             user,
//             success: true
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }
// export const logout = async (req, res) => {
//     try {
//         return res.status(200).cookie("token", "", { maxAge: 0 }).json({
//             message: "Logged out successfully.",
//             success: true
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }
// export const updateProfile = async (req, res) => {
//     try {
//         const { fullname, email, phoneNumber, bio, skills } = req.body;
        
//         const file = req.file;
//         // cloudinary ayega idhar
//         const fileUri = getDataUri(file);
//         const cloudResponse = await cloudinary.uploader.upload(fileUri.content);



//         let skillsArray;
//         if(skills){
//             skillsArray = skills.split(",");
//         }
//         const userId = req.id; // middleware authentication
//         let user = await User.findById(userId);

//         if (!user) {
//             return res.status(400).json({
//                 message: "User not found.",
//                 success: false
//             })
//         }
//         // updating data
//         if(fullname) user.fullname = fullname
//         if(email) user.email = email
//         if(phoneNumber)  user.phoneNumber = phoneNumber
//         if(bio) user.profile.bio = bio
//         if(skills) user.profile.skills = skillsArray
      
//         // resume comes later here...
//         if(cloudResponse){
//             user.profile.resume = cloudResponse.secure_url // save the cloudinary url
//             user.profile.resumeOriginalName = file.originalname // Save the original file name
//         }


//         await user.save();

//         user = {
//             _id: user._id,
//             fullname: user.fullname,
//             email: user.email,
//             phoneNumber: user.phoneNumber,
//             role: user.role,
//             profile: user.profile
//         }

//         return res.status(200).json({
//             message:"Profile updated successfully.",
//             user,
//             success:true
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }


import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";
import nodemailer from "nodemailer";
// const transporter = nodemailer.createTransport({
//     service: process.env.EMAIL_SERVICE,
//     auth: {
//         user: process.env.EMAIL_USERNAME,
//         pass: process.env.EMAIL_PASSWORD,
//     },
// });
// const register = async (req, res) => {
//     try {
//         const { fullname, email, phoneNumber, password, role } = req.body;

//         if (!fullname || !email || !phoneNumber || !password || !role) {
//             return res.status(400).json({
//                 message: "Something is missing",
//                 success: false,
//             });
//         }
//         const file = req.file;
//         const fileUri = getDataUri(file);
//         const cloudResponse = await cloudinary.uploader.upload(fileUri.content);

//         const user = await User.findOne({ email });
//         if (user) {
//             return res.status(400).json({
//                 message: "User already exists with this email.",
//                 success: false,
//             });
//         }
//         const hashedPassword = await bcrypt.hash(password, 10);

//         await User.create({
//             fullname,
//             email,
//             phoneNumber,
//             password: hashedPassword,
//             role,
//             profile: {
//                 profilePhoto: cloudResponse.secure_url,
//             },
//         });

//         return res.status(201).json({
//             message: "Account created successfully.",
//             success: true,
//         });
//     } catch (error) {
//         console.error(error);
//     res.status(500).json({ message: "Internal server error", success: false });
//     }
// };


const register = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, password, role } = req.body;

        if (!fullname || !email || !phoneNumber || !password || !role) {
            return res.status(400).json({
                message: "Something is missing",
                success: false,
            });
        }
        const file = req.file;
        const fileUri = getDataUri(file);
        const cloudResponse = await cloudinary.uploader.upload(fileUri.content);

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists with this email.",
                success: false,
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            fullname,
            email,
            phoneNumber,
            password: hashedPassword,
            role,
            isVerified: false, // Add a flag to track email verification
            profile: {
                profilePhoto: cloudResponse.secure_url,
            },
        });

        // Generate an email verification token
        const verificationToken = jwt.sign({ userId: user._id }, process.env.EMAIL_VERIFICATION_SECRET, {
            expiresIn: "1d",
        });

        // Send the verification email
        const transporter = nodemailer.createTransport({
            service: process.env.EMAIL_SERVICE,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const verificationUrl = `${process.env.EMAIL_VERIFICATION_URL}?token=${verificationToken}`;
        const mailOptions = {
            from: process.env.EMAIL_USERNAME,
            to: email,
            subject: "Email Verification",
            text: `Please verify your email by clicking the link: ${verificationUrl}`,
            html: `<p>Please verify your email by clicking the link below:</p><a href="${verificationUrl}">${verificationUrl}</a>`,
        };

        await transporter.sendMail(mailOptions);

        return res.status(201).json({
            message: "Account created successfully. Please check your email to verify your account.",
            success: true,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error", success: false });
    }
};
// const login = async (req, res) => {
//     try {
//         const { email, password, role } = req.body;

//         if (!email || !password || !role) {
//             return res.status(400).json({
//                 message: "Something is missing",
//                 success: false,
//             });
//         }
//         let user = await User.findOne({ email });
//         if (!user) {
//             return res.status(400).json({
//                 message: "Incorrect email or password.",
//                 success: false,
//             });
//         }
//         const isPasswordMatch = await bcrypt.compare(password, user.password);
//         if (!isPasswordMatch) {
//             return res.status(400).json({
//                 message: "Incorrect email or password.",
//                 success: false,
//             });
//         }
//         if (role !== user.role) {
//             return res.status(400).json({
//                 message: "Account doesn't exist with current role.",
//                 success: false,
//             });
//         }

//         const tokenData = {
//             userId: user._id,
//         };
//         const token = jwt.sign(tokenData, process.env.SECRET_KEY, {
//             expiresIn: "1d",
//         });
//         console.log(token);
//         user = {
//             _id: user._id,
//             fullname: user.fullname,
//             email: user.email,
//             phoneNumber: user.phoneNumber,
//             role: user.role,
//             profile: user.profile,
//         };

//         return res
//             .status(200)
//             .cookie("token", token, {
//                 maxAge: 24 * 60 * 60 * 1000,
//                 httpOnly: true,
//                 sameSite: "strict",
//             })
//             .json({
//                 message: `Welcome back ${user.fullname}`,
//                 user,
//                 success: true,
//             });
//     } catch (error) {
//         console.error(error);
//     res.status(500).json({ message: "Internal server error", success: false });
//     }
// };
const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        if (!email || !password || !role) {
            return res.status(400).json({
                message: "Something is missing",
                success: false,
            });
        }
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "Incorrect email or password.",
                success: false,
            });
        }

        // Check if the user's email is verified
        if (!user.isVerified) {
            return res.status(400).json({
                message: "Please verify your email before logging in.",
                success: false,
            });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "Incorrect email or password.",
                success: false,
            });
        }
        if (role !== user.role) {
            return res.status(400).json({
                message: "Account doesn't exist with current role.",
                success: false,
            });
        }

        const tokenData = {
            userId: user._id,
        };
        const token = jwt.sign(tokenData, process.env.SECRET_KEY, {
            expiresIn: "1d",
        });

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile,
        };

        return res
            .status(200)
            .cookie("token", token, {
                maxAge: 24 * 60 * 60 * 1000,
                httpOnly: true,
                sameSite: "strict",
            })
            .json({
                message: `Welcome back ${user.fullname}`,
                user,
                success: true,
            });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error", success: false });
    }
};
const verifyEmail = async (req, res) => {
    try {
        const { token } = req.query;

        if (!token) {
            return res.status(400).json({ message: "Invalid verification token", success: false });
        }

        const decoded = jwt.verify(token, process.env.EMAIL_VERIFICATION_SECRET);

        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(400).json({ message: "User not found", success: false });
        }

        if (user.isVerified) {
            return res.status(400).json({ message: "User already verified", success: false });
        }

        user.isVerified = true;
        await user.save();

        return res.redirect("http://localhost:5173/login");
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error", success: false });
    }
};

const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "Logged out successfully.",
            success: true,
        });
    } catch (error) {
        console.log(error);
    }
};

const updateProfile = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, bio, skills } = req.body;

        const file = req.file;
        const fileUri = getDataUri(file);
        const cloudResponse = await cloudinary.uploader.upload(fileUri.content);

        let skillsArray;
        if (skills) {
            skillsArray = skills.split(",");
        }
        const userId = req.id;
        let user = await User.findById(userId);

        if (!user) {
            return res.status(400).json({
                message: "User not found.",
                success: false,
            });
        }
        if (fullname) user.fullname = fullname;
        if (email) user.email = email;
        if (phoneNumber) user.phoneNumber = phoneNumber;
        if (bio) user.profile.bio = bio;
        if (skills) user.profile.skills = skillsArray;

        if (cloudResponse) {
            user.profile.resume = cloudResponse.secure_url;
            user.profile.resumeOriginalName = file.originalname;
        }

        await user.save();

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile,
        };

        return res.status(200).json({
            message: "Profile updated successfully.",
            user,
            success: true,
        });
    } catch (error) {
        console.log(error);
    }
};

const findUserById = async (userId) => {
    try {
        const user = await User.findById(userId);
        if (!user) {
            throw new Error(`User not found with id: ${userId}`);
        }
        return user;
    } catch (error) {
        console.error("Error finding user by ID:", error.message);
        throw new Error(error.message);
    }
};
const getUserIdFromToken = (token) => {
    const decodedToken = jwt.verify(token, SECRET_KEY, { algorithms: ['HS256'] });
    return decodedToken.userId;
};
const getUserProfile=async (req,res)=>{
    try {
        const jwt= req.headers.authorization?.split(' ')[1];

        if(!jwt){
            return res.status(404).send({error:"token not found"})
        }
        const user=await getUserProfileByToken(jwt)

        return res.status(200).send(user)

    
    } catch (error) {
        console.log("error from controller - ",error)
        return res.status(500).send({error:error.message})
    }
}
const getUserProfileByToken = async (token) => {
    try {
        const userId = getUserIdFromToken(token);

        console.log('User ID from token:', userId);

        const user = await User.findById(userId);
        if (!user) {
            throw new Error(`User does not exist with id: ${userId}`);
        }

        return user;
    } catch (error) {
        console.error('Error getting user profile by token:', error.message);
        throw new Error(error.message);
    }
};


// const findOrCreateUserFromAuth0 = async (userData) => {
//     try {
//         // Extract relevant information from Auth0 user data
//         const { sub, email, fullname, profilePhoto } = userData;

//         // Validate required fields
//         if (!sub || !email || !fullname) {
//             console.error("Auth0 user data is missing required fields:", { sub, email, fullname });
//             throw new Error("Auth0 user data is missing required fields");
//         }

//         // Check if the user already exists by email
//         let user = await User.findOne({ email });

//         if (!user) {
//             // User does not exist, so create a new one
//             console.log("User not found, creating a new user.");
//             user = await User.create({
//                 auth0Id: sub,
//                 email,
//                 fullname,  // Ensure this field is included
//                 profilePhoto,
//                 role: 'student', // Default role for new users
//             });
//         } else {
//             // User already exists, optionally update their profile
//             console.log("User already exists with email:", user.email);
//             user.profilePhoto = profilePhoto || user.profilePhoto;
//             user.fullname = fullname || user.fullname; // Update fullname if needed
//             await user.save();
//         }

//         return user;
//     } catch (error) {
//         console.error("Error syncing Auth0 user:", error.message);
//         throw new Error("Failed to sync user with Auth0");
//     }
// };
const findOrCreateUserFromAuth0 = async (userData) => {
    try {
        // Extract relevant information from Auth0 user data
        const { sub, email, fullname, profilePhoto } = userData;

        // Validate required fields
        if (!sub || !email || !fullname) {
            console.error("Auth0 user data is missing required fields:", { sub, email, fullname });
            throw new Error("Auth0 user data is missing required fields");
        }

        // Check if the user already exists by email
        let user = await User.findOne({ email });

        if (!user) {
            // User does not exist, so create a new one
            console.log("User not found, creating a new user.");
            user = await User.create({
                auth0Id: sub,
                email,
                fullname,  // Ensure this field is included
                profile: {
                    profilePhoto: profilePhoto || "", // Add profilePhoto here if available
                },
                role: 'student', // Default role for new users
            });
        } else {
            // User already exists, update the profile if necessary
            console.log("User already exists with email:", user.email);
            user.profile.profilePhoto = profilePhoto || user.profile.profilePhoto; // Update the profilePhoto if available
            user.fullname = fullname || user.fullname; // Update fullname if needed
            await user.save();
        }

        return user;
    } catch (error) {
        console.error("Error syncing Auth0 user:", error.message);
        throw new Error("Failed to sync user with Auth0");
    }
};


export default {
    register,
    login,
    logout,
    updateProfile,
    getUserProfile,
    findOrCreateUserFromAuth0,
    verifyEmail,
};
