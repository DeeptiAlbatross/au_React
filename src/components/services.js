import React from "react";
import { servicesData } from "./data";
import Arrow from "../assets/bluearrow copy.png";

const services = () => {
  return (
    <>
     
      <div class="flex justify-center flex-col  items-center">
        <div class="flex justify-center  bg-gray-200 pt-10 w-auto">
          <div class="w-3/4 flex md:flex-row  flex-col border-b-2 border-blue-600 justify-between pb-4 ">
            <div class="flex justify-center flex-col pt-10 ">
              <h1 class="text-blue-800 text-xl font-bold pb-8 flex justify-center md:justify-start">
                Our Services
              </h1>
              <span class="text-blue-900 font-bold text-3xl">
                *Expert Accounting,
              </span>
              <h2 class="text-3xl font-bold">Exceptional Results</h2>
            </div>
            <div class="pt-20  md:w-1/2 w-auto">
              <p class="flex justify-center md:w-5/6 w-auto  text-left text-gray-400">
                AU is pioneering conglomerate, encompassing esteemed firms in
                the realms of Accounting, Audit & Assurance, Consulting, and
                Legal Services, skilfully amalgamating innovative ideas with
                cutting-edge technology to adeptly tackle complex business
                challenges.
              </p>
            </div>
          </div>
        </div>

        <div class="flex justify-center w-3/4">
          <div class="w-auto text-left center grid md:grid-cols-4 grid-col-2 mt-6">
            {servicesData?.map((i, index) => (
              <div
                class={`m-4 p-8 rounded-lg border  border-gray-400 h-72 shadow-md overflow-hidden cursor-pointer hover:bg-yellow-400 ${
                  [1, 3, 6, 8].includes(index + 1) ? "bg-blue-700" : "bg-white"
                } `}
              >
                <div>
                  <img class="w-12 h-12" src={i.image} alt="#" />
                </div>
                <h3
                  class={`text-lg font-bold flex justify-start pt-4   ${
                    [1, 3, 6, 8].includes(index + 1)
                      ? "text-gray-200"
                      : "text-black"
                  }`}
                >
                  {i.title}
                </h3>
                <p
                  class={`text-sm pt-4 flex justify-start ${
                    [1, 3, 6, 8].includes(index + 1)
                      ? "text-gray-200"
                      : "text-black"
                  }`}
                >
                  {i.para}
                </p>
                <div class="flex w-full  justify-end">
        <button class="text-black  border border-black rounded-lg px-4 py-1 hover:bg-blue-700 hover:text-white">
          Read More
      </button>
       </div> 
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default services;
