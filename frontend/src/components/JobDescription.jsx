// import React, { useEffect, useState } from 'react';
// import { Badge } from './ui/badge';
// import { Button } from './ui/button';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
// import { setSingleJob } from '@/redux/jobSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'sonner';
// import { Home, ArrowLeft } from 'lucide-react';

// const JobDescription = () => {
//     const { singleJob } = useSelector((store) => store.job);
//     const { user } = useSelector((store) => store.auth);
//     const isInitiallyApplied = singleJob?.applications?.some((application) => application.applicant === user?._id) || false;
//     const [isApplied, setIsApplied] = useState(isInitiallyApplied);

//     const params = useParams();
//     const jobId = params.id;
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const applyJobHandler = async () => {
//         try {
//             const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, { withCredentials: true });

//             if (res.data.success) {
//                 setIsApplied(true);
//                 const updatedSingleJob = { ...singleJob, applications: [...singleJob.applications, { applicant: user?._id }] };
//                 dispatch(setSingleJob(updatedSingleJob));
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.response.data.message);
//         }
//     };

//     useEffect(() => {
//         const fetchSingleJob = async () => {
//             try {
//                 const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
//                 if (res.data.success) {
//                     dispatch(setSingleJob(res.data.job));
//                     setIsApplied(res.data.job.applications.some((application) => application.applicant === user?._id));
//                 }
//             } catch (error) {
//                 console.log(error);
//             }
//         };
//         fetchSingleJob();
//     }, [jobId, dispatch, user?._id]);

//     return (
       
//         <div className='bg-gray-100 min-h-screen p-8'>
//             {/* Back and Home Buttons */}
//             <div className='flex gap-4 mb-4'>
//                 <Button onClick={() => navigate('/jobs')} className='bg-gray-500 hover:bg-blue-400 rounded-lg flex items-center gap-2 rounded-full'>
//                     <ArrowLeft className='h-5 w-5' /> {/* Back Icon */}
//                 </Button>
//                 <Button onClick={() => navigate('/')} className='bg-gray-500 hover:bg-blue-400 rounded-lg flex items-center gap-2 rounded-full'>
//                     <Home className='h-5 w-5 ' /> {/* Home Icon */}
//                 </Button>
//             </div>

//             {/* Job Description Content Area */}
//             <div className='max-w-7xl mx-auto my-10 bg-gray-200 p-8 rounded-md shadow-md'>
//                 {/* Header Section */}
//                 <header className='flex items-center justify-between'>
//                     <div>
//                         <h1 className='text-2xl font-bold  mb-4'>{singleJob?.title}</h1>
//                         <div className='flex items-center gap-2 mt-4'>
//                             <Badge className='text-blue-700 font-bold'>{singleJob?.positions || 'Positions'}</Badge>
//                             <Badge className='text-[#F83002] font-bold'>{singleJob?.type || 'Type'}</Badge>
//                             <Badge className='text-[#7209b7] font-bold'>{singleJob?.salary ? `${singleJob.salary} LPA` : 'LPA'}</Badge>
//                         </div>
//                     </div>
//                     <Button
//                         onClick={isApplied ? null : applyJobHandler}
//                         disabled={isApplied}
//                         className={`rounded-lg ${isApplied ? 'bg-red-600 cursor-not-allowed' : 'bg-gray-600 hover:bg-blue-400 rounded-full'}`}>
//                         {isApplied ? 'Already Applied' : 'Apply Now'}
//                     </Button>
//                 </header>

//                 {/* Job Details Section */}
//                 <section>
//                     <h2 className='border-b-2 border-b-gray-300 font-medium py-4 '>Job Description</h2>
//                     <div className='my-4'>
//                         <p className='font-bold my-1 '>Role: <span className='pl-4 font-normal '>{singleJob?.title || 'Title'}</span></p>
//                         <p className='font-bold my-1 '>Location: <span className='pl-4 font-normal '>{singleJob?.location || 'Location'}</span></p>
//                         <p className='font-bold my-1 '>Description: <span className='pl-4 font-normal '>{singleJob?.description || 'Description'}</span></p>
//                         <p className='font-bold my-1 '>Experience: <span className='pl-4 font-normal '>{singleJob?.experience || 0} yrs</span></p>
//                         <p className='font-bold my-1 '>Salary: <span className='pl-4 font-normal '>{singleJob?.salary || 0} LPA</span></p>
//                         <p className='font-bold my-1 '>Total Applicants: <span className='pl-4 font-normal '>{singleJob?.applications?.length || 0}</span></p>
//                         <p className='font-bold my-1 '>Posted Date: <span className='pl-4 font-normal '>{singleJob?.createdAt?.split("T")[0] || 'Date'}</span></p>
//                     </div>
//                 </section>
//             </div>
//         </div>
//     );
// };

