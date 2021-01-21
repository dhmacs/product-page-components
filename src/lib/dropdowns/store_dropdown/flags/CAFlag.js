import React from 'react';

const CAFlag = props => (
   <svg
      {...props}
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
   >
      <rect width="16" height="12" fill="#F5F8FB" />
      <rect x="4" width="12" height="4" transform="rotate(90 4 0)" fill="#E31D1C" />
      <rect x="16" width="12" height="4" transform="rotate(90 16 0)" fill="#E31D1C" />
      <path
         d="M6.90909 4.02404L8 2.5L9.09091 4.02404V5.32212L11 5.53846L9.63636 7.26923L8.54545 7.70192L8.19139 8.8691C8.13398 9.05835 7.86602 9.05835 7.80861 8.8691L7.45455 7.70192L6.36364 7.26923L5 5.53846L6.90909 5.32212V4.02404Z"
         fill="#DC251C"
      />
   </svg>
);

export default CAFlag;
