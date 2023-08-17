import React from 'react'

const CTA = () => {
  return (
    <div className='gpt3__CTA flex justify-between items-center md:flex-row flex-col p-[2rem] m-[4rem] rounded-lg md:my-0 my-[4rem] md:mx-0 mx-[2rem]'>
      <div>
        <p className='font-[Monrope] font-medium text-[12px] leading-[30px] text-[#0e0e0e]'>Request Early Access to Get Started</p>
        <h3 className='font-[Monrope] font-extrabold md:text-[24px] text-[18px] md:leading-[45px] leading-[32px] text-[#000000]'>Register today & start exploring the endless possiblities.</h3>
      </div>
      <div className='flex justify-center items-center md:ml-[2rem] md:mt-0 mt-[2rem]'>
        <button type='button' className='bg-[#000000] rounded-xl font-[Monrope] font-bold md:text-[18px] text-[14px] md:leading-[30px] leading-[28px] text-white py-[0.5rem] px-[1rem] border-0 outline-none cursor-pointer min-w-[150px]'>Get Started</button>
      </div>
    </div>
  )
}

export default CTA