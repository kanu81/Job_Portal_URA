// import React, { useState } from 'react'
// import Navbar from '../shared/Navbar'
// import { Label } from '../ui/label'
// import { Input } from '../ui/input'
// import { Button } from '../ui/button'
// import { useSelector } from 'react-redux'
// import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
// import axios from 'axios'
// import { JOB_API_END_POINT } from '@/utils/constant'
// import { toast } from 'sonner'
// import { useNavigate } from 'react-router-dom'
// import { Loader2 } from 'lucide-react'

// const companyArray = [];

// const PostJob = () => {
//     const [input, setInput] = useState({
//         title: "",
//         description: "",
//         requirements: "",
//         salary: "",
//         location: "",
//         jobType: "",
//         experience: "",
//         position: 0,
//         companyId: ""
//     });
//     const [loading, setLoading]= useState(false);
//     const navigate = useNavigate();

//     const { companies } = useSelector(store => store.company);
//     const changeEventHandler = (e) => {
//         setInput({ ...input, [e.target.name]: e.target.value });
//     };

//     const selectChangeHandler = (value) => {
//         const selectedCompany = companies.find((company)=> company.name.toLowerCase() === value);
//         setInput({...input, companyId:selectedCompany._id});
//     };

//     const submitHandler = async (e) => {
//         e.preventDefault();
//         try {
//             setLoading(true);
//             const res = await axios.post(`${JOB_API_END_POINT}/post`, input,{
//                 headers:{
//                     'Content-Type':'application/json'
//                 },
//                 withCredentials:true
//             });
//             if(res.data.success){
//                 toast.success(res.data.message);
//                 navigate("/admin/jobs");
//             }
//         } catch (error) {
//             toast.error(error.response.data.message);
//         } finally{
//             setLoading(false);
//         }
//     }

//     return (
//         <div>
//             <Navbar />
//             <div className='flex items-center justify-center w-screen my-5'>
//                 <form onSubmit = {submitHandler} className='p-8 max-w-4xl border border-gray-200 shadow-lg rounded-md'>
//                     <div className='grid grid-cols-2 gap-2'>
//                         <div>
//                             <Label>Title</Label>
//                             <Input
//                                 type="text"
//                                 name="title"
//                                 value={input.title}
//                                 onChange={changeEventHandler}
//                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//                             />
//                         </div>
//                         <div>
//                             <Label>Description</Label>
//                             <Input
//                                 type="text"
//                                 name="description"
//                                 value={input.description}
//                                 onChange={changeEventHandler}
//                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//                             />
//                         </div>
//                         <div>
//                             <Label>Requirements</Label>
//                             <Input
//                                 type="text"
//                                 name="requirements"
//                                 value={input.requirements}
//                                 onChange={changeEventHandler}
//                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//                             />
//                         </div>
//                         <div>
//                             <Label>Salary</Label>
//                             <Input
//                                 type="text"
//                                 name="salary"
//                                 value={input.salary}
//                                 onChange={changeEventHandler}
//                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//                             />
//                         </div>
//                         <div>
//                             <Label>Location</Label>
//                             <Input
//                                 type="text"
//                                 name="location"
//                                 value={input.location}
//                                 onChange={changeEventHandler}
//                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//                             />
//                         </div>
//                         <div>
//                             <Label>Job Type</Label>
//                             <Input
//                                 type="text"
//                                 name="jobType"
//                                 value={input.jobType}
//                                 onChange={changeEventHandler}
//                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//                             />
//                         </div>
//                         <div>
//                             <Label>Experience Level</Label>
//                             <Input
//                                 type="text"
//                                 name="experience"
//                                 value={input.experience}
//                                 onChange={changeEventHandler}
//                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//                             />
//                         </div>
//                         <div>
//                             <Label>No of Postion</Label>
//                             <Input
//                                 type="number"
//                                 name="position"
//                                 value={input.position}
//                                 onChange={changeEventHandler}
//                                 className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
//                             />
//                         </div>
//                         {
//                             companies.length > 0 && (
//                                 <Select onValueChange={selectChangeHandler}>
//                                     <SelectTrigger className="w-[180px]">
//                                         <SelectValue placeholder="Select a Company" />
//                                     </SelectTrigger>
//                                     <SelectContent>
//                                         <SelectGroup>
//                                             {
//                                                 companies.map((company) => {
//                                                     return (
//                                                         <SelectItem value={company?.name?.toLowerCase()}>{company.name}</SelectItem>
//                                                     )
//                                                 })
//                                             }

//                                         </SelectGroup>
//                                     </SelectContent>
//                                 </Select>
//                             )
//                         }
//                     </div> 
//                     {
//                         loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="w-full my-4">Post New Job</Button>
//                     }
//                     {
//                         companies.length === 0 && <p className='text-xs text-red-600 font-bold text-center my-3'>*Please register a company first, before posting a jobs</p>
//                     }
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default PostJob

