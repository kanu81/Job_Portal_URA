// import React, { useEffect, useState } from 'react'
// import Navbar from '../shared/Navbar'
// import { Input } from '../ui/input'
// import { Button } from '../ui/button' 
// import { useNavigate } from 'react-router-dom' 
// import { useDispatch } from 'react-redux' 
// import AdminJobsTable from './AdminJobsTable'
// import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs'
// import { setSearchJobByText } from '@/redux/jobSlice'

// const AdminJobs = () => {
//   useGetAllAdminJobs();
//   const [input, setInput] = useState("");
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(setSearchJobByText(input));
//   }, [input]);
//   return (
//     <div>
//       <Navbar />
//       <div className='max-w-6xl mx-auto my-10'>
//         <div className='flex items-center justify-between my-5'>
//           <Input
//             className="w-fit"
//             placeholder="Filter by name, role"
//             onChange={(e) => setInput(e.target.value)}
//           />
//           <Button onClick={() => navigate("/admin/jobs/create")}>New Jobs</Button>
//         </div>
//         <AdminJobsTable />
//       </div>
//     </div>
//   )
// }

// export default AdminJobs

// import React, { useEffect, useState } from 'react';
// import Navbar from '../shared/Navbar';
// import { Input } from '../ui/input';
// import { Button } from '../ui/button';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import AdminJobsTable from './AdminJobsTable';
// import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs';
// import { setSearchJobByText } from '@/redux/jobSlice';
// import { debounce } from 'lodash';

// const AdminJobs = () => {
//   const [input, setInput] = useState("");
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   useGetAllAdminJobs();

//   // Debounce search input to prevent multiple calls
//   const debouncedSearch = debounce((searchText) => {
//     dispatch(setSearchJobByText(searchText));
//   }, 500);

//   useEffect(() => {
//     if (input) {
//       debouncedSearch(input); // Call debounced search
//     } else {
//       dispatch(setSearchJobByText('')); // Reset search if input is empty
//     }
//     return () => debouncedSearch.cancel(); // Clean up debounced function
//   }, [input, dispatch]);

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <Navbar />
//       <div className='max-w-7xl mx-auto my-10'>
//         <div className='flex items-center justify-between my-5'>
//           <div className='flex items-center space-x-4'>
//             <Input
//               className="w-full md:w-80 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Search by job title, company"
//               onChange={(e) => setInput(e.target.value)}
//               aria-label="Search for jobs by name or role"
//             />
//             <Button
//               onClick={() => navigate("/admin/jobs/create")}
//               className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-300"
//             >
//               New Job
//             </Button>
//           </div>
//         </div>
//         <AdminJobsTable />
//       </div>
//     </div>
//   );
// };

// export default AdminJobs;


import React, { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AdminJobsTable from './AdminJobsTable';
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs';
import { setSearchJobByText } from '@/redux/jobSlice';
import { debounce } from 'lodash';

const AdminJobs = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useGetAllAdminJobs();

  // Debounce search input to prevent multiple calls
  const debouncedSearch = debounce((searchText) => {
    dispatch(setSearchJobByText(searchText));
  }, 500);

  useEffect(() => {
    if (input) {
      debouncedSearch(input); // Call debounced search
    } else {
      dispatch(setSearchJobByText('')); // Reset search if input is empty
    }
    return () => debouncedSearch.cancel(); // Clean up debounced function
  }, [input, dispatch]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Navbar />
      <div className='max-w-7xl mx-auto my-10'>
        <div className='flex items-center justify-between my-5'>
          <div className='flex items-center space-x-4'>
            <Input
              className="w-full md:w-80 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="Search by job title, company"
              onChange={(e) => setInput(e.target.value)}
              aria-label="Search for jobs by name or role"
            />
            <Button
              onClick={() => navigate("/admin/jobs/create")}
              className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              New Job
            </Button>
          </div>
        </div>
        <AdminJobsTable />
      </div>
    </div>
  );
};

export default AdminJobs;
