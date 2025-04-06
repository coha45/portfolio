import React from 'react'
import { useLocation } from 'react-router-dom'

const Footer = () => {
  const location = useLocation()

  return (
    <div className={`w-full p-10 flex flex-row items-center justify-center 
    font-[inter] ${location.pathname === "/contact" ? "mt-100" : "mt-30"} text-xs md:text-base text-neutral-400`}>
        @2025 coha45
    </div>
  )
}

export default Footer