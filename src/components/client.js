import React from "react";
import India from "../assests/India.png"
import Japan from "../assests/japan.png"
import Singapore from "../assests/singapore.png"
import China from "../assests/china.png"
import Germany from "../assests/germany.png"
import USA from "../assests/usa.png"


const client = () => {
  return (
    <div className="flex justify-center pb-10 flex-col p-10 ">
      <div>
        <h className="text-4xl text-black font-bold">Our Client are from</h>
      </div>
      <div className="flex flex-row justify-center pt-8">
        <img className="h-36 w-auto" src={India}></img>
        <img className="h-36 w-auto"src={Japan}></img>
        <img className="h-36 w-auto"src={Singapore}></img>
        <img className="h-36 w-auto"src={China}></img>
        <img className="h-36 w-auto"src={Germany}></img>
        <img className="h-36 w-auto"src={USA}></img>
      </div>
    </div>
  );
};

export default client;
