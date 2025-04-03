import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="font-[napzer] text-3xl font-bold">Oops! This page is still under construction 🏗️</h1>
      <div className="w-100 h-100 bg-cover bg-center
    bg-[url('/images/construction.png')]"></div>
      <Link to="/">
        <button className="w-fit mt-20 bg-emerald-400 rounded-sm font-[napzer] px-4 py-2 font-semibold cursor-pointer">
           Home
        </button>
      </Link>
    </div>
  )
}

export default Contact