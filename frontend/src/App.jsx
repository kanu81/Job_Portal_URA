// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Navbar from './components/shared/Navbar'
// import Login from './components/auth/Login'
// import Signup from './components/auth/Signup'
// import Home from './components/Home'
// import Jobs from './components/Jobs'
// import Browse from './components/Browse'
// import Profile from './components/Profile'
// import JobDescription from './components/JobDescription'
// import Companies from './components/admin/Companies'
// import CompanyCreate from './components/admin/CompanyCreate'
// import CompanySetup from './components/admin/CompanySetup'
// import AdminJobs from "./components/admin/AdminJobs";
// import PostJob from './components/admin/PostJob'
// import Applicants from './components/admin/Applicants'
// import ProtectedRoute from './components/admin/ProtectedRoute'
// import AuthCallback from './components/auth/AuthCallback';

// const appRouter = createBrowserRouter([
//   {
//     path: '/auth/callback',
//     element: <AuthCallback />,
//   },
//   {
//     path: '/',
//     element: <Home />
//   },
//   {
//     path: '/login',
//     element: <Login />
//   },
//   {
//     path: '/signup',
//     element: <Signup />
//   },
//   {
//     path: "/jobs",
//     element: <Jobs />
//   },
//   {
//     path: "/description/:id",
//     element: <JobDescription />
//   },
//   {
//     path: "/browse",
//     element: <Browse />
//   },
//   {
//     path: "/profile",
//     element: <Profile />
//   },
//   // admin ke liye yha se start hoga
//   {
//     path:"/admin/companies",
//     element: <ProtectedRoute><Companies/></ProtectedRoute>
//   },
//   {
//     path:"/admin/companies/create",
//     element: <ProtectedRoute><CompanyCreate/></ProtectedRoute> 
//   },
//   {
//     path:"/admin/companies/:id",
//     element:<ProtectedRoute><CompanySetup/></ProtectedRoute> 
//   },
//   {
//     path:"/admin/jobs",
//     element:<ProtectedRoute><AdminJobs/></ProtectedRoute> 
//   },
//   {
//     path:"/admin/jobs/create",
//     element:<ProtectedRoute><PostJob/></ProtectedRoute> 
//   },
//   {
//     path:"/admin/jobs/:id/applicants",
//     element:<ProtectedRoute><Applicants/></ProtectedRoute> 
//   },

// ])
// function App() {

//   return (
//     <div>
//       <RouterProvider router={appRouter} />
//     </div>
//   )
// }

// export default App


// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import React, { useEffect, useRef } from 'react';
// import LocomotiveScroll from 'locomotive-scroll';
// import 'locomotive-scroll/dist/locomotive-scroll.css';
// import './App.css'; // Import your custom styles

// import Navbar from './components/shared/Navbar';
// import Login from './components/auth/Login';
// import Signup from './components/auth/Signup';
// import Home from './components/Home';
// import Jobs from './components/Jobs';
// import Browse from './components/Browse';
// import Profile from './components/Profile';
// import JobDescription from './components/JobDescription';
// import Companies from './components/admin/Companies';
// import CompanyCreate from './components/admin/CompanyCreate';
// import CompanySetup from './components/admin/CompanySetup';
// import AdminJobs from './components/admin/AdminJobs';
// import PostJob from './components/admin/PostJob';
// import Applicants from './components/admin/Applicants';
// import ProtectedRoute from './components/admin/ProtectedRoute';
// import AuthCallback from './components/auth/AuthCallback';

// // Router Configuration
// const appRouter = createBrowserRouter([
//   { path: '/auth/callback', element: <AuthCallback /> },
//   { path: '/', element: <Home /> },
//   { path: '/login', element: <Login /> },
//   { path: '/signup', element: <Signup /> },
//   { path: '/jobs', element: <Jobs /> },
//   { path: '/description/:id', element: <JobDescription /> },
//   { path: '/browse', element: <Browse /> },
//   { path: '/profile', element: <Profile /> },
//   // Admin routes
//   { path: '/admin/companies', element: <ProtectedRoute><Companies /></ProtectedRoute> },
//   { path: '/admin/companies/create', element: <ProtectedRoute><CompanyCreate /></ProtectedRoute> },
//   { path: '/admin/companies/:id', element: <ProtectedRoute><CompanySetup /></ProtectedRoute> },
//   { path: '/admin/jobs', element: <ProtectedRoute><AdminJobs /></ProtectedRoute> },
//   { path: '/admin/jobs/create', element: <ProtectedRoute><PostJob /></ProtectedRoute> },
//   { path: '/admin/jobs/:id/applicants', element: <ProtectedRoute><Applicants /></ProtectedRoute> },
// ]);

