import React from 'react'

const Article = ({imageUrl, date, title}) => {
  return (
    <div className='w-full h-full flex flex-col bg-[#031B34]'>
      <div className='w-full h-full bg-[#031B34]'>
        <img src={imageUrl} alt="blogImage" className='w-full h-full' />
      </div>
      <div className='flex flex-col justify-between py-[1rem] px-[1.5rem] h-full'>
        <div>
          <p className='font-[Manrope] font-bold text-[9px] leading-[30px] text-white'>{date}</p>
          <h3 className='font-[Manrope] font-extrabold md:text-[18px] text-[14px] leading-[25px] md:leading-[30px] text-white mb-[5rem] cursor-pointer'>{title}</h3>
        </div>
        <p className='cursor-pointer text-white text-[12px]'>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article