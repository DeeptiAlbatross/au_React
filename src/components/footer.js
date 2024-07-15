import React from "react";
import FooterImage from "../assets/footerImage.png";
// import Logo from "../assets/logo.png";
import PhoneImage from "../assets/phone.png";
import Location from "../assets/Location.png";
// import Image from "../assets/socialMedia.png";
import Image2 from "../assets/logo-text.png";
import Logo2 from "../assets/Logo2.png";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import Letter from "../assets/letter.png";

const Footer = () => {
  const scrollToTarget = (item) => {
    const id = document.getElementById(item);
    if (id) {
      id.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (

    <div
      class="relative flex flex-col bg-cover bg-center object-contain w-full justify-center items-center"
      style={{ backgroundImage: `url(${FooterImage})` }}
    >
      <div class="flex mt-12 flex-col md:flex-row  justify-evenly w-2/3">
        <div class="md:w-1/3 w-full ">
          <div class="flex md:w-2/3 w-32">
            <img src={Logo2} class="object-cover" alt="Logo" />
            <img src={Image2} class="object-contain" alt="Logo Text" />
          </div>
          <p class="text-white pt-4 flex text-left">
            Welcome to AU corporate, where expert financial solutions and
            precision meet. Trust us to navigate your finances towards growth.
          </p>
        </div>
        <div class="text-white  md:w-1/3 w-full flex flex-col leading-loose justify-center items-center ">
          <h2 class="text-lg my-4 font-extrabold flex justify-start">Extra Links</h2>
          <ul>
            <li>
              <span href="#" class="flex">
                Home
              </span>
            </li>
            <li>
              {" "}
              <span href="#" class="flex">
                About us
              </span>
            </li>
            <li>
              {" "}
              <span href="#" class="flex text-left">
                Doing business in India
              </span>
            </li>
            <li>
              {" "}
              <span href="#" class="flex">
                Services
              </span>
            </li>
            <li>
              {" "}
              <span href="#" class="flex">
                Arbitration Services
              </span>
            </li>
            <li>
              {" "}
              <span href="#" class="flex">
                HR Services
              </span>
            </li>
          </ul>
        </div>
        <div class="text-white flex flex-col justify-center items-center  md:w-1/3 w-full leading-loose ">
          <h2 class="text-lg my-4">Contact Information</h2>
          <div class="flex gap-2">
            <img class="h-6 w-6" src={PhoneImage} alt="Phone" />
            <span>888-999-347</span>
          </div>
          <div class="flex gap-2">
            <img class="w-6 h-6" src={Letter} alt="Email" />
            <span>au.corporate@gmail.com</span>
          </div>
          <div class="flex gap-3 justify-center">
            <img class="w-6 h-8" src={Location} alt="Location" />
            <span class="text-sm md:w-1/2 w-full">
              222 First Floor, World Trade Tower, Cannaught Place, New
              Delhi-110001
            </span>
          </div>
        </div>
        <div class="flex flex-col ">
          <h2 class="text-lg text-white my-4">Follow Us on</h2>
          <div class="flex gap-10 py-6">
            <div class="bg-yellow-300 h-8 w-8 flex justify-center items-center rounded-lg">
              <AiFillInstagram />
            </div>
            <div class="bg-yellow-300 h-8 w-8 flex justify-center items-center rounded-lg">
              <FaFacebookF />
            </div>
            <div class="bg-yellow-300 h-8 w-8 flex justify-center items-center rounded-lg">
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
      <div class="border-b-2 border-white  pb-2 w-full"></div>
      <div class="flex justify-center items-center  w-full">
        <div class="flex justify-between items-center pt-2 w-2/3">
          <h3 class="text-white">Career at AU</h3>
          <p class="text-white">
            &copy; AU Corporate. All Rights Reserved 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
