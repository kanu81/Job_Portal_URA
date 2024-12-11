// import React, { useEffect, useState } from 'react'
// import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
// import { Avatar, AvatarImage } from '../ui/avatar'
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
// import { Edit2, Eye, MoreHorizontal } from 'lucide-react'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'

// const AdminJobsTable = () => { 
//     const {allAdminJobs, searchJobByText} = useSelector(store=>store.job);

//     const [filterJobs, setFilterJobs] = useState(allAdminJobs);
//     const navigate = useNavigate();

//     useEffect(()=>{ 
//         console.log('called');
//         const filteredJobs = allAdminJobs.filter((job)=>{
//             if(!searchJobByText){
//                 return true;
//             };
//             return job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) || job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase());

//         });
//         setFilterJobs(filteredJobs);
//     },[allAdminJobs,searchJobByText])
//     return (
//         <div>
//             <Table>
//                 <TableCaption>A list of your recent  posted jobs</TableCaption>
//                 <TableHeader>
//                     <TableRow>
//                         <TableHead>Company Name</TableHead>
//                         <TableHead>Role</TableHead>
//                         <TableHead>Date</TableHead>
//                         <TableHead className="text-right">Action</TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {
//                         filterJobs?.map((job) => (
//                             <tr>
//                                 <TableCell>{job?.company?.name}</TableCell>
//                                 <TableCell>{job?.title}</TableCell>
//                                 <TableCell>{job?.createdAt.split("T")[0]}</TableCell>
//                                 <TableCell className="text-right cursor-pointer">
//                                     <Popover>
//                                         <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
//                                         <PopoverContent className="w-32">
//                                             <div onClick={()=> navigate(`/admin/companies/${job._id}`)} className='flex items-center gap-2 w-fit cursor-pointer'>
//                                                 <Edit2 className='w-4' />
//                                                 <span>Edit</span>
//                                             </div>
//                                             <div onClick={()=> navigate(`/admin/jobs/${job._id}/applicants`)} className='flex items-center w-fit gap-2 cursor-pointer mt-2'>
//                                                 <Eye className='w-4'/>
//                                                 <span>Applicants</span>
//                                             </div>
//                                         </PopoverContent>
//                                     </Popover>
//                                 </TableCell>
//                             </tr>

//                         ))
//                     }
//                 </TableBody>
//             </Table>
//         </div>
//     )
// }

// export default AdminJobsTable

// import React, { useEffect, useState } from 'react';
// import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
// import { Avatar, AvatarImage } from '../ui/avatar';
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
// import { Edit2, Eye, MoreHorizontal } from 'lucide-react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// const AdminJobsTable = () => {
//   const { allAdminJobs, searchJobByText } = useSelector(store => store.job);
//   const [filterJobs, setFilterJobs] = useState(allAdminJobs);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const filteredJobs = allAdminJobs.filter((job) => {
//       if (!searchJobByText) {
//         return true;
//       }
//       return (
//         job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) ||
//         job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase())
//       );
//     });
//     setFilterJobs(filteredJobs);
//   }, [allAdminJobs, searchJobByText]);

//   return (
//     <div className="overflow-x-auto">
//       <Table className="w-full table-auto border-collapse">
//         <TableCaption className="text-lg font-semibold text-gray-700 mb-4">Recent Posted Jobs</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead className="text-left text-gray-800 font-medium">Company Name</TableHead>
//             <TableHead className="text-left text-gray-800 font-medium">Role</TableHead>
//             <TableHead className="text-left text-gray-800 font-medium">Date</TableHead>
//             <TableHead className="text-right text-gray-800 font-medium">Action</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {filterJobs?.map((job) => (
//             <TableRow key={job._id} className="border-b hover:bg-gray-100">
//               <TableCell className="py-4 px-6 text-gray-800">{job?.company?.name}</TableCell>
//               <TableCell className="py-4 px-6 text-gray-600">{job?.title}</TableCell>
//               <TableCell className="py-4 px-6 text-gray-500">{job?.createdAt.split('T')[0]}</TableCell>
//               <TableCell className="py-4 px-6 text-right">
//                 <Popover>
//                   <PopoverTrigger>
//                     <MoreHorizontal className="text-gray-600 hover:text-gray-800 cursor-pointer" />
//                   </PopoverTrigger>
//                   <PopoverContent className="w-40 p-2 bg-white shadow-lg rounded-md">
//                     <div
//                       onClick={() => navigate(`/admin/companies/${job._id}`)}
//                       className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-200 rounded-md"
//                     >
//                       <Edit2 className="w-4 h-4 text-gray-600" />
//                       <span className="text-gray-700">Edit</span>
//                     </div>
//                     <div
//                       onClick={() => navigate(`/admin/jobs/${job._id}/applicants`)}
//                       className="flex items-center gap-2 p-2 cursor-pointer mt-2 hover:bg-gray-200 rounded-md"
//                     >
//                       <Eye className="w-4 h-4 text-gray-600" />
//                       <span className="text-gray-700">Applicants</span>
//                     </div>
//                   </PopoverContent>
//                 </Popover>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default AdminJobsTable;



import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Edit2, Eye, MoreHorizontal } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AdminJobsTable = () => {
  const { allAdminJobs, searchJobByText } = useSelector(store => store.job);
  const [filterJobs, setFilterJobs] = useState(allAdminJobs);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredJobs = allAdminJobs.filter((job) => {
      if (!searchJobByText) {
        return true;
      }
      return (
        job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) ||
        job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase())
      );
    });
    setFilterJobs(filteredJobs);
  }, [allAdminJobs, searchJobByText]);

  return (
    <div className="overflow-x-auto">
      <Table className="w-full table-auto border-collapse">
        <TableCaption className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Recent Posted Jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-left text-gray-800 dark:text-gray-200 font-medium">Company Name</TableHead>
            <TableHead className="text-left text-gray-800 dark:text-gray-200 font-medium">Role</TableHead>
            <TableHead className="text-left text-gray-800 dark:text-gray-200 font-medium">Date</TableHead>
            <TableHead className="text-right text-gray-800 dark:text-gray-200 font-medium">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterJobs?.map((job) => (
            <TableRow key={job._id} className="border-b hover:bg-gray-100 dark:hover:bg-gray-700">
              <TableCell className="py-4 px-6 text-gray-800 dark:text-gray-200">{job?.company?.name}</TableCell>
              <TableCell className="py-4 px-6 text-gray-600 dark:text-gray-400">{job?.title}</TableCell>
              <TableCell className="py-4 px-6 text-gray-500 dark:text-gray-500">{job?.createdAt.split('T')[0]}</TableCell>
              <TableCell className="py-4 px-6 text-right">
                <Popover>
                  <PopoverTrigger>
                    <MoreHorizontal className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 cursor-pointer" />
                  </PopoverTrigger>
                  <PopoverContent className="w-40 p-2 bg-white shadow-lg rounded-md dark:bg-gray-800 dark:text-white">
                    <div
                      onClick={() => navigate(`/admin/companies/${job._id}`)}
                      className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md"
                    >
                      <Edit2 className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                      <span className="text-gray-700 dark:text-gray-100">Edit</span>
                    </div>
                    <div
                      onClick={() => navigate(`/admin/jobs/${job._id}/applicants`)}
                      className="flex items-center gap-2 p-2 cursor-pointer mt-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md"
                    >
                      <Eye className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                      <span className="text-gray-700 dark:text-gray-100">Applicants</span>
                    </div>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminJobsTable;
