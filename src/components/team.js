import React from "react";
import { teamData } from "./data";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const team = () => {
  return (
    <div className="pb-20">
      <div className="flex justify-center flex-col pt-20">
        <h className="text-blue-800 text-xl font-bold p-4">
          Our Expertise team
        </h>
        <h1 className="text-4xl font-bold">Your Partners in *Precision</h1>
        <p className=" text-gray-400 pt-8">
          AU is pioneering conglomerate,encompassing esteemed firms in the
          realms of Accounting,Audit & Assurance,Consulting, and Legal
          Services,skilfully <br></br>amalgamating innovative ideas with
          cutting-edge technology to adeptly tackle complex business challenges.
        </p>
      </div>
      <div className="flex justify-center flex-row gap-7">
        {teamData?.map((i, index) => (
          <div key={index}>
            <img className="w-72 pt-6" src={i.image} alt="#"></img>

            <div className="flex flex-row h-10 w-72  gap-10 ">
              <div>
                <h className="text-black font-bold flex pt-3 pl-2 justify-start">{i.title}</h>
              </div>
              <div className="flex flex-row pl-32 justify-end gap-1 pt-4">
                <FaInstagramSquare />
                <FaFacebook />
                <FaLinkedin />
              </div>
            </div>
            <div className="flex justify-start">
            <h className=" pl-2 pb-2">{i.para}</h>
            </div>
            <div class="flex-grow border  border-blue-600"></div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default team;
