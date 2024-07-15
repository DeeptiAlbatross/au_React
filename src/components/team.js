import React from "react";
import { teamData } from "./data";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const team = () => {
  return (
    
    <div class="pb-20">
      <div class="flex justify-center flex-col pt-20 items-center text-center">
        <h class="text-blue-800 text-xl font-bold p-4">Our Expertise team</h>
        <h1 class="text-4xl font-bold">Your Partners in *Precision</h1>
        <p class=" text-gray-400 pt-8">
          AU is pioneering conglomerate,encompassing esteemed firms in the
          realms of Accounting,Audit & Assurance,Consulting, and Legal
          Services,skilfully <br></br>amalgamating innovative ideas with
          cutting-edge technology to adeptly tackle complex business challenges.
        </p>
      </div>
      <div class="flex justify-center flex-col md:flex-row md:gap-7  items-center text-center md:overflow-scroll">
        {teamData?.map((i, index) => (
          <div>
            <img class="w-72 pt-6" src={i.image} alt="#"></img>

            <div class="flex flex-row h-10 w-72  gap-10  ">
              <div>
                <h class="text-black font-bold flex pt-3 pl-2 justify-start">
                  {i.title}
                </h>
              </div>
              <div class="flex flex-row pl-32 justify-end gap-1 pt-4">
                <FaInstagramSquare />
                <FaFacebook />
                <FaLinkedin />
              </div>
            </div>
            <div class="flex justify-start">
              <h class=" pl-2 pb-2">{i.para}</h>
            </div>
            <div class="flex-grow border  border-blue-600"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default team;
