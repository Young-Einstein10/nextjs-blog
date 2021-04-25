import React, { FC } from "react";

export const AngleLeft: FC = (props) => {
  return (
    <svg
      {...props}
      width="13"
      height="20"
      viewBox="0 0 13 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M11 2L3 10L11 18" stroke="black" strokeWidth="3" />
    </svg>
  );
};