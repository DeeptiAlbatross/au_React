import React from "react";
import AboutImage from "../assests/about.png";
import Tick from "../assests/tick.png"

const about = () => {
  return (
    <div className="flex justify-center pt-20 pb-20">
      <div>
        <img className="w-[600px] rounded-lg" src={AboutImage}></img>
      </div>
      <div className="pt-44 w-[600px] ">
        <div>
          <h className="text-blue-800 text-2xl font-bold flex justify-start pb-6">
            About our company
          </h>
          <div>
            <span className="text-black text-4xl font-bold">Reliable</span>
            <span className="text-blue-600  text-4xl font-bold  ">
              *Solutions <br></br>
            </span>
            <span className="text-black text-4xl font-bold flex justify-start leading-tight">
              For your Financial <br></br>
            </span>
            <span className="text-black text-4xl font-bold flex justify-start">
              Needs
            </span>
            <div className="flex justify-start">
              <p className=" text-sm leading-loose text-gray-400">
                AU is pioneering conglomerate,encompassing esteemed firms in the
                realms of Accounting,Audit & Assurance,Consulting, and Legal
                Services,skilfully amalgamating innovative ideas with
                cutting-edge technology to adeptly tackle complex business
                challenges.
              </p>
            </div>

            <div className=" pt-6 pl-6 ">
                <div className=" flex flex-row gap-4 ">
                <img src={Tick}></img>
                <h className="flex justify-start">Trusted Financial Expertise</h>
                </div>
                <div  className="flex flex-row gap-4 pt-2">
                <img src={Tick}></img>
                <h className="flex justify-start">Dediacted Client partnerships.</h>
                </div>
                <div  className=" flex flex-row gap-4 pt-2">
                <img src={Tick}></img>
                <h className="flex justify-start">Reliable tax advisor.</h>
                </div>
                <div  className=" flex flex-row gap-4 pt-2">
                <img src={Tick}></img>
                <h className="flex justify-start">Trusted Financial Expertise</h>
                </div>
                <div  className=" flex flex-row gap-4 pt-2">
                <img src={Tick}></img>
                <h className="flex justify-start">Dediacted Client partnerships.</h>
                </div>
                <div  className="flex flex-row gap-4 pt-2">
                <img src={Tick}></img>
                <h className="flex justify-start">Proven audit excellence. </h>
                </div>
                <div  className=" flex flex-row gap-4 pt-2">
                <img src={Tick}></img>
                <h className="flex justify-start">Strategic finacial planning  </h>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
