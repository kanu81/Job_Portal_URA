// import React from 'react'
// import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
// import { MoreHorizontal } from 'lucide-react';
// import { useSelector } from 'react-redux';
// import { toast } from 'sonner';
// import { APPLICATION_API_END_POINT } from '@/utils/constant';
// import axios from 'axios';

// const shortlistingStatus = ["Accepted", "Rejected"];

// const ApplicantsTable = () => {
//     const { applicants } = useSelector(store => store.application);

//     const statusHandler = async (status, id) => {
//         console.log('called');
//         try {
//             axios.defaults.withCredentials = true;
//             const res = await axios.post(`${APPLICATION_API_END_POINT}/status/${id}/update`, { status });
//             console.log(res);
//             if (res.data.success) {
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             toast.error(error.response.data.message);
//         }
//     }

//     return (
//         <div>
//             <Table>
//                 <TableCaption>A list of your recent applied user</TableCaption>
//                 <TableHeader>
//                     <TableRow>
//                         <TableHead>FullName</TableHead>
//                         <TableHead>Email</TableHead>
//                         <TableHead>Contact</TableHead>
//                         <TableHead>Resume</TableHead>
//                         <TableHead>Date</TableHead>
//                         <TableHead className="text-right">Action</TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {
//                         applicants && applicants?.applications?.map((item) => (
//                             <tr key={item._id}>
//                                 <TableCell>{item?.applicant?.fullname}</TableCell>
//                                 <TableCell>{item?.applicant?.email}</TableCell>
//                                 <TableCell>{item?.applicant?.phoneNumber}</TableCell>
//                                 <TableCell >
//                                     {
//                                         item.applicant?.profile?.resume ? <a className="text-blue-600 cursor-pointer" href={item?.applicant?.profile?.resume} target="_blank" rel="noopener noreferrer">{item?.applicant?.profile?.resumeOriginalName}</a> : <span>NA</span>
//                                     }
//                                 </TableCell>
//                                 <TableCell>{item?.applicant.createdAt.split("T")[0]}</TableCell>
//                                 <TableCell className="float-right cursor-pointer">
//                                     <Popover>
//                                         <PopoverTrigger>
//                                             <MoreHorizontal />
//                                         </PopoverTrigger>
//                                         <PopoverContent className="w-32">
//                                             {
//                                                 shortlistingStatus.map((status, index) => {
//                                                     return (
//                                                         <div onClick={() => statusHandler(status, item?._id)} key={index} className='flex w-fit items-center my-2 cursor-pointer'>
//                                                             <span>{status}</span>
//                                                         </div>
//                                                     )
//                                                 })
//                                             }
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

// export default ApplicantsTable


// import React from 'react'
// import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
// import { MoreHorizontal } from 'lucide-react';
// import { useSelector } from 'react-redux';
// import { toast } from 'sonner';
// import { APPLICATION_API_END_POINT } from '@/utils/constant';
// import axios from 'axios';

// const shortlistingStatus = ["Accepted", "Rejected"];

// const ApplicantsTable = () => {
//     const { applicants } = useSelector(store => store.application);

//     const statusHandler = async (status, id) => {
//         try {
//             axios.defaults.withCredentials = true;
//             const res = await axios.post(`${APPLICATION_API_END_POINT}/status/${id}/update`, { status });
//             if (res.data.success) {
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             toast.error(error.response.data.message);
//         }
//     }

