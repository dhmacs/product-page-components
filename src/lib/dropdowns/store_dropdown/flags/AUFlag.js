import React from 'react';

const AUFlag = props => (
   <svg
      {...props}
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
   >
      <rect width="16" height="12" fill="#2E4E9D" />
      <mask
         id="mask0"
         mask-type="alpha"
         maskUnits="userSpaceOnUse"
         x="0"
         y="0"
         width="10"
         height="7"
      >
         <rect width="10" height="7" fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0)">
         <path d="M11 -1.16663L-1 8.16671" stroke="white" strokeWidth="2.5" />
         <path d="M11 -1.16663L-1 8.16671" stroke="#DC251C" strokeWidth="0.75" />
         <path d="M-1 -1.16663L11 8.16671" stroke="white" strokeWidth="2.5" />
         <path d="M-1 -1.16663L11 8.16671" stroke="#DC251C" strokeWidth="0.75" />
         <path d="M5 0V7M0 3.5H10" stroke="white" strokeWidth="3" />
         <path d="M5 0V7M0 3.5H10" stroke="#DC251C" strokeWidth="2" />
      </g>
      <circle cx="12.5" cy="2.5" r="0.5" fill="white" />
      <circle cx="11.5" cy="5.5" r="0.5" fill="white" />
      <circle cx="14.5" cy="4.5" r="0.5" fill="white" />
      <circle cx="13.5" cy="6.5" r="0.5" fill="white" />
      <circle cx="12.5" cy="9.5" r="0.5" fill="white" />
      <circle cx="5" cy="10" r="1" fill="white" />
   </svg>
);

export default AUFlag;
