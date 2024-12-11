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
//     <div className='bg-gray-100'>
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
//     if (searchedQuery.length > 0) {
//       const filteredJobs = allJobs.filter((job) => {
//         return (
//           searchedQuery.some((filter) => job.title.toLowerCase().includes(filter.toLowerCase())) ||
//           searchedQuery.some((filter) => job.description.toLowerCase().includes(filter.toLowerCase())) ||
//           searchedQuery.some((filter) => job.location.toLowerCase().includes(filter.toLowerCase()))
//         );
//       });
//       setFilterJobs(filteredJobs);
//     } else {
//       setFilterJobs(allJobs);
//     }
//   }, [allJobs, searchedQuery]);

//   return (
//     <div className='bg-gray-100'>
//       <Navbar />
//       <div className="max-w-7xl mx-auto mt-5 bg-gray-100">
//         <div className="flex gap-5">
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
//     if (searchedQuery.length > 0) {
//       const filteredJobs = allJobs.filter((job) => {
//         return (
//           searchedQuery.some((filter) => job.title.toLowerCase().includes(filter.toLowerCase())) ||
//           searchedQuery.some((filter) => job.description.toLowerCase().includes(filter.toLowerCase())) ||
//           searchedQuery.some((filter) => job.location.toLowerCase().includes(filter.toLowerCase()))
//         );
//       });
//       setFilterJobs(filteredJobs);
//     } else {
//       setFilterJobs(allJobs);
//     }
//   }, [allJobs, searchedQuery]);

//   return (
//     <div className='bg-gray-100'>
//       <Navbar />
//       <div className="max-w-7xl mx-auto mt-5 bg-gray-100">
//         <div className="flex gap-5">
//           <div className="w-20%">
//             <FilterCard />
//           </div>
//           {filterJobs.length <= 0 ? (
//             <div className="flex items-center justify-center flex-1 h-[88vh] bg-gray-100">
//               <span className="text-xl font-semibold text-gray-500">
//                 No jobs found that match your search.
//               </span>
//             </div>
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
import Navbar from './shared/Navbar';
import FilterCard from './FilterCard';
import Job from './Job';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const Jobs = () => {
  const { allJobs, searchedQuery } = useSelector((store) => store.job);
  const [filteredJobs, setFilteredJobs] = useState(allJobs);

  // Update filtered jobs based on searched query
  useEffect(() => {
    if (searchedQuery.length > 0) {
      const matchingJobs = allJobs.filter((job) => {
        return (
          searchedQuery.some((filter) => job.title.toLowerCase().includes(filter.toLowerCase())) ||
          searchedQuery.some((filter) => job.description.toLowerCase().includes(filter.toLowerCase())) ||
          searchedQuery.some((filter) => job.location.toLowerCase().includes(filter.toLowerCase()))
        );
      });
      setFilteredJobs(matchingJobs);
    } else {
      setFilteredJobs(allJobs);
    }
  }, [allJobs, searchedQuery]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          {/* Sidebar for filters */}
          <div className="hidden lg:block w-1/4">
            <FilterCard />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {filteredJobs.length === 0 ? (
              <div className="flex items-center justify-center h-[88vh]">
                <p className="text-xl font-semibold text-gray-500 dark:text-gray-400">
                  No jobs found that match your search.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {filteredJobs.map((job) => (
                  <motion.div
                    key={job?._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
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
