// import React, { useEffect, useState } from 'react'
// import { RadioGroup, RadioGroupItem } from './ui/radio-group'
// import { Label } from './ui/label'
// import { useDispatch } from 'react-redux'
// import { setSearchedQuery } from '@/redux/jobSlice'

// const fitlerData = [
//     {
//         fitlerType: "Location",
//         array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
//     },
//     {
//         fitlerType: "Industry",
//         array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
//     },
//     {
//         fitlerType: "Salary",
//         array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
//     },
// ]

// const FilterCard = () => {
//     const [selectedValue, setSelectedValue] = useState('');
//     const dispatch = useDispatch();
//     const changeHandler = (value) => {
//         setSelectedValue(value);
//     }
//     useEffect(()=>{
//         dispatch(setSearchedQuery(selectedValue));
//     },[selectedValue]);
//     return (
//         <div className='w-full bg-white p-3 rounded-md border border-gray-100'>
//             <h1 className='font-bold text-lg'>Filter Jobs</h1>
//             <hr className='mt-3' />
//             <RadioGroup value={selectedValue} onValueChange={changeHandler}>
//                 {
//                     fitlerData.map((data, index) => (
//                         <div>
//                             <h1 className='font-bold text-lg'>{data.fitlerType}</h1>
//                             {
//                                 data.array.map((item, idx) => {
//                                     const itemId = `id${index}-${idx}`
//                                     return (
//                                         <div className='flex items-center space-x-2 my-2'>
//                                             <RadioGroupItem value={item} id={itemId} />
//                                             <Label htmlFor={itemId}>{item}</Label>
//                                         </div>
//                                     )
//                                 })
//                             }
//                         </div>
//                     ))
//                 }
//             </RadioGroup>
//         </div>
//     )
// }

// export default FilterCard

// import React, { useEffect, useState } from 'react'
// import { RadioGroup, RadioGroupItem } from './ui/radio-group'
// import { Label } from './ui/label'
// import { useDispatch, useSelector } from 'react-redux'
// import { setSearchedQuery } from '@/redux/jobSlice'

// const filterData = [
//     {
//         filterType: "Location",
//         array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
//     },
//     {
//         filterType: "Industry",
//         array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
//     },
//     {
//         filterType: "Salary",
//         array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
//     },
// ]

// const FilterCard = () => {
//     const [selectedValues, setSelectedValues] = useState([]);
//     const dispatch = useDispatch();

//     const changeHandler = (value) => {
//         // Check if value already exists in the array
//         setSelectedValues((prev) => {
//             if (prev.includes(value)) {
//                 return prev.filter((item) => item !== value);  // Remove the value
//             } else {
//                 return [...prev, value];  // Add the value
//             }
//         });
//     };

//     useEffect(() => {
//         dispatch(setSearchedQuery(selectedValues));
//     }, [selectedValues, dispatch]);

//     return (
//         <div className='w-full bg-white p-3 rounded-md border border-gray-100'>
//             <h1 className='font-bold text-lg'>Filter Jobs</h1>
//             <hr className='mt-3' />
//             <RadioGroup value={selectedValues} onValueChange={changeHandler}>
//                 {
//                     filterData.map((data, index) => (
//                         <div key={index}>
//                             <h1 className='font-bold text-lg'>{data.filterType}</h1>
//                             {
//                                 data.array.map((item, idx) => {
//                                     const itemId = `id${index}-${idx}`
//                                     return (
//                                         <div className='flex items-center space-x-2 my-2' key={itemId}>
//                                             <RadioGroupItem
//                                                 value={item}
//                                                 id={itemId}
//                                                 checked={selectedValues.includes(item)}  // To show if selected
//                                             />
//                                             <Label htmlFor={itemId}>{item}</Label>
//                                         </div>
//                                     )
//                                 })
//                             }
//                         </div>
//                     ))
//                 }
//             </RadioGroup>
//         </div>
//     )
// }

// export default FilterCard;
// import React, { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { setSearchedQuery } from '@/redux/jobSlice'

