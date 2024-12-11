// import React from 'react'
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
// import { Button } from '../ui/button'
// import { Avatar, AvatarImage } from '../ui/avatar'
// import { LogOut, User2 } from 'lucide-react'
// import { Link, useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import axios from 'axios'
// import { USER_API_END_POINT } from '@/utils/constant'
// import { setUser } from '@/redux/authSlice'
// import { toast } from 'sonner'

// const Navbar = () => {
//     const { user } = useSelector(store => store.auth);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const logoutHandler = async () => {
//         try {
//             const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
//             if (res.data.success) {
//                 dispatch(setUser(null));
//                 navigate("/");
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.response.data.message);
//         }
//     }
//     return (
//         <div className='bg-white border-b border-gray-900 '>
//             <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
//                 <div>
//                     <h1 className='text-2xl  font-bold text-[#FF0000]'>U<span className='text-[#000000]'>Placement</span></h1>
//                 </div>
//                 <div className='flex items-center gap-12 '>
//                     <ul className='flex font-medium items-center gap-5'>
//                         {
//                             user && user.role === 'recruiter' ? (
//                                 <>
//                                     <li><Link to="/admin/companies">Companies</Link></li>
//                                     <li><Link to="/admin/jobs">Jobs</Link></li>
//                                 </>
//                             ) : (
//                                 <>
//                                     <li className='text-[#000000]'><Link to="/">Home</Link></li>
//                                     <li className='text-[#000000]'><Link to="/jobs">Jobs</Link></li>
//                                     <li className='text-[#000000]'><Link to="/browse">Browse</Link></li>
//                                 </>
//                             )
//                         }


//                     </ul>
//                     {
//                         !user ? (
//                             <div className='flex items-center gap-2'>
//                                 <Link to="/login"><Button variant="outline" className='rounded-full px-6 py-2 border-black text-black'>Login</Button></Link>
//                                 <Link to="/signup"><Button className='bg-blue-400 hover:bg-blue-500 text-white rounded-full px-6 py-2'>Signup</Button></Link>
//                             </div>
//                         ) : (
//                             <Popover>
//                                 <PopoverTrigger asChild>
//                                     <Avatar className="cursor-pointer">
//                                         <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
//                                     </Avatar>
//                                 </PopoverTrigger>
//                                 <PopoverContent className="w-80">
//                                     <div className=''>
//                                         <div className='flex gap-2 space-y-2'>
//                                             <Avatar className="cursor-pointer">
//                                                 <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
//                                             </Avatar>
//                                             <div>
//                                                 <h4 className='font-medium'>{user?.fullname}</h4>
//                                                 <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
//                                             </div>
//                                         </div>
//                                         <div className='flex flex-col my-2 text-gray-600'>
//                                             {
//                                                 user && user.role === 'student' && (
//                                                     <div className='flex w-fit items-center gap-2 cursor-pointer'>
//                                                         <User2 />
//                                                         <Button variant="link"> <Link to="/profile">View Profile</Link></Button>
//                                                     </div>
//                                                 )
//                                             }

//                                             <div className='flex w-fit items-center gap-2 cursor-pointer'>
//                                                 <LogOut />
//                                                 <Button onClick={logoutHandler} variant="link">Logout</Button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </PopoverContent>
//                             </Popover>
//                         )
//                     }

//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Navbar
// import React from 'react'
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
// import { Button } from '../ui/button'
// import { Avatar, AvatarImage } from '../ui/avatar'
// import { LogOut, User2 } from 'lucide-react'
// import { Link, useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import axios from 'axios'
// import { USER_API_END_POINT } from '@/utils/constant'
// import { setUser } from '@/redux/authSlice'
// import { toast } from 'sonner'

// const Navbar = () => {
//     const { user } = useSelector(store => store.auth);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     console.log("user:",user);
//     const logoutHandler = async () => {
//         try {
//             const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
//             if (res.data.success) {
//                 dispatch(setUser(null));
//                 navigate("/");
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.response.data.message);
//         }
//     }

//     // Check the correct source for the profile photo
//     const avatarUrl = user?.profile?.profilePhoto || user?._json?.picture || 'default-avatar-url.jpg';