// import React, { useState } from 'react'
// import Navbar from '../shared/Navbar'
// import { Label } from '../ui/label'
// import { Input } from '../ui/input'
// import { Button } from '../ui/button'
// import { useSelector } from 'react-redux'
// import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
// import axios from 'axios'
// import { JOB_API_END_POINT } from '@/utils/constant'
// import { toast } from 'sonner'
// import { useNavigate } from 'react-router-dom'
// import { Loader2 } from 'lucide-react'

// const PostJob = () => {
//     const [input, setInput] = useState({
//         title: "",
//         description: "",
//         requirements: "",
//         salary: "",
//         location: "",
//         jobType: "",
//         experience: "",
//         position: 0,
//         companyId: ""
//     });
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();

//     const { companies } = useSelector(store => store.company);
//     const changeEventHandler = (e) => {
//         setInput({ ...input, [e.target.name]: e.target.value });
//     };

//     const selectChangeHandler = (value) => {
//         const selectedCompany = companies.find((company) => company.name.toLowerCase() === value);
//         setInput({ ...input, companyId: selectedCompany._id });
//     };

//     const submitHandler = async (e) => {
//         e.preventDefault();
//         try {
//             setLoading(true);
//             const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 withCredentials: true
//             });
//             if (res.data.success) {
//                 toast.success(res.data.message);
//                 navigate("/admin/jobs");
//             }
//         } catch (error) {
//             toast.error(error.response.data.message);
//         } finally {
//             setLoading(false);
//         }
//     }

//     return (
//         <div>
//             <Navbar />
//             <div className='flex items-center justify-center w-screen my-10'>
//                 <form onSubmit={submitHandler} className='p-8 max-w-4xl w-full bg-white shadow-xl rounded-lg border border-gray-300'>
//                     <h2 className='text-2xl font-semibold text-center text-gray-800 mb-6'>Post a New Job</h2>
//                     <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
//                         <div>
//                             <Label>Title</Label>
//                             <Input
//                                 type="text"
//                                 name="title"
//                                 value={input.title}
//                                 onChange={changeEventHandler}
//                                 className="focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full my-1 px-3 py-2 border rounded-md"
//                             />
//                         </div>
//                         <div>
//                             <Label>Description</Label>
//                             <Input
//                                 type="text"
//                                 name="description"
//                                 value={input.description}
//                                 onChange={changeEventHandler}
//                                 className="focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full my-1 px-3 py-2 border rounded-md"
//                             />
//                         </div>
//                         <div>
//                             <Label>Requirements</Label>
//                             <Input
//                                 type="text"
//                                 name="requirements"
//                                 value={input.requirements}
//                                 onChange={changeEventHandler}
//                                 className="focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full my-1 px-3 py-2 border rounded-md"
//                             />
//                         </div>
//                         <div>
//                             <Label>Salary</Label>
//                             <Input
//                                 type="text"
//                                 name="salary"
//                                 value={input.salary}
//                                 onChange={changeEventHandler}
//                                 className="focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full my-1 px-3 py-2 border rounded-md"
//                             />
//                         </div>
//                         <div>
//                             <Label>Location</Label>
//                             <Input
//                                 type="text"
//                                 name="location"
//                                 value={input.location}
//                                 onChange={changeEventHandler}
//                                 className="focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full my-1 px-3 py-2 border rounded-md"
//                             />
//                         </div>
//                         <div>
//                             <Label>Job Type</Label>
//                             <Input
//                                 type="text"
//                                 name="jobType"
//                                 value={input.jobType}
//                                 onChange={changeEventHandler}
//                                 className="focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full my-1 px-3 py-2 border rounded-md"
//                             />
//                         </div>
//                         <div>
//                             <Label>Experience Level</Label>
//                             <Input
//                                 type="text"
//                                 name="experience"
//                                 value={input.experience}
//                                 onChange={changeEventHandler}
//                                 className="focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full my-1 px-3 py-2 border rounded-md"
//                             />
//                         </div>
//                         <div>
//                             <Label>No of Position</Label>
//                             <Input
//                                 type="number"
//                                 name="position"
//                                 value={input.position}
//                                 onChange={changeEventHandler}
//                                 className="focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full my-1 px-3 py-2 border rounded-md"
//                             />
//                         </div>
//                         {
//                             companies.length > 0 && (
//                                 <div>
//                                     <Label>Company</Label>
//                                     <Select onValueChange={selectChangeHandler}>
//                                         <SelectTrigger className="w-full my-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600">
//                                             <SelectValue placeholder="Select a Company" />
//                                         </SelectTrigger>
//                                         <SelectContent>
//                                             <SelectGroup>
//                                                 {companies.map((company) => (
//                                                     <SelectItem value={company?.name?.toLowerCase()} key={company._id}>
//                                                         {company.name}
//                                                     </SelectItem>
//                                                 ))}
//                                             </SelectGroup>
//                                         </SelectContent>
//                                     </Select>
//                                 </div>
//                             )
//                         }
//                     </div>
//                     {
//                         loading
//                             ? <Button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md"><Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait</Button>
//                             : <Button type="submit" className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md">Post New Job</Button>
//                     }
//                     {
//                         companies.length === 0 && <p className='text-xs text-red-600 font-semibold text-center my-4'>*Please register a company first before posting a job</p>
//                     }
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default PostJob;


