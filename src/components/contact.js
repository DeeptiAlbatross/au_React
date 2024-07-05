import React from "react";
import ContactImage from "../assests/contact.png";

const Contact = () => {
  return (
    <div className="relative flex justify-center ">
      <div className="">
        <img src={ContactImage} alt=""></img>
      </div>
      <div className="absolute mt-28 w-2/3 flex flex-row justify-center bg-gradient-to-r from-black to-yellow-500 opacity-65 h-1/2 grid grid-cols-2">
        <div className="flex flex-col w-[500px] ml-20 gap-6  pt-8">
          <h className="text-white font-bold text-4xl flex justify-start">
            Get a free quote Calculation
          </h>
          <h className="text-white flex justify-start">We will reply as soon as possible !</h>
          <h className="text-white flex justify-start">Suspenisse imperdiet lectus curcus nis fcbmka.
          </h>
          </div>
          <div>
            <form className="grid grid-cols-2 gap-2 pt-10 p-4">
             
              <input
                className="bg-transparent border border-white pb-2 rounded w-full py-2 px-3 text-black leading-tight "
                id="name"
                type="text"
                placeholder="Your name"
                name="name"
              />
               <input
                className="bg-transparent border border-white rounded w-full py-2 px-3 text-white leading-tight "
                id="name"
                type="text"
                placeholder="Your Email"
                name="name"
              />
              <input
                className="bg-transparent border border-white pb-2 rounded w-full py-2 px-3 text-white leading-tight "
                id="name"
                type="text"
                placeholder="Contact Number"
                name="name"
              />
              <input
              className="bg-transparent border border-white pb-2 rounded w-full py-2 px-3 text-white leading-tight "
              id="name"
              type="text"
              placeholder="Number of Employee"
              name="name"
            />
            
            </form> 
            <div className="grid grid-cols-3 w-full  gap-2 px-4">
              <input
                className="bg-transparent border border-white pb-2 rounded w-full py-2 px-3 text-black leading-tight "
                id="name"
                type="text"
                placeholder="Option 1"
                name="name"
              />
              <input
                className="bg-transparent border border-white pb-2 rounded w-full py-2 px-3 text-black leading-tight "
                id="name"
                type="text"
                placeholder="Option 2"
                name="name"
              />
              <input
                className="bg-transparent border border-white pb-2 rounded w-full py-2 px-3 text-white leading-tight "
                id="name"
                type="text"
                placeholder="Option 3"
                name="name"
              />
            </div>
            <div className="w-[630px] h-6 px-3 mt-4">
              <button className="bg-white w-full py-2 text-black">
                Get a free Quote
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Contact;
