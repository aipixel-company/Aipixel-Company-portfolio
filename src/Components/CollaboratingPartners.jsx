import React from "react";
import arkaan from "../assets/arkaan.png";
import universalskills from "../assets/universalskills.png";
import turing from "../assets/turing.png";
import techgalaxy from "../assets/techgalaxy.png";
import larace from "../assets/larace.png";
import dtec from "../assets/dtec.png";
import bankriyadh from "../assets/bankriyadh.png";
export default function CollaboratingPartners() {
  return (
    <>
      <div class=" mx-auto px-5 mt-28">
        <div class="flex flex-col justify-center">
          <div class="text-center">
            <h2 class="font-semibold text-3xl capitalize">colaborating partners</h2>

            {/* <p class="max-w-md mx-auto mt-2 text-gray-500">
              We are thankful to 
            </p> */}
          </div>

          <div class="flex flex-wrap items-center justify-center gap-4 mt-2 md:justify-around">
           <img src={arkaan} alt="" className=" h-24" />
           <img src={techgalaxy} alt="" className=" h-14" />
           <img src={larace} alt="" className=" h-36" />
           <img src={dtec} alt="" className=" h-20" />
           <img src={universalskills} alt="" className=" h-32" />
           <img src={bankriyadh} alt="" className=" h-11" />
           <img src={turing} alt="" className=" h-20" />
          </div>
        </div>
      </div>
    </>
  );
}
