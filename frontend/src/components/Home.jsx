// import React, { useEffect, useRef } from 'react';
// import Navbar from './shared/Navbar';
// import HeroSection from './HeroSection';
// import CategoryCarousel from './CategoryCarousel';
// import LatestJobs from './LatestJobs';
// import Footer from './shared/Footer';
// import useGetAllJobs from '@/hooks/useGetAllJobs';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   useGetAllJobs();
//   const { user } = useSelector(store => store.auth);
//   const navigate = useNavigate();

//   // Refs for scroll-triggered animations
//   const categoryRef = useRef(null);
//   const latestJobsRef = useRef(null);

//   useEffect(() => {
//     if (user?.role === 'recruiter') {
//       navigate("/admin/companies");
//     }
//   }, [user, navigate]);

//   useEffect(() => {
//     // Intersection Observer for scroll-triggered animations
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animate-fadeIn');
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (categoryRef.current) observer.observe(categoryRef.current);
//     if (latestJobsRef.current) observer.observe(latestJobsRef.current);

//     return () => {
//       if (categoryRef.current) observer.unobserve(categoryRef.current);
//       if (latestJobsRef.current) observer.unobserve(latestJobsRef.current);
//     };
//   }, []);

//   return (
//     <div data-scroll-container className='bg-gray-50'>
//       {/* Inline styles for animations */}
//       <style>
//         {`
//           .fade-in {
//             opacity: 0;
//             transform: translateY(20px);
//             animation: fadeIn 1s forwards;
//           }

//           @keyframes fadeIn {
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }

//           .animate-fadeIn {
//             opacity: 1 !important;
//             transform: translateY(0) !important;
//             transition: opacity 0.6s ease-out, transform 0.6s ease-out;
//           }

//           .opacity-0 {
//             opacity: 0;
//             transition: opacity 0.6s ease-out, transform 0.6s ease-out;
//           }
//         `}
//       </style>

//       {/* Navbar and Hero Section appear with fade-in */}
//       <div className=" fixed top-0 left-0 w-full h-16 opacity-100 z-10">
//         <Navbar />
//       </div>

//       {/* Flex container to position HeroSection and Background Image */}
//       <div className="fade-in flex justify-between items-center mt-10" style={{ padding: '50px 0' }}>
//         {/* HeroSection */}
//         <div className="w-1/2">
//           <HeroSection />
//         </div>

//         {/* Background Image */}
//         <div 
//           className="w-1/2 h-[400px] bg-no-repeat bg-center bg-cover" 
//           style={{ backgroundImage: 'url("https://i.pinimg.com/originals/01/32/31/01323190cd6933de96287a5804fd636a.gif")' }} 
//         >
//         </div>
//       </div>

//       {/* CategoryCarousel appears with scroll-triggered animation */}
//       <div ref={categoryRef} className="opacity-0 pt-10 pb-10">
//         <CategoryCarousel />
//       </div>

//       {/* LatestJobs appears with scroll-triggered animation */}
//       <div ref={latestJobsRef} className="opacity-0 pt-10 pb-10" style={{ paddingTop: '20px' }}>
//         <LatestJobs />
//       </div>

//       {/* Footer appears with fade-in */}
//       <div className="fade-in">
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Home;


// import React, { useEffect, useRef } from 'react';
// import Navbar from './shared/Navbar';
// import HeroSection from './HeroSection';
// import CategoryCarousel from './CategoryCarousel';
// import LatestJobs from './LatestJobs';
// import Footer from './shared/Footer';
// import useGetAllJobs from '@/hooks/useGetAllJobs';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// const TechAnimation = () => {
//   return (
//     <div className="tech-animation-container">
//       <div className="tech-animation">
//         <span>React</span>
//         <span>JavaScript</span>
//         <span>Node.js</span>
//         <span>Python</span>
//         <span>GraphQL</span>
//         <span>MongoDB</span>
//         <span>CSS</span>
//         <span>HTML</span>
//         <span>Docker</span>
//         <span>Firebase</span>
//       </div>
//     </div>
//   );
// };

// const Home = () => {
//   useGetAllJobs();
//   const { user } = useSelector((store) => store.auth);
//   const navigate = useNavigate();

//   const categoryRef = useRef(null);
//   const latestJobsRef = useRef(null);

//   useEffect(() => {
//     if (user?.role === 'recruiter') {
//       navigate('/admin/companies');
//     }
//   }, [user, navigate]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animate-fadeIn');
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (categoryRef.current) observer.observe(categoryRef.current);
//     if (latestJobsRef.current) observer.observe(latestJobsRef.current);