// export default JobDescription;
// import React, { useEffect, useState } from 'react';
// import { Badge } from './ui/badge';
// import { Button } from './ui/button';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
// import { setSingleJob } from '@/redux/jobSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'sonner';
// import { Home, ArrowLeft } from 'lucide-react';

// const JobDescription = () => {
//     const { singleJob } = useSelector((store) => store.job);
//     const { user } = useSelector((store) => store.auth);
//     const isInitiallyApplied = singleJob?.applications?.some((application) => application.applicant === user?._id) || false;
//     const [isApplied, setIsApplied] = useState(isInitiallyApplied);

//     const params = useParams();
//     const jobId = params.id;
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const applyJobHandler = async () => {
//         try {
//             const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, { withCredentials: true });

//             if (res.data.success) {
//                 setIsApplied(true);
//                 const updatedSingleJob = { ...singleJob, applications: [...singleJob.applications, { applicant: user?._id }] };
//                 dispatch(setSingleJob(updatedSingleJob));
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.response.data.message);
//         }
//     };

//     useEffect(() => {
//         const fetchSingleJob = async () => {
//             try {
//                 const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
//                 if (res.data.success) {
//                     dispatch(setSingleJob(res.data.job));
//                     setIsApplied(res.data.job.applications.some((application) => application.applicant === user?._id));
//                 }
//             } catch (error) {
//                 console.log(error);
//             }
//         };
//         fetchSingleJob();
//     }, [jobId, dispatch, user?._id]);

//     return (
//         <div className='bg-gray-100 min-h-screen p-8'>
//             {/* Back and Home Buttons */}
//             <div className='flex gap-4 mb-4'>
//                 <Button onClick={() => navigate('/jobs')} className='bg-blue-500 hover:bg-blue-400 text-white rounded-lg flex items-center gap-2 py-2 px-4 shadow-md'>
//                     <ArrowLeft className='h-5 w-5' /> {/* Back Icon */}
//                     <span>Back</span>
//                 </Button>
//                 <Button onClick={() => navigate('/')} className='bg-blue-500 hover:bg-blue-400 text-white rounded-lg flex items-center gap-2 py-2 px-4 shadow-md'>
//                     <Home className='h-5 w-5' /> {/* Home Icon */}
//                     <span>Home</span>
//                 </Button>
//             </div>

//             {/* Job Description Content Area */}
//             <div className='max-w-7xl mx-auto my-10 bg-white p-8 rounded-lg shadow-lg'>
//                 {/* Header Section */}
//                 <header className='flex items-center justify-between mb-6'>
//                     <div>
//                         <h1 className='text-3xl font-semibold text-gray-800'>{singleJob?.title}</h1>
//                         <div className='flex items-center gap-3 mt-4'>
//                             <Badge className='bg-blue-100 text-blue-700 font-semibold'>{singleJob?.positions || 'Positions'}</Badge>
//                             <Badge className='bg-red-100 text-red-600 font-semibold'>{singleJob?.type || 'Type'}</Badge>
//                             <Badge className='bg-purple-100 text-purple-700 font-semibold'>{singleJob?.salary ? `${singleJob.salary} LPA` : 'LPA'}</Badge>
//                         </div>
//                     </div>
//                     <Button
//                         onClick={isApplied ? null : applyJobHandler}
//                         disabled={isApplied}
//                         className={`py-2 px-6 rounded-full text-white ${isApplied ? 'bg-red-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500'}`}
//                     >
//                         {isApplied ? 'Already Applied' : 'Apply Now'}
//                     </Button>
//                 </header>

//                 {/* Job Details Section */}
//                 <section>
//                     <h2 className='text-xl font-semibold text-gray-800 border-b-2 border-gray-300 py-4'>Job Details</h2>
//                     <div className='my-4 space-y-4'>
//                         <p className='font-medium text-gray-600'>
//                             <span className='font-semibold'>Role:</span> {singleJob?.title || 'Title'}
//                         </p>
//                         <p className='font-medium text-gray-600'>
//                             <span className='font-semibold'>Location:</span> {singleJob?.location || 'Location'}
//                         </p>
//                         <p className='font-medium text-gray-600'>
//                             <span className='font-semibold'>Description:</span> {singleJob?.description || 'Description'}
//                         </p>
//                         <p className='font-medium text-gray-600'>
//                             <span className='font-semibold'>Experience:</span> {singleJob?.experience || 0} yrs
//                         </p>
//                         <p className='font-medium text-gray-600'>
//                             <span className='font-semibold'>Salary:</span> {singleJob?.salary || 0} LPA
//                         </p>
//                         <p className='font-medium text-gray-600'>
//                             <span className='font-semibold'>Total Applicants:</span> {singleJob?.applications?.length || 0}
//                         </p>
//                         <p className='font-medium text-gray-600'>
//                             <span className='font-semibold'>Posted Date:</span> {singleJob?.createdAt?.split("T")[0] || 'Date'}
//                         </p>
//                     </div>
//                 </section>
//             </div>
//         </div>
//     );
// };