//     return (
//         <div className="overflow-x-auto shadow-lg border rounded-lg">
//             <Table className="table-auto w-full text-sm">
//                 <TableCaption className="text-lg font-semibold mb-4">List of Recent Applied Users</TableCaption>
//                 <TableHeader className="bg-gray-100">
//                     <TableRow>
//                         <TableHead className="text-left px-4 py-2">Full Name</TableHead>
//                         <TableHead className="text-left px-4 py-2">Email</TableHead>
//                         <TableHead className="text-left px-4 py-2">Contact</TableHead>
//                         <TableHead className="text-left px-4 py-2">Resume</TableHead>
//                         <TableHead className="text-left px-4 py-2">Date</TableHead>
//                         <TableHead className="text-right px-4 py-2">Action</TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody className="divide-y divide-gray-200">
//                     {
//                         applicants && applicants?.applications?.map((item) => (
//                             <TableRow key={item._id} className="hover:bg-gray-50 transition-colors">
//                                 <TableCell className="px-4 py-2">{item?.applicant?.fullname}</TableCell>
//                                 <TableCell className="px-4 py-2">{item?.applicant?.email}</TableCell>
//                                 <TableCell className="px-4 py-2">{item?.applicant?.phoneNumber}</TableCell>
//                                 <TableCell className="px-4 py-2">
//                                     {
//                                         item.applicant?.profile?.resume ? 
//                                             <a className="text-blue-600 hover:text-blue-800 cursor-pointer" href={item?.applicant?.profile?.resume} target="_blank" rel="noopener noreferrer">
//                                                 {item?.applicant?.profile?.resumeOriginalName}
//                                             </a> : 
//                                             <span className="text-gray-500">NA</span>
//                                     }
//                                 </TableCell>
//                                 <TableCell className="px-4 py-2">{item?.applicant.createdAt.split("T")[0]}</TableCell>
//                                 <TableCell className="px-4 py-2 text-right">
//                                     <Popover>
//                                         <PopoverTrigger>
//                                             <MoreHorizontal className="text-gray-500 hover:text-gray-800 cursor-pointer" />
//                                         </PopoverTrigger>
//                                         <PopoverContent className="w-32 p-2 bg-white shadow-lg rounded-lg">
//                                             {
//                                                 shortlistingStatus.map((status, index) => (
//                                                     <div 
//                                                         key={index} 
//                                                         onClick={() => statusHandler(status, item?._id)} 
//                                                         className='flex items-center gap-2 cursor-pointer py-1 px-2 hover:bg-gray-100 rounded'>
//                                                             <span className="text-sm font-medium">{status}</span>
//                                                     </div>
//                                                 ))
//                                             }
//                                         </PopoverContent>
//                                     </Popover>
//                                 </TableCell>
//                             </TableRow>
//                         ))
//                     }
//                 </TableBody>
//             </Table>
//         </div>
//     )
// }

// export default ApplicantsTable;


// import React from 'react';
// import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
// import { MoreHorizontal } from 'lucide-react';
// import { useSelector } from 'react-redux';
// import { toast } from 'sonner';
// import { APPLICATION_API_END_POINT } from '@/utils/constant';
// import axios from 'axios';

// const shortlistingStatus = ["Accepted", "Rejected"];

// const ApplicantsTable = () => {
//     const { applicants } = useSelector(store => store.application);

//     const statusHandler = async (status, id) => {
//         try {
//             axios.defaults.withCredentials = true;
//             const res = await axios.post(`${APPLICATION_API_END_POINT}/status/${id}/update`, { status });
//             if (res.data.success) {
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             toast.error(error.response.data.message);
//         }
//     };

//     return (
//         <div className="overflow-x-auto shadow-lg border rounded-lg">
//             <Table className="table-auto w-full text-sm">
//                 <TableCaption className="text-lg font-semibold mb-4">List of Recent Applied Users</TableCaption>
//                 <TableHeader className="bg-gray-100">
//                     <TableRow>
//                         <TableHead className="text-left px-4 py-2">Full Name</TableHead>
//                         <TableHead className="text-left px-4 py-2">Email</TableHead>
//                         <TableHead className="text-left px-4 py-2">Contact</TableHead>
//                         <TableHead className="text-left px-4 py-2">Resume</TableHead>
//                         <TableHead className="text-left px-4 py-2">Date</TableHead>
//                         <TableHead className="text-right px-4 py-2">Action</TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody className="divide-y divide-gray-200">
//                     {
//                         applicants?.applications?.map((item) => (
//                             <TableRow key={item._id} className="hover:bg-gray-50 transition-colors">
//                                 <TableCell className="px-4 py-2">{item?.applicant?.fullname}</TableCell>
//                                 <TableCell className="px-4 py-2">{item?.applicant?.email}</TableCell>
//                                 <TableCell className="px-4 py-2">{item?.applicant?.phoneNumber}</TableCell>
//                                 <TableCell className="px-4 py-2">
//                                     {
//                                         item.applicant?.profile?.resume ? 
//                                             <a className="text-blue-600 hover:text-blue-800 cursor-pointer" href={item?.applicant?.profile?.resume} target="_blank" rel="noopener noreferrer">
//                                                 {item?.applicant?.profile?.resumeOriginalName}
//                                             </a> : 
//                                             <span className="text-gray-500">NA</span>
//                                     }
//                                 </TableCell>
//                                 <TableCell className="px-4 py-2">{item?.applicant.createdAt.split("T")[0]}</TableCell>
//                                 <TableCell className="px-4 py-2 text-right">
//                                     <Popover>
//                                         <PopoverTrigger>
//                                             <MoreHorizontal className="text-gray-500 hover:text-gray-800 cursor-pointer" />
//                                         </PopoverTrigger>
//                                         <PopoverContent className="w-32 p-2 bg-white shadow-lg rounded-lg">
//                                             {
//                                                 shortlistingStatus.map((status, index) => (
//                                                     <div 
//                                                         key={index} 
//                                                         onClick={() => statusHandler(status, item?._id)} 
//                                                         className='flex items-center gap-2 cursor-pointer py-1 px-2 hover:bg-gray-100 rounded'>
//                                                             <span className="text-sm font-medium">{status}</span>
//                                                     </div>
//                                                 ))
//                                             }
//                                         </PopoverContent>
//                                     </Popover>
//                                 </TableCell>
//                             </TableRow>
//                         ))
//                     }
//                 </TableBody>
//             </Table>
//         </div>
//     );
// };

