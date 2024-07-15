import React from "react";
import { cardData } from "./data";

const boxesHero = () => {
  return (
    
    <div class=" flex justify-center  relative -top-28">
      <div class="flex text-left justify-center md:flex-row flex-col w-4/5 ">
        {cardData?.map((i, index) => (
          <div
            key={i.id}
            class="m-4 p-4 bg-yellow-500 rounded-lg  w-60 h-56 shadow-lg cursor-pointer hover:bg-white"
          >
            <div class="flex flex-row">
              <img class="w-18 h-18 pt-3 pl-2" src={i.image} alt="#"></img>
              <h class="text-lg font-bold text-black pt-4">{i.title}</h>
            </div>
            <div class="flex-grow border  border-blue-600 mt-2"></div>

            <p class="text-sm text-black pt-4"> {i.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default boxesHero;
