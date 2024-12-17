// import React from 'react';
// import { Button } from './ui/button';
// import { Bookmark } from 'lucide-react';
// import { Avatar, AvatarImage } from './ui/avatar';
// import { Badge } from './ui/badge';
// import { useNavigate } from 'react-router-dom';

// const Job = ({ job }) => {
//   const navigate = useNavigate();

//   const daysAgoFunction = (mongodbTime) => {
//     const createdAt = new Date(mongodbTime);
//     const currentTime = new Date();
//     const timeDifference = currentTime - createdAt;
//     return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//   };

//   // Function to randomly select a pastel color from the provided palette
//   const getRandomPastelColor = () => {
//     const pastelColors = ['#ffe1cc', '#fbe2f4', '#e3dbfa', '#d4f5ed', '#ffecd1', '#f6e8ea', '#e6e6fa', '#c3f3ff','#aec6cf'];
//     return pastelColors[Math.floor(Math.random() * pastelColors.length)];
//   };

//   // Set random pastel color for background
//   const pastelBackgroundColor = getRandomPastelColor();

//   return (
//     <div className="rounded-2xl shadow-lg transition-transform hover:scale-105 overflow-hidden bg-white border border-gray-300">
//       {/* Top right Bookmark Icon */}
//       <div className="relative">
//         <Button
//           variant="outline"
//           className="absolute top-4 right-4 rounded-full bg-white p-1.8 shadow-md"
//           size="icon"
//         >
//           <Bookmark />
//         </Button>

//         {/* Date posted */}
//         <p className="absolute top-4 left-4 text-sm text-gray-700 bg-white px-2 py-1 rounded-md shadow">
//           {daysAgoFunction(job?.createdAt) === 0 ? 'Today' : `${daysAgoFunction(job?.createdAt)} days ago`}
//         </p>

//         {/* Colored Background Section */}
//         <div
//           className="p-5 rounded-2xl"
//           style={{
//             backgroundColor: pastelBackgroundColor,
            
//             margin: '16px',
//           }}
//         >
//           {/* Company Logo and Name */}
//           <div className="flex items-center gap-3 mt-8 mb-4">
//             <Button className="p-2 bg-white rounded-full shadow-md" variant="outline" size="icon">
//               <Avatar>
//                 <AvatarImage src={job?.company?.logo} />
//               </Avatar>
//             </Button>
//             <h1 className="font-semibold text-lg">{job?.company?.name}</h1>
//           </div>

//           {/* Job Title */}
//           <h1 className="font-bold text-xl mb-2">{job?.title}</h1>

//           {/* Job Description */}
//           <p className="text-sm text-gray-700 mb-4">{job?.description}</p>

//           {/* Job Tags */}
//           <div className="flex flex-wrap gap-2 mb-4">
//             <Badge className="text-sm font-semibold bg-white border border-gray-300 px-3 py-1 rounded-full text-gray-800 hover:text-white">
//               {job?.position} Positions
//             </Badge>
//             <Badge className="text-sm font-semibold bg-white border border-gray-300 px-3 py-1 rounded-full text-gray-800 hover:text-white">
//               {job?.jobType}
//             </Badge>
//             <Badge className="text-sm font-semibold bg- border border-gray-300 px-3 py-1 rounded-full text-gray-800 hover:text-white">
//               {job?.salary} LPA
//             </Badge>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Action Buttons */}
//       <div className="flex justify-between items-center mt-4 px-5 py-4 bg-white">
//         <Button onClick={() => navigate(`/description/${job?._id}`)} className="bg-black text-white px-4 py-2 rounded-full">
//           Details
//         </Button>
//         <Button  className="bg-[#000000] text-white px-4 py-2 rounded-full">Save For Later</Button>
//       </div>
//     </div>
//   );
// };

// export default Job;
import React, { useEffect, useState } from 'react';
import Job from './Job';
import FilterCard from './FilterCard';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const Jobs = () => {
    const { allJobs } = useSelector((store) => store.job);
    const [filterJobs, setFilterJobs] = useState(allJobs);
    const [searchInput, setSearchInput] = useState('');
    const [activeFilters, setActiveFilters] = useState([]);

    // Search functionality
    useEffect(() => {
        let filteredJobs = allJobs;

        if (searchInput) {
            filteredJobs = filteredJobs.filter((job) =>
                job.title.toLowerCase().includes(searchInput.toLowerCase()) ||
                job.description.toLowerCase().includes(searchInput.toLowerCase()) ||
                job.location.toLowerCase().includes(searchInput.toLowerCase())
            );
        }

        // Apply filters if any
        if (activeFilters.length > 0) {
            filteredJobs = filteredJobs.filter((job) =>
                activeFilters.every((filter) => 
                    job.location.includes(filter) || 
                    job.title.includes(filter) || 
                    job.salary.includes(filter)
                )
            );
        }

        setFilterJobs(filteredJobs);
    }, [allJobs, searchInput, activeFilters]);

    return (
        <div>
            <div className="max-w-7xl mx-auto mt-5">
                <div className="flex gap-5">
                    <div className="w-1/4">
                        <FilterCard setActiveFilters={setActiveFilters} />
                    </div>
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="Search Jobs..."
                            className="w-full p-3 border rounded-md mb-4"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                        {filterJobs.length <= 0 ? (
                            <div className="flex flex-col items-center justify-center h-full">
                                <h2 className="text-2xl font-bold text-gray-700">No Jobs Found</h2>
                                <p className="text-gray-500 mb-6">
                                    Try refining your search or adjusting the filters.
                                </p>
                                <button
                                    onClick={() => {
                                        setSearchInput('');
                                        setActiveFilters([]);
                                    }}
                                    className="px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                >
                                    Reset Filters
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-3 gap-4">
                                {filterJobs.map((job) => (
                                    <motion.div
                                        key={job._id}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Job job={job} />
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;