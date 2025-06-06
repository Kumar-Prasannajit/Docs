import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react"

export const Card  = ({data, reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} className='relative flex-shrink-0 w-50 h-62 rounded-[40px] bg-zinc-900/90 px-7 py-7 text-white p-5 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-xs leading-none mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0 left-0 w-full h-12 mb-7'>
            <div className='flex items-center justify-between py-2 px-7'>
                <h5>{data.filesize}</h5>
                <span className='h-5 w-5 bg-zinc-600 rounded-full flex items-center justify-center'>
                    {data.close ? <IoClose /> : <AiOutlineDownload size=".6em" color='white'/>}
                </span>  
            </div>
            {data.tag.isOpen && (
                <div className={`tag w-full py-2 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                    <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                </div>
            )}
            
        </div>
    </motion.div>
  )
}
