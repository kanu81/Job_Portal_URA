// import React, { useEffect } from 'react'
// import Navbar from '../shared/Navbar'
// import ApplicantsTable from './ApplicantsTable'
// import axios from 'axios';
// import { APPLICATION_API_END_POINT } from '@/utils/constant';
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { setAllApplicants } from '@/redux/applicationSlice';

// const Applicants = () => {
//     const params = useParams();
//     const dispatch = useDispatch();
//     const {applicants} = useSelector(store=>store.application);

//     useEffect(() => {
//         const fetchAllApplicants = async () => {
//             try {
//                 const res = await axios.get(`${APPLICATION_API_END_POINT}/${params.id}/applicants`, { withCredentials: true });
//                 dispatch(setAllApplicants(res.data.job));
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//         fetchAllApplicants();
//     }, []);
//     return (
//         <div>
//             <Navbar />
//             <div className='max-w-7xl mx-auto'>
//                 <h1 className='font-bold text-xl my-5'>Applicants {applicants?.applications?.length}</h1>
//                 <ApplicantsTable />
//             </div>
//         </div>
//     )
// }

// export default Applicants

// import React, { useEffect, useState } from 'react';
// import Navbar from '../shared/Navbar';
// import ApplicantsTable from './ApplicantsTable';
// import axios from 'axios';
// import { APPLICATION_API_END_POINT } from '@/utils/constant';
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { setAllApplicants } from '@/redux/applicationSlice';
// import { Loader2 } from 'lucide-react';

// const Applicants = () => {
//   const params = useParams();
//   const dispatch = useDispatch();
//   const { applicants } = useSelector((store) => store.application);

//   const [loading, setLoading] = useState(true); // Manage loading state

//   useEffect(() => {
//     const fetchAllApplicants = async () => {
//       try {
//         setLoading(true); // Set loading to true when fetching data
//         const res = await axios.get(`${APPLICATION_API_END_POINT}/${params.id}/applicants`, { withCredentials: true });
//         dispatch(setAllApplicants(res.data.job)); // Dispatch applicants data
//       } catch (error) {
//         console.log(error);
//         // You can show a toast or alert to notify users of the error
//       } finally {
//         setLoading(false); // Set loading to false after the request is done
//       }
//     };

//     if (params.id) {
//       fetchAllApplicants(); // Fetch applicants only if id is available
//     }
//   }, [params.id, dispatch]); // Ensure effect runs when params.id changes

//   return (
//     <div>
//       <Navbar />
//       <div className='max-w-7xl mx-auto'>
//         <h1 className='font-bold text-xl my-5'>Applicants {applicants?.applications?.length}</h1>
        
//         {/* Show loading spinner while data is being fetched */}
//         {loading ? (
//           <div className='flex justify-center items-center'>
//             <Loader2 className='animate-spin h-8 w-8 text-gray-500' />
//             <span className='ml-2 text-gray-500'>Loading applicants...</span>
//           </div>
//         ) : (
//           <ApplicantsTable />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Applicants;


import React, { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar';
import ApplicantsTable from './ApplicantsTable';
import axios from 'axios';
import { APPLICATION_API_END_POINT } from '@/utils/constant';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAllApplicants } from '@/redux/applicationSlice';
import { Loader2 } from 'lucide-react';

const Applicants = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { applicants } = useSelector((store) => store.application);

  const [loading, setLoading] = useState(true); // Manage loading state

  useEffect(() => {
    const fetchAllApplicants = async () => {
      try {
        setLoading(true); // Set loading to true when fetching data
        const res = await axios.get(`${APPLICATION_API_END_POINT}/${params.id}/applicants`, { withCredentials: true });
        dispatch(setAllApplicants(res.data.job)); // Dispatch applicants data
      } catch (error) {
        console.log(error);
        // You can show a toast or alert to notify users of the error
      } finally {
        setLoading(false); // Set loading to false after the request is done
      }
    };

    if (params.id) {
      fetchAllApplicants(); // Fetch applicants only if id is available
    }
  }, [params.id, dispatch]); // Ensure effect runs when params.id changes

  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto'>
        <h1 className='font-bold text-xl my-5'>Applicants {applicants?.applications?.length}</h1>
        
        {/* Show loading spinner while data is being fetched */}
        {loading ? (
          <div className='flex justify-center items-center'>
            <Loader2 className='animate-spin h-8 w-8 text-gray-500' />
            <span className='ml-2 text-gray-500'>Loading applicants...</span>
          </div>
        ) : (
          <ApplicantsTable />
        )}
      </div>
    </div>
  );
};

export default Applicants;
