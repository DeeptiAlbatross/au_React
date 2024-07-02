import React from "react";

const statics = () => {
  return (
    <div className="pb-20 flex bg-gray-200 pt-6 justify-center flex-row gap-40">
      <div className="pt-4">
        <h className="text-blue-800 font-bold text-xl flex justify-start ">Our Statics</h>
        <div className="pt-6">
          <span className="text-blue-500 text-4xl font-bold">*Numbers</span>
          <span>...</span>
          <span className="text-4xl font-bold">Proves Our Success</span>
        </div>
      </div>
      
      <div className="flex flex-row gap-20 pt-10">
      <div class="flex-grow border-t-2 w-[500px] border-blue-600 flex flex-row gap-20">
        <div className="flex justify-center flex-col pt-4">
          <h className="text-4xl font-bold">5.2M+</h>
          <h className="pt-2">Cost savings</h>
        </div>
        <div className="flex justify-center flex-col pt-4">
          <h className="text-4xl font-bold ">75%</h>
          <h className="pt-2">Profit Boost</h>
        </div>
        <div className="flex justify-center flex-col pt-4">
          <h className="text-4xl font-bold">99.9%</h>
          <h className="pt-2">Reporting Accuracy</h>
        </div>
      </div>
      </div>
    </div>
  );
};

export default statics;
