import React from "react";
import { testimonialsData } from "./data";
// import testimonialImage from "../assets/ABouticon.png";

const testimonials = () => {
  return (
   
    <div>
      <div class="flex flex-col justify-center items-center pb-10 bg-gray-200 pt-16">
        <div>
          <h1 class="text-blue-800 font-bold text-xl">
            Hear What Our Clients Say
          </h1>
        </div>
        <div class="flex justify-center items-center w-full ">
          <h2 class="text-4xl font-bold text-center">
            Trusted by Leaders, Proven by Results
          </h2>
        </div>
        <div class="flex  w-3/4 justify-center">
          <div class="flex   border-t-2 border-blue-600 md:w-3/5 w-full my-4 pt-4 ">
            <p class="text-gray-500 text-center">
              Our clients commend us for our exceptional service,
              professionalism, and reliability, consistently exceeding
              expectations and delivering outstanding results.
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-center bg-gray-200 pb-16">
        <div class="flex md:justify-around justify-center md:flex-row flex-col md:w-9/12 w-full flex-wrap bg-gray-200 ">
          {testimonialsData?.map((i, index) => (
            <div class="m-4 p-4 bg-white rounded-lg border w-72 h-56 shadow-md cursor-pointer hover:bg-blue-300">
              <p class="text-sm text-black pt-4 pl-7">{i.para}</p>
              <div class="flex flex-row justify-center gap-6 pt-10">
                <img class="w-16 h-16 pt-3 pl-2" src={i.image} alt="Lisa" />
                <div class="flex flex-col">
                  <h3 class="flex justify-start w-full">{i.title}</h3>
                  <h4 class="text-gray-500 pt-2">{i.title2}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default testimonials;
