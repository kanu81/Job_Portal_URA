// import React, { useEffect, useState } from 'react';
// import Navbar from './shared/Navbar';
// import FilterCard from './FilterCard';
// import Job from './Job';
// import { useSelector } from 'react-redux';
// import { motion } from 'framer-motion';

// const Jobs = () => {
//   const { allJobs, searchedQuery } = useSelector((store) => store.job);
//   const [filterJobs, setFilterJobs] = useState(allJobs);

//   useEffect(() => {
//     if (searchedQuery) {
//       const filteredJobs = allJobs.filter((job) => {
//         return (
//           job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
//           job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
//           job.location.toLowerCase().includes(searchedQuery.toLowerCase())
//         );
//       });
//       setFilterJobs(filteredJobs);
//     } else {
//       setFilterJobs(allJobs);
//     }
//   }, [allJobs, searchedQuery]);

//   return (
//     <div  className='bg-gray-100 min-h-screen data-scroll-container'>
//       <Navbar />
//       {/* Set the background color to gray-100 for the main container */}
//       <div className="max-w-7xl mx-auto mt-5 bg-gray-100">
//         <div className="flex gap-5">
//           {/* Keep FilterCard's original background styling */}
//           <div className="w-20%">
//             <FilterCard />
//           </div>
//           {filterJobs.length <= 0 ? (
//             <span>Job not found</span>
//           ) : (
//             <div className="flex-1 h-[88vh] overflow-y-auto pb-5 p-4 z-10 bg-gray-100">
//               <div className="grid grid-cols-3 gap-4">
//                 {filterJobs.map((job) => (
//                   <motion.div
//                     initial={{ opacity: 0, x: 100 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -100 }}
//                     transition={{ duration: 0.3 }}
//                     key={job?._id}
//                   >
//                     <Job job={job} />
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Jobs;
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
