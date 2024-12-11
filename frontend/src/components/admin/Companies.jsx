// import React, { useEffect, useState } from 'react'
// import Navbar from '../shared/Navbar'
// import { Input } from '../ui/input'
// import { Button } from '../ui/button'
// import CompaniesTable from './CompaniesTable'
// import { useNavigate } from 'react-router-dom'
// import useGetAllCompanies from '@/hooks/useGetAllCompanies'
// import { useDispatch } from 'react-redux'
// import { setSearchCompanyByText } from '@/redux/companySlice'

// const Companies = () => {
//     useGetAllCompanies();
//     const [input, setInput] = useState("");
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     useEffect(()=>{
//         dispatch(setSearchCompanyByText(input));
//     },[input]);
//     return (
//         <div>
//             <Navbar />
//             <div className='max-w-6xl mx-auto my-10'>
//                 <div className='flex items-center justify-between my-5'>
//                     <Input
//                         className="w-fit"
//                         placeholder="Filter by name"
//                         onChange={(e) => setInput(e.target.value)}
//                     />
//                     <Button onClick={() => navigate("/admin/companies/create")}>New Company</Button>
//                 </div>
//                 <CompaniesTable/>
//             </div>
//         </div>
//     )
// }

// export default Companies

// import React, { useEffect, useState } from 'react'
// import Navbar from '../shared/Navbar'
// import { Input } from '../ui/input'
// import { Button } from '../ui/button'
// import CompaniesTable from './CompaniesTable'
// import { useNavigate } from 'react-router-dom'
// import useGetAllCompanies from '@/hooks/useGetAllCompanies'
// import { useDispatch } from 'react-redux'
// import { setSearchCompanyByText } from '@/redux/companySlice'

// const Companies = () => {
//     useGetAllCompanies();
//     const [input, setInput] = useState("");
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(setSearchCompanyByText(input));
//     }, [input]);

//     return (
//         <div className="bg-gray-50 min-h-screen">
//             <Navbar />
//             <div className="max-w-7xl mx-auto my-10 p-5">
//                 <div className="flex items-center justify-between mb-6 bg-white shadow-md rounded-lg p-5">
//                     <Input
//                         className="w-1/2 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         placeholder="Filter by name"
//                         onChange={(e) => setInput(e.target.value)}
//                     />
//                     <Button 
//                         onClick={() => navigate("/admin/companies/create")}
//                         className="ml-5 px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors">
//                         New Company
//                     </Button>
//                 </div>
//                 <div className="bg-white shadow-md rounded-lg p-6">
//                     <CompaniesTable />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Companies;


import React, { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import CompaniesTable from './CompaniesTable';
import { useNavigate } from 'react-router-dom';
import useGetAllCompanies from '@/hooks/useGetAllCompanies';
import { useDispatch } from 'react-redux';
import { setSearchCompanyByText } from '@/redux/companySlice';

const Companies = () => {
    useGetAllCompanies();
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSearchCompanyByText(input));
    }, [input]);

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            <Navbar />
            <div className="max-w-7xl mx-auto my-10 p-5">
                <div className="flex items-center justify-between mb-6 bg-white dark:bg-gray-800 shadow-md rounded-lg p-5">
                    <Input
                        className="w-1/2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-400"
                        placeholder="Filter by name"
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button 
                        onClick={() => navigate("/admin/companies/create")}
                        className="ml-5 px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600">
                        New Company
                    </Button>
                </div>
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                    <CompaniesTable />
                </div>
            </div>
        </div>
    );
}

export default Companies;
