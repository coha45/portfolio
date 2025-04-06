import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaDiscord  } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";



const Contact = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [topic,  setTopic] = useState("")

  return (
    <div className="w-full h-screen">
      <div className="w-11/12 max-w-[1200px] mx-auto mt-20 flex flex-row items-start justify-start gap-5" >
        <section className="flex flex-col items-start justify-start gap-5 w-[50%]">
          <h1 className="text-5xl font-[napzer] font-bold">Get in touch</h1>
          <p className="font-[inter] text-lg text-justify">
          Thank you for visiting my portfolio. If you have any inquiries, wish to discuss potential collaborations, 
          or need further information, please don’t hesitate to reach out. Simply submit your message, and it will automatically be sent to my inbox. 
          I will respond to your message at the earliest opportunity.
          </p>
          <div className="flex flex-row items-center justify-center gap-3">
            <FaGithub className="cursor-pointer hover:text-green-400 duration-150" fontSize={35} />
            <FaLinkedin  className="cursor-pointer hover:text-green-400 duration-150" fontSize={35} />
            <TbBrandFiverr className="cursor-pointer hover:text-green-400 duration-150" fontSize={35} />
            <FaDiscord className="cursor-pointer hover:text-green-400 duration-150" fontSize={35} />
          </div>
        </section>
        <section className="w-[50%] h-full">
          <div className="p-5 grid grid-cols-4 gap-5 font-[inter]">
            <div className="col-span-2">
              <input id="firstName" 
              onChange={e => setFirstName(e.target.value)}
              value={firstName}
              className="w-full border border-black outline-none px-5 py-2 text-black" placeholder="First Name" />
            </div>
            <div className="col-span-2">
              <input id="lastName" 
              onChange={e => setLastName(e.target.value)}
              value={lastName}
              className="w-full border border-black outline-none px-5 py-2 text-black" placeholder="Last Name" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact