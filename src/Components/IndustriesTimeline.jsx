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
        <div className="bg-black text-white py-8">
          <div className="container mx-auto flex flex-col items-start lg:flex-row my-12 lg:my-24">
            <div className="flex flex-col w-full sticky lg:top-36 lg:w-1/3 mt-2 lg:mt-12 px-8">
              <p className="text-3xl lg:text-4xl leading-normal lg:leading-relaxed mb-2">
                Project Workflow
              </p>
              <p className="text-sm lg:text-base text-gray-50 mb-4">
                Explore the stages involved in the project development process.
              </p>
              {/* <a
                href="#"
                className="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
              >
                Learn More
              </a> */}
            </div>
            <div className="ml-0 lg:ml-12 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div
                    className="border-2-2 border-yellow-555 absolute h-full border"
                    style={{
                      right: "50%",
                      border: "2px solid #FFC100",
                      borderRadius: "1%",
                    }}
                  ></div>
                  <div
                    className="border-2-2 border-yellow-555 absolute h-full border"
                    style={{
                      left: "50%",
                      border: "2px solid #FFC100",
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
                        <p className="mb-3 text-base text-yellow-300">
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
