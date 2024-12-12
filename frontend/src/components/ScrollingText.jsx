// import React from 'react';

// const ScrollingText = () => {
//   return (
//     <div id="page5" data-scroll-container>
//       <div className="elem">
//         <h1>
//           <span>Jobs</span> - Companies - Technology -
//         </h1>
//         <h1>
//           <span>Jobs</span> - Comapnies - Technology -
//         </h1>
//       </div>
//       <div className="elem2">
//         <h1>
//           Dream-Job - <span>Life</span> - Hired -
//         </h1>
//         <h1>
//           Dream-Job - <span>Life</span> - Hired -
//         </h1>
//       </div>
//       <div className="elem">
//         <h1>
//           Talent - Industry - <span>Hiring</span> -
//         </h1>
//         <h1>
//           Talent - Industry - <span>Hiring</span> -
//         </h1>
//       </div>
//       <div className="elem2">
//         <h1>
//           <span>Cloud</span> - Mern - AWS -
//         </h1>
//         <h1>
//           <span>Cloud</span> - Mern - AWS -
//         </h1>
//       </div>
//       <style>
//         {`
//         #page5 {
//           min-height: fit-content;
//           width: 100%;
//           position: relative;
//         }

//         .elem {
//           white-space: nowrap;
//           overflow-x: hidden;
//           margin-bottom: -4vw;
//         }

//         .elem h1 {
//           font-size: 6vw;
//           -webkit-text-stroke: 1.5px #000;
//           font-weight: 400;
//           text-transform: uppercase;
//           color: transparent;
//           display: inline-block;
//           margin-right: 16px;
//           animation: anime 20s linear infinite;
//         }

//         @keyframes anime {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(calc(-100% - 20px));
//           }
//         }

//         .elem2 {
//           white-space: nowrap;
//           overflow-x: hidden;
//           margin-bottom: -2vw;
//         }

//         .elem2 h1 {
//           font-size: 6vw;
//           -webkit-text-stroke: 1.5px #000;
//           font-weight: 400;
//           text-transform: uppercase;
//           color: transparent;
//           display: inline-block;
//           transform: translateX(calc(-100% - 20px));
//           animation: anime 20s linear infinite reverse;
//         }

//         .elem span,
//         .elem2 span {
//           font-style: italic;
//           font-family: "silk serif";
//           color: transparent;
//         }
//         `}
//       </style>
//     </div>
//   );
// };

// export default ScrollingText;



// import React from 'react';

// const ScrollingText = () => {
//   return (
//     <div id="page5" data-scroll-container>
//       <div className="elem dark:text-gray-300">
//         <h1>
//           <span>Jobs</span> - Companies - Technology -
//         </h1>
//         <h1>
//           <span>Jobs</span> - Comapnies - Technology -
//         </h1>
//       </div>
//       <div className="elem2 dark:text-gray-400">
//         <h1>
//           Dream-Job - <span>Life</span> - Hired -
//         </h1>
//         <h1>
//           Dream-Job - <span>Life</span> - Hired -
//         </h1>
//       </div>
//       <div className="elem">
//         <h1>
//           Talent - Industry - <span>Hiring</span> -
//         </h1>
//         <h1>
//           Talent - Industry - <span>Hiring</span> -
//         </h1>
//       </div>
//       <div className="elem2">
//         <h1>
//           <span>Cloud</span> - Mern - AWS -
//         </h1>
//         <h1>
//           <span>Cloud</span> - Mern - AWS -
//         </h1>
//       </div>
//       <style>
//         {`
//         #page5 {
//           min-height: fit-content;
//           width: 100%;
//           position: relative;
//         }

//         .elem {
//           white-space: nowrap;
//           overflow-x: hidden;
//           margin-bottom: -4vw;
//         }

//         .elem h1 {
//           font-size: 6vw;
//           -webkit-text-stroke: 1.5px #000;
//           font-weight: 400;
//           text-transform: uppercase;
//           color: transparent;
//           display: inline-block;
//           margin-right: 16px;
//           animation: anime 20s linear infinite;
//         }

//         @keyframes anime {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(calc(-100% - 20px));
//           }
//         }

//         .elem2 {
//           white-space: nowrap;
//           overflow-x: hidden;
//           margin-bottom: -2vw;
//         }

//         .elem2 h1 {
//           font-size: 6vw;
//           -webkit-text-stroke: 1.5px #000;
//           font-weight: 400;
//           text-transform: uppercase;
//           color: transparent;
//           display: inline-block;
//           transform: translateX(calc(-100% - 20px));
//           animation: anime 20s linear infinite reverse;
//         }

//         .elem span,
//         .elem2 span {
//           font-style: italic;
//           font-family: "silk serif";
//           color: transparent;
//         }
//         `}
//       </style>
//     </div>
//   );
// };

// export default ScrollingText;

import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeProvider';

const ScrollingText = () => {
  const { theme } = useContext(ThemeContext);

  const textStrokeColor = theme === 'dark' ? '#fff' : '#000';
  const textGlowColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0)';

  return (
    <div id="page5" data-scroll-container>
      <div className="elem dark:text-gray-300">
        <h1>
          <span>Jobs</span> - Companies - Technology -
        </h1>
        <h1>
          <span>Jobs</span> - Companies - Technology -
        </h1>
      </div>
      <div className="elem2 dark:text-gray-400">
        <h1>
          Dream-Job - <span>Life</span> - Hired -
        </h1>
        <h1>
          Dream-Job - <span>Life</span> - Hired -
        </h1>
      </div>
      <div className="elem">
        <h1>
          Talent - Industry - <span>Hiring</span> -
        </h1>
        <h1>
          Talent - Industry - <span>Hiring</span> -
        </h1>
      </div>
      <div className="elem2">
        <h1>
          <span>Cloud</span> - Mern - AWS -
        </h1>
        <h1>
          <span>Cloud</span> - Mern - AWS -
        </h1>
      </div>
      <style>
        {`
        #page5 {
          min-height: fit-content;
          width: 100%;
          position: relative;
        }

        .elem {
          white-space: nowrap;
          overflow-x: hidden;
          margin-bottom: -4vw;
        }

        .elem h1 {
          font-size: 6vw;
          -webkit-text-stroke: 1.5px ${textStrokeColor};
          font-weight: 400;
          text-transform: uppercase;
          color: transparent;
          display: inline-block;
          margin-right: 16px;
          animation: anime 20s linear infinite;
          text-shadow: 0 0 10px ${textGlowColor}, 0 0 20px ${textGlowColor}, 0 0 30px ${textGlowColor};
        }

        @keyframes anime {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% - 20px));
          }
        }

        .elem2 {
          white-space: nowrap;
          overflow-x: hidden;
          margin-bottom: -2vw;
        }

        .elem2 h1 {
          font-size: 6vw;
          -webkit-text-stroke: 1.5px ${textStrokeColor};
          font-weight: 400;
          text-transform: uppercase;
          color: transparent;
          display: inline-block;
          transform: translateX(calc(-100% - 20px));
          animation: anime 20s linear infinite reverse;
          text-shadow: 0 0 10px ${textGlowColor}, 0 0 20px ${textGlowColor}, 0 0 30px ${textGlowColor};
        }

        .elem span,
        .elem2 span {
          font-style: italic;  
          font-family: "silk serif";
          color: transparent;
        }
        `}
      </style>
    </div>
  );
};

export default ScrollingText;