// function App() {
//   const scrollContainerRef = useRef(null); // Reference for Locomotive Scroll container

//   useEffect(() => {
//     const scroll = new LocomotiveScroll({
//       el: scrollContainerRef.current, // Target the scrolling container
//       smooth: true,                  // Enable smooth scrolling
//     });

//     // Cleanup on component unmount
//     return () => {
//       if (scroll) scroll.destroy();
//     };
//   }, []);

//   return (
//     <div
//       data-scroll-container
//       ref={scrollContainerRef}
//       style={{ overflow: 'hidden', height: '100vh' }}
//     >
//       {/* <Navbar /> Add Navbar if required */}
//       <RouterProvider router={appRouter} />
//     </div>
//   );
// }

// export default App;


// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import React, { useEffect, useRef } from 'react';
// import LocomotiveScroll from 'locomotive-scroll';
// import 'locomotive-scroll/dist/locomotive-scroll.css';
// import './App.css';

// import Navbar from './components/shared/Navbar';
// import Login from './components/auth/Login';
// import Signup from './components/auth/Signup';
// import Home from './components/Home';
// import Jobs from './components/Jobs';
// import Browse from './components/Browse';
// import Profile from './components/Profile';
// import JobDescription from './components/JobDescription';
// import Companies from './components/admin/Companies';
// import CompanyCreate from './components/admin/CompanyCreate';
// import CompanySetup from './components/admin/CompanySetup';
// import AdminJobs from './components/admin/AdminJobs';
// import PostJob from './components/admin/PostJob';
// import Applicants from './components/admin/Applicants';
// import ProtectedRoute from './components/admin/ProtectedRoute';
// import AuthCallback from './components/auth/AuthCallback';

// // Router Configuration
// const appRouter = createBrowserRouter([
//   { path: '/auth/callback', element: <AuthCallback /> },
//   { path: '/', element: <Home /> },
//   { path: '/login', element: <Login /> },
//   { path: '/signup', element: <Signup /> },
//   { path: '/jobs', element: <Jobs /> },
//   { path: '/description/:id', element: <JobDescription /> },
//   { path: '/browse', element: <Browse /> },
//   { path: '/profile', element: <Profile /> },
//   // Admin routes
//   { path: '/admin/companies', element: <ProtectedRoute><Companies /></ProtectedRoute> },
//   { path: '/admin/companies/create', element: <ProtectedRoute><CompanyCreate /></ProtectedRoute> },
//   { path: '/admin/companies/:id', element: <ProtectedRoute><CompanySetup /></ProtectedRoute> },
//   { path: '/admin/jobs', element: <ProtectedRoute><AdminJobs /></ProtectedRoute> },
//   { path: '/admin/jobs/create', element: <ProtectedRoute><PostJob /></ProtectedRoute> },
//   { path: '/admin/jobs/:id/applicants', element: <ProtectedRoute><Applicants /></ProtectedRoute> },
// ]);

// function App() {
//   const scrollContainerRef = useRef(null); // Reference for Locomotive Scroll container

//   useEffect(() => {
//     if (!scrollContainerRef.current) return;

//     const scroll = new LocomotiveScroll({
//       el: scrollContainerRef.current,
//       smooth: true,
//       multiplier: 1.2, // Adjust scrolling speed
//     });

//     // Update scroll when window resizes
//     const onResize = () => scroll.update();
//     window.addEventListener('resize', onResize);

//     return () => {
//       scroll.destroy();
//       window.removeEventListener('resize', onResize);
//     };
//   }, []);

