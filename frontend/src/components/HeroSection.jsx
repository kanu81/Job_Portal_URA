import React, { useState } from 'react';
import { Button } from './ui/button';
import { Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-left'>
            <div className='flex flex-col gap-5 my-10'>
                {/* <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium ml-40'>No. 1 Job Hunt Website</span> */}
                
                {/* Adjusted margin-left for the heading */}
                <h1 className='text-5xl  font-bold ml-40 font-Montserrat,sans-serif'
                style={{
                fontFamily:'montserrat'
                }}
                > 
                    THE BRIDGE TO<br/><span className='text-[#FF0000]'>YOUR</span>  <br/>DREAM JOB
                    </h1>
                <div 
                    className='flex w-[60%] shadow-lg border border-gray-300 rounded-full items-center gap-4 mx-auto'
                    style={{ backgroundColor: 'white' }} // Apply background color to the entire container
                >
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none text-black-900 border-none w-full bg-transparent text-base  py-2 pl-4' // Reduced height of input
                    />

                    <Button 
                        onClick={searchJobHandler} 
                        className="rounded-r-full bg-white text-base px-5 py-2 h-full flex items-center justify-center" // Adjusted button size
                    >
                        <Search className='h-5 w-5 text-black' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
