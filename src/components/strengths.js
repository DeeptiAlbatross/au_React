import React from "react";
import { strengthData } from "./data";
import Strength from "../assets/strength.png";

const strengths = () => {
  return (
  
    <div
      class="relative flex flex-col bg-cover bg-center object-contain"
      style={{ backgroundImage: `url(${Strength})` }}
    >
      <div class="flex justify-center flex-col">
        <h1 class="text-4xl text-white font-bold pt-10 pb-10 text-center">
          Our Strengths
        </h1>
        <p class="text-white text-center">
          AU is a pioneering conglomerate, encompassing esteemed firms in the
          realms of Accounting, Audit & Assurance, Consulting, and Legal
          Services, skilfully amalgamating <br></br>innovative ideas with cutting-edge
          technology to adeptly tackle complex business challenges.
        </p>
      </div>
      <div class="flex justify-center text-left w-screen md:bg-transparent my-8">
        <div class="justify-center  md:flex-row flex-col flex flex-wrap">
          {strengthData?.map((i, index) => (
            <div class="m-4 p-4 bg-white rounded-lg border border-gray-400 h-auto md:w-1/6 sm:w-full lg:w-1/6 overflow:hidden shadow-md hover:bg-yellow-400">
              <div class="flex flex-row gap-4">
                <img class="w-14 h-14 pt-3 pl-2" src={i.image} alt="#" />
                <h2 class="md:text-lg lg:text-base text-sm w-2/3 font-bold pb-4 text-black pt-4">
                  {i.title}
                </h2>
              </div>
              <div class="flex-grow flex border-t-2 w-[200px] border-blue-600"></div>
              <p class="text-sm text-gray-500 pt-6">{i.para}</p>
            </div>
          ))}
         
        </div>
      </div>
    </div>
  );
};

export default strengths;
