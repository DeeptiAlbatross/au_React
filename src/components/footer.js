import React from "react";
import FooterImage from "../assests/footerImage.png";
// import Logo from "../assests/logo.png";
import PhoneImage from "../assests/phone.png";
import Location from "../assests/Location.png"
import Image from "../assests/socialMedia.png";
import Image2 from "../assests/logo-text.png";
import Logo2 from "../assests/Logo2.png";

const Footer = () => {
  return (
    <div className=" relative flex flex-col pb-6 ">
      <div className="flex flex-row ">
        <img
          className=" bg-center bg-cover  "
          src={FooterImage}
          alt="img "
        ></img>
      </div>

      <div className="absolute flex flex-row  mt-12 pl-60  gap-16  ">
        <div className=" w-1/6 ">
          <div className="flex flex-row">
            <img src={Logo2}></img>
            <img className=" " src={Image2}></img>
          </div>

          <p className="relative text-white text-left flex justify-start pt-8 align-items-left">
            Welcome to AU coporate,where expertfinancial solutions and precision
            meet.Trust to navigate your finances to your own growth.
          </p>
        </div>
        <div className="text-white flex flex-col  w-1/5 pl-20 leading-loose ">
          <h className="pb-10 flex justify-start text-lg">Extra Links</h>
          <h className="flex justify-start">Home</h>
          <h className="flex justify-start">About us</h>
          <h className="flex justify-start">Doing business in India</h>
          <h className="flex justify-start">Services</h>
          <h className="flex justify-start">Arbitration Services</h>
          <h className="flex justify-start">HR Services</h>
        </div>
        <div className="text-white flex flex-col  w-1/4 leading-loose gap-4">
          <h className="pb-10 flex justify-start text-lg">
            Contact Informations
          </h>
          <div className="flex justify-start gap-2">
            <img className="h-5" src={PhoneImage}></img>
            <h className="text-white ">888-999-347 </h>
          </div>
          <div className="flex justify-start flex-row gap-2">
            <img className="w-5" src={Location}></img>
          <h className="flex justify-start">au.corporate@gmail.com</h>
          </div>
          
          <div className="flex justify-start flex-row gap-3">
            <img className="w-4 h-10" src={Location}></img>
          <h className="flex justify-start text-sm">222 First Floor, World Trade Tower,<br></br>Cannaught Place,New Delhi-110001 </h>
          </div>
        </div>
        <div className="">
          <h className="text-lg text-white ">Follow Us on </h>
          {/* <div className="flex flex-row gap-4 pt-6">
          <FaInstagram />
          <CiLinkedin />
          <CiTwitter />
          </div> */}
          <img className=" pt-10" src={Image}></img>
        </div>{" "}
      </div>
      <div className=" absolute flex-grow border-b-2 flex justify-center border-white w-[1500px] pt-[350px] ml-[180px]  "></div>
      <div className="absolute mt-[360px] mx-52">
        <div className="flex flex-row space-x-[1000px] pt-2">
          <h className="text-white">Careers at AU</h>
          <p className="text-white">
            Copyright @ AU Corporate.All Rights Reserved 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
