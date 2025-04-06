import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaDiscord  } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import GlobeContainer from './GlobeContainer';

const Contact = () => {
  const [sender, setSender] = useState("")
  const [email, setEmail] = useState("")
  const [topic,  setTopic] = useState("")
  const [message,  setMessage] = useState("")

  return (
    <div className="w-full p-5 h-screen flex flex-col">
      <GlobeContainer />
      <div className="w-full max-w-[1200px] mx-auto mt-20 flex flex-row max-[950px]:flex-col max-[950px]:justify-center max-[950px]:items-center items-start justify-start gap-5" >
        <section className="flex flex-col items-start justify-start gap-5 w-full">
          <h1 className="text-5xl font-[napzer] font-bold">Get in touch</h1>
          <p className="font-[inter] text-lg text-justify">
          Thank you for visiting my portfolio. If you have any inquiries, wish to discuss potential collaborations, 
          or need further information, please don’t hesitate to reach out. Simply submit your message, and it will automatically be sent to my inbox. 
          I will respond to your message at the earliest opportunity.
          </p>
          <div className="flex flex-row items-center justify-center gap-3 w-fit">
            <FaGithub className="cursor-pointer hover:text-green-400 duration-150" fontSize={35} />
            <FaLinkedin  className="cursor-pointer hover:text-green-400 duration-150" fontSize={35} />
            <TbBrandFiverr className="cursor-pointer hover:text-green-400 duration-150" fontSize={35} />
            <FaDiscord className="cursor-pointer hover:text-green-400 duration-150" fontSize={35} />
          </div>
        </section>
        <section className="w-full h-full">
          <div className="p-5 grid grid-cols-4 gap-5 font-[inter] text-black font-base">
            <div className="col-span-2">
              <input id="sender" 
              type="text"
              onChange={e => setSender(e.target.value)}
              value={sender}
              className="w-full rounded-md border-2 border-black outline-none px-5 py-2" placeholder="Sender" />
            </div>
            <div className="col-span-2">
              <input id="email" 
              type="email"
              onChange={e => setEmail(e.target.value)}
              value={email}
              className="w-full rounded-md border-2 border-black outline-none px-5 py-2" placeholder="Working Email" />
            </div>
            <div className="col-span-4">
              <input id="topic" 
              type="text"
              onChange={e => setTopic(e.target.value)}
              value={topic}
              className="w-full rounded-md border-2 border-black outline-none px-5 py-2" placeholder="Topic" />
            </div>
            <div className="col-span-4">
              <textarea id="message" 
              onChange={e => setMessage(e.target.value)}
              value={message}
              className="w-full rounded-md border-2 border-black outline-none px-5 py-2 resize-none h-50" placeholder="Message" />
            </div>
            <button className="col-span-4 p-1 text-xl font-bold font-[napzer] bg-green-400 rounded-md cursor-pointer">Submit</button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact