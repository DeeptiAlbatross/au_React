import React from 'react'

const Hero = () => {
  return (
    <div id="Home" className=" flex justify-center ">
    <img className="order-2 w-full py-20 bg-center bg-cover h-screen"
      src="https://t4.ftcdn.net/jpg/05/46/01/69/360_F_546016914_qE7KlgNMJCzFSueLhBZ1Qo7NbmIVfu9e.jpg"
      alt="img "></img>
    {/* <div className="order-1 pt-60 p-10 ">
      <h1 className=" text-6xl leading-tight font-bold">Build your <br/> business with us</h1>
      <p className="text-xl pt-4 leading-tight ">
        Zoho Commerce contains all the tools you need to build a<br/> website,
        accept orders, track inventory, process payments,<br/> manage shipping,
        market your brand, and analyze your data.
      </p>
      <br/>
      <button 
    //   onClick={() => {navigate("/trial-form");  }}
      className="bg-red-500 rounded-lg p-2 text-white font-bold hover:bg-orange-800" >
        Start 14 day free trial{" "}
      </button>
      
    </div> */}
  </div>
  )
}

export default Hero;