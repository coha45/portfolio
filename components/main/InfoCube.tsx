import React, { useEffect } from 'react'

interface InfoCubeProps {
    icon : React.ReactNode;
    tooltip : string
}

const InfoCube : React.FC<InfoCubeProps>= ({ icon }) => {
  useEffect(() => {

  })

  return (
    <div 
    onMouseEnter={e => console.log(e)}
    className="min-[750px]:aspect-square max-[950px]:w-15 w-20 max-[750px]:w-full max-[750px]:h-20 rounded-xl 
    bg-white shadow-md cursor-pointer flex items-center justify-center">
        { icon }
    </div>
  )
}

export default InfoCube