//     return () => {
//       if (categoryRef.current) observer.unobserve(categoryRef.current);
//       if (latestJobsRef.current) observer.unobserve(latestJobsRef.current);
//     };
//   }, []);

//   return (
//     <div data-scroll-container className="bg-gray-50">
//       <style>
//         {`
//           .tech-animation-container {
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             height: 100px;
//             overflow: hidden;
//             background-color: #f3f4f6;
//             border-top: 2px solid #e5e7eb;
//             border-bottom: 2px solid #e5e7eb;
//             position: relative;
//           }

//           .tech-animation {
//             display: flex;
//             white-space: nowrap;
//             animation: scrollX 10s linear infinite;
//             font-size: 1.5rem;
//             font-weight: bold;
//             color: #333;
//           }

//           .tech-animation span {
//             margin-right: 50px; /* Space between words */
//           }

//           @keyframes scrollX {
//             0% {
//               transform: translateX(100%);
//             }
//             100% {
//               transform: translateX(-100%);
//             }
//           }

//           .fade-in {
//             opacity: 0;
//             transform: translateY(20px);
//             animation: fadeIn 1s forwards;
//           }

//           @keyframes fadeIn {
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }

//           .animate-fadeIn {
//             opacity: 1 !important;
//             transform: translateY(0) !important;
//             transition: opacity 0.6s ease-out, transform 0.6s ease-out;
//           }

//           .opacity-0 {
//             opacity: 0;
//             transition: opacity 0.6s ease-out, transform 0.6s ease-out;
//           }
//         `}
//       </style>

//       <div className="fixed top-0 left-0 w-full h-16 opacity-100 z-10">
//         <Navbar />
//       </div>

//       <div
//         className="fade-in flex justify-between items-center mt-10"
//         style={{ padding: '50px 0' }}
//       >
//         <div className="w-1/2">
//           <HeroSection />
//         </div>
//         <div
//           className="w-1/2 h-[400px] bg-no-repeat bg-center bg-cover"
//           style={{
//             backgroundImage:
//               'url("https://i.pinimg.com/originals/01/32/31/01323190cd6933de96287a5804fd636a.gif")',
//           }}
//         ></div>
//       </div>

//       <div className="opacity-0 pt-10 pb-10" ref={categoryRef}>
//         <CategoryCarousel />
//       </div>

//       {/* Tech Animation */}
//       <TechAnimation />

//       <div className="opacity-0 pt-10 pb-10" ref={latestJobsRef}>
//         <LatestJobs />
//       </div>

//       <div className="fade-in">
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Home;


// import React, { useEffect, useRef } from 'react';
// import Navbar from './shared/Navbar';
// import HeroSection from './HeroSection';
// import CategoryCarousel from './CategoryCarousel';
// import LatestJobs from './LatestJobs';
// import Footer from './shared/Footer';
// import useGetAllJobs from '@/hooks/useGetAllJobs';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// const TechAnimation = () => {
//   const lines = [
//     ["React", "JavaScript", "Node.js", "Python", "GraphQL", "MongoDB"],
//     ["CSS", "HTML", "Docker", "Firebase", "TypeScript", "Tailwind"],
//     ["Kubernetes", "AWS", "Azure", "Linux", "MySQL", "PostgreSQL"],
//     ["DevOps", "Redux", "Jenkins", "Java", "Spring", "Next.js"],
//   ];

//   return (
//     <div className="tech-animation-container">
//       {lines.map((line, index) => (
//         <div
//           key={index}
//           className={`tech-animation-row ${
//             index % 2 === 0 ? "scroll-right" : "scroll-left"
//           }`}
//         >
//           {line.map((word, idx) => (
//             <span key={idx}>{word}</span>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// const Home = () => {
//   useGetAllJobs();
//   const { user } = useSelector((store) => store.auth);
//   const navigate = useNavigate();

//   const categoryRef = useRef(null);
//   const latestJobsRef = useRef(null);

//   useEffect(() => {
//     if (user?.role === 'recruiter') {
//       navigate('/admin/companies');
//     }
//   }, [user, navigate]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animate-fadeIn');
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (categoryRef.current) observer.observe(categoryRef.current);
//     if (latestJobsRef.current) observer.observe(latestJobsRef.current);

//     return () => {
//       if (categoryRef.current) observer.unobserve(categoryRef.current);
//       if (latestJobsRef.current) observer.unobserve(latestJobsRef.current);
//     };
//   }, []);

