import React from "react";

const contactfooter = () => {
  return (
    <div className=" flex justify-center ">
      <div className="absolute mt-6 w-2/3 flex flex-row justify-center  h-auto pb-10">
        <div className="flex flex-col w-[800px] pt-4 gap-2">
          <h className="text-black font-bold text-4xl pt-20 flex justify-start">
            Get a free quote Calculation
          </h>
          <h className="text-black flex justify-start">We will reply as soon as possible</h>
          <h className="text-black flex justify-start">
            Suspenisse imperdiet lectus curcus nis fcbmkas manga nec .
          </h>
        </div>
        <div className="w-[1000px]">
          <form className="grid grid-cols-2 gap-4 pt-20 p-4">
            <input
              className="bg-transparent border border-black pb-2 rounded w-full py-2 px-3 text-black leading-tight "
              id="name"
              type="text"
              placeholder="Your name"
              name="name"
            />
            <input
              className="bg-transparent border border-black rounded w-full py-2 px-3 text-black leading-tight "
              id="name"
              type="text"
              placeholder="Your Email"
              name="name"
            />
            <input
              className="bg-transparent border border-black pb-2 rounded w-full py-2 px-3 text-black leading-tight "
              id="name"
              type="text"
              placeholder="Contact Number"
              name="name"
            />
            <input
              className="bg-transparent border border-black pb-2 rounded w-full py-2 px-3 text-black leading-tight "
              id="name"
              type="text"
              placeholder="Number of Employee"
              name="name"
            />
            <div className="grid grid-cols-3">
              <input
                className="bg-transparent border border-black pb-2 rounded w-full py-2 px-3 text-black leading-tight "
                id="name"
                type="text"
                placeholder="Option 1"
                name="name"
              />
              <input
                className="bg-transparent border border-black pb-2 rounded w-full py-2 px-3 text-black leading-tight "
                id="name"
                type="text"
                placeholder="Option 2"
                name="name"
              />
              <input
                className="bg-transparent border border-black pb-2 rounded w-full py-2 px-3 text-black leading-tight "
                id="name"
                type="text"
                placeholder="Option 3"
                name="name"
              />
            </div>
            <br></br>
            <div className="w-[770px] h-6">
              <button className="bg-black w-full py-2 text-white">
                Get a free Quote
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default contactfooter;
