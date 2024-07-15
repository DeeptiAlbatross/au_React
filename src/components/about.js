import React from "react";
import AboutImage from "../assets/about.png";
import Tick from "../assets/tick.png";
import AboutIcon from "../assets/ABouticon.png";

const about = () => {
  return (
    <div class="flex justify-center  items-center pb-20  w-full" id="about">
      <div class="flex  w-4/5 justify-between  flex-col md:flex-row">
        <div class="flex md:w-1/2 w-full ">
          <img class="w-full h-full rounded-lg " src={AboutImage}></img>
        </div>
        <div class=" md:w-1/2 w-full  md:pt-24 md:pl-10 ">
          <div>
            <h class="text-blue-800 text-2xl font-bold flex justify-start pb-6 text-center">
              About our company
            </h>
            <div class="border-b-2 border-b-blue-600">
              <span class="text-black text-4xl font-bold flex justify-start">
                Reliable Solutions
              </span>
              <span class="text-black text-4xl font-bold flex justify-start leading-tight">
                For your Financial <br></br>
              </span>
              <span class="text-black text-4xl font-bold flex justify-start">
                Needs
              </span>
              <div class="flex justify-start py-4">
                <p class=" text-lg text-gray-400 text-left">
                  AU is pioneering conglomerate,encompassing esteemed firms in
                  the realms of Accounting,Audit & Assurance,Consulting, and
                  Legal Services,skilfully amalgamating innovative ideas with
                  cutting-edge technology to adeptly tackle complex business
                  challenges.
                </p>
              </div>
            </div>
            <div class=" pt-6 md:pl-6 flex md:flex-row flex-col gap-10 ">
              <div class="">
                <div class=" flex flex-row gap-4 ">
                  <img class="w-4" src={Tick}></img>
                  <h class="flex justify-start text-sm font-bold">
                    Trusted Financial Expertise
                  </h>
                </div>
                <div class="flex flex-row gap-4 pt-2">
                  <img class="w-4" src={Tick}></img>
                  <h class="flex justify-start text-sm font-bold">
                    Dediacted Client partnerships.
                  </h>
                </div>
                <div class=" flex flex-row gap-4 pt-2">
                  <img class="w-4" src={Tick}></img>
                  <h class="flex justify-start text-sm font-bold">
                    Reliable tax advisor.
                  </h>
                </div>
              </div>

              <div class="pt-0">
                <div class="flex flex-row gap-4 pt-2">
                  <img class="w-4" src={Tick}></img>
                  <h class="flex justify-start text-sm font-bold">
                    Proven audit excellence.{" "}
                  </h>
                </div>
                <div class=" flex flex-row gap-4 pt-2">
                  <img class="w-4" src={Tick}></img>
                  <h class="flex justify-start text-sm font-bold">
                    Strategic finacial planning{" "}
                  </h>
                </div>
              </div>
            </div>
            <div class="flex flex-row pt-10 gap-4">
              <img class="w-14" src={AboutIcon}></img>
              <div class=" ">
                <h class="text-lg font-bold">Full Name</h>
                <h2 class="text-gray-600">CEO</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
