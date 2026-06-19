import React from "react";
import arkaan from "../assets/arkaan.png";
import universalskills from "../assets/universalskills.png";
import turing from "../assets/turing.png";
import techgalaxy from "../assets/techgalaxy.png";
import larace from "../assets/larace.png";
import dtec from "../assets/dtec.png";
import bankmusqat from "../assets/bankmusqat.png";
import halalchef from "../assets/halalchef.png";
import royaldelhi from "../assets/royaldelhi.png";
import singaf from "../assets/singaf.png";

const partners = [
  { logo: arkaan, name: "Arkaan", heightClass: "h-24", heightVal: "48" },
  { logo: techgalaxy, name: "Tech Galaxy", heightClass: "h-14", heightVal: "28" },
  { logo: larace, name: "Larace", heightClass: "h-36", heightVal: "72" },
  { logo: dtec, name: "Dtec", heightClass: "h-20", heightVal: "40" },
  { logo: universalskills, name: "Universal Skills", heightClass: "h-32", heightVal: "64" },
  { logo: bankmusqat, name: "Bank Muscat", heightClass: "h-11", heightVal: "22" },
  { logo: turing, name: "Turing", heightClass: "h-20", heightVal: "40" },
  { logo: halalchef, name: "Halal Chef", heightClass: "h-20", heightVal: "40" },
  { logo: royaldelhi, name: "Royal Delhi", heightClass: "h-20", heightVal: "40" },
  { logo: singaf, name: "Singaf", heightClass: "h-20", heightVal: "40" },
];

export default function CollaboratingPartners() {
  // We repeat the partner array multiple times to ensure a smooth, continuous scrolling marquee effect
  const repeatedPartners = [
    ...partners,
    ...partners,
    ...partners,
    ...partners,
    ...partners,
    ...partners,
  ];

  return (
    <>
      <div className="mx-auto px-5 mt-24 bg-[#070508] py-10">
        <div className="flex flex-col justify-center">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-[#3567FF]/10 text-[#3567FF] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#3567FF]/20">
              Trust & Partnerships
            </span>
            <h2 className="font-bold text-3xl capitalize text-white">Collaborating Partners</h2>
          </div>

          <div className="scrolling-logos flex items-center mt-2 relative">
            {/* Soft fade gradients on edges */}
            <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-[#070508] to-transparent z-10" />
            <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-[#070508] to-transparent z-10" />
            
            <div className="logos flex items-center">
              {repeatedPartners.map((partner, index) => (
                <img
                  key={index}
                  src={partner.logo}
                  alt={partner.name}
                  width="auto"
                  height={partner.heightVal}
                  className={`${partner.heightClass} mx-8 filter grayscale brightness-[0.8] opacity-65 hover:grayscale-0 hover:brightness-110 hover:opacity-100 transition-all duration-300`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
