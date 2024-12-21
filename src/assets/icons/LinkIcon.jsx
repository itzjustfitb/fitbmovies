import React from "react";

function LinkIcon({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="12"
      viewBox="0 0 20 12"
      fill="none"
    >
      <path
        d="M6 0.25C2.82436 0.25 0.25 2.82436 0.25 6C0.25 9.17564 2.82436 11.75 6 11.75C6.41421 11.75 6.75 11.4142 6.75 11C6.75 10.5858 6.41421 10.25 6 10.25C3.65279 10.25 1.75 8.34721 1.75 6C1.75 3.65279 3.65279 1.75 6 1.75C6.41421 1.75 6.75 1.41421 6.75 1C6.75 0.585786 6.41421 0.25 6 0.25Z"
        fill={color}
      />
      <path
        d="M14 0.25C13.5858 0.25 13.25 0.585786 13.25 1C13.25 1.41421 13.5858 1.75 14 1.75C16.3472 1.75 18.25 3.65279 18.25 6C18.25 8.34721 16.3472 10.25 14 10.25C13.5858 10.25 13.25 10.5858 13.25 11C13.25 11.4142 13.5858 11.75 14 11.75C17.1756 11.75 19.75 9.17564 19.75 6C19.75 2.82436 17.1756 0.25 14 0.25Z"
        fill={color}
      />
      <path
        d="M6 5.25C5.58579 5.25 5.25 5.58579 5.25 6C5.25 6.41421 5.58579 6.75 6 6.75H14C14.4142 6.75 14.75 6.41421 14.75 6C14.75 5.58579 14.4142 5.25 14 5.25H6Z"
        fill={color}
      />
    </svg>
  );
}

export default LinkIcon;
