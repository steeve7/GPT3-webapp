import React from 'react'
import { Article } from '../../component'
import {blog01, blog02, blog03, blog04, blog05} from './import'

const Blog = () => {
  return (
    <div className='flex flex-col md:mt-28 mt-14 md:mx-16 mx-8 section__padding' id='blog'>
      <div className='w-full text-left mb-[5rem]'>
        <h1 className='gradient_text font-[Manrope] font-extrabold md:text-[50px] text-[40px] md:leading-[65px] leading-[60px] tracking-tighter'>A lot is happening,<br/> We are blogging about it.</h1>
      </div>
      <div className='flex md:flex-row flex-col-reverse'>
        <div className='flex-[0.75] mr-[2rem] md:my-0 my-[2rem] w-full'>
          <Article imageUrl={blog01} date="Aug 17, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
        <div className='flex-1 grid md:grid-cols-2 grid-cols-1 gap-[2rem]'>
        <Article imageUrl={blog02} date="Aug 17, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imageUrl={blog03} date="Aug 17, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imageUrl={blog04} date="Aug 17, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imageUrl={blog05} date="Aug 17, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
      </div>
    </div>
  )
}

export default Blog