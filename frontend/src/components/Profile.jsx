// import React, { useState } from 'react'
// import Navbar from './shared/Navbar'
// import { Avatar, AvatarImage } from './ui/avatar'
// import { Button } from './ui/button'
// import { Contact, Mail, Pen } from 'lucide-react'
// import { Badge } from './ui/badge'
// import { Label } from './ui/label'
// import AppliedJobTable from './AppliedJobTable'
// import UpdateProfileDialog from './UpdateProfileDialog'
// import { useSelector } from 'react-redux'
// import useGetAppliedJobs from '@/hooks/useGetAppliedJobs'

// // const skills = ["Html", "Css", "Javascript", "Reactjs"]
// const isResume = true;

// const Profile = () => {
//     useGetAppliedJobs();
//     const [open, setOpen] = useState(false);
//     const {user} = useSelector(store=>store.auth);
//     const avatarUrl = user?.profile?.profilePhoto || user?._json?.picture || 'default-avatar-url.jpg';
//     return (
//         <div>
//             <Navbar />
            
//             <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
//                 <div className='flex justify-between'>
//                     <div className='flex items-center gap-4'>
//                         <Avatar className="h-24 w-24">
//                             <AvatarImage src={avatarUrl} alt="profile" />
//                         </Avatar>
//                         <div>
//                             <h1 className='font-medium text-xl'>{user?.fullname}</h1>
//                             <p>{user?.profile?.bio}</p>
//                         </div>
//                     </div>
//                     <Button onClick={() => setOpen(true)} className="text-right" variant="outline"><Pen /></Button>
//                 </div>
//                 <div className='my-5'>
//                     <div className='flex items-center gap-3 my-2'>
//                         <Mail />
//                         <span>{user?.email}</span>
//                     </div>
//                     <div className='flex items-center gap-3 my-2'>
//                         <Contact />
//                         <span>{user?.phoneNumber}</span>
//                     </div>
//                 </div>
//                 <div className='my-5'>
//                     <h1>Skills</h1>
//                     <div className='flex items-center gap-1'>
//                         {
//                             user?.profile?.skills.length !== 0 ? user?.profile?.skills.map((item, index) => <Badge key={index}>{item}</Badge>) : <span>NA</span>
//                         }
//                     </div>
//                 </div>
//                 <div className='grid w-full max-w-sm items-center gap-1.5'>
//                     <Label className="text-md font-bold">Resume</Label>
//                     {
//                         isResume ? <a target='blank' href={user?.profile?.resume} className='text-blue-500 w-full hover:underline cursor-pointer'>{user?.profile?.resumeOriginalName}</a> : <span>NA</span>
//                     }
//                 </div>
//             </div>
//             <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
//                 <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
//                 {/* Applied Job Table   */}
//                 <AppliedJobTable />
//             </div>
//             <UpdateProfileDialog open={open} setOpen={setOpen}/>
//         </div>
//     )
// }

// export default Profile


// import React, { useState } from 'react';
// import Navbar from './shared/Navbar';
// import { Avatar, AvatarImage } from './ui/avatar';
// import { Button } from './ui/button';
// import { Contact, Mail, Pen } from 'lucide-react';
// import { Badge } from './ui/badge';
// import { Label } from './ui/label';
// import AppliedJobTable from './AppliedJobTable';
// import UpdateProfileDialog from './UpdateProfileDialog';
// import { useSelector } from 'react-redux';
// import useGetAppliedJobs from '@/hooks/useGetAppliedJobs';

// const isResume = true;

// const Profile = () => {
//     useGetAppliedJobs();
//     const [open, setOpen] = useState(false);
//     const { user } = useSelector(store => store.auth);
//     const avatarUrl = user?.profile?.profilePhoto || user?._json?.picture || 'default-avatar-url.jpg';

//     return (
//         <div className="bg-gray-50 min-h-screen">
//             <Navbar />
            
//             {/* Profile Card */}
//             <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-xl my-8 p-8">
//                 <div className="flex justify-between items-center">
//                     <div className="flex items-center gap-6">
//                         <Avatar className="h-28 w-28 border-2 border-gray-300 shadow-lg">
//                             <AvatarImage src={avatarUrl} alt="profile" />
//                         </Avatar>
//                         <div>
//                             <h1 className="text-2xl font-semibold text-gray-800">{user?.fullname}</h1>
//                             <p className="text-gray-600 mt-2">{user?.profile?.bio || 'No bio available'}</p>
//                         </div>
//                     </div>
//                     <Button onClick={() => setOpen(true)} className="text-right bg-blue-600 text-white hover:bg-blue-500 rounded-full p-2" variant="outline">
//                         <Pen className="h-5 w-5" />
//                     </Button>
//                 </div>

