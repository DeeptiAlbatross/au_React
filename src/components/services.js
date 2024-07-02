import React from "react";
import { servicesData } from "./data";
import Arrow from "../assests/bluearrow copy.png"

const services = () => {
  return (
    <>
    <div className="flex justify-center gap-20 bg-gray-200">
      <div className="flex justify-center flex-col  pt-10 ">
        <h className="text-blue-800 text-xl font-bold pb-8 flex justify-start "> Our Services</h>
        <span className="text-blue-900 font-bold text-3xl">
          *Expert Accounting,
        </span>{" "}
        <h className="text-3xl font-bold">Exceptional Results</h>
      </div>
      <div className=" pt-20">
        <h className="flex justify-center w-[800px] text-gray-400">
          {" "}
          AU is pioneering conglomerate,encompassing esteemed firms in the
          realms of Accounting,Audit & Assurance,Consulting, and Legal
          Services,skilfully amalgamating innovative ideas with cutting-edge
          technology to adeptly tackle complex business challenges.
        </h>
      </div>
      
    </div>
    <div className="bg-gray-200 flex justify-center">
    <div className=" w-[1200px] flex-row  center grid grid-cols-4">
        {servicesData?.map((i, index) => (
          <div key={index} className='m-4 p-8  rounded-lg border  border-gray-400  h-72 shadow-md'  >
            <div>
            <img className="w-12 h-12" src={i.image} alt="#"></img>
            </div>
            <h className="text-lg font-bold text-black flex justify-start pt-4">{i.title}</h>
            <p className="text-sm text-gray-500 pt-4 flex justify-start"> {i.para}</p>
            <img className="pt-4" src={Arrow} alt="#"></img>
          </div>
        ))}
      </div>
    </div>
   
    </>
    
  );
};

export default services;
