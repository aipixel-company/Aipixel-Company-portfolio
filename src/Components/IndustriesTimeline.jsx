import { ChartBarIcon, ClockIcon, SparklesIcon } from "lucide-react";
import React from "react";

export default function ProjectWorkflow() {
  const workflowSteps = [
    {
      title: "Project Initiation",
      description:
        "Gather project requirements, define scope, and establish objectives.",
      date: "1st Week",
      position: "right",
    },
    {
      title: "Planning & Design",
      description:
        "Create project plan, allocate resources, and design project architecture.",
      date: "2nd Week",
      position: "left",
    },
    {
      title: "Development",
      description:
        "Implement features according to design, conduct testing, and iterate.",
      date: "3rd - 5th Week",
      position: "right",
    },
    {
      title: "Testing & QA",
      description:
        "Perform comprehensive testing, identify bugs, and ensure quality standards.",
      date: "6th Week",
      position: "left",
    },
    {
      title: "Deployment",
      description:
        "Deploy the project on the production environment and monitor performance.",
      date: "7th Week",
      position: "right",
    },
    {
      title: "Maintenance & Support",
      description:
        "Provide ongoing maintenance, offer support, and address user feedback.",
      date: "Ongoing",
      position: "left",
    },
  ];

  return (
    <>
      <section>
        <div className=" text-white py-8"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
        }}>
          <div className="container mx-auto flex flex-col items-start lg:flex-row my-12 lg:my-24">
            <div className="flex flex-col w-full sticky lg:top-28 lg:w-1/3 mt-1 lg:mt-12 px-8">
              {/* Main Title */}
            <p className="text-3xl lg:text-4xl leading-normal lg:leading-relaxed mb-2 font-extrabold">
              Project Workflow
            </p>
            <p className="text-lg lg:text-xl text-gray-300 mb-6 font-semibold" >
              A Structured Path to Digital Success
            </p>
            <p className="text-sm lg:text-base text-gray-400 mb-8">
              Explore the stages involved in the project development process, ensuring transparency, predictability, and control from concept to deployment.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start space-x-4">
                <ClockIcon className="w-6 h-6 flex-shrink-0"  />
                <div>
                  <h3 className="text-xl font-bold text-white">7-Week Sprints</h3>
                  <p className="text-sm text-gray-400">Our standard development cycle, focusing on rapid iteration and delivery.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <SparklesIcon className="w-6 h-6 flex-shrink-0"  />
                <div>
                  <h3 className="text-xl font-bold text-white">Agile Methodology</h3>
                  <p className="text-sm text-gray-400">Enabling flexibility and continuous client feedback throughout the process.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <ChartBarIcon className="w-6 h-6 flex-shrink-0"  />
                <div>
                  <h3 className="text-xl font-bold text-white">98% Success Rate</h3>
                  <p className="text-sm text-gray-400">Projects completed on time and within scope due to rigorous planning.</p>
                </div>
              </div>
            </div>
              
            </div>
            <div className="ml-0 lg:ml-12 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div
                    className="border-2-2 border-yellow-555 absolute h-full border"
                    style={{
                      right: "50%",
                      border: "2px solid #46B3EF",
                      borderRadius: "1%",
                    }}
                  ></div>
                  <div
                    className="border-2-2 border-yellow-555 absolute h-full border"
                    style={{
                      left: "50%",
                      border: "2px solid #46B3EF",
                      borderRadius: "1%",
                    }}
                  ></div>
                  {workflowSteps.map((step, index) => (
                    <div
                      key={index}
                      className={`mb-8 flex justify-between ${
                        step.position === "right" ? "flex-row-reverse" : ""
                      } items-center w-full ${
                        step.position === "left"
                          ? "right-timeline"
                          : "left-timeline"
                      }`}
                    >
                      <div className="order-1 w-5/12"></div>
                      <div
                        className={`order-1 w-5/12 px-1 py-4 text-${step.position}`}
                      >
                        <p className="mb-3 text-base text-[#46B3EF]">
                          {step.date}
                        </p>
                        <h4 className="mb-3 font-bold text-lg lg:text-2xl">
                          {step.title}
                        </h4>
                        <p className="text-sm lg:text-base leading-snug text-gray-50 text-opacity-100">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Placeholder image */}
                <img
                  className="mx-auto -mt-36 lg:-mt-36"
                  src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
