import React from 'react'
import PhoneImage from "../assests/phone.png";
import LocationImage from "../assests/Location.png"

const headingContact = () => {
  return (
    <div className='bg-blue-600 h-10 pt-3 flex justify-center'>
      <div className=' w-[3000px] flex justify-center'>
        <div className='flex justify-center'>
        <img  className="h-5" src={PhoneImage}></img>
      <h className="text-white text-sm font-bold pr-6">888-999-347  </h>
        </div>
      <div className='flex justify-center '>
      <img className='w-5 h-5' src={LocationImage}></img>
      <h className="text-white text-sm font-bold flex justify-center ">222 first Floor,World Trade Tower,Cannaught Place,New Delhi-110001</h>
      </div>
      <div className='flex justify-center '>
      <h className="text-white text-sm font-bold flex justify-center pl-56">Careers at AU</h>
      </div>
      </div>
      
    </div>
  )
}

export default headingContact