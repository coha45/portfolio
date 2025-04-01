import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

const About = () => {
  return (
    <section className="w-full p-2 max-w-[1200px] mx-auto min-[700px]:mt-40 mt-25 flex flex-col items-center">
        <motion.div 
        initial={{ opacity : 0 }}
        whileInView={{ opacity : 1 }}
        transition={{ duration : 0.5 }}
        viewport={{ 
            once : true
        }}
        className="max-[450px]:text-3xl text-5xl font-bold w-fit flex flex-col">
            <span className="uppercase font-[napzer]">ABOUT ME</span>
            <motion.span 
            initial={{ scaleX : 0 }}
            whileInView={{ scaleX : 1 }}
            transition={{ duration : 0.5, delay : 0.75}}
            viewport={{ 
                margin : "50px",
                once : true
             }}
            className="w-full h-1 mt-2 bg-black origin-left"></motion.span>
        </motion.div>
        <div className="max-[450px]:text-sm text-xl mt-10 max-w-[800px] w-11/12 flex flex-col items-center gap-10 text-justify font-[inter]">
            <p className="relative">
                I am a developer who is currently in highschool that is passionate about building modern and meaningful applications.
                Currently, I am studying in a Technical Vocational Strand, where we learning about modern ICT systems.
                <motion.span 
                whileInView={{ scaleX : 0 }}
                transition={{ duration : 0.5 }}
                viewport={{ once : true, margin : "-50px" }}
                className="absolute top-0 bottom-0 left-0 right-0 bg-black origin-bottom-right"></motion.span>
            </p>
            <p className="relative">
                I frequently dabble in many web-related technologies, where I focus on building modern and scalable apps fit for the current web landscape.
                Though I dont post much of my projects, you can find a collection of some of my publicly shared ones.
                <motion.span 
                whileInView={{ scaleX : 0 }}
                transition={{ duration : 0.55, delay : 0.05 }}
                viewport={{ once : true, margin : "-50px" }}
                className="absolute top-0 bottom-0 left-0 right-0 bg-black origin-bottom-right"></motion.span>
            </p>
            <Link to="/projects">
                <button className="w-fit bg-emerald-400 rounded-sm font-[napzer] px-4 py-2 font-semibold cursor-pointer">
                    Projects
                </button>
            </Link>
        </div>
    </section>
  )
}

export default About