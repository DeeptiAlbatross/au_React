import React from "react";
import India from "../assets/India.png";
import Japan from "../assets/japan.png";
import Singapore from "../assets/singapore.png";
import China from "../assets/china.png";
import Germany from "../assets/germany.png";
import USA from "../assets/usa.png";

const client = () => {
  return (
    
    <div class="flex flex-col items-center p-10 pb-10 ">
      <h1 class="text-4xl text-black font-bold">Our Clients are from</h1>
      <div class="flex flex-wrap justify-center pt-8">
        <img class="h-36 w-auto m-2" src={India} alt="India" />
        <img class="h-36 w-auto m-2" src={Japan} alt="Japan" />
        <img class="h-36 w-auto m-2" src={Singapore} alt="Singapore" />
        <img class="h-36 w-auto m-2" src={China} alt="China" />
        <img class="h-36 w-auto m-2" src={Germany} alt="Germany" />
        <img class="h-36 w-auto m-2" src={USA} alt="USA" />
      </div>
    </div>
  );
};

export default client;
