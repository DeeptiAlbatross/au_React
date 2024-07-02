import React from "react";
import Team from "../assests/Team1.png"
import { teamData } from "./data";

const team = () => {
  return (
    <div>
      <div className="flex justify-center flex-col">
        <h className="text-blue-800 text-2xl font-bold">Our Expertise team</h>
        <h1>Your Partners in *Precision</h1>
        <p className=" text-gray-400">
          AU is pioneering conglomerate,encompassing esteemed firms in the
          realms of Accounting,Audit & Assurance,Consulting, and Legal
          Services,skilfully <br></br>amalgamating innovative ideas with cutting-edge
          technology to adeptly tackle complex business challenges.
        </p>
      </div>
      <div className="flex justify-center flex-row gap-4">
        {teamData?.map((i,index)=>(
             <img className="w-72" src={i.image}></img>
        ))}
      </div>
    </div>
  );
};

export default team;
