import React from "react";
import Image from "../assests/home.png";
// import FinacialImage from "../assests/Financial.png";
// import { cardData } from "./data";

const Hero = () => {
  return (
    <div id="home" className=" flex justify-center  relative ">
      <img
        className=" w-full bg-center bg-cover h-screen  "
        src={Image}
        alt="img "
      ></img>
      <div className="absolute flex pt-60 -ml-60 p-10 flex-col ">
        <div className="flex justify-start pb-4">
          <span className="text-white text-xl font-bold ">Welcome to </span>{" "}
          <span className="text-yellow-400  text-xl font-bold ">
            AU Corporate <br></br>
          </span>
        </div>
        <div className="flex justify-start">
          <p className="text-2xl">
            <span className="text-white text-6xl font-bold">Smart</span>{" "}
            <span className="text-yellow-400  text-6xl font-bold">
              Accounting,
            </span>{" "}
            <div className="flex justify-start pt-4">
              <span className="text-white text-6xl font-bold">Smart</span>{" "}
              <span className="text-yellow-400  text-6xl font-bold">
                Business
              </span>{" "}
            </div>
          </p>
        </div>
        <div className="">
          <p className="text-xl pt-4 text-left text-white flex justify-start">
            Welcome to AU Corporate ,where expert financial solutions and
            precision meet.<br></br>
            Trust us to navigate with your finances with
            accuracy,reliabiltiy,and a commitment to <br></br> your growth.
          </p>
        </div>

        <br />
        <button className=" py-2 w-28 text-white border border-white font-bold ">
          Contact Us{" "}
        </button>
      </div>
      
    </div>
  );
};

export default Hero;