//   return (
//     <div data-scroll-container className="bg-gray-50">
//       <style>
//         {`
//           .tech-animation-container {
//             display: flex;
//             flex-direction: column;
//             gap: 20px;
//             overflow: hidden;
//             background-color: #f3f4f6;
//             border-top: 2px solid #e5e7eb;
//             border-bottom: 2px solid #e5e7eb;
//             padding: 10px 0;
//           }

//           .tech-animation-row {
//             display: flex;
//             white-space: nowrap;
//             font-size: 1.5rem;
//             font-weight: bold;
//             color: #333;
//             gap: 30px; /* Space between words */
//           }

//           .scroll-right {
//             animation: scrollRight 10s linear infinite;
//           }

//           .scroll-left {
//             animation: scrollLeft 10s linear infinite;
//           }

//           @keyframes scrollRight {
//             0% {
//               transform: translateX(-100%);
//             }
//             100% {
//               transform: translateX(100%);
//             }
//           }

//           @keyframes scrollLeft {
//             0% {
//               transform: translateX(100%);
//             }
//             100% {
//               transform: translateX(-100%);
//             }
//           }

//           .fade-in {
//             opacity: 0;
//             transform: translateY(20px);
//             animation: fadeIn 1s forwards;
//           }

//           @keyframes fadeIn {
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }

//           .animate-fadeIn {
//             opacity: 1 !important;
//             transform: translateY(0) !important;
//             transition: opacity 0.6s ease-out, transform 0.6s ease-out;
//           }

//           .opacity-0 {
//             opacity: 0;
//             transition: opacity 0.6s ease-out, transform 0.6s ease-out;
//           }
//         `}
//       </style>

//       <div className="fixed top-0 left-0 w-full h-16 opacity-100 z-10">
//         <Navbar />
//       </div>

//       <div
//         className="fade-in flex justify-between items-center mt-10"
//         style={{ padding: '50px 0' }}
//       >
//         <div className="w-1/2">
//           <HeroSection />
//         </div>
//         <div
//           className="w-1/2 h-[400px] bg-no-repeat bg-center bg-cover"
//           style={{
//             backgroundImage:
//               'url("https://i.pinimg.com/originals/01/32/31/01323190cd6933de96287a5804fd636a.gif")',
//           }}
//         ></div>
//       </div>

//       <div className="opacity-0 pt-10 pb-10" ref={categoryRef}>
//         <CategoryCarousel />
//       </div>

//       {/* Tech Animation */}
//       <TechAnimation />

//       <div className="opacity-0 pt-10 pb-10" ref={latestJobsRef}>
//         <LatestJobs />
//       </div>

//       <div className="fade-in">
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Home;


import React, { useEffect, useRef } from 'react';
import Navbar from './shared/Navbar';
import HeroSection from './HeroSection';
import CategoryCarousel from './CategoryCarousel';
import LatestJobs from './LatestJobs';
import Footer from './shared/Footer';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ScrollingText from './ScrollingText'; // Import the ScrollingText component

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  // Refs for scroll-triggered animations
  const categoryRef = useRef(null);
  const latestJobsRef = useRef(null);

  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate('/admin/companies');
    }
  }, [user, navigate]);

  useEffect(() => {
    // Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (categoryRef.current) observer.observe(categoryRef.current);
    if (latestJobsRef.current) observer.observe(latestJobsRef.current);

    return () => {
      if (categoryRef.current) observer.unobserve(categoryRef.current);
      if (latestJobsRef.current) observer.unobserve(latestJobsRef.current);
    };
  }, []);

  return (
    <div data-scroll-container className="bg-gray-50">
      {/* Inline styles for animations */}
      <style>
        {`
          .fade-in {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeIn 1s forwards;
          }

          @keyframes fadeIn {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeIn {
            opacity: 1 !important;
            transform: translateY(0) !important;
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }

          .opacity-0 {
            opacity: 0;
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }
        `}
      </style>

      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full h-16 opacity-100 z-10">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div
        className="fade-in flex justify-between items-center mt-10"
        style={{ padding: '50px 0' }}
      >
        <div className="w-1/2">
          <HeroSection />
        </div>
        <div
          className="w-1/2 h-[400px] bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage:
              'url("https://i.pinimg.com/originals/01/32/31/01323190cd6933de96287a5804fd636a.gif")',
          }}
        ></div>
      </div>

      {/* Category Carousel */}
      <div ref={categoryRef} className="opacity-0 pt-10 pb-10">
        <CategoryCarousel />
      </div>

      {/* Scrolling Text Animation */}
      <ScrollingText />

      {/* Latest Jobs */}
      <div ref={latestJobsRef} className="opacity-0 pt-10 pb-10">
        <LatestJobs />
      </div>

      {/* Footer */}
      <div className="fade-in">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
