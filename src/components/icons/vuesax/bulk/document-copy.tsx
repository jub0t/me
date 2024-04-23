import React from "react";

import { IIconProps } from "../../types";

export const IconVSBulkDocumentCopy: React.FC<IIconProps> = ({
  size = 24,
  className,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        opacity="0.4"
        d="M15.5 13.15H13.33C11.55 13.15 10.1 11.71 10.1 9.92V7.75C10.1 7.34 9.77 7 9.35 7H6.18C3.87 7 2 8.5 2 11.18V17.82C2 20.5 3.87 22 6.18 22H12.07C14.38 22 16.25 20.5 16.25 17.82V13.9C16.25 13.48 15.91 13.15 15.5 13.15Z"
        fill="currentColor"
      />
      <path
        d="M17.82 2H15.85H14.76H11.93C9.67001 2 7.84001 3.44 7.76001 6.01C7.82001 6.01 7.87001 6 7.93001 6H10.76H11.85H13.82C16.13 6 18 7.5 18 10.18V12.15V14.86V16.83C18 16.89 17.99 16.94 17.99 16.99C20.22 16.92 22 15.44 22 12.83V10.86V8.15V6.18C22 3.5 20.13 2 17.82 2Z"
        fill="currentColor"
      />
      <path
        d="M11.98 7.15C11.67 6.84 11.14 7.05 11.14 7.48V10.1C11.14 11.2 12.07 12.1 13.21 12.1C13.92 12.11 14.91 12.11 15.76 12.11C16.19 12.11 16.41 11.61 16.11 11.31C15.02 10.22 13.08 8.27 11.98 7.15Z"
        fill="currentColor"
      />
    </svg>
  );
};
