import React from 'react'
import NavLink from "../components/NavLink"

const Nav = () => {
  return (
    <nav className="w-fit shadow-md p-1 rounded-md flex flex-row justify-center items-center font-[napzer] fixed bg-white z-10
    max-[320px]:shadow-none">
      <NavLink label="Home" path="/" />
      <NavLink label="Projects" path="/projects" />
      <NavLink label="Contact" path="/contact" />
    </nav>
  )
}

export default Nav