//                 {/* Contact Information */}
//                 <div className="my-6 space-y-3">
//                     <div className="flex items-center gap-3">
//                         <Mail className="text-gray-600" />
//                         <span className="text-gray-700">{user?.email}</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                         <Contact className="text-gray-600" />
//                         <span className="text-gray-700">{user?.phoneNumber}</span>
//                     </div>
//                 </div>

//                 {/* Skills Section */}
//                 <div className="my-6">
//                     <h2 className="text-xl font-semibold text-gray-800 mb-2">Skills</h2>
//                     <div className="flex flex-wrap gap-2">
//                         {user?.profile?.skills?.length ? (
//                             user?.profile?.skills.map((item, index) => (
//                                 <Badge key={index} className="bg-blue-100 text-blue-700">{item}</Badge>
//                             ))
//                         ) : (
//                             <span className="text-gray-500">No skills listed</span>
//                         )}
//                     </div>
//                 </div>

//                 {/* Resume Link */}
//                 <div className="my-6">
//                     <Label className="text-md font-semibold">Resume</Label>
//                     {isResume ? (
//                         <a
//                             target="_blank"
//                             href={user?.profile?.resume}
//                             className="text-blue-500 hover:underline cursor-pointer"
//                         >
//                             {user?.profile?.resumeOriginalName || 'Download Resume'}
//                         </a>
//                     ) : (
//                         <span className="text-gray-500">No resume uploaded</span>
//                     )}
//                 </div>
//             </div>

//             {/* Applied Jobs Section */}
//             <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-8">
//                 <h1 className="text-2xl font-bold text-gray-800 my-4">Applied Jobs</h1>
//                 <AppliedJobTable />
//             </div>

//             {/* Update Profile Dialog */}
//             <UpdateProfileDialog open={open} setOpen={setOpen} />
//         </div>
//     );
// };

// export default Profile;
import React, { useState } from 'react';
import Navbar from './shared/Navbar';
import { Avatar, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Contact, Mail, Pen } from 'lucide-react';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import AppliedJobTable from './AppliedJobTable';
import UpdateProfileDialog from './UpdateProfileDialog';
import { useSelector } from 'react-redux';
import useGetAppliedJobs from '@/hooks/useGetAppliedJobs';

const isResume = true;

const Profile = () => {
    useGetAppliedJobs();
    const [open, setOpen] = useState(false);
    const { user } = useSelector((store) => store.auth);
    const avatarUrl = user?.profile?.profilePhoto || user?._json?.picture || 'default-avatar-url.jpg';

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            <Navbar />

            {/* Profile Card */}
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl my-8 p-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <Avatar className="h-28 w-28 border-2 border-gray-300 dark:border-gray-600 shadow-lg">
                            <AvatarImage src={avatarUrl} alt="profile" />
                        </Avatar>
                        <div>
                            <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">{user?.fullname}</h1>
                            <p className="text-gray-600 dark:text-gray-300 mt-2">{user?.profile?.bio || 'No bio available'}</p>
                        </div>
                    </div>
                    <Button onClick={() => setOpen(true)} className="text-right bg-blue-600 text-white hover:bg-blue-500 rounded-full p-2" variant="outline">
                        <Pen className="h-5 w-5" />
                    </Button>
                </div>

                {/* Contact Information */}
                <div className="my-6 space-y-3">
                    <div className="flex items-center gap-3">
                        <Mail className="text-gray-600 dark:text-gray-300" />
                        <span className="text-gray-700 dark:text-gray-200">{user?.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Contact className="text-gray-600 dark:text-gray-300" />
                        <span className="text-gray-700 dark:text-gray-200">{user?.phoneNumber}</span>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="my-6">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Skills</h2>
                    <div className="flex flex-wrap gap-2">
                        {user?.profile?.skills?.length ? (
                            user?.profile?.skills.map((item, index) => (
                                <Badge key={index} className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200">
                                    {item}
                                </Badge>
                            ))
                        ) : (
                            <span className="text-gray-500 dark:text-gray-400">No skills listed</span>
                        )}
                    </div>
                </div>

                {/* Resume Link */}
                <div className="my-6">
                    <Label className="text-md font-semibold text-gray-800 dark:text-gray-200">Resume</Label>
                    {isResume ? (
                        <a
                            target="_blank"
                            href={user?.profile?.resume}
                            className="text-blue-500 dark:text-blue-300 hover:underline cursor-pointer"
                        >
                            {user?.profile?.resumeOriginalName || 'Download Resume'}
                        </a>
                    ) : (
                        <span className="text-gray-500 dark:text-gray-400">No resume uploaded</span>
                    )}
                </div>
            </div>

            {/* Applied Jobs Section */}
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 my-4">Applied Jobs</h1>
                <AppliedJobTable />
            </div>

            {/* Update Profile Dialog */}
            <UpdateProfileDialog open={open} setOpen={setOpen} />
        </div>
    );
};

export default Profile;
