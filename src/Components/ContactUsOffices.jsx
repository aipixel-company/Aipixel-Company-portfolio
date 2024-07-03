import React from "react";
import ceo from "../assets/ceo.jpg"
import teamlead from "../assets/teamlead.jpg"
import cfo from "../assets/cfo.jpg"

export default function ContactUsOffices() {
  const teamMembers = [
    
    {
      name: "Faheem Masood",
      title: "Chief Finance Officer",
      image: cfo,
      description:
        "Overseeing financial operations and strategies to ensure stability and growth. Expert in financial planning, analysis, and risk management.",
      socialLinks: {
        github: "javascript:void(0)",
        twitter: "javascript:void(0)",
        instagram: "javascript:void(0)",
      },
    },
    {
      name: "Mian Usman",
      title: "Chief Executive Officer",
      image: ceo,
      description:
        "Leading the company with a focus on innovation, growth, and customer satisfaction. Promotes a collaborative and knowledge-sharing environment.",
      socialLinks: {
        github: "javascript:void(0)",
        twitter: "javascript:void(0)",
        instagram: "javascript:void(0)",
      },
    },
    {
      name: "Muhammad Moiz",
      title: "Team Lead",
      image: teamlead ,
      description:
        "Guiding the team towards achieving project goals with efficiency and excellence. Expertise in team management, project coordination and growth.",
      socialLinks: {
        github: "javascript:void(0)",
        twitter: "javascript:void(0)",
        instagram: "javascript:void(0)",
      },
    },
  ];

  return (
    <>
      <div className="mb-16">
        <div className=" flex justify-center pt-5">
          <div>
            <h1 className="xl:text-4xl text-3xl text-center ">
              Our Core Team
            </h1>
          </div>
        </div>
        <div className="w-full px-10 lg:pt-6">
          <div className=" mx-auto">
            <div
              role="list"
              aria-label="Behind the scenes People"
              className="lg:flex md:flex flex-col lg:flex-row sm:flex items-center lg:justify-around"
            >
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  role="listitem"
                  className=" xl:mt-9 p-3  lg:w-2/5"
                >
                  <div className="rounded overflow-hidden mb lg:h-[20rem]  xl:h-[15rem] shadow-md bg-white">
                    
                    <div className="px-6 mt-9">
                      <h1 className="font-bold text-3xl text-center mb-1">
                        {member.name}
                      </h1>
                      <p className="text-gray-800 text-sm text-center">
                        {member.title}
                      </p>
                      <p className="text-gray-600 m-auto mb-3 font-normal text-wrap">
                        {member.description}
                      </p>
                     
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