// export default JobDescription;
import React, { useEffect, useState } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
import { setSingleJob } from '@/redux/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';
import { Home, ArrowLeft } from 'lucide-react';

const JobDescription = () => {
    const { singleJob } = useSelector((store) => store.job);
    const { user } = useSelector((store) => store.auth);
    const isInitiallyApplied = singleJob?.applications?.some((application) => application.applicant === user?._id) || false;
    const [isApplied, setIsApplied] = useState(isInitiallyApplied);

    const params = useParams();
    const jobId = params.id;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const applyJobHandler = async () => {
        try {
            const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, { withCredentials: true });

            if (res.data.success) {
                setIsApplied(true);
                const updatedSingleJob = { ...singleJob, applications: [...singleJob.applications, { applicant: user?._id }] };
                dispatch(setSingleJob(updatedSingleJob));
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setSingleJob(res.data.job));
                    setIsApplied(res.data.job.applications.some((application) => application.applicant === user?._id));
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchSingleJob();
    }, [jobId, dispatch, user?._id]);

    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-8">
            {/* Back and Home Buttons */}
            <div className="flex gap-4 mb-4">
                <Button
                    onClick={() => navigate('/jobs')}
                    className="bg-blue-500 hover:bg-blue-400 text-white rounded-lg flex items-center gap-2 py-2 px-4 shadow-md"
                >
                    <ArrowLeft className="h-5 w-5" /> {/* Back Icon */}
                    <span>Back</span>
                </Button>
                <Button
                    onClick={() => navigate('/')}
                    className="bg-blue-500 hover:bg-blue-400 text-white rounded-lg flex items-center gap-2 py-2 px-4 shadow-md"
                >
                    <Home className="h-5 w-5" /> {/* Home Icon */}
                    <span>Home</span>
                </Button>
            </div>

            {/* Job Description Content Area */}
            <div className="max-w-7xl mx-auto my-10 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                {/* Header Section */}
                <header className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">{singleJob?.title}</h1>
                        <div className="flex items-center gap-3 mt-4">
                            <Badge className="bg-blue-100 dark:bg-blue-700 text-blue-700 dark:text-white font-semibold">
                                {singleJob?.positions || 'Positions'}
                            </Badge>
                            <Badge className="bg-red-100 dark:bg-red-700 text-red-600 dark:text-white font-semibold">
                                {singleJob?.type || 'Type'}
                            </Badge>
                            <Badge className="bg-purple-100 dark:bg-purple-700 text-purple-700 dark:text-white font-semibold">
                                {singleJob?.salary ? `${singleJob.salary} LPA` : 'LPA'}
                            </Badge>
                        </div>
                    </div>
                    <Button
                        onClick={isApplied ? null : applyJobHandler}
                        disabled={isApplied}
                        className={`py-2 px-6 rounded-full text-white ${
                            isApplied ? 'bg-red-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500'
                        }`}
                    >
                        {isApplied ? 'Already Applied' : 'Apply Now'}
                    </Button>
                </header>

                {/* Job Details Section */}
                <section>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 border-b-2 border-gray-300 dark:border-gray-600 py-4">
                        Job Details
                    </h2>
                    <div className="my-4 space-y-4">
                        <p className="font-medium text-gray-600 dark:text-gray-300">
                            <span className="font-semibold">Role:</span> {singleJob?.title || 'Title'}
                        </p>
                        <p className="font-medium text-gray-600 dark:text-gray-300">
                            <span className="font-semibold">Location:</span> {singleJob?.location || 'Location'}
                        </p>
                        <p className="font-medium text-gray-600 dark:text-gray-300">
                            <span className="font-semibold">Description:</span> {singleJob?.description || 'Description'}
                        </p>
                        <p className="font-medium text-gray-600 dark:text-gray-300">
                            <span className="font-semibold">Experience:</span> {singleJob?.experience || 0} yrs
                        </p>
                        <p className="font-medium text-gray-600 dark:text-gray-300">
                            <span className="font-semibold">Salary:</span> {singleJob?.salary || 0} LPA
                        </p>
                        <p className="font-medium text-gray-600 dark:text-gray-300">
                            <span className="font-semibold">Total Applicants:</span> {singleJob?.applications?.length || 0}
                        </p>
                        <p className="font-medium text-gray-600 dark:text-gray-300">
                            <span className="font-semibold">Posted Date:</span> {singleJob?.createdAt?.split('T')[0] || 'Date'}
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default JobDescription;
