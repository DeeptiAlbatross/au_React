import React from 'react'
import Logo from "../assests/logo.png"
import { useNavigate } from "react-router-dom";


const Header = () => {
    // const navigate=useNavigate();
    const scrollToTarget = (item) => {
   const id=document.getElementById(item);
   if(id){
    id.scrollIntoView({behavior:"smooth",block:"start"})
   }
}
  return (
    <>
    <header class="pb-6 bg-white lg:pb-0 sticky top-0 ">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav class="flex items-center justify-between h-16 lg:h-20">
            <div class="flex-shrink-0">
                <a href="#" title="" class="flex">
                    <img class="w-auto h-8 lg:h-10" src={Logo} alt="" />
                </a>
            </div>

            <button type="button" class="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                <svg class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                </svg>

                <svg class="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <div class="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                <span href="#" title="" class="text-base font-regular text-blue-600 transition-all duration-200 hover:text-black focus:text-blue-600" onClick={()=>scrollToTarget("home")}> Home </span>
                <span href="#" title="" class="text-base font-regular text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600" onClick={()=>scrollToTarget("about")}> About us </span>
                <span href="#" title="" class="text-base font-regular text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600" onClick={()=>scrollToTarget("about")}> Doing business in India </span>
                <span href="#" title="" class="text-base font-regular text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600" onClick={()=>scrollToTarget("services")}> Services </span>
                <span href="#" title="" class="text-base font-regular text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600" onClick={()=>scrollToTarget("services")}> Arbitration Services </span>
                <span href="#" title="" class="text-base font-regular text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600" onClick={()=>scrollToTarget("services")}>  HR Services </span>
            </div>
            <a href="#" title="" class="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-black border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700" role="button" onClick={()=>scrollToTarget("contact")}> Contact us </a>
        </nav>
    </div>
</header>
</>
  )
}

export default Header;


