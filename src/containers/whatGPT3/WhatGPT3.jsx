import React from 'react'
import { Feature } from '../../component'

const WhatGPT3 = () => {
  return (
    <div className='section__margin flex flex-col p-[2rem] md:mt-10 mt-8' id='wgpt3'>
      <div className='flex m-0 flex-col md:flex-row'>
        <Feature title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous.
         At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."/>
      </div>
      <div className='flex md:flex-row flex-col justify-between items-start md:py-[6rem] py-[2rem] md:mx-0 mx-5'>
        <h1 className='gradient_text md:text-[34px] text-[28px] md:leading-[45px] leading-[40px] font-extrabold max-w-[510px] font-[Manrope]'>The possibilities are beyond your imagination</h1>
        <p className='font-[Manrope] font-medium text-[16px] leading-[30px] text-[#FF8A71] cursor-pointer mt-[1rem] md:mt-0'>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container flex flex-wrap flex-row mt-[2rem]'>
        <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."/>
        <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"/>
        <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
      </div>
    </div>
  )
}

export default WhatGPT3