// import React, { useEffect, useState } from 'react'
// import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
// import { Avatar, AvatarImage } from '../ui/avatar'
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
// import { Edit2, MoreHorizontal } from 'lucide-react'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'

// const CompaniesTable = () => {
//     const { companies, searchCompanyByText } = useSelector(store => store.company);
//     const [filterCompany, setFilterCompany] = useState(companies);
//     const navigate = useNavigate();
//     useEffect(()=>{
//         const filteredCompany = companies.length >= 0 && companies.filter((company)=>{
//             if(!searchCompanyByText){
//                 return true
//             };
//             return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase());

//         });
//         setFilterCompany(filteredCompany);
//     },[companies,searchCompanyByText])
//     return (
//         <div>
//             <Table>
//                 <TableCaption>A list of your recent registered companies</TableCaption>
//                 <TableHeader>
//                     <TableRow>
//                         <TableHead>Logo</TableHead>
//                         <TableHead>Name</TableHead>
//                         <TableHead>Date</TableHead>
//                         <TableHead className="text-right">Action</TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {
//                         filterCompany?.map((company) => (
//                             <tr>
//                                 <TableCell>
//                                     <Avatar>
//                                         <AvatarImage src={company.logo}/>
//                                     </Avatar>
//                                 </TableCell>
//                                 <TableCell>{company.name}</TableCell>
//                                 <TableCell>{company.createdAt.split("T")[0]}</TableCell>
//                                 <TableCell className="text-right cursor-pointer">
//                                     <Popover>
//                                         <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
//                                         <PopoverContent className="w-32">
//                                             <div onClick={()=> navigate(`/admin/companies/${company._id}`)} className='flex items-center gap-2 w-fit cursor-pointer'>
//                                                 <Edit2 className='w-4' />
//                                                 <span>Edit</span>
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

// export default CompaniesTable

// import React, { useEffect, useState } from 'react'
// import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
// import { Avatar, AvatarImage } from '../ui/avatar'
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
// import { Edit2, MoreHorizontal } from 'lucide-react'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'

// const CompaniesTable = () => {
//     const { companies, searchCompanyByText } = useSelector(store => store.company);
//     const [filterCompany, setFilterCompany] = useState(companies);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const filteredCompany = companies.filter((company) => {
//             if (!searchCompanyByText) {
//                 return true;
//             }
//             return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase());
//         });
//         setFilterCompany(filteredCompany);
//     }, [companies, searchCompanyByText]);

//     return (
//         <div>
//             <Table>
//                 <TableCaption>A list of your recent registered companies</TableCaption>
//                 <TableHeader>
//                     <TableRow>
//                         <TableHead>Logo</TableHead>
//                         <TableHead>Name</TableHead>
//                         <TableHead>Date</TableHead>
//                         <TableHead className="text-right">Action</TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {
//                         filterCompany.map((company) => (
//                             <TableRow key={company._id} className="hover:bg-gray-50 transition-all duration-200">
//                                 <TableCell>
//                                     <Avatar className="w-12 h-12">
//                                         <AvatarImage 
//                                             src={company.logo || 'default-avatar.png'} 
//                                             alt={company.name} 
//                                             className="rounded-full object-cover" />
//                                     </Avatar>
//                                 </TableCell>
//                                 <TableCell className="text-gray-900">{company.name}</TableCell>
//                                 <TableCell className="text-gray-500">{company.createdAt.split("T")[0]}</TableCell>
//                                 <TableCell className="text-right cursor-pointer">
//                                     <Popover>
//                                         <PopoverTrigger>
//                                             <MoreHorizontal className="text-gray-600 hover:text-gray-800 transition-all" />
//                                         </PopoverTrigger>
//                                         <PopoverContent className="w-32">
//                                             <div 
//                                                 onClick={() => navigate(`/admin/companies/${company._id}`)} 
//                                                 className='flex items-center gap-2 w-fit cursor-pointer p-2 hover:bg-gray-100 rounded'>
//                                                 <Edit2 className='w-4 text-gray-500' />
//                                                 <span>Edit</span>
//                                             </div>
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

// export default CompaniesTable;
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Edit2, MoreHorizontal } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CompaniesTable = () => {
    const { companies, searchCompanyByText } = useSelector(store => store.company);
    const [filterCompany, setFilterCompany] = useState(companies);
    const navigate = useNavigate();

    useEffect(() => {
        const filteredCompany = companies.filter((company) => {
            if (!searchCompanyByText) {
                return true;
            }
            return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase());
        });
        setFilterCompany(filteredCompany);
    }, [companies, searchCompanyByText]);

    return (
        <div className="overflow-x-auto bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <Table className="text-gray-800 dark:text-gray-300">
                <TableCaption className="text-gray-700 dark:text-gray-400">A list of your recent registered companies</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-gray-700 dark:text-gray-300">Logo</TableHead>
                        <TableHead className="text-gray-700 dark:text-gray-300">Name</TableHead>
                        <TableHead className="text-gray-700 dark:text-gray-300">Date</TableHead>
                        <TableHead className="text-right text-gray-700 dark:text-gray-300">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        filterCompany.map((company) => (
                            <TableRow key={company._id} className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200">
                                <TableCell>
                                    <Avatar className="w-12 h-12">
                                        <AvatarImage 
                                            src={company.logo || 'default-avatar.png'} 
                                            alt={company.name} 
                                            className="rounded-full object-cover" />
                                    </Avatar>
                                </TableCell>
                                <TableCell className="text-gray-900 dark:text-gray-300">{company.name}</TableCell>
                                <TableCell className="text-gray-500 dark:text-gray-400">{company.createdAt.split("T")[0]}</TableCell>
                                <TableCell className="text-right cursor-pointer">
                                    <Popover>
                                        <PopoverTrigger>
                                            <MoreHorizontal className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-400 transition-all" />
                                        </PopoverTrigger>
                                        <PopoverContent className="w-32 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-300">
                                            <div 
                                                onClick={() => navigate(`/admin/companies/${company._id}`)} 
                                                className='flex items-center gap-2 w-fit cursor-pointer p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded'>
                                                <Edit2 className='w-4 text-gray-500 dark:text-gray-300' />
                                                <span>Edit</span>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    );
}

export default CompaniesTable;
