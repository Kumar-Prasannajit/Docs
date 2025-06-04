import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";

export const Card  = () => {
  return (
    <div className='relative w-50 h-62 rounded-[40px] bg-zinc-900/90 px-7 py-7 text-white p-5 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-xs leading-none mt-5 font-semibold'>Lorem ipsum dolorit amet consectetur adipisicing.</p>
        <div className='footer absolute bottom-0 left-0 w-full h-12 mb-7'>
            <div className='flex items-center justify-between py-2 px-7'>
                <h5>0.4Mb</h5>
                <span className='h-5 w-5 bg-zinc-600 rounded-full flex items-center justify-center'>
                    <AiOutlineDownload size=".6em" color='white'/>
                </span>  
            </div>
            <div className='tag w-full py-2 bg-green-400 flex items-center justify-center'>
                <h3 className='text-sm font-semibold'>Download</h3>
            </div>
        </div>
    </div>
  )
}
