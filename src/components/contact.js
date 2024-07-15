import React from "react";
import ContactImage from "../assets/contact.png";

const Contact = () => {
  return (
  
    <div class="relative flex bg-slate-600 mx-auto">
      <div class="absolute">
        <img src={ContactImage} class="h-96 w-screen" alt=""></img>
      </div>

      <div class="w-9/12 h-96 z-20 mx-auto items-center justify-center flex">
        <div class="flex md:flex-row flex-col mx-auto p-3 justify-center items-center md:space-x-8 bg-gradient-to-r from-black to-yellow-500 opacity-65 md:h-72 h-96 rounded">
          <div class="md:w-1/3 w-full flex flex-col md:text-left text-center pb-2">
            <h class="text-white font-bold md:text-4xl text-2xl">
              Get a free quote Calculation
            </h>
            <h class="text-white">We will reply as soon as possible !</h>
            <h class="text-white">
              Suspenisse imperdiet lectus curcus nis fcbmka imperdiet lectus
              curcus nis fcbmka. Suspenisse imperdiet lectus curcus nis fcbmka.
            </h>
          </div>
          <div class="md:w-2/3 w-full">
            <form class="gap-2 grid-cols-2 grid">
              <input
                class="bg-transparent border border-white pb-2 rounded w-full py-2 px-3 text-black leading-tight "
                id="name"
                type="text"
                placeholder="Your name"
                name="name"
              />
              <input
                class="bg-transparent border border-white rounded w-full py-2 px-3 text-white leading-tight "
                id="name"
                type="text"
                placeholder="Your Email"
                name="name"
              />
              <input
                class="bg-transparent border border-white pb-2 rounded w-full py-2 px-3 text-white leading-tight "
                id="name"
                type="text"
                placeholder="Contact Number"
                name="name"
              />
              <input
                class="bg-transparent border border-white pb-2 rounded w-full py-2 px-3 text-white leading-tight "
                id="name"
                type="text"
                placeholder="Number of Employee"
                name="name"
              />
            </form>
            <div class="w-full gap-2 grid-cols-3 grid">
              <input
                class="bg-transparent border border-white pb-2 rounded w-full py-2 px-3 text-black leading-tight "
                id="name"
                type="text"
                placeholder="Option 1"
                name="name"
              />
              <input
                class="bg-transparent border border-white pb-2 rounded w-full py-2 px-3 text-black leading-tight "
                id="name"
                type="text"
                placeholder="Option 2"
                name="name"
              />
              <input
                class="bg-transparent border border-white pb-2 rounded w-full py-2 px-3 text-white leading-tight "
                id="name"
                type="text"
                placeholder="Option 3"
                name="name"
              />
            </div>
            <div class="mt-3">
          <button class="bg-white w-full py-2 rounded text-black hover:bg-black hover:text-white hover:border-black">
            Get a free Quote
          </button>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
