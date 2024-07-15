import React from "react";

const Contactfooter = () => {
  return (
   
    <div id="contact" class="flex justify-center pb-10">
      <div class="md:mt-6 md:w-3/4 w-full  flex md:flex-row flex-col justify-center items-center h-auto">
        <div class="flex flex-col  pt-4 gap-2  md:items-start items-center text-center md:text-left">
          <h1 class="text-black font-bold text-4xl md:pt-20 flex justify-start ">
            Get a free quote Calculation
          </h1>
          <p class="text-black flex justify-start md:justify-start ">
            We will reply as soon as possible!
          </p>

          <p class="text-black flex  justify-center md:justify-start md:text-start">
            Suspenisse imperdiet lectus curcus nis fcbmkas manga nec.
          </p>
        </div>
        <div className="w-3/4 justify-center items-center">
          <form class="grid grid-cols-2 gap-4 pt-20 p-4">
            <input
              class="bg-transparent border border-black rounded w-full py-2 px-3 text-black leading-tight"
              type="text"
              placeholder="Your name"
              name="name"
            />
            <input
              class="bg-transparent border border-black rounded w-full py-2 px-3 text-black leading-tight"
              type="email"
              placeholder="Your Email"
              name="email"
            />
            <input
              class="bg-transparent border border-black rounded w-full py-2 px-3 text-black leading-tight"
              type="text"
              placeholder="Contact Number"
              name="contact"
            />
            <input
              class="bg-transparent border border-black rounded w-full py-2 px-3 text-black leading-tight"
              type="text"
              placeholder="Number of Employees"
              name="employees"
            />
          </form>
          <div class="grid grid-cols-3 gap-2 px-4">
            <input
              class="bg-transparent border border-black rounded w-full py-2 px-3 text-black leading-tight"
              type="text"
              placeholder="Option 1"
              name="option1"
            />
            <input
              class="bg-transparent border border-black rounded w-full py-2 px-3 text-black leading-tight"
              type="text"
              placeholder="Option 2"
              name="option2"
            />
            <input
              class="bg-transparent border border-black rounded w-full py-2 px-3 text-black leading-tight"
              type="text"
              placeholder="Option 3"
              name="option3"
            />
          </div>
          <div class="md:w-full h-6 px-3 mt-4 w-auto">
            <button class="bg-black w-full py-2 border border-white text-white hover:bg-white hover:text-black hover:border-black ">
              Get a free Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactfooter;
