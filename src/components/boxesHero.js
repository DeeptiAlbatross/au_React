import React from "react";
import { cardData } from "./data";

const boxesHero = () => {
  return (
    <div className=" flex justify-center ">
      <div className="flex justify-center flex-row w-[1000px] -pt-32">
        {cardData?.map((i, index) => (
          <div key={index} className='m-4 p-4 bg-yellow-500 rounded-lg border border-gray-400 w-80 h-56 shadow-md'  >
            <div className="flex flex-row">
            <img className="w-18 h-18 pt-3 pl-2" src={i.image} alt="#"></img>
            <h className="text-lg font-bold text-black pt-4">{i.title}</h>
            </div>
            <p className="text-sm text-white pt-4"> {i.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default boxesHero;
