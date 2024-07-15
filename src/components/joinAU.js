import React from "react";
import Join from "../assets/joinAU.png";
import Join1 from "../assets/join.png";

const joinAU = () => {
  return (
       <div
      class="relative flex flex-col bg-cover bg-center object-contain w-full pb-10 justify-center items-center"
      style={{ backgroundImage: `url(${Join})` }}
    >
      <div class="flex md:flex-row flex-col md:justify-between  md:w-2/3 w-full">
        <div class="flex flex-col  mt-20 w-full ">
          <h1 class="text-4xl flex justify-start text-white font-bold pt-10 pb-10">
            Join AU Corporate
          </h1>
          <div class="flex flex-col  gap-8">
            <p class="md:text-left text-white leading-loose md:w-3/4 w-full text-center">
              Caring for our people's well-being. Providing flexibility in how
              we work. Inspiring everybody to shape better tomorrows. These are
              just a few of the reasons AU is a great place to work.
            </p>
            <button class="bg-yellow-400 rounded text-blue-800 font-bold h-12 w-40 self-center md:self-start hover:bg-white">
              Join us
            </button>
          </div>
        </div>
        <div class="flex md:w-2/3 w-full absolute bottom-0 pt-0 sm:left-[1000px] ">
          <img
            class="h-auto hidden"
            style={{ height: "450px"}}
            src={Join1}
            alt="Join"
          />
        </div>
      </div>
    </div>
  );
};

export default joinAU;
