import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";
import { sendEmail } from "../utils/email.js";
export const applyJob = async (req, res) => {
    try {
        const userId = req.id;
        const jobId = req.params.id;
        if (!jobId) {
            return res.status(400).json({
                message: "Job id is required.",
                success: false
            })
        };
        // check if the user has already applied for the job
        const existingApplication = await Application.findOne({ job: jobId, applicant: userId });

        if (existingApplication) {
            return res.status(400).json({
                message: "You have already applied for this jobs",
                success: false
            });
        }

        // check if the jobs exists
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({
                message: "Job not found",
                success: false
            })
        }
        // create a new application
        const newApplication = await Application.create({
            job:jobId,
            applicant:userId,
        });

        job.applications.push(newApplication._id);
        await job.save();
        return res.status(201).json({
            message:"Job applied successfully.",
            success:true
        })
    } catch (error) {
        console.log(error);
    }
};
export const getAppliedJobs = async (req,res) => {
    try {
        const userId = req.id;
        const application = await Application.find({applicant:userId}).sort({createdAt:-1}).populate({
            path:'job',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'company',
                options:{sort:{createdAt:-1}},
            }
        });
        if(!application){
            return res.status(404).json({
                message:"No Applications",
                success:false
            })
        };
        return res.status(200).json({
            application,
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}
// admin dekhega kitna user ne apply kiya hai
export const getApplicants = async (req,res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path:'applications',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'applicant'
            }
        });
        if(!job){
            return res.status(404).json({
                message:'Job not found.',
                success:false
            })
        };
        return res.status(200).json({
            job, 
            succees:true
        });
    } catch (error) {
        console.log(error);
    }
}
// export const updateStatus = async (req,res) => {
//     try {
//         const {status} = req.body;
//         const applicationId = req.params.id;
//         if(!status){
//             return res.status(400).json({
//                 message:'status is required',
//                 success:false
//             })
//         };

//         // find the application by applicantion id
//         const application = await Application.findOne({_id:applicationId});
//         if(!application){
//             return res.status(404).json({
//                 message:"Application not found.",
//                 success:false
//             })
//         };

//         // update the status
//         application.status = status.toLowerCase();
//         await application.save();

//         return res.status(200).json({
//             message:"Status updated successfully.",
//             success:true
//         });

//     } catch (error) {
//         console.log(error);
//     }
// }

// export const updateStatus = async (req, res) => {
//     try {
//         const { status } = req.body;
//         const applicationId = req.params.id;

//         if (!status) {
//             return res.status(400).json({
//                 message: "Status is required.",
//                 success: false,
//             });
//         }

//         // Find the application by application ID
//         const application = await Application.findById(applicationId).populate("applicant");

//         if (!application) {
//             return res.status(404).json({
//                 message: "Application not found.",
//                 success: false,
//             });
//         }

//         // Update the status
//         application.status = status.toLowerCase();
//         await application.save();

//         // Send an email to the applicant
//         const applicantEmail = application.applicant.email; // Assuming 'email' exists in the User model
//         const jobTitle = application.job.title; // Assuming 'title' exists in the Job model
//         const subject = `Application Status Update for ${jobTitle}`;
//         const text = `Dear ${application.applicant.name},\n\nYour application status for the job "${jobTitle}" has been updated to: ${status.toUpperCase()}.\n\nThank you for applying.\n\nBest regards,\nJob Portal Team`;

//         await sendEmail(applicantEmail, subject, text);

//         return res.status(200).json({
//             message: "Status updated and email sent successfully.",
//             success: true,
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             message: "An error occurred.",
//             success: false,
//         });
//     }
// };

// export const updateStatus = async (req, res) => {
//     try {
//         const { status } = req.body;
//         const applicationId = req.params.id;

//         if (!status) {
//             return res.status(400).json({
//                 message: "Status is required.",
//                 success: false,
//             });
//         }

//         // Find the application and populate applicant and job details
//         const application = await Application.findById(applicationId)
//             .populate("applicant", "name email") // Populate applicant name and email
//             .populate("job", "title"); // Populate job title

//         if (!application) {
//             return res.status(404).json({
//                 message: "Application not found.",
//                 success: false,
//             });
//         }

//         // Update the status
//         application.status = status.toLowerCase();
//         await application.save();

//         // Send an email to the applicant
//         const applicantEmail = application.applicant.email; // Applicant's email
//         const jobTitle = application.job.title; // Job title
//         const subject = `Application Status Update for ${jobTitle}`;
//         const text = `Dear ${application.applicant.name},\n\nYour application status for the job "${jobTitle}" has been updated to: ${status.toUpperCase()}.\n\nThank you for applying.\n\nBest regards,\nJob Portal Team`;

//         await sendEmail(applicantEmail, subject, text);

//         return res.status(200).json({
//             message: "Status updated and email sent successfully.",
//             success: true,
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             message: "An error occurred.",
//             success: false,
//         });
//     }
// };

export const updateStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const applicationId = req.params.id;

        if (!status) {
            return res.status(400).json({
                message: "Status is required.",
                success: false,
            });
        }

        // Find the application and populate applicant, job, and company details
        const application = await Application.findById(applicationId)
            .populate("applicant", "name email") // Populate applicant name and email
            .populate({
                path: "job",
                select: "title",
                populate: {
                    path: "company",
                    select: "name", // Populate company name
                },
            });

        if (!application) {
            return res.status(404).json({
                message: "Application not found.",
                success: false,
            });
        }

        // Update the status
        application.status = status.toLowerCase();
        await application.save();

        // Extract details for the email
        const applicantEmail = application.applicant.email; // Applicant's email
        const applicantName = application.applicant.name; // Applicant's name
        const jobTitle = application.job.title; // Job title
        const companyName = application.job.company.name; // Company name
        const subject = `Application Status Update for ${jobTitle}`;
        // const text = `Dear ${applicantName},\n\nYour application status for the job "${jobTitle}" at "${companyName}" has been updated to: ${status.toUpperCase()}.\n\nThank you for applying.\n\nBest regards,\nThe ${companyName} Recruitment Team`;
        const text = `Dear ${applicantName},\n\nThank you for applying for the position of "${jobTitle}" at "${companyName}". We appreciate the time and effort you invested in submitting your application.\n\nWe would like to inform you that the status of your application has been updated to: ${status.toUpperCase()}.\n\nIf you have any questions or need further clarification, please feel free to contact us.\n\nThank you for your interest in joining "${companyName}". We wish you the very best in your career journey!\n\nBest regards,\n${companyName} Recruitment Team`;

        // Send the email
        await sendEmail(applicantEmail, subject, text);

        return res.status(200).json({
            message: "Status updated and email sent successfully.",
            success: true,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "An error occurred.",
            success: false,
        });
    }
};
