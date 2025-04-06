import React from 'react'
import { motion } from "framer-motion"
import InfoCube from "../main/InfoCube"
//Icon imports
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql, SiPostgresql, SiSupabase, SiPrisma, SiMongoose, SiFlask, SiNextdotjs,
    SiTailwindcss,SiDaisyui, SiVite, SiJavascript, SiTypescript, SiPython, SiCplusplus, SiLua
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaReact, FaJava ,FaRust } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6"
import { TbBrandFramerMotion } from "react-icons/tb";

const Technologies = () => {
  const backend = [
    {
        icon : <FaNodeJs fontSize={25} />,
        tooltip : "Node js"
    },
    {
        icon : <SiExpress fontSize={25} />,
        tooltip : "Express"
    },
    {
        icon : <SiMongodb fontSize={25} />,
        tooltip : "Mongodb"
    },
    {
        icon : <SiMysql fontSize={25} />,
        tooltip : "MySQL"
    },
    {
        icon : <SiPostgresql fontSize={25} />,
        tooltip : "Postgresql"
    },
    {
        icon : <SiSupabase fontSize={25} />,
        tooltip : "Supabase"
    },
    {
        icon : <IoLogoFirebase fontSize={25} />,
        tooltip : "Firebase"
    },
    {
        icon : <SiPrisma fontSize={25} />,
        tooltip : "Prisma"
    },
    {
        icon : <SiMongoose fontSize={25} />,
        tooltip : "Mongoose"
    },
    {
        icon : <SiFlask fontSize={25} />,
        tooltip : "Flask"
    }
  ]

  const frontend = [
    {
        icon : <FaReact fontSize={25} />,
        tooltip : "React"
    },
    {
        icon : <SiNextdotjs fontSize={25} />,
        tooltip : "Nextjs"
    },
    {
        icon : <SiTailwindcss fontSize={25} />,
        tooltip : "Tailwindcss"
    },
    {
        icon : <TbBrandFramerMotion fontSize={25} />,
        tooltip : "Framer Motion"
    },
    {
        icon : <SiDaisyui fontSize={25} />,
        tooltip : "DaisyUI"
    },
    {
        icon : <SiVite fontSize={25} />,
        tooltip : "Vite"
    }
  ]

  const languages = [
    {
        icon : <SiJavascript fontSize={25} />,
        tooltip : "Javascript"
    },
    {
        icon : <SiTypescript fontSize={25} />,
        tooltip : "Typescript"
    },
    {
        icon : <SiPython fontSize={25} />,
        tooltip : "Python"
    },
    {
        icon : <SiCplusplus fontSize={25} />,
        tooltip : "C++"
    },
    {
        icon : <FaJava fontSize={25} />,
        tooltip : "Java"
    },
    {
        icon : <FaRust fontSize={25} />,
        tooltip : "Rust"
    },
    {
        icon : <FaGolang fontSize={25} />,
        tooltip : "GoLang"
    },
    {
        icon : <SiLua fontSize={25} />,
        tooltip : "Lua"
    }
  ]

  return (
    <div className="w-full p-2 max-w-[1000px] mx-auto min-[700px]:mt-60 mt-25 flex flex-col items-center">
        <div className="self-start">
            <motion.div 
            initial={{ opacity : 0 }}
            whileInView={{ opacity : 1 }}
            transition={{ duration : 0.5 }}
            viewport={{ 
                once : true
            }}
            className="max-[450px]:text-3xl text-5xl font-bold w-fit flex flex-col">
                <span className="uppercase font-[napzer]">TECHNOLOGIES</span>
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
        </div>
        <div className="w-full grid grid-cols-8 gap-10 mt-10">
            <div className="shadow-md bg-white rounded-lg flex flex-col col-span-8 p-5">
                <h1 className="text-3xl font-[napzer] font-bold w-full">LANGUAGES</h1>
                <div className="mt-5 w-full grid grid-cols-8 max-[750px]:grid-cols-2 gap-5 place-items-center">
                    { languages.map((e, i) => <InfoCube key={i} icon={e.icon} tooltip={e.tooltip} />) }
                </div>
            </div>
            <div className="shadow-md bg-white rounded-lg flex flex-col max-[750px]:col-span-8 col-span-5 p-5">
                <h1 className="text-3xl font-[napzer] font-bold w-full">BACKEND</h1>
                <div className="mt-5 w-full grid grid-cols-5 max-[750px]:grid-cols-2 gap-5 place-items-center">
                    { backend.map((e, i) => <InfoCube key={i} icon={e.icon} tooltip={e.tooltip} />) }
                </div>
            </div>
            <div className="shadow-md bg-white rounded-lg flex flex-col max-[750px]:col-span-8 col-span-3 p-5">
                <h1 className="text-3xl font-[napzer] font-bold w-full">FRONTEND</h1>
                <div className="mt-5 w-full grid grid-cols-3 max-[750px]:grid-cols-2 gap-5 place-items-center">
                    { frontend.map((e, i) => <InfoCube key={i} icon={e.icon} tooltip={e.tooltip} />) }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Technologies