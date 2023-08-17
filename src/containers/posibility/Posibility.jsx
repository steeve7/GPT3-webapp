import React from 'react'
import PosImage from '../../assets/possibility.png'

const Posibility = () => {
  return (
    <div className='section__padding flex md:flex-row flex-col px-10 mb-14' id='possibility'>
      <div className='flex-1 flex justify-start items-center mr-[2rem] md:my-o my-[1rem]'>
        <img src={PosImage} alt="PosImage" className='w-full h-full' />
      </div>
      <div className='flex-1 flex flex-col justify-end items-start md:mt-0 mt-[2rem]'>
        <h4 className='font-[Monrope] font-medium text-[16px] leading-[30px] text-[#71e5ff]'>Request Early Access to Get Started</h4>
        <h1 className='gradient_text font-[Monrope] font-extrabold text-[34px] leading-[45px] my-[1rem]'>The possibilities are beyond your imagination</h1>
        <p className='font-[Monrope] text-[16px] leading-[30px] text-[#81afdd] mb-[2rem]'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.
         Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
         <h4 className='font-[Monrope] font-medium text-[16px] leading-[30px] text-[#ff8a71]'>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Posibility