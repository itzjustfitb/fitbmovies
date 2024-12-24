import React from "react";

function UserIcon({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="21"
      viewBox="0 0 16 21"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0.25C5.37665 0.25 3.25 2.37665 3.25 5C3.25 7.62335 5.37665 9.75 8 9.75C10.6234 9.75 12.75 7.62335 12.75 5C12.75 2.37665 10.6234 0.25 8 0.25ZM4.75 5C4.75 3.20507 6.20507 1.75 8 1.75C9.79493 1.75 11.25 3.20507 11.25 5C11.25 6.79493 9.79493 8.25 8 8.25C6.20507 8.25 4.75 6.79493 4.75 5Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 11.25C2.37665 11.25 0.25 13.3766 0.25 16C0.25 18.6234 2.37665 20.75 5 20.75H11C13.6234 20.75 15.75 18.6234 15.75 16C15.75 13.3766 13.6234 11.25 11 11.25H5ZM1.75 16C1.75 14.2051 3.20507 12.75 5 12.75H11C12.7949 12.75 14.25 14.2051 14.25 16C14.25 17.7949 12.7949 19.25 11 19.25H5C3.20507 19.25 1.75 17.7949 1.75 16Z"
        fill={color}
      />
    </svg>
  );
}

export default UserIcon;
