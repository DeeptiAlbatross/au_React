import React from 'react'
import Statics from "../assests/statics.png"

const statics = () => {
  return (
    <div className='flex justify-center pb-10 bg-gray-100 '>
        <img  className=" w-2/3  pt-10 flex justify-center" src={Statics}></img>
    </div>
  )
}

export default statics;