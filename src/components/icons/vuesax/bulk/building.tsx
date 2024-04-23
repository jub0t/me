import React from "react";

import { IIconProps } from "../../types";

export const IconVSBulkBuilding: React.FC<IIconProps> = ({
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
        d="M12.5 7.41001V22H4.07997C2.91997 22 1.96997 21.07 1.96997 19.93V5.09001C1.96997 2.47001 3.92997 1.28001 6.31997 2.45001L10.75 4.64001C11.71 5.11001 12.5 6.36001 12.5 7.41001Z"
        fill="currentColor"
      />
      <path
        d="M8.97 9.75H5.5C5.09 9.75 4.75 9.41 4.75 9C4.75 8.59 5.09 8.25 5.5 8.25H8.97C9.38 8.25 9.72 8.59 9.72 9C9.72 9.41 9.39 9.75 8.97 9.75Z"
        fill="currentColor"
      />
      <path
        d="M8.97 13.75H5.5C5.09 13.75 4.75 13.41 4.75 13C4.75 12.59 5.09 12.25 5.5 12.25H8.97C9.38 12.25 9.72 12.59 9.72 13C9.72 13.41 9.39 13.75 8.97 13.75Z"
        fill="currentColor"
      />
      <path
        opacity="0.6"
        d="M22 15.05V19.5C22 20.88 20.88 22 19.5 22H12.5V10.42L12.97 10.52L17.01 11.42L17.49 11.53L19.53 11.99C20.02 12.09 20.47 12.26 20.86 12.51C20.86 12.52 20.87 12.52 20.87 12.52C20.97 12.59 21.07 12.67 21.16 12.76C21.62 13.22 21.92 13.89 21.99 14.87C21.99 14.93 22 14.99 22 15.05Z"
        fill="currentColor"
      />
      <path
        d="M12.5 10.42V16.42C12.96 17.03 13.68 17.42 14.5 17.42C15.89 17.42 17.01 16.3 17.01 14.92V11.43L12.97 10.53L12.5 10.42Z"
        fill="currentColor"
      />
      <path
        d="M21.99 14.87C21.92 13.89 21.62 13.22 21.16 12.76C21.07 12.67 20.97 12.59 20.87 12.52C20.87 12.52 20.86 12.52 20.86 12.51C20.47 12.26 20.02 12.09 19.53 11.99L17.49 11.53L17.01 11.42V14.92C17.01 16.29 18.12 17.42 19.51 17.42C20.85 17.42 21.92 16.37 22 15.06V15.05C22 14.99 21.99 14.93 21.99 14.87Z"
        fill="currentColor"
      />
    </svg>
  );
};
