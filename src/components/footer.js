import React from "react";
import FooterImage from "../assests/footerImage.png";
// import Logo from "../assests/logo.png";
import PhoneImage from "../assests/phone.png";
import Location from "../assests/Location.png"
import Image from "../assests/socialMedia.png";
import Image2 from "../assests/logo-text.png";
import Logo2 from "../assests/Logo2.png";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  const scrollToTarget = (item) => {
    const id=document.getElementById(item);
    if(id){
     id.scrollIntoView({behavior:"smooth",block:"start"})
    }
 }
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
          <a href="#" class="pb-10 flex justify-start text-lg">Extra Links</a>
          <a href="#" class="flex justify-start" onClick={()=>scrollToTarget("home")}>Home</a>
          <a href="#" class="flex justify-start" onClick={()=>scrollToTarget("about")}>About us</a>
          <a href="#" class="flex justify-start">Doing business in India</a>
          <a href="#" class="flex justify-start" onClick={()=>scrollToTarget("services")}>Services</a>
          <a href="#" class="flex justify-start" onClick={()=>scrollToTarget("services")}>Arbitration Services</a>
          <a href="#" class="flex justify-start" onClick={()=>scrollToTarget("services")}>HR Services</a>
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
          <div className="flex flex-row gap-10  pt-10">
           <div className="bg-yellow-300 h-8 w-8 flex justify-center pt-2 rounded-lg">
           <AiFillInstagram />
           </div>
           <div className="bg-yellow-300 h-8 w-8 flex justify-center pt-2 rounded-lg">
           < FaFacebookF/>
           </div>
           <div className="bg-yellow-300 h-8 w-8 flex justify-center pt-2 rounded-lg">
           <FaTwitter />
           </div>
          </div>
        
        </div>{" "}
      </div>
      <div className=" absolute flex-grow border-b-2 flex justify-center border-white w-[1500px] pt-[350px] ml-[180px]  "></div>
      <div className="absolute mt-[360px] mx-52">
        <div className="flex flex-row space-x-[1000px] pt-2">
          <h className="text-white">Career at AU</h>
          <p className="text-white">
            Copyright @ AU Corporate.All Rights Reserved 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
