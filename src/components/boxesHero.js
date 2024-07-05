import React from "react";
import { cardData } from "./data";

const boxesHero = () => {
  return (
    <div className=" flex justify-center  relative -top-28  ">
      <div className="flex text-left justify-center flex-row w-[1000px] ">
        {cardData?.map((i, index) => (
          <div key={index} className='m-4 p-4 bg-yellow-500 rounded-lg   w-80 h-56 shadow-lg'  >
            <div className="flex flex-row" >
            <img className="w-18 h-18 pt-3 pl-2" src={i.image} alt="#"></img>
            <h className="text-lg font-bold text-black pt-4">{i.title}</h>
            </div>
            <div class="flex-grow border  border-blue-600 mt-2"></div>

            <p className="text-sm text-black pt-4"> {i.para}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default boxesHero;