import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useSelector } from 'react-redux';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import axios from 'axios';
import { JOB_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

const PostJob = () => {
    const [input, setInput] = useState({
        title: "",
        description: "",
        requirements: "",
        salary: "",
        location: "",
        jobType: "",
        experience: "",
        position: 0,
        companyId: ""
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { companies } = useSelector(store => store.company);
    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const selectChangeHandler = (value) => {
        const selectedCompany = companies.find((company) => company.name.toLowerCase() === value);
        setInput({ ...input, companyId: selectedCompany._id });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            if (res.data.success) {
                toast.success(res.data.message);
                navigate("/admin/jobs");
            }
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center w-screen my-10'>
                <form onSubmit={submitHandler} className='p-8 max-w-4xl w-full bg-white dark:bg-gray-800 shadow-xl rounded-lg border border-gray-300 dark:border-gray-700'>
                    <h2 className='text-2xl font-semibold text-center text-gray-800 dark:text-gray-100 mb-6'>Post a New Job</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                        <div>
                            <Label className="text-gray-800 dark:text-gray-200">Title</Label>
                            <Input
                                type="text"
                                name="title"
                                value={input.title}
                                onChange={changeEventHandler}
                                className="focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full my-1 px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            />
                        </div>
                        <div>
                            <Label className="text-gray-800 dark:text-gray-200">Description</Label>
                            <Input
                                type="text"
                                name="description"
                                value={input.description}
                                onChange={changeEventHandler}
                                className="focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full my-1 px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            />
                        </div>
                        <div>
                            <Label className="text-gray-800 dark:text-gray-200">Requirements</Label>
                            <Input
                                type="text"
                                name="requirements"
                                value={input.requirements}
                                onChange={changeEventHandler}
                                className="focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full my-1 px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            />
                        </div>
                        <div>
                            <Label className="text-gray-800 dark:text-gray-200">Salary</Label>
                            <Input
                                type="text"
                                name="salary"
                                value={input.salary}
                                onChange={changeEventHandler}
                                className="focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full my-1 px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            />
                        </div>
                        <div>
                            <Label className="text-gray-800 dark:text-gray-200">Location</Label>
                            <Input
                                type="text"
                                name="location"
                                value={input.location}
                                onChange={changeEventHandler}
                                className="focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full my-1 px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            />
                        </div>
                        <div>
                            <Label className="text-gray-800 dark:text-gray-200">Job Type</Label>
                            <Input
                                type="text"
                                name="jobType"
                                value={input.jobType}
                                onChange={changeEventHandler}
                                className="focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full my-1 px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            />
                        </div>
                        <div>
                            <Label className="text-gray-800 dark:text-gray-200">Experience Level</Label>
                            <Input
                                type="text"
                                name="experience"
                                value={input.experience}
                                onChange={changeEventHandler}
                                className="focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full my-1 px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            />
                        </div>
                        <div>
                            <Label className="text-gray-800 dark:text-gray-200">No of Position</Label>
                            <Input
                                type="number"
                                name="position"
                                value={input.position}
                                onChange={changeEventHandler}
                                className="focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full my-1 px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            />
                        </div>
                        {
                            companies.length > 0 && (
                                <div>
                                    <Label className="text-gray-800 dark:text-gray-200">Company</Label>
                                    <Select onValueChange={selectChangeHandler}>
                                        <SelectTrigger className="w-full my-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:bg-gray-700 dark:text-white dark:border-gray-600">
                                            <SelectValue placeholder="Select a Company" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                {companies.map((company) => (
                                                    <SelectItem value={company?.name?.toLowerCase()} key={company._id}>
                                                        {company.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            )
                        }
                    </div>
                    {
                        loading
                            ? <Button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md"><Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait</Button>
                            : <Button type="submit" className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md">Post New Job</Button>
                    }
                    {
                        companies.length === 0 && <p className='text-xs text-red-600 font-semibold text-center my-4'>*Please register a company first before posting a job</p>
                    }
                </form>
            </div>
        </div>
    );
};

export default PostJob;
