import React, { useEffect, useRef } from 'react';
import Navbar from './shared/Navbar';
import HeroSection from './HeroSection';
import CategoryCarousel from './CategoryCarousel';
import LatestJobs from './LatestJobs';
import Footer from './shared/Footer';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();

  // Refs for scroll-triggered animations
  const categoryRef = useRef(null);
  const latestJobsRef = useRef(null);

  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate("/admin/companies");
    }
  }, [user, navigate]);

  useEffect(() => {
    // Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
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
    <div className='bg-gray-50'>
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

      {/* Navbar and Hero Section appear with fade-in */}
      <div className=" fixed top-0 left-0 w-full h-16 opacity-100 z-10">
        <Navbar />
      </div>

      {/* Flex container to position HeroSection and Background Image */}
      <div className="fade-in flex justify-between items-center mt-10" style={{ padding: '50px 0' }}>
        {/* HeroSection */}
        <div className="w-1/2">
          <HeroSection />
        </div>

        {/* Background Image */}
        <div 
          className="w-1/2 h-[400px] bg-no-repeat bg-center bg-cover" 
          style={{ backgroundImage: 'url("https://i.pinimg.com/originals/01/32/31/01323190cd6933de96287a5804fd636a.gif")' }} 
        >
        </div>
      </div>

      {/* CategoryCarousel appears with scroll-triggered animation */}
      <div ref={categoryRef} className="opacity-0 pt-10 pb-10">
        <CategoryCarousel />
      </div>

      {/* LatestJobs appears with scroll-triggered animation */}
      <div ref={latestJobsRef} className="opacity-0 pt-10 pb-10" style={{ paddingTop: '20px' }}>
        <LatestJobs />
      </div>

      {/* Footer appears with fade-in */}
      <div className="fade-in">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
