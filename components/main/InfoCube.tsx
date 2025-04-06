import React, { useEffect, useState } from 'react'
import Tooltip from './Tooltip';

interface InfoCubeProps {
    icon : React.ReactNode;
    tooltip : string
}

const InfoCube : React.FC<InfoCubeProps>= ({ icon, tooltip }) => {
  const [visible, setVisible] = useState(false)
  const [position, setPosition] = useState({ x : 0, y : 0 })

  const handleMouseEnter = () => setVisible(true)
  const handleMouseLeave = () => setVisible(false)
  const handleMouseMove = (e : any) => {
    setPosition({ 
      x : (e.clientX + window.scrollX) + 30, 
      y : (e.clientY + window.scrollY) + 30
    })
  }

  return (
    <div
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onMouseMove={handleMouseMove}
    className="min-[750px]:aspect-square max-[950px]:w-15 w-20 max-[750px]:w-full max-[750px]:h-20 rounded-xl 
    bg-white shadow-md cursor-pointer flex items-center justify-center">
        { icon }
        <Tooltip xOffset={position.x} yOffset={position.y} label={tooltip} visible={visible} />
    </div>
  )
}

export default InfoCube