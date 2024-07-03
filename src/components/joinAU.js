import React from "react";
import Join from "../assests/joinAU.png";
import Join1 from "../assests/join.png"

const joinAU = () => {
  return (
      <div className="relative flex justify-center  pb-10 ">
      <img
        className="bg-center bg-cover h-[500px] w-full"
        src={Join}
        alt="img "
      ></img>
      <div className="absolute flex  flex-col w-[1200px] mt-40 -ml-96  ">
      <h1 className="flex justify-start text-4xl text-white font-bold pt-10 pb-10">Join AU Corporate</h1>
        <div className="flex justify-start flex-col gap-8">
        <p className="flex justify-start text-white leading-loose">
          {" "}
          AU is pioneering conglomerate,encompassing esteemed firms in the
          realms of Accounting, Audit & Assurance,Consulting.
        </p>
        <button className="bg-yellow-400 rounded  text-blue-800 font-bold h-12 w-40">Join us</button>
        </div>
       
      </div>
      <div className="absolute pl-[800px] ">
        <img className="h-[600px] pb-28" src={Join1}></img>
      </div>
    </div>
  );
};

export default joinAU;
