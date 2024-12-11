// import React from 'react';
// import { Button } from './ui/button';
// import { Bookmark } from 'lucide-react';
// import { Avatar, AvatarImage } from './ui/avatar';
// import { Badge } from './ui/badge';
// import { useNavigate } from 'react-router-dom';

// const Job = ({ job }) => {
//   const navigate = useNavigate();

//   const daysAgoFunction = (mongodbTime) => {
//     const createdAt = new Date(mongodbTime);
//     const currentTime = new Date();
//     const timeDifference = currentTime - createdAt;
//     return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//   };

//   // Function to randomly select a pastel color from the provided palette
//   const getRandomPastelColor = () => {
//     const pastelColors = ['#ffe1cc', '#fbe2f4', '#e3dbfa', '#d4f5ed', '#ffecd1', '#f6e8ea', '#e6e6fa', '#c3f3ff','#aec6cf'];
//     return pastelColors[Math.floor(Math.random() * pastelColors.length)];
//   };

//   // Set random pastel color for background
//   const pastelBackgroundColor = getRandomPastelColor();

//   return (
//     <div className="rounded-2xl shadow-lg transition-transform hover:scale-105 overflow-hidden bg-white border border-gray-300">
//       {/* Top right Bookmark Icon */}
//       <div className="relative">
//         <Button
//           variant="outline"
//           className="absolute top-4 right-4 rounded-full bg-white p-1.8 shadow-md"
//           size="icon"
//         >
//           <Bookmark />
//         </Button>

//         {/* Date posted */}
//         <p className="absolute top-4 left-4 text-sm text-gray-700 bg-white px-2 py-1 rounded-md shadow">
//           {daysAgoFunction(job?.createdAt) === 0 ? 'Today' : `${daysAgoFunction(job?.createdAt)} days ago`}
//         </p>

//         {/* Colored Background Section */}
//         <div
//           className="p-5 rounded-2xl"
//           style={{
//             backgroundColor: pastelBackgroundColor,
            
//             margin: '16px',
//           }}
//         >
//           {/* Company Logo and Name */}
//           <div className="flex items-center gap-3 mt-8 mb-4">
//             <Button className="p-2 bg-white rounded-full shadow-md" variant="outline" size="icon">
//               <Avatar>
//                 <AvatarImage src={job?.company?.logo} />
//               </Avatar>
//             </Button>
//             <h1 className="font-semibold text-lg">{job?.company?.name}</h1>
//           </div>

//           {/* Job Title */}
//           <h1 className="font-bold text-xl mb-2">{job?.title}</h1>

//           {/* Job Description */}
//           <p className="text-sm text-gray-700 mb-4">{job?.description}</p>

//           {/* Job Tags */}
//           <div className="flex flex-wrap gap-2 mb-4">
//             <Badge className="text-sm font-semibold bg-white border border-gray-300 px-3 py-1 rounded-full text-gray-800 hover:text-white">
//               {job?.position} Positions
//             </Badge>
//             <Badge className="text-sm font-semibold bg-white border border-gray-300 px-3 py-1 rounded-full text-gray-800 hover:text-white">
//               {job?.jobType}
//             </Badge>
//             <Badge className="text-sm font-semibold bg- border border-gray-300 px-3 py-1 rounded-full text-gray-800 hover:text-white">
//               {job?.salary} LPA
//             </Badge>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Action Buttons */}
//       <div className="flex justify-between items-center mt-4 px-5 py-4 bg-white">
//         <Button onClick={() => navigate(`/description/${job?._id}`)} className="bg-black text-white px-4 py-2 rounded-full">
//           Details
//         </Button>
//         <Button  className="bg-[#000000] text-white px-4 py-2 rounded-full">Save For Later</Button>
//       </div>
//     </div>
//   );
// };

// export default Job;
import React from 'react';
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';
import { Avatar, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

const Job = ({ job }) => {
  const navigate = useNavigate();

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  };

  const getRandomPastelColor = () => {
    const pastelColors = [
      '#ffe1cc', '#fbe2f4', '#e3dbfa', '#d4f5ed', '#ffecd1', '#f6e8ea', '#e6e6fa', '#c3f3ff', '#aec6cf',
    ];
    return pastelColors[Math.floor(Math.random() * pastelColors.length)];
  };

  const pastelBackgroundColor = getRandomPastelColor();

  return (
    <div className="rounded-2xl shadow-lg transition-transform hover:scale-105 overflow-hidden bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
      <div className="relative">
        <Button
          variant="outline"
          className="absolute top-4 right-4 rounded-full bg-white dark:bg-gray-700 p-1.8 shadow-md"
          size="icon"
        >
          <Bookmark className="text-gray-800 dark:text-gray-200" />
        </Button>

        <p className="absolute top-4 left-4 text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 px-2 py-1 rounded-md shadow">
          {daysAgoFunction(job?.createdAt) === 0 ? 'Today' : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>

        <div
          className="p-5 rounded-2xl"
          style={{ backgroundColor: pastelBackgroundColor, margin: '16px' }}
        >
          <div className="flex items-center gap-3 mt-8 mb-4">
            <Button className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-md" variant="outline" size="icon">
              <Avatar>
                <AvatarImage src={job?.company?.logo} />
              </Avatar>
            </Button>
            <h1 className="font-semibold text-lg text-gray-800 dark:text-gray-900">{job?.company?.name}</h1>
          </div>

          <h1 className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-600">{job?.title}</h1>
          <p className="text-sm text-gray-700 dark:text-gray-900 mb-4">{job?.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="text-sm font-semibold bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 px-3 py-1 rounded-full text-gray-800 dark:text-gray-200">
              {job?.position} Positions
            </Badge>
            <Badge className="text-sm font-semibold bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 px-3 py-1 rounded-full text-gray-800 dark:text-gray-200">
              {job?.jobType}
            </Badge>
            <Badge className="text-sm font-semibold bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 px-3 py-1 rounded-full text-gray-800 dark:text-gray-200">
              {job?.salary} LPA
            </Badge>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4 px-5 py-4 bg-white dark:bg-gray-800">
        <Button
          onClick={() => navigate(`/description/${job?._id}`)}
          className="bg-black dark:bg-gray-700 text-white px-4 py-2 rounded-full"
        >
          Details
        </Button>
        <Button className="bg-black dark:bg-gray-700 text-white px-4 py-2 rounded-full">Save For Later</Button>
      </div>
    </div>
  );
};

export default Job;
