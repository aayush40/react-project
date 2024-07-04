import React from 'react'
import { FaReact } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { FaJava } from "react-icons/fa6";
import { AiOutlinePython } from "react-icons/ai";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa6";
import { SiFlutter } from "react-icons/si";
import { GrMysql } from "react-icons/gr";



const Tech = () => {
  return (
    <div className='space-y-12'>
      <h1 className='text-3xl font-bold text-center'>Technologies I use
      </h1>
      <div className='devi-icons grid grid-cols-4 justify-items-center gap-y-4  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
        <FaReact size={150} className='hover:text-red-600 hover:size-[180px]' />
        <TbBrandJavascript size={150} />
        <FaJava size={150} />
        <AiOutlinePython size={150} />
        <AiFillHtml5 size={150} />
        <FaCss3 size={150} className='animate-bounce' />
        <SiFlutter size={150} />
        <GrMysql size={150} />













      </div>


    </div>
  )
}

export default Tech
