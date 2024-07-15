import React from "react";
import PhoneImage from "../assets/phone.png";
import LocationImage from "../assets/Location.png";

const headingContact = () => {
  return (
  
    <div class="bg-blue-600 h-10 pt-3 pb-10 flex justify-center">
      <div class="mx-auto max-w-6xl flex justify-between py-2 md:px-0 px-4">
        <div class="flex justify-center">
          <img class="h-5" src={PhoneImage} alt="#"></img>
          <h class="text-white text-sm font-bold pr-6">888-999-347 </h>
         
        </div>
        <div class="justify-center hidden md:flex">
            <img class="w-5 h-5" src={LocationImage} alt="#"></img>
            <h class="text-white text-sm font-bold flex justify-center">
              222 1st Floor-WTT,CP,New Delhi-110001
            </h>
          </div>
      </div>
    </div>
  );
};

export default headingContact;
