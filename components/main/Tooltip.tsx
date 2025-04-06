import React from 'react'

interface TooltipProps {
    xOffset : number;
    yOffset : number;    
    label : string;
    visible? : boolean;
}

const Tooltip : React.FC<TooltipProps> = ({ xOffset, yOffset, label, visible }) => {
  return visible && (
    <div
    className="absolute py-1 px-2 text-lg font-[inter] text-black bg-white shadow-lg rounded-lg font-bold z-100 w-fit text-nowrap select-none"
    style={{ top : (yOffset) + "px", left : (xOffset-10) + "px" }}>
        {label}
    </div>
  )
}

export default Tooltip