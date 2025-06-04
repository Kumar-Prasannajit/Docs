import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";

export const Card  = () => {
  return (
    <div className='w-50 h-60 rounded-[20px] bg-zinc-900/90 text-white p-5'>
        <FaRegFileAlt />
        <p className='text-sm leading-none mt-5 font-semibold   '>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
    </div>
  )
}
