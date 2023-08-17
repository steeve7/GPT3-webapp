import React from 'react'
import gptLogo from '../../assets/logo.svg'
import { RiArrowUpCircleLine } from 'react-icons/ri'

const Footer = () => {
  return (
    <div className='gpt3__footer flex flex-col justify-center items-center mt-20 px-16 bg-[#031B34] section__padding'>
      <div className='gpt3__footer-heading w-full text-center mb-[3rem]'>
        <h1 className='gradient_text font-[Manrope] font-extrabold md:text-[30px] text-[18px] md:leading-[65px] leading-[40px] mt-8 text-center tracking-tighter'>Do you want to step in to the future before others</h1>
      </div>
      <div className='gpt3__footer-btn flex justify-center items-center p-[1rem] border border-white text-center mb-[10rem] cursor-pointer'>
        <p className='font-[Gilroy-Medium] md:text-[18px] text-[12px] md:leading-[21px] leading-[17px] text-white tracking-tight'>Request Early Access</p>
      </div>
      <div className='gpt3__footer-links flex justify-between items-start flex-wrap md:flex-row flex-col w-full text-left'>
        <div className='gpt3__footer-links_logo flex flex-col w-[250px] m-[1rem] my-[1rem] md:my-0 mx-0'>
          <img src={gptLogo} alt="logo" className='w-[118px] h-[30px] mb-[1rem]' />
          <p className='font-[Manrope] text-[12px] leading-[14px] text-white'>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-links_div flex justify-start flex-col text-white md:my-0 my-[1rem]'>
          <h4 className='font-[Manrope] text-[14px] leading-[16px] mb-[1rem]'>Links</h4>
          <p className='font-[Manrope] text-[12px] leading-[14px] my-[0.5rem]'>Overons</p>
          <p className='font-[Manrope] text-[12px] leading-[14px] my-[0.5rem]'>Social Media</p>
          <p className='font-[Manrope] text-[12px] leading-[14px] my-[0.5rem]'>Counters</p>
          <p className='font-[Manrope] text-[12px] leading-[14px] my-[0.5rem]'>Contact</p>
        </div>
        <div className='gpt3__footer-links_div flex justify-start flex-col text-white md:my-0 my-[1rem]'>
          <h4 className='font-[Manrope] text-[14px] leading-[16px] mb-[1rem]'>Company</h4>
          <p className='font-[Manrope] text-[12px] leading-[14px] my-[0.5rem]'>Terms & Conditions</p>
          <p className='font-[Manrope] text-[12px] leading-[14px] my-[0.5rem]'>Privacy Policy</p>
          <p className='font-[Manrope] text-[12px] leading-[14px] my-[0.5rem]'>Contact</p>
        </div>
        <div className='gpt3__footer-links_div flex justify-start flex-col text-white md:my-0 my-[1rem]'>
          <h4 className='font-[Manrope] text-[14px] leading-[16px] mb-[1rem]'>Get in touch</h4>
          <p className='font-[Manrope] text-[12px] leading-[14px] my-[0.5rem]'>Crechterwoord K12 182 DK Alknjkcb</p>
          <p className='font-[Manrope] text-[12px] leading-[14px] my-[0.5rem]'>085-132567</p>
          <p className='font-[Manrope] text-[12px] leading-[14px] my-[0.5rem]'>info@payme.net</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright mt-[2rem] items-center w-full flex justify-between mb-[2rem]'>
        <p className='font-[Manrope] text-[12px] leading-[14px] text-white'>© 2023 GPT-3. All rights reserved.</p>
        <a href="#home" className=''><RiArrowUpCircleLine size={50} color='white' /></a>
      </div>
    </div>
  )
}

export default Footer