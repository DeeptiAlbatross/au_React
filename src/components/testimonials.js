import React from "react";
import { testimonialsData } from "./data";
import testimonialImage from "../assests/ABouticon.png";

const testimonials = () => {
  return (
    <div className="flex flex-col justify-center gap-6 pb-10 bg-gray-200 pt-20">
      <div>
        <h1 className="text-blue-800 font-bold text-xl ">
          Hear What Our Clients Say
        </h1>
      </div>
      <div>
        <h className="text-4xl font-bold">
          *Trusted by Leaders,*Proven by Results
        </h>
      </div>
      <div class=" border-t-2 w-[600px] ml-[650px] pt-4 border-blue-600 flex flex-col justify-center ">
        <div className="w-[800px] flex justify-start">
          <p className="text-gray-500">
            Our clients commend us for our exceptional
            service,professionalism,and reliability, <br></br>consistency
            exceeding expectations and delivering outstanding results.
          </p>
        </div>
      </div>
      <div className=" flex justify-center">
        <div className="flex justify-center flex-row w-[1000px] -pt-32">
          {testimonialsData?.map((i, index) => (
            <div
              key={index}
              className="m-4 p-4 bg-white rounded-lg border  w-80 h-56 shadow-md"
            >
              <div className="flex flex-row"></div>
              <p className="text-sm text-black pt-4"> {i.para}</p>
              <div className="flex flex-row justify-center gap-6 pt-10">
                <img
                  className="w-16 h-16 pt-3 pl-2"
                  src={i.image}
                  alt="#"
                ></img>
                <div className="flex flex-col ">
                <h className="flex justify-start  w-full">{i.title2}</h>
                <h className="text-gray-500 pt-2">{i.title}</h>
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
