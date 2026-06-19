import React from "react";
import moosa from "../assets/moosa.png";
import bankmusqat from "../assets/bankmusqat.png";
import dtec from "../assets/dtec.png";
import adventureclub from "../assets/adventureclub.png";
import arkaan from "../assets/arkaan.png";
import techgalaxy from "../assets/techgalaxy.png";
import absher from "../assets/absher.png";
import airhub from "../assets/airhub.png";
import seedlogo from "../assets/seedlogo.png";
import universalskills from "../assets/universalskills.png";
import turing from "../assets/turing.png";

const logos = [
  { src: moosa, alt: "Moosa Group", h: "45px" },
  { src: bankmusqat, alt: "Bank Muscat", h: "35px" },
  { src: dtec, alt: "DTEC", h: "45px" },
  { src: adventureclub, alt: "Adventure Club", h: "55px" },
  { src: arkaan, alt: "Arkaan", h: "50px" },
  { src: techgalaxy, alt: "Tech Galaxy", h: "40px" },
  { src: absher, alt: "Absher", h: "50px" },
  { src: airhub, alt: "AirHub", h: "50px" },
  { src: seedlogo, alt: "Seed", h: "40px" },
  { src: universalskills, alt: "Universal Skills", h: "55px" },
  { src: turing, alt: "Turing", h: "45px" },
];

export default function TrustedBySection() {
  return (
    <section className="relative bg-[#070508] py-10 overflow-hidden border-t border-[#2D2B3B]/30">
      {/* Top text */}
      <p className="text-center text-[#8791AD] text-sm font-medium tracking-wider uppercase mb-8">
        Trusted by growth teams, founders, and industry leaders
      </p>

      {/* Scrolling logo marquee */}
      <div className="scrolling-logos">
        <div className="logos">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center px-8"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={{ height: logo.h }}
                className="object-contain filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
