import React from 'react'

function Button({text,width,height,textColor,bgColor,borderline}) {
  return (
    <div className={`flex justify-center font-bold items-center rounded-[56px] ${width} ${height} ${textColor} ${bgColor} ${borderline}`}>
        {text}
    </div>
  )
}

export default Button