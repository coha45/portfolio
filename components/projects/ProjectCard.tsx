import React from 'react'
import { GoDotFill } from 'react-icons/go';

interface ProjectCardProps {
  title : string;
  description : string;
  image : string;
  tags : string[];
  date : string;
}

const ProjectCard : React.FC<ProjectCardProps> = ({ title, description, image, tags,date }) => {
  return (
    <div className="flex flex-col items-start justify-start rounded-2xl shadow-md overflow-hidden h-full">
      <img src={image} className="bg-cover w-full flex-1 max-h-[50%]" />
      <div className="p-5 text-sm flex-2">
        <h1 className="font-[napzer] text-3xl font-bold">{title}</h1>
        <h2 className="font-[inter] text-sm font-semibold text-neutral-500 opacity-50">{date}</h2>
        <p className="font-[inter] mt-2 text-justify">
          {description}
        </p>
        <div className="w-full flex flex-row flex-wrap gap-2 max-[450px]:text-xs text-sm mt-4">
          {tags.map((label, index) => (
            <span className="text-white bg-black font-semibold px-1 rounded-sm flex items-center justify-center" key={index}>
              <GoDotFill fontSize={10}/>
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard