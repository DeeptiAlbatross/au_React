import React from "react";
import { servicesData } from "./data";
import Arrow from "../assests/bluearrow copy.png"

const services = () => {
  return (
    <>
    <div id="services" className="flex justify-center gap-20 bg-gray-200 pt-10 ">
      <div className="w-[1150px]  flex flex-row border-b-2 border-b-blue-600 justify-center gap-64 pb-4">
      <div className="flex justify-center flex-col  pt-10  ">
        <h className="text-blue-800 text-xl font-bold pb-8 flex justify-start"> Our Services</h>
        <span className="text-blue-900 font-bold text-3xl ">
          *Expert Accounting,
        </span>{" "}
        <h className="text-3xl font-bold">Exceptional Results</h>
      </div>
      <div className=" pt-20 ">
        <p className="flex justify-center w-[600px] text-left text-gray-400">
          AU is pioneering conglomerate,encompassing esteemed firms in the
          realms of Accounting,Audit & Assurance,Consulting, and Legal
          Services,skilfully amalgamating innovative ideas with cutting-edge
          technology to adeptly tackle complex business challenges.
        </p>
      </div>
      </div>
      
    </div>
    {/* <div class="flex-grow border  border-blue-600 mx-40"></div> */}
    <div className="bg-gray-200 flex justify-center">
    <div className=" w-[1200px] flex-row  text-left center grid grid-cols-4">
        {servicesData?.map((i, index) => (
          <div key={index} className={`m-4 p-8  rounded-lg border ${[1,3,6,8].includes(index+1)? "bg-blue-700":"bg-white"} border-gray-400  h-72 shadow-md`}  >
            <div>
            <img className='w-12 h-12 ' src={i.image} alt="#"></img>
            </div>
            
            <h className={`text-lg font-bold  flex justify-start pt-4 ${[1,3,6,8].includes(index+1)? "text-gray-200":"text-black" }`}>{i.title}</h>
            <p className={`text-sm  pt-4 flex justify-start ${[1,3,6,8].includes(index+1)? "text-white":"text-gray-400" }`}> {i.para}</p>
            <img className="pt-4" src={i.image2} alt="#"></img>
          </div>
        ))}
      </div>
    </div>
   
    </>
    
  );
};

export default services;
