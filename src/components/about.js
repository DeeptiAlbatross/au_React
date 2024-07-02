import React from "react";
import AboutImage from "../assests/about.png";
import Tick from "../assests/tick.png"
import AboutIcon from "../assests/ABouticon.png"

const about = () => {
  return (
    <div className="flex justify-center pt-20 pb-20">
      <div>
        <img className="w-[600px] rounded-lg " src={AboutImage}></img>
      </div>
      <div className="pt-24 pl-10 w-[600px] ">
        <div>
          <h className="text-blue-800 text-2xl font-bold flex justify-start pb-6">
            About our company
          </h>
          <div>
            <span className="text-black text-4xl font-bold flex justify-start">Reliable  *Solutions</span>
            {/* <span className="text-blue-600  text-4xl font-bold  ">
              *Solutions <br></br>
            </span> */}
            <span className="text-black text-4xl font-bold flex justify-start leading-tight">
              For your Financial <br></br>
            </span>
            <span className="text-black text-4xl font-bold flex justify-start">
              Needs
            </span>
            <div className="flex justify-start py-4">
              <p className=" text-lg text-gray-400">
                AU is pioneering conglomerate,encompassing esteemed firms in the
                realms of Accounting,Audit & Assurance,Consulting, and Legal
                Services,skilfully amalgamating innovative ideas with
                cutting-edge technology to adeptly tackle complex business
                challenges.
              </p>
            </div>

            <div className=" pt-6 pl-6 flex flex-row gap-10 ">
               <div className="">
               <div className=" flex flex-row gap-4 ">
                <img  className="w-4" src={Tick}></img>
                <h className="flex justify-start text-sm font-bold">Trusted Financial Expertise</h>
                </div>
                <div  className="flex flex-row gap-4 pt-2">
                <img className="w-4" src={Tick}></img>
                <h className="flex justify-start text-sm font-bold">Dediacted Client partnerships.</h>
                </div>
                <div  className=" flex flex-row gap-4 pt-2">
                <img className="w-4" src={Tick}></img>
                <h className="flex justify-start text-sm font-bold">Reliable tax advisor.</h>
                </div>
               </div>
               
              <div className="pt-0">
              <div  className="flex flex-row gap-4 pt-2">
                <img className="w-4" src={Tick}></img>
                <h className="flex justify-start text-sm font-bold">Proven audit excellence. </h>
                </div>
                <div  className=" flex flex-row gap-4 pt-2">
                <img className="w-4" src={Tick}></img>
                <h className="flex justify-start text-sm font-bold">Strategic finacial planning  </h>
                </div>
              </div>
            </div>
            <div className="flex flex-row pt-10 gap-4">
                <img className="w-14" src={AboutIcon}></img>
                <div className=" ">
                <h className="text-lg font-bold">Full Name</h>
                <h2 className="text-gray-600">CEO</h2>
                </div>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
