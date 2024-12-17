// // import React, { useEffect, useState } from 'react'
// // import { RadioGroup, RadioGroupItem } from './ui/radio-group'
// // import { Label } from './ui/label'
// // import { useDispatch } from 'react-redux'
// // import { setSearchedQuery } from '@/redux/jobSlice'

// // const fitlerData = [
// //     {
// //         fitlerType: "Location",
// //         array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
// //     },
// //     {
// //         fitlerType: "Industry",
// //         array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
// //     },
// //     {
// //         fitlerType: "Salary",
// //         array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
// //     },
// // ]

// // const FilterCard = () => {
// //     const [selectedValue, setSelectedValue] = useState('');
// //     const dispatch = useDispatch();
// //     const changeHandler = (value) => {
// //         setSelectedValue(value);
// //     }
// //     useEffect(()=>{
// //         dispatch(setSearchedQuery(selectedValue));
// //     },[selectedValue]);
// //     return (
// //         <div className='w-full bg-white p-3 rounded-md border border-gray-100'>
// //             <h1 className='font-bold text-lg'>Filter Jobs</h1>
// //             <hr className='mt-3' />
// //             <RadioGroup value={selectedValue} onValueChange={changeHandler}>
// //                 {
// //                     fitlerData.map((data, index) => (
// //                         <div>
// //                             <h1 className='font-bold text-lg'>{data.fitlerType}</h1>
// //                             {
// //                                 data.array.map((item, idx) => {
// //                                     const itemId = `id${index}-${idx}`
// //                                     return (
// //                                         <div className='flex items-center space-x-2 my-2'>
// //                                             <RadioGroupItem value={item} id={itemId} />
// //                                             <Label htmlFor={itemId}>{item}</Label>
// //                                         </div>
// //                                     )
// //                                 })
// //                             }
// //                         </div>
// //                     ))
// //                 }
// //             </RadioGroup>
// //         </div>
// //     )
// // }

// // export default FilterCard
// import React, { useState } from 'react';

// const filterData = [
//     {
//         filterType: "Location",
//         options: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
//     },
//     {
//         filterType: "Industry",
//         options: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
//     },
//     {
//         filterType: "Salary",
//         options: ["0-40k", "42-1lakh", "1lakh to 5lakh"],
//     },
// ];

// const FilterCard = ({ setActiveFilters }) => {
//     const [selectedFilters, setSelectedFilters] = useState([]);

//     const toggleFilter = (filter) => {
//         const updatedFilters = selectedFilters.includes(filter)
//             ? selectedFilters.filter((item) => item !== filter)
//             : [...selectedFilters, filter];
//         setSelectedFilters(updatedFilters);
//         setActiveFilters(updatedFilters);
//     };

//     return (
//         <div className="w-full bg-white p-4 rounded-md shadow-md">
//             <h2 className="font-bold text-lg mb-3">Filter Jobs</h2>
//             {filterData.map((filterGroup, index) => (
//                 <div key={index} className="mb-4">
//                     <h3 className="font-semibold text-gray-700 mb-2">{filterGroup.filterType}</h3>
//                     {filterGroup.options.map((option, idx) => (
//                         <div key={idx} className="flex items-center mb-2">
//                             <input
//                                 type="checkbox"
//                                 id={`${filterGroup.filterType}-${idx}`}
//                                 checked={selectedFilters.includes(option)}
//                                 onChange={() => toggleFilter(option)}
//                                 className="mr-2"
//                             />
//                             <label htmlFor={`${filterGroup.filterType}-${idx}`} className="text-gray-600">
//                                 {option}
//                             </label>
//                         </div>
//                     ))}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default FilterCard;
import React, { useState } from 'react';

const filterData = [
    {
        filterType: "Location",
        options: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
    },
    {
        filterType: "Industry",
        options: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
    },
    {
        filterType: "Salary",
        options: ["0-40k", "42-1lakh", "1lakh to 5lakh"],
    },
];

const FilterCard = ({ setActiveFilters }) => {
    const [selectedFilters, setSelectedFilters] = useState([]);

    const toggleFilter = (filter) => {
        const updatedFilters = selectedFilters.includes(filter)
            ? selectedFilters.filter((item) => item !== filter)
            : [...selectedFilters, filter];
        setSelectedFilters(updatedFilters);
        setActiveFilters(updatedFilters);
    };

    return (
        <div className="w-full bg-white p-4 rounded-md shadow-md">
            <h2 className="font-bold text-lg mb-3">Filter Jobs</h2>
            {filterData.map((filterGroup, index) => (
                <div key={index} className="mb-4">
                    <h3 className="font-semibold text-gray-700 mb-2">{filterGroup.filterType}</h3>
                    {filterGroup.options.map((option, idx) => (
                        <div key={idx} className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                id={`${filterGroup.filterType}-${idx}`} // Corrected template literal
                                checked={selectedFilters.includes(option)}
                                onChange={() => toggleFilter(option)}
                                className="mr-2"
                            />
                            <label htmlFor={`${filterGroup.filterType}-${idx}`} className="text-gray-600">
                                {option}
                            </label>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default FilterCard;
