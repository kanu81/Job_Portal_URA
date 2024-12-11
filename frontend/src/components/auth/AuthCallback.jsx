
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser, setLoading } from '../../redux/authSlice';
import { toast } from 'sonner';

const AuthCallback = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        
      const fetchUser = async () => {
        dispatch(setLoading(true));
        try {
            const response = await fetch("http://localhost:8000/api/v1/user/profile", {
                method: 'GET',
                credentials: 'include', // Include cookies in the request
            });
            console.log("response", response);
            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }
    
            const userData = await response.json();
            console.log("userData", userData);
    
            // Add a fallback profilePhoto if missing
            userData.profile.profilePhoto = userData.profile?.profilePhoto || `https://ui-avatars.com/api/?name=${encodeURIComponent(userData.fullname)}`;
    
            // Save user data to Redux store
            dispatch(setUser(userData));
            toast.success('Login successful!');
            window.location.href = '/';
        } catch (error) {
            console.error('Error during user fetching:', error);
            toast.error('Authentication failed. Please try again.');
            navigate('/login');
        } finally {
            dispatch(setLoading(false));
        }
    };
    
      
        fetchUser();
    }, [dispatch, navigate]);

    return <div>Loading...</div>;
};

export default AuthCallback;
// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { setUser, setLoading } from '../../redux/authSlice';
// import { toast } from 'sonner';
// import axios from 'axios'; // Import axios

// const AuthCallback = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     console.log("Inside AuthCallback")
//     useEffect(() => {
//         const fetchUser = async () => {
//             dispatch(setLoading(true));
//             console.log("Fetching profile, cookies:", document.cookie);

//             try {
//                 const response = await axios.get("http://localhost:8000/api/v1/user/profile", {
//                     withCredentials: true, // Include cookies in the request
//                 });
//                 console.log("Axios Response:", response.data);

//                 const userData = response.data; // Extract user data from the response
               

//                 // Add a fallback profilePhoto if missing
//                 userData.profile.profilePhoto = userData.profile?.profilePhoto || `https://ui-avatars.com/api/?name=${encodeURIComponent(userData.fullname)}`;

//                 // Save user data to Redux store
//                 dispatch(setUser(userData));
//                 toast.success('Login successful!');
//                 window.location.href = '/';
//             } catch (error) {
//                 console.error('Error during user fetching:', error);
//                 toast.error('Authentication failed. Please try again.');
//                 navigate('/login');
//             } finally {
//                 dispatch(setLoading(false));
//             }
//         };

//         fetchUser();
//     }, [dispatch, navigate]);

//     return <div>Loading...</div>;
// };

// export default AuthCallback;
