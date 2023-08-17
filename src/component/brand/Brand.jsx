import React from 'react'
import {google, slack, assian, dropbox, shopify} from './import'

const Brand = () => {
  return (
    <div className='flex justify-center flex-wrap mt-10 items-center section__padding'>
      <div className='flex-1 max-w-[150px] min-w-[120px] m-[1rem] flex justify-center items-center'>
        <img src={google} alt="google" />
      </div>
      <div className='flex-1 max-w-[150px] min-w-[120px] m-[1rem] flex justify-center items-center'>
        <img src={slack} alt="slack" />
      </div>
      <div className='flex-1 max-w-[150px] min-w-[120px] m-[1rem] flex justify-center items-center'>
        <img src={assian} alt="assian" />
      </div>
      <div className='flex-1 max-w-[150px] min-w-[120px] m-[1rem] flex justify-center items-center'>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div className='flex-1 max-w-[150px] min-w-[120px] m-[1rem] flex justify-center items-center'>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  )
}

export default Brand