import React, { useCallback, useEffect, useState } from 'react'
import About from "./main/About"
import Technologies from "./main/Technologies"
import { AnimatePresence, motion } from "framer-motion"
import { GoDotFill } from "react-icons/go";

const Main = () => {
  const [scrollTextVisible, setScrollTextVisible] = useState(true)

  const toAnimate = useCallback((letter : string, index : number, delay : number = 0, duration : number = 1) => (
    <motion.span
    initial={{ y : 100 }}
    animate={{ y : 1 }}
    transition={{ 
      duration, 
      delay : (index * 0.1) + delay,
      type : "spring"
    }}
    key={index}
    className="text-5xl max-[450px]:text-3xl font-bold origin-bottom">
      {letter}
    </motion.span>  
  ), [])

  useEffect(() => {
    const handle = () => {
      if (window.scrollY > 10) {
        setScrollTextVisible(false)
      }
    }
    window.addEventListener("scroll", handle)
    return () => window.removeEventListener("scroll", handle)
  }, [scrollTextVisible])

  return (
    <>
      <div className="flex flex-col items-center w-11/12 max-w-[900px] mx-auto md:mt-35 mt-10 font-[napzer]">
          <motion.section
          className="shadow-xl rounded-4xl bg-white w-full max-[450px]:p-0 max-[450px]:shadow-none p-5 flex md:flex-row flex-col justify-between gap-5">
              <div className="w-full md:w-100 rounded-[50px] hover:rounded-xl transition-all duration-500 bg-[url('/images/temp.jpg')] bg-center bg-cover aspect-square">
              </div>
              <div 
              className="text-left flex flex-col justify-center items-start flex-1">
                  <div className="flex flex-row overflow-hidden">
                    {Array.from("JACOB").map((l, i) => toAnimate(l, i, 0.1))}
                  </div>
                  <div className="flex flex-row overflow-hidden">
                    {Array.from("ESGUERRA").map((l, i) => toAnimate(l, i, 0.5))}
                  </div>
                  <motion.div 
                  initial={{ opacity : 0 }}
                  animate={{ opacity : 1 }}
                  transition={{ delay : 1.5 }}
                  className="w-full flex flex-row flex-wrap gap-2 max-[450px]:text-xs text-sm mt-4">
                    {["Web Development", "Robotics", "Programming", "Gaming"].map((label, index) => (
                      <span 
                      className="text-black bg-emerald-400 font-semibold px-1 rounded-sm flex items-center justify-center" 
                      key={index}>
                        <GoDotFill fontSize={10}/>
                        {label}
                      </span>
                    ))}
                  </motion.div>
              </div>
          </motion.section>
          <motion.h1 
            initial={{ opacity : 0 }}
            animate={{ opacity : scrollTextVisible ? 1 : 0 }}
            transition={{ duration : scrollTextVisible ? 1 : 0.5, delay : scrollTextVisible ? 2 : 0 }}
            className="mt-25 font-semibold text-xl select-none max-[700px]:hidden block">
              {"{scroll}"}
          </motion.h1>
      </div>
      <About />
      <Technologies />
    </>
  )
}

export default Main