// export default ApplicantsTable;


import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { MoreHorizontal } from 'lucide-react';
import { useSelector } from 'react-redux';
import { toast } from 'sonner';
import { APPLICATION_API_END_POINT } from '@/utils/constant';
import axios from 'axios';

const shortlistingStatus = ["Accepted", "Rejected"];

const ApplicantsTable = () => {
    const { applicants } = useSelector((store) => store.application);

    const statusHandler = async (status, id) => {
        try {
            axios.defaults.withCredentials = true;
            const res = await axios.post(`${APPLICATION_API_END_POINT}/status/${id}/update`, { status });
            if (res.data.success) {
                toast.success(res.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <div className="overflow-x-auto shadow-lg border rounded-lg dark:border-gray-700">
            <Table className="table-auto w-full text-sm">
                <TableCaption className="text-lg font-semibold mb-4 dark:text-gray-300">
                    List of Recent Applied Users
                </TableCaption>
                <TableHeader className="bg-gray-100 dark:bg-gray-800">
                    <TableRow>
                        <TableHead className="text-left px-4 py-2 dark:text-gray-300">Full Name</TableHead>
                        <TableHead className="text-left px-4 py-2 dark:text-gray-300">Email</TableHead>
                        <TableHead className="text-left px-4 py-2 dark:text-gray-300">Contact</TableHead>
                        <TableHead className="text-left px-4 py-2 dark:text-gray-300">Resume</TableHead>
                        <TableHead className="text-left px-4 py-2 dark:text-gray-300">Date</TableHead>
                        <TableHead className="text-right px-4 py-2 dark:text-gray-300">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {applicants?.applications?.map((item) => (
                        <TableRow
                            key={item._id}
                            className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                            <TableCell className="px-4 py-2 dark:text-gray-300">
                                {item?.applicant?.fullname}
                            </TableCell>
                            <TableCell className="px-4 py-2 dark:text-gray-300">
                                {item?.applicant?.email}
                            </TableCell>
                            <TableCell className="px-4 py-2 dark:text-gray-300">
                                {item?.applicant?.phoneNumber}
                            </TableCell>
                            <TableCell className="px-4 py-2">
                                {item.applicant?.profile?.resume ? (
                                    <a
                                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500 cursor-pointer"
                                        href={item?.applicant?.profile?.resume}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {item?.applicant?.profile?.resumeOriginalName}
                                    </a>
                                ) : (
                                    <span className="text-gray-500 dark:text-gray-400">NA</span>
                                )}
                            </TableCell>
                            <TableCell className="px-4 py-2 dark:text-gray-300">
                                {item?.applicant?.createdAt.split("T")[0]}
                            </TableCell>
                            <TableCell className="px-4 py-2 text-right">
                                <Popover>
                                    <PopoverTrigger>
                                        <MoreHorizontal className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer" />
                                    </PopoverTrigger>
                                    <PopoverContent className="w-32 p-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
                                        {shortlistingStatus.map((status, index) => (
                                            <div
                                                key={index}
                                                onClick={() => statusHandler(status, item?._id)}
                                                className="flex items-center gap-2 cursor-pointer py-1 px-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                                            >
                                                <span className="text-sm font-medium dark:text-gray-300">
                                                    {status}
                                                </span>
                                            </div>
                                        ))}
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

export default ApplicantsTable;
