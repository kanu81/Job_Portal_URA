// import React from 'react'
// import LatestJobCards from './LatestJobCards';
// import { useSelector } from 'react-redux'; 

// // const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

// const LatestJobs = () => {
//     const {allJobs} = useSelector(store=>store.job);
   
//     return (
//         <div className='max-w-7xl mx-auto my-20'>
//             <h1 className='text-4xl font-bold'><span className='text-[#FF0000]'>Latest & Top</span>News</h1>
//             <div className='grid grid-cols-3 gap-4 my-5'>
//                 {
//                     allJobs.length <= 0 ? <span>No Job Available</span> : allJobs?.slice(0,6).map((job) => <LatestJobCards key={job._id} job={job}/>)
//                 }
//             </div>
//         </div>
//     )
// }

// export default LatestJobs

// import React from 'react'
// import LatestJobCards from './LatestJobCards';
// import { useSelector } from 'react-redux'; 

// const LatestJobs = () => {
//     const { allJobs } = useSelector(store => store.job) || {};

//     return (
//         <div className='max-w-7xl mx-auto my-20'>
//             <h1 className='text-4xl font-bold'>
//                 <span className='text-[#FF0000]'>Latest & Top</span> News
//             </h1>
//             <div className='grid grid-cols-3 gap-4 my-5'>
//                 {
//                     !allJobs || allJobs.length <= 0 
//                         ? <span>No Job Available</span> 
//                         : allJobs.slice(0, 6).map((job) => <LatestJobCards key={job._id} job={job} />)
//                 }
//             </div>
//         </div>
//     )
// }

// export default LatestJobs;


// import React from 'react';
// import LatestJobCards from './LatestJobCards';
// import { useSelector } from 'react-redux';

// const LatestJobs = () => {
//     const { allJobs } = useSelector(store => store.job) || {};

//     return (
//         <div className='max-w-7xl mx-auto my-20'>
//             <h1 className='text-4xl font-extrabold text-gray-800'>
//                 <span className='text-red-600'>Latest & Top</span> Jobs
//             </h1>
//             <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8'>
//                 {
//                     !allJobs || allJobs.length <= 0 
//                         ? <span className='text-gray-500 text-lg'>No Jobs Available</span> 
//                         : allJobs.slice(0, 6).map((job) => (
//                             <LatestJobCards key={job._id} job={job} />
//                         ))
//                 }
//             </div>
//         </div>
//     );
// }

// export default LatestJobs;



import React from 'react';
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';
const LatestJobs = () => {
    const { allJobs } = useSelector(store => store.job) || {};
  
    return (
      <div className='max-w-7xl mx-auto my-20'>
        <h1 className='text-4xl font-extrabold text-gray-800 dark:text-gray-200'>
          <span className='text-red-600 dark:text-red-400'>Latest & Top</span> Jobs
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8'>
          {
            !allJobs || allJobs.length <= 0 
              ? <span className='text-gray-500 dark:text-gray-400 text-lg'>No Jobs Available</span>
              : allJobs.slice(0, 6).map((job) => (
                  <LatestJobCards key={job._id} job={job} />
                ))
          }
        </div>
      </div>
    );
  };
  
export default LatestJobs;
