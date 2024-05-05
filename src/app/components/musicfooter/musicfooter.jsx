import React from 'react'
import { FaCirclePause } from "react-icons/fa6";
import { FaPlayCircle } from "react-icons/fa";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Musicfooter = ({selectMusicName}) => {
  return (
    <div className='bg-red-900 flex flex-col fixed bottom-0 left-0 w-full'>
        <div className='flex justify-center py-2'><h4>{selectMusicName}</h4></div>
        <div className='flex justify-between'>
            <div>time</div>
            <input type="range" name="range" className="w-[800px] h-1 bg-blue-100 appearance-none" />
            <div>end time</div>
        </div>
        <div className='flex justify-around py-2'>
            <div><IoIosArrowDropleftCircle/></div>
            <div><FaCirclePause/></div>
            <div><FaPlayCircle /></div>
            <div><IoIosArrowDroprightCircle/></div>
        </div>
    </div>
  )
}

export default Musicfooter;