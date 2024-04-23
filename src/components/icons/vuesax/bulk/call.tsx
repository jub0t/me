import React from "react";

import { IIconProps } from "../../types";

export const IconVSBulkCall: React.FC<IIconProps> = ({
  size = 24,
  className,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        opacity="0.4"
        d="M15.72 18.9467L11.36 23.3067C10.88 22.88 10.4134 22.44 9.96002 21.9867C8.58669 20.6 7.34669 19.1467 6.24002 17.6267C5.14669 16.1067 4.26669 14.5867 3.62669 13.08C2.98669 11.56 2.66669 10.1067 2.66669 8.71999C2.66669 7.81332 2.82669 6.94666 3.14669 6.14666C3.46669 5.33332 3.97335 4.58666 4.68002 3.91999C5.53335 3.07999 6.46669 2.66666 7.45335 2.66666C7.82669 2.66666 8.20002 2.74666 8.53335 2.90666C8.88002 3.06666 9.18669 3.30666 9.42669 3.65332L12.52 8.01332C12.76 8.34666 12.9334 8.65332 13.0534 8.94666C13.1734 9.22666 13.24 9.50666 13.24 9.75999C13.24 10.08 13.1467 10.4 12.96 10.7067C12.7867 11.0133 12.5334 11.3333 12.2134 11.6533L11.2 12.7067C11.0534 12.8533 10.9867 13.0267 10.9867 13.24C10.9867 13.3467 11 13.44 11.0267 13.5467C11.0667 13.6533 11.1067 13.7333 11.1334 13.8133C11.3734 14.2533 11.7867 14.8267 12.3734 15.52C12.9734 16.2133 13.6134 16.92 14.3067 17.6267C14.7867 18.0933 15.2534 18.5467 15.72 18.9467Z"
        fill="currentColor"
      />
      <path
        d="M29.2933 24.44C29.2933 24.8133 29.2267 25.2 29.0933 25.5733C29.0533 25.68 29.0133 25.7867 28.96 25.8933C28.7333 26.3733 28.44 26.8267 28.0533 27.2533C27.4 27.9733 26.68 28.4933 25.8667 28.8267C25.8533 28.8267 25.84 28.84 25.8267 28.84C25.04 29.16 24.1867 29.3333 23.2667 29.3333C21.9067 29.3333 20.4533 29.0133 18.92 28.36C17.3867 27.7067 15.8533 26.8267 14.3333 25.72C13.8133 25.3333 13.2933 24.9467 12.8 24.5333L17.16 20.1733C17.5333 20.4533 17.8667 20.6667 18.1467 20.8133C18.2133 20.84 18.2933 20.88 18.3867 20.92C18.4933 20.96 18.6 20.9733 18.72 20.9733C18.9467 20.9733 19.12 20.8933 19.2667 20.7467L20.28 19.7467C20.6133 19.4133 20.9333 19.16 21.24 19C21.5467 18.8133 21.8533 18.72 22.1867 18.72C22.44 18.72 22.7067 18.7733 23 18.8933C23.2933 19.0133 23.6 19.1867 23.9333 19.4133L28.3467 22.5467C28.6933 22.7867 28.9333 23.0667 29.08 23.4C29.2133 23.7333 29.2933 24.0667 29.2933 24.44Z"
        fill="currentColor"
      />
    </svg>
  );
};
