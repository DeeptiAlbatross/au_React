import React from "react";
import Join from "../assests/joinAU.png";
import Join1 from "../assests/join.png"

const joinAU = () => {
  return (
      <div className="relative flex justify-center">
      <img
        className="bg-center bg-cover h-[500px] w-full"
        src={Join}
        alt="img "
      ></img>
      <div className="absolute flex  flex-col w-[1200px] mt-40 -ml-96  ">
      <h1 className="flex justify-start text-4xl text-white font-bold pt-10 pb-10">Join AU Corporate</h1>
        <div className="flex justify-start flex-col w-[500px]  gap-8">
        <p className="flex justify-start text-left text-white leading-loose">
         
          Caring for our people's well being.Providing flexibility in how we work.
          Inspiring everybody to shape better tomorrows.These are just a few of the reasons AU is greatplace to work.

        </p>
        <button className="bg-yellow-400 rounded  text-blue-800 font-bold h-12 w-40">Join us</button>
        </div>
       
      </div>
      <div className="absolute pl-[800px] ">
        <img className="h-[600px] pb-24" src={Join1} alt="#"></img>
      </div>
    </div>
  );
};

export default joinAU;
