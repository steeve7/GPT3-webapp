import React from 'react'

const Feature = ({title, text}) => {
  return (
    <div className='gpt3__features-container__feature flex m-[1rem] md:my-0 my-[1rem] w-full justify-between items-start flex-col md:flex-row'>
      <div className='flex-1 max-w-[180px] mr-[2rem]'>
        <div className='w-[38px] h-[3px] tools mb-[0.25rem]'/>
        <h1 className='font-[Manrope] font-extrabold md:text-[18px] text-[14px] md:leading-[24px] leading-[22px] tracking-tighter text-white'>{title}</h1>
      </div>
      <div className='mt-[0.5rem] max-w-[700px] flex-[2] flex'> 
        <p className='font-[Manrope] font-medium md:text-[14px] text-[12px] md:leading-[24px] leading-[20px] text-[#81afdd]'>{text}</p>
      </div>
    </div>
  )
}

export default Feature