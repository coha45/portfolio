import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'

interface NavLinkProps {
  label : string
  path : string
}

const NavLink : React.FC<NavLinkProps> = ({ label, path }) => {
  const location = useLocation()
  const [active, setActive] = useState(false)

  useEffect(() => {
    if(location.pathname == path) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [active, location])
  
  return (
    <Link to={path}>
      <div className={`${active ? "bg-neutral-100" : "hover:bg-neutral-50" } uppercase px-2 py-1 rounded-md md:text-sm text-lg font-semibold`}>
        {label}
      </div>
    </Link>
  )
}

export default NavLink