//     return (
//         <div className='bg-white border-b border-gray-900 '>
//             <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
//                 <div>
//                     <h1 className='text-2xl font-bold text-[#FF0000]'>U<span className='text-[#000000]'>Placement</span></h1>
//                 </div>
//                 <div className='flex items-center gap-12 '>
//                     <ul className='flex font-medium items-center gap-5'>
//                         {
//                             user && user.role === 'recruiter' ? (
//                                 <>
//                                     <li><Link to="/admin/companies">Companies</Link></li>
//                                     <li><Link to="/admin/jobs">Jobs</Link></li>
//                                 </>
//                             ) : (
//                                 <>
//                                     <li className='text-[#000000]'><Link to="/">Home</Link></li>
//                                     <li className='text-[#000000]'><Link to="/jobs">Jobs</Link></li>
//                                     <li className='text-[#000000]'><Link to="/browse">Browse</Link></li>
//                                 </>
//                             )
//                         }
//                     </ul>
//                     {
//                         !user ? (
//                             <div className='flex items-center gap-2'>
//                                 <Link to="/login"><Button variant="outline" className='rounded-full px-6 py-2 border-black text-black'>Login</Button></Link>
//                                 <Link to="/signup"><Button className='bg-blue-400 hover:bg-blue-500 text-white rounded-full px-6 py-2'>Signup</Button></Link>
//                             </div>
//                         ) : (
//                             <Popover>
//                                 <PopoverTrigger asChild>
//                                     <Avatar className="cursor-pointer">
//                                         <AvatarImage src={avatarUrl} alt="User Avatar" />
//                                     </Avatar>
//                                 </PopoverTrigger>
//                                 <PopoverContent className="w-80">
//                                     <div className=''>
//                                         <div className='flex gap-2 space-y-2'>
//                                             <Avatar className="cursor-pointer">
//                                                 <AvatarImage src={avatarUrl} alt="User Avatar" />
//                                             </Avatar>
//                                             <div>
//                                                 <h4 className='font-medium'>{user?.fullname}</h4>
//                                                 <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
//                                             </div>
//                                         </div>
//                                         <div className='flex flex-col my-2 text-gray-600'>
//                                             {
//                                                 user && user.role === 'student' && (
//                                                     <div className='flex w-fit items-center gap-2 cursor-pointer'>
//                                                         <User2 />
//                                                         <Button variant="link"> <Link to="/profile">View Profile</Link></Button>
//                                                     </div>
//                                                 )
//                                             }

//                                             <div className='flex w-fit items-center gap-2 cursor-pointer'>
//                                                 <LogOut />
//                                                 <Button onClick={logoutHandler} variant="link">Logout</Button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </PopoverContent>
//                             </Popover>
//                         )
//                     }
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Navbar
// import React from 'react';
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
// import { Button } from '../ui/button';
// import { Avatar, AvatarImage } from '../ui/avatar';
// import { LogOut, User2 } from 'lucide-react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { USER_API_END_POINT } from '@/utils/constant';
// import { setUser } from '@/redux/authSlice';
// import { toast } from 'sonner';

// const Navbar = () => {
//   const { user } = useSelector(store => store.auth); 
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
  
//   const logoutHandler = async () => {
//     try {
//       const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
//       if (res.data.success) {
//         dispatch(setUser(null));
//         navigate("/");
//         toast.success(res.data.message);
//       }
//     } catch (error) {
//       console.error("Logout error:", error);
//       toast.error(error?.response?.data?.message || "Logout failed, please try again.");
//     }
//   };

//   // Fallback for missing profile image
//   const avatarUrl = user?.profile?.profilePhoto || user?._json?.picture || '/default-avatar-url.jpg';