//   return (
//     <div data-scroll-container ref={scrollContainerRef} style={{ overflow: 'hidden' }}>
//       {/* <Navbar /> */}
//       <RouterProvider router={appRouter} />
//     </div>
//   );
// }

// export default App;


import React, { useEffect, useRef } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import './App.css';

import Navbar from './components/shared/Navbar';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/Home';
import Jobs from './components/Jobs';
import Browse from './components/Browse';
import Profile from './components/Profile';
import JobDescription from './components/JobDescription';
import Companies from './components/admin/Companies';
import CompanyCreate from './components/admin/CompanyCreate';
import CompanySetup from './components/admin/CompanySetup';
import AdminJobs from './components/admin/AdminJobs';
import PostJob from './components/admin/PostJob';
import Applicants from './components/admin/Applicants';
import ProtectedRoute from './components/admin/ProtectedRoute';
import AuthCallback from './components/auth/AuthCallback';

// Router Configuration
const appRouter = createBrowserRouter([
  { path: '/auth/callback', element: <AuthCallback /> },
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/jobs', element: <Jobs /> },
  { path: '/description/:id', element: <JobDescription /> },
  { path: '/browse', element: <Browse /> },
  { path: '/profile', element: <Profile /> },
  // Admin routes
  { path: '/admin/companies', element: <ProtectedRoute><Companies /></ProtectedRoute> },
  { path: '/admin/companies/create', element: <ProtectedRoute><CompanyCreate /></ProtectedRoute> },
  { path: '/admin/companies/:id', element: <ProtectedRoute><CompanySetup /></ProtectedRoute> },
  { path: '/admin/jobs', element: <ProtectedRoute><AdminJobs /></ProtectedRoute> },
  { path: '/admin/jobs/create', element: <ProtectedRoute><PostJob /></ProtectedRoute> },
  { path: '/admin/jobs/:id/applicants', element: <ProtectedRoute><Applicants /></ProtectedRoute> },
]);

// function ScrollWrapper({ children }) {
//   const scrollContainerRef = useRef(null); // Reference for Locomotive Scroll container

//   useEffect(() => {
//     let scrollInstance;

//     const initializeScroll = () => {
//       if (scrollContainerRef.current) {
//         scrollInstance = new LocomotiveScroll({
//           el: scrollContainerRef.current,
//           smooth: true,
//           multiplier: 1.2,
//         });
//       }
//     };

//     initializeScroll();

//     return () => {
//       if (scrollInstance) {
//         scrollInstance.destroy();
//       }
//     };
//   }, []); // Initialize Locomotive Scroll once

//   return (
//     <div ref={scrollContainerRef} data-scroll-container>
//       {children}
//     </div>
//   );
// }

function ScrollWrapper({ children }) {
  const scrollContainerRef = useRef(null);
  const scrollInstanceRef = useRef(null); // Reference to store the Locomotive instance
  // const location = useLocation(); // Detect route changes

  useEffect(() => {
    if (!scrollContainerRef.current) return;

    // Initialize Locomotive Scroll
    const initializeScroll = () => {
      scrollInstanceRef.current = new LocomotiveScroll({
        el: scrollContainerRef.current,
        smooth: true,
        multiplier: 1.2,
      });
    };

    initializeScroll();

    return () => {
      if (scrollInstanceRef.current) {
        scrollInstanceRef.current.destroy();
        scrollInstanceRef.current = null; // Reset the instance reference
      }
    };
  }, []); // Initialize once when the component mounts

  useEffect(() => {
    // Update Locomotive Scroll when route changes
    if (scrollInstanceRef.current) {
      scrollInstanceRef.current.update();
      scrollInstanceRef.current.scrollTo(0, { duration: 0 }); // Reset scroll position
    }
  }, [location]); // Trigger on every route change

  return (
    <div ref={scrollContainerRef} data-scroll-container>
      {children}
    </div>
  );
}


function App() {
  return (
    <ScrollWrapper>
      {/* <Navbar /> */}
      <RouterProvider router={appRouter} />
    </ScrollWrapper>
  );
}

export default App;

