
import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Avatar, AvatarImage } from '../ui/avatar';
import { LogOut, User2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { setUser } from '@/redux/authSlice';
import { toast } from 'sonner';

const Navbar = () => {
  const { user } = useSelector(store => store.auth); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error("Logout error:", error);
      toast.error(error?.response?.data?.message || "Logout failed, please try again.");
    }
  };

  // Fallback for missing profile image
  const avatarUrl = user?.profile?.profilePhoto || user?._json?.picture || '/default-avatar-url.jpg';

  return (
    <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-6">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-wide">
            U<span className="text-gray-700">Placement</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-6">
            {
              user && user.role === 'recruiter' ? (
                <>
                  <li><Link to="/admin/companies" className="text-gray-700 hover:text-gray-900 transition duration-300">Companies</Link></li>
                  <li><Link to="/admin/jobs" className="text-gray-700 hover:text-gray-900 transition duration-300">Jobs</Link></li>
                </>
              ) : (
                <>
                  <li><Link to="/" className="text-gray-700 hover:text-gray-900 transition duration-300">Home</Link></li>
                  <li><Link to="/jobs" className="text-gray-700 hover:text-gray-900 transition duration-300">Jobs</Link></li>
                  <li><Link to="/browse" className="text-gray-700 hover:text-gray-900 transition duration-300">Browse</Link></li>
                </>
              )
            }
          </ul>
          {
            !user ? (
              <div className="flex items-center gap-4">
                <Link to="/login">
                  <Button variant="outline" className="rounded-full px-6 py-2 border-gray-300 text-gray-700 hover:border-gray-500 hover:text-gray-900 transition duration-300">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full px-6 py-2 transition duration-300">
                    Signup
                  </Button>
                </Link>
              </div>
            ) : (
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer border-2 border-gray-300 hover:border-gray-500 transition duration-300">
                    <AvatarImage src={avatarUrl} alt="User Avatar" />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80 bg-white rounded-lg shadow-md p-4 border border-gray-200">
                  <div className="flex gap-3 items-center mb-3">
                    <Avatar className="cursor-pointer">
                      <AvatarImage src={avatarUrl} alt="User Avatar" />
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-gray-900">{user?.fullname}</h4>
                      <p className="text-sm text-gray-600">{user?.profile?.bio}</p>
                    </div>
                  </div>
                  <div className="flex flex-col text-gray-600">
                    {
                      user && user.role === 'student' && (
                        <div className="flex items-center gap-2 mb-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition duration-200">
                          <User2 />
                          <Button variant="link">
                            <Link to="/profile" className="text-gray-800">View Profile</Link>
                          </Button>
                        </div>
                      )
                    }
                    <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition duration-200" onClick={logoutHandler}>
                      <LogOut />
                      <Button variant="link" className="text-gray-800">Logout</Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
