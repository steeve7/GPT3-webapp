import React from 'react'
import { Feature } from '../../component'

const featuresData = [
  {
    title: "Improving end distrusts instantly ",
    desc: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    title: "Become the tended active",
    desc: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
  },
  {
    title: "Message or am nothing",
    desc: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
  },
  {
    title: "Really boy law county",
    desc: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
  }
]

const Features = () => {
  return (
    <div className='section__padding flex w-full justify-between md:flex-row flex-col mt-24 px-10' id='features'>
      <div className='flex-1 flex justify-start items-start flex-col text-left mr-[5rem]'>
        <h1 className='gradient_text font-[Manrope] font-extrabold md:text-[30px] text-[25px] md:leading-[45px] leading-[40px]'>The Future is Now and You Just Need To Realize It.
         Step into Future Today & Make it Happen.</h1>
         <p className='font-[Manrope] font-medium text-[16px] leading-[30px] text-[#ff8a71] mt-[2rem]'>Request Early Access to Get Started</p>
      </div>
      <div className='flex-[1.5] flex justify-start items-center flex-col gap-8'>
        {featuresData.map((data, i) =>(
          <Feature title={data.title} text={data.desc} key={data.title + i}/>
        ))}
      </div>
    </div>
  )
}

export default Features