//   return (
//     <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 border-b border-gray-200 shadow-sm">
//       <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-6">
//         <div>
//           <h1 className="text-3xl font-extrabold text-gray-900 tracking-wide">
//             U<span className="text-gray-700">Placement</span>
//           </h1>
//         </div>
//         <div className="flex items-center gap-12">
//           <ul className="flex font-medium items-center gap-6">
//             {
//               user && user.role === 'recruiter' ? (
//                 <>
//                   <li><Link to="/admin/companies" className="text-gray-700 hover:text-gray-900 transition duration-300">Companies</Link></li>
//                   <li><Link to="/admin/jobs" className="text-gray-700 hover:text-gray-900 transition duration-300">Jobs</Link></li>
//                 </>
//               ) : (
//                 <>
//                   <li><Link to="/" className="text-gray-700 hover:text-gray-900 transition duration-300">Home</Link></li>
//                   <li><Link to="/jobs" className="text-gray-700 hover:text-gray-900 transition duration-300">Jobs</Link></li>
//                   <li><Link to="/browse" className="text-gray-700 hover:text-gray-900 transition duration-300">Browse</Link></li>
//                 </>
//               )
//             }
//           </ul>
//           {
//             !user ? (
//               <div className="flex items-center gap-4">
//                 <Link to="/login">
//                   <Button variant="outline" className="rounded-full px-6 py-2 border-gray-300 text-gray-700 hover:border-gray-500 hover:text-gray-900 transition duration-300">
//                     Login
//                   </Button>
//                 </Link>
//                 <Link to="/signup">
//                   <Button className="bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full px-6 py-2 transition duration-300">
//                     Signup
//                   </Button>
//                 </Link>
//               </div>
//             ) : (
//               <Popover>
//                 <PopoverTrigger asChild>
//                   <Avatar className="cursor-pointer border-2 border-gray-300 hover:border-gray-500 transition duration-300">
//                     <AvatarImage src={avatarUrl} alt="User Avatar" />
//                   </Avatar>
//                 </PopoverTrigger>
//                 <PopoverContent className="w-80 bg-white rounded-lg shadow-md p-4 border border-gray-200">
//                   <div className="flex gap-3 items-center mb-3">
//                     <Avatar className="cursor-pointer">
//                       <AvatarImage src={avatarUrl} alt="User Avatar" />
//                     </Avatar>
//                     <div>
//                       <h4 className="font-medium text-gray-900">{user?.fullname}</h4>
//                       <p className="text-sm text-gray-600">{user?.profile?.bio}</p>
//                     </div>
//                   </div>
//                   <div className="flex flex-col text-gray-600">
//                     {
//                       user && user.role === 'student' && (
//                         <div className="flex items-center gap-2 mb-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition duration-200">
//                           <User2 />
//                           <Button variant="link">
//                             <Link to="/profile" className="text-gray-800">View Profile</Link>
//                           </Button>
//                         </div>
//                       )
//                     }
//                     <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition duration-200" onClick={logoutHandler}>
//                       <LogOut />
//                       <Button variant="link" className="text-gray-800">Logout</Button>
//                     </div>
//                   </div>
//                 </PopoverContent>
//               </Popover>
//             )
//           }
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useContext } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Avatar, AvatarImage } from '../ui/avatar';
import { LogOut, Moon, Sun, User2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { setUser } from '@/redux/authSlice';
import { toast } from 'sonner';
import { ThemeContext } from '@/ThemeProvider';
// import { IoIosNotifications } from "react-icons/io";
import { FaBell } from "react-icons/fa6";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext); // Access theme and toggle function

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate('/');
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error('Logout error:', error);
      toast.error(error?.response?.data?.message || 'Logout failed, please try again.');
    }
  };

  const avatarUrl = user?.profile?.profilePhoto || user?._json?.picture || '/default-avatar-url.jpg';

  return (
    <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-900 dark:to-black border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-6">
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-wide">
          <span className="text-red-700 dark:text-red-700">U</span>
          <span className="text-gray-900 dark:text-gray-300">Placement</span>
        </h1>
      </div>

        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-6">
            {user && user.role === 'recruiter' ? (
              <>
                <li>
                  <Link to="/admin/companies" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300">
                    Companies
                  </Link>
                </li>
                <li>
                  <Link to="/admin/jobs" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300">
                    Jobs
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/jobs" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300">
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link to="/browse" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300">
                    Browse
                  </Link>
                </li>
                <li>
                  <Link to="/notification" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300">
                  <FaBell />
                  </Link>
                </li>
              </>
            )}
          </ul>
          {!user ? (
            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button
                  variant="outline"
                  className="rounded-full px-6 py-2 border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-300 hover:border-gray-500 dark:hover:border-white hover:text-gray-900 dark:hover:text-white transition duration-300"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-700 text-gray-800 dark:text-white rounded-full px-6 py-2 transition duration-300">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer border-2 border-gray-300 dark:border-gray-500 hover:border-gray-500 dark:hover:border-white transition duration-300">
                  <AvatarImage src={avatarUrl} alt="User Avatar" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex gap-3 items-center mb-3">
                  <Avatar className="cursor-pointer">
                    <AvatarImage src={avatarUrl} alt="User Avatar" />
                  </Avatar>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{user?.fullname}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{user?.profile?.bio}</p>
                  </div>
                </div>
                <div className="flex flex-col text-gray-600 dark:text-gray-400">
                  {user && user.role === 'student' && (
                    <div className="flex items-center gap-2 mb-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition duration-200">
                      <User2 />
                      <Button variant="link">
                        <Link to="/profile" className="text-gray-800 dark:text-white">
                          View Profile
                        </Link>
                      </Button>
                    </div>
                  )}
                  <div
                    className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition duration-200"
                    onClick={logoutHandler}
                  >
                    <LogOut />
                    <Button variant="link" className="text-gray-800 dark:text-white">
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
          <Button
            variant="outline"
            onClick={toggleTheme}
            className="rounded-full px-3 py-2 border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-300 hover:border-gray-500 dark:hover:border-white hover:text-gray-900 dark:hover:text-white transition duration-300"
          >
            {theme === 'light' ? <Moon /> : <Sun />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
