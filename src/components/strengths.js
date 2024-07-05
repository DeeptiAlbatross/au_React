import React from "react";
import { strengthData } from "./data";
import Strength from "../assests/strength.png"

const strengths = () => {
  return (
    <div className="">
      <div className="relative flex justify-center  pb-10 ">
      <img
        className="bg-center bg-cover  "
        src={Strength}
        alt="img "
      ></img>
      <div className="absolute flex  justify-center flex-col w-[1200px]">
      <h1 className="  text-4xl text-white font-bold pt-10 pb-10">Our Strengths</h1>
        <p className="  text-white">
          {" "}
          AU is pioneering conglomerate,encompassing esteemed firms in the
          realms of Accounting,Audit & Assurance,Consulting, and Legal
          Services,skilfully <br></br>amalgamating innovative ideas with
          cutting-edge technology to adeptly tackle complex business challenges.
        </p>
      </div>
       
        <div className="absolute flex justify-center pt-52 text-left ">
        <div className="flex justify-center flex-row ">
          {strengthData?.map((i, index) => (
            <div
              key={index}
              className="m-4 p-4 bg-white rounded-lg border border-gray-400 w-60 h-64 shadow-md"
            >
              <div className="flex flex-row gap-4 ">
                <img
                  className="w-14 h-14 pt-3 pl-2"
                  src={i.image}
                  alt="#"
                ></img>
               
                <h className="text-lg font-bold pb-4 text-black pt-4">{i.title}</h>
              </div>
              <div class="flex-grow flex border-t-2 w-[200px]  border-blue-600 "></div>

              <p className="text-sm text-gray-500 pt-6"> {i.para}</p>
            </div>
          
          ))}
        </div>
     
      </div>
      </div>
    </div>
  );
};

export default strengths;
