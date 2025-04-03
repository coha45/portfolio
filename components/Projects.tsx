import React from 'react'
import ProjectCard from "./projects/ProjectCard"
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title : "Netflix Clone",
      description : "Earlier this year, I decided to exercise my frontend and backend skills by taking on the challenge of creating a netflix clone." +
      " What I ended up creating was an app that was responsive, had user authentication, and video streaming capablities.",
      image : "/images/Screenshot1.PNG",
      tags : ["Nextjs", "Frontend", "Backend", "Typescript"],
      date : "January 2025"
    },
    {
      title : "GPT Wrapper",
      description : "After seeing lots of posts online about a new trend of \"Custom Chatbots\" I decided to take on the challenge of creating my own." + 
      " I implemented a system where you'd need a valid OpenAPI key in order to use the application (To avoid additional API key costs).",
      image : "/images/Screenshot2.PNG",
      tags : ["HTML", "CSS", "Javascript", "AI"],
      date : "July 2024"
    },
    {
      title : "CPS Test",
      description : "This project was my take on the CPS test-esque websites. Although it is unfinished, I plan to add leaderboards and pvp (perhaps)",
      image : "/images/mouse.jpg",
      tags : ["React", "Tailwindcss", "Supabase"],
      date : "April 2025"
    }
  ]
  return (
    <section className="flex flex-col items-center justify-center">
      <motion.div 
        initial={{ opacity : 0 }}
        whileInView={{ opacity : 1 }}
        transition={{ duration : 0.5 }}
        viewport={{ 
            once : true
        }}
        className="max-[450px]:text-3xl text-5xl font-bold w-fit flex flex-col mt-20 justify-center">
            <span className="uppercase font-[napzer] text-center">MY WORKS</span>
            <motion.span 
            initial={{ scaleX : 0 }}
            whileInView={{ scaleX : 1 }}
            transition={{ duration : 0.5, delay : 0.75}}
            viewport={{ 
                margin : "50px",
                once : true
             }}
            className="w-full h-1 mt-2 bg-black origin-center"></motion.span>
        </motion.div>
      <div className="w-full self-end max-w-[1200px] mx-auto grid max-[1200px]:grid-cols-2 max-[800px]:grid-cols-1 grid-cols-3 place-items-center mt-20 gap-10">
        { projects.map((e, i) => 
          <ProjectCard title={e.title} description={e.description} image={e.image} tags={e.tags} date={e.date} key={i} />
        ) }
      </div>
    </section>
  )
}

export default Projects