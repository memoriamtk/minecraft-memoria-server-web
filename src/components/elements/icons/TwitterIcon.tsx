import React from 'react'

import Icon, { IconProps } from './Icon'

const Element: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="19.506"
        viewBox="0 0 24 19.506"
      >
        <path
          d="M23.953,5.692a10,10,0,0,1-2.825.775,4.958,4.958,0,0,0,2.163-2.723,10.163,10.163,0,0,1-3.127,1.184,4.918,4.918,0,0,0-8.511,3.358,5.035,5.035,0,0,0,.127,1.124A13.934,13.934,0,0,1,1.64,4.284,4.822,4.822,0,0,0,.974,6.759a4.921,4.921,0,0,0,2.188,4.1,4.9,4.9,0,0,1-2.228-.616V10.3A4.923,4.923,0,0,0,4.88,15.127a4.965,4.965,0,0,1-2.212.085,4.936,4.936,0,0,0,4.6,3.417,9.868,9.868,0,0,1-6.1,2.1A10.443,10.443,0,0,1,0,20.666a14,14,0,0,0,7.557,2.209,13.9,13.9,0,0,0,14-13.985c0-.209,0-.42-.015-.63A9.935,9.935,0,0,0,24,5.712l-.047-.02Z"
          transform="translate(0 -3.369)"
          fill="#00acee"
        />
      </svg>
    </Icon>
  )
}

export default Element
