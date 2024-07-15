import React from "react";

const statics = () => {
  return (

    <div class="pb-20 flex bg-gray-200 pt-6 justify-center md:flex-row md:gap-40 flex-col overflow-y-scroll">
      <div class="pt-4">
        <h class="text-blue-800 font-bold text-xl flex justify-center md:justify-start ">
          Our Statics
        </h>
        <div class="pt-6 text-center">
          <span class="text-blue-800 text-4xl font-bold">*Numbers</span>

          <span class="text-4xl font-bold">Proves Our Success</span>
        </div>
      </div>

      <div class="flex md:flex-row flex-col md:gap-20 pt-10">
        <div class="flex-grow border-t-2 md:w-[500px] w-full  border-blue-600 flex md:flex-row flex-col md:gap-20 justify-center items-center">
          <div class="flex justify-center flex-col pt-4">
            <h class="text-4xl font-bold">5.2M+</h>
            <h class="pt-2">Cost savings</h>
          </div>
          <div class="flex justify-center flex-col pt-4">
            <h class="text-4xl font-bold ">75%</h>
            <h class="pt-2">Profit Boost</h>
          </div>
          <div class="flex justify-center flex-col pt-4">
            <h class="text-4xl font-bold">99.9%</h>
            <h class="pt-2">Reporting Accuracy</h>
          </div>
        </div>
      </div>
    </div>
  );
};

export default statics;
