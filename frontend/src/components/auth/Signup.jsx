import React, { useEffect, useState } from 'react';
import { Label } from '@radix-ui/react-label';
import { Input } from '../ui/input';
import { RadioGroup } from '../ui/radio-group';
import { Button } from '../ui/button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '@/redux/authSlice';
import { Loader2 } from 'lucide-react';

const Signup = () => {
  const [input, setInput] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
    password: '',
    role: '',
    file: ''
  });

  const { loading, user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };
  const handleGoogleAuth = async () => {
    dispatch(setLoading(true));
    try {
        window.location.href = `${USER_API_END_POINT}/auth0/login`;
    } catch (error) {
        console.error('Google login failed:', error);
    } finally {
        dispatch(setLoading(false));
    }
};
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(); // FormData object
    formData.append('fullname', input.fullname);
    formData.append('email', input.email);
    formData.append('phoneNumber', input.phoneNumber);
    formData.append('password', input.password);
    formData.append('role', input.role);
    if (input.file) {
      formData.append('file', input.file);
    }

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        withCredentials: true,
      });
      alert("Registration successful! Please check your email to verify your account.");

      if (res.data.success) {
        navigate('/login');
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || 'An error occurred.');
      alert("Registration failed. Please try again.");
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className='min-h-screen h-xl flex items-center justify-center bg-gray-100'>
      <div className='flex w-full h-xl max-w-5xl shadow-lg rounded-2xl overflow-hidden'>
        {/* Left side with Image, Title, and Back Button */}
        <div className='relative w-1/2 bg-gray-200 flex items-center justify-center'>
          {/* Back to Home Button */}
          <div className='absolute top-4 right-4'>
            <Button
              variant='ghost'
              onClick={() => navigate('/')}
              className='text-white bg-[#6B6B6B] bg-opacity-20 hover:bg-opacity-30 rounded-md px-4 py-2'
            >
              Back to Home Page
            </Button>
          </div>
          {/* Title */}
          <div className='absolute top-4 left-4'>
            <h2 className='text-2xl text-white font-bold'>
              U<span className='text-[#6B6B6B]'>Placement</span>
            </h2>
          </div>
          <div className='flex items-center justify-center h-full'>
            {/* Place for image */}
            <img
              src='src/assets/signuppage.jpg'
              alt='Decorative'
              className='rounded-2xl object-cover w-full h-full'
            />
          </div>
        </div>

        {/* Right side with Form */}
        <div className='w-1/2 p-10 bg-gray-200'>
          <form onSubmit={submitHandler} className='space-y-6'>
            <h1 className='text-[#6B6B6B] font-bold text-3xl mb-5'>Sign Up</h1>

            <div className='space-y-4'>
              <div>
                <Label className='text-[#6B6B6B]'>Full Name</Label>
                <Input
                  type='text'
                  value={input.fullname}
                  name='fullname'
                  onChange={changeEventHandler}
                  placeholder='Patel'
                  className='bg-gray-100 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
                />
              </div>

              <div>
                <Label className='text-[#6B6B6B]'>Email</Label>
                <Input
                  type='email'
                  value={input.email}
                  name='email'
                  onChange={changeEventHandler}
                  placeholder='patel@gmail.com'
                  className='bg-gray-100 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
                />
              </div>

              <div>
                <Label className='text-[#6B6B6B]'>Phone Number</Label>
                <Input
                  type='text'
                  value={input.phoneNumber}
                  name='phoneNumber'
                  onChange={changeEventHandler}
                  placeholder='8080808080'
                  className='bg-gray-100 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
                />
              </div>

              <div>
                <Label className='text-[#6B6B6B]'>Password</Label>
                <Input
                  type='password'
                  value={input.password}
                  name='password'
                  onChange={changeEventHandler}
                  placeholder='••••••••'
                  className='bg-gray-100 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
                />
              </div>

              <div className='flex items-center justify-between'>
                <RadioGroup className='flex items-center gap-4 my-5'>
                  <div className='flex items-center space-x-2'>
                    <Input
                      type='radio'
                      name='role'
                      value='student'
                      checked={input.role === 'student'}
                      onChange={changeEventHandler}
                      className='cursor-pointer'
                    />
                    <Label htmlFor='r1' className='text-[#6B6B6B]'>
                      Student
                    </Label>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <Input
                      type='radio'
                      name='role'
                      value='recruiter'
                      checked={input.role === 'recruiter'}
                      onChange={changeEventHandler}
                      className='cursor-pointer'
                    />
                    <Label htmlFor='r2' className='text-[#6B6B6B]'>
                      Recruiter
                    </Label>
                  </div>
                </RadioGroup>
                <div className='flex items-center gap-2'>
                  <Label className='text-[#6B6B6B]'>Profile</Label>
                  <Input
                    accept='image/*'
                    type='file'
                    onChange={changeFileHandler}
                    className='cursor-pointer bg-gray-100 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
                  />
                </div>
              </div>
            </div>

            {loading ? (
              <Button className='w-full bg-indigo-600 hover:bg-indigo-700 text-white flex justify-center items-center'>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait
              </Button>
            ) : (
              <>
                <Button
                  type='submit'
                  className='w-full bg-[#000000] hover:bg-indigo-600 text-white'
                >
                  Signup
                </Button>
                <Button
                  type='button'
                  onClick={handleGoogleAuth}
                  className='w-full bg-[#4285F4] hover:bg-[#357AE8] text-white mt-2'
                >
                  Auth with Google
                </Button>
              </>
              
            )}

            {/* <div className='text-sm text-[#6B6B6B]'>
              Already have an account?{' '}
              <Link to='/login' className='text-indigo-500 hover:underline'>
                Login
              </Link>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