// const filterData = [
//     {
//         filterType: "Location",
//         array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
//     },
//     {
//         filterType: "Industry",
//         array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
//     },
//     {
//         filterType: "Salary",
//         array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
//     },
// ]

// const FilterCard = () => {
//     const [selectedValues, setSelectedValues] = useState([]);
//     const dispatch = useDispatch();

//     const changeHandler = (value) => {
//         setSelectedValues((prev) => {
//             if (prev.includes(value)) {
//                 return prev.filter((item) => item !== value);  // Remove the value
//             } else {
//                 return [...prev, value];  // Add the value
//             }
//         });
//     };

//     useEffect(() => {
//         dispatch(setSearchedQuery(selectedValues)); // Update the Redux store with selected values
//     }, [selectedValues, dispatch]);

//     return (
//         <div className='w-full bg-white p-3 rounded-md border border-gray-100'>
//             <h1 className='font-bold text-lg'>Filter Jobs</h1>
//             <hr className='mt-3' />
//             <div>
//                 {
//                     filterData.map((data, index) => (
//                         <div key={index}>
//                             <h1 className='font-bold text-lg'>{data.filterType}</h1>
//                             {
//                                 data.array.map((item, idx) => {
//                                     const itemId = `id${index}-${idx}`
//                                     return (
//                                         <div className='flex items-center space-x-2 my-2' key={itemId}>
//                                             <input
//                                                 type="checkbox"
//                                                 id={itemId}
//                                                 value={item}
//                                                 checked={selectedValues.includes(item)}  // To show if selected
//                                                 onChange={() => changeHandler(item)}  // Toggle selection on change
//                                                 className="form-checkbox h-4 w-4 text-blue-600"
//                                             />
//                                             <label htmlFor={itemId}>{item}</label>
//                                         </div>
//                                     )
//                                 })
//                             }
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     )
// }

// export default FilterCard;


import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'


const filterData = [
    {
        filterType: "Location",
        options: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
    },
    {
        filterType: "Industry",
        options: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
    },
    {
        filterType: "Salary",
        options: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
    },
];

const FilterCard = () => {
    const [selectedValues, setSelectedValues] = useState([]);
    const dispatch = useDispatch();

    // Handles adding/removing values from the selected filters
    const handleFilterChange = (value) => {
        setSelectedValues((prevSelected) =>
            prevSelected.includes(value)
                ? prevSelected.filter((item) => item !== value) // Remove if already selected
                : [...prevSelected, value] // Add if not selected
        );
    };

    // Update the Redux store whenever selected filters change
    useEffect(() => {
        dispatch(setSearchedQuery(selectedValues));
    }, [selectedValues, dispatch]);

    return (
        <div className="w-full bg-white dark:bg-gray-800 p-4 rounded-md border border-gray-200 dark:border-gray-700 shadow-sm">
            <h1 className="font-bold text-xl mb-4 text-gray-800 dark:text-gray-100">Filter Jobs</h1>
            <hr className="mb-4 border-gray-300 dark:border-gray-600" />
            <div>
                {filterData.map((filterGroup, index) => (
                    <div key={index} className="mb-6">
                        <h2 className="font-semibold text-lg mb-3 text-gray-800 dark:text-gray-200">
                            {filterGroup.filterType}
                        </h2>
                        {filterGroup.options.map((option, idx) => {
                            const optionId = `filter-${index}-${idx}`;
                            return (
                                <div className="flex items-center space-x-3 mb-2" key={optionId}>
                                    <input
                                        type="checkbox"
                                        id={optionId}
                                        value={option}
                                        checked={selectedValues.includes(option)}
                                        onChange={() => handleFilterChange(option)}
                                        className="form-checkbox h-5 w-5 text-blue-600 dark:text-blue-400 rounded focus:ring focus:ring-offset-0 focus:ring-blue-300 dark:focus:ring-blue-600"
                                    />
                                    <label htmlFor={optionId} className="text-sm text-gray-800 dark:text-gray-300">
                                        {option}
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilterCard;


