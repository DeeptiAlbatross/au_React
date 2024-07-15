import React from "react";
import Image from "../assets/home.png";

const Hero = () => {
  return (
   
    <div id="home" class=" flex flex-col justify-center relative ">
      <img class="bg-center bg-cover h-screen  " src={Image} alt="img "></img>
      <div>
        <div class="absolute top-4  md:top-40 md:left-48 md:max-w-6xl flex h-full flex-col text-center  items-center md:items-start ">
          <div class="flex justify-start pb-4">
            <span class="text-white text-xl font-bold ">Welcome to </span>
            <span class="text-yellow-400  text-xl font-bold ">
              AU Corporate <br></br>
            </span>
          </div>
          <div class="flex justify-start">
            <div class=" md:text-2xl text-md">
              <span class="text-white md:text-6xl text-2xl font-bold">
                Smart
              </span>
              <span class="text-yellow-400 md:text-6xl text-2xl font-bold">
                Accounting,
              </span>
              <div class="flex justify-start pt-4">
                <span class="text-white md:text-6xl text-2xl font-bold">
                  Smart
                </span>
                <span class="text-yellow-400  md:text-6xl text-2xl font-bold">
                  Business
                </span>
              </div>
            </div>
          </div>
          <div class="">
            <p class="text-xl pt-4 md:text-left text-white flex justify-start text-center">
              Welcome to AU Corporate ,where expert financial solutions and
              precision meet.<br></br>
              Trust us to navigate with your finances with
              accuracy,reliabiltiy,and a commitment to <br></br> your growth.
            </p>
          </div>
          <button class="mt-4 py-2 w-28 text-white border border-white font-bold hover:bg-black hover:text-white rounded ">
          Contact Us
        </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
