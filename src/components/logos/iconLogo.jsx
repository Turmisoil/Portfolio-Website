import React, { useEffect } from "react";

export const IconLogo = () => {

    useEffect(() => {
    }, [])


    return (
        <svg id="test" className="w-[60px] h-[60px] text-[black] fill-none select-none hover:scale-110 duration-200" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
        <title>Logo</title>
        <g transform="translate(-8.000000, -2.000000)">
          <g transform="translate(11.000000, 5.000000)">
            <path
              d="M 47 61 L 28.5417 61 L 28.5417 30.3 L 33.5917 30.3 M 33.5917 30.3 L 33.5917 56 H 47 V 61"
              fill="currentColor"
            />
            <polygon
              id="Shape"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              points="39 0 0 22 0 67 39 90 78 68 78 23"
            />
          </g>
        </g>
      </svg>
    )

}