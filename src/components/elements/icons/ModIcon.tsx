import React from 'react'

import Icon, { IconProps } from './Icon'

const Element: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32.991"
        height="33"
        viewBox="0 0 32.991 33"
      >
        <path
          d="M34.768,21a4.245,4.245,0,0,1,2.724-3.961,16.828,16.828,0,0,0-2.036-4.906,4.3,4.3,0,0,1-1.727.369,4.236,4.236,0,0,1-3.875-5.963,16.777,16.777,0,0,0-4.9-2.036,4.242,4.242,0,0,1-7.921,0,16.828,16.828,0,0,0-4.906,2.036A4.236,4.236,0,0,1,8.254,12.5a4.162,4.162,0,0,1-1.727-.369A17.2,17.2,0,0,0,4.5,17.044a4.244,4.244,0,0,1,.009,7.921,16.828,16.828,0,0,0,2.036,4.906,4.238,4.238,0,0,1,5.593,5.593A16.926,16.926,0,0,0,17.044,37.5a4.234,4.234,0,0,1,7.9,0,16.828,16.828,0,0,0,4.906-2.036,4.242,4.242,0,0,1,5.593-5.593,16.926,16.926,0,0,0,2.036-4.906A4.266,4.266,0,0,1,34.768,21ZM21.073,27.86a6.873,6.873,0,1,1,6.873-6.873A6.871,6.871,0,0,1,21.073,27.86Z"
          transform="translate(-4.5 -4.5)"
          fill="#341131"
        />
      </svg>
    </Icon>
  )
}

export default Element
