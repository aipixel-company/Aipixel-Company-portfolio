import { ChartBarIcon, ClockIcon, SparklesIcon } from "lucide-react";
import React from "react";

export default function ProjectWorkflow() {
  const workflowSteps = [
    {
      title: "Project Initiation",
      description: "Gather project requirements, define scope, and establish objectives.",
      date: "1st Week",
      position: "right",
    },
    {
      title: "Planning & Design",
      description: "Create project plan, allocate resources, and design project architecture.",
      date: "2nd Week",
      position: "left",
    },
    {
      title: "Development",
      description: "Implement features according to design, conduct testing, and iterate.",
      date: "3rd - 5th Week",
      position: "right",
    },
    {
      title: "Testing & QA",
      description: "Perform comprehensive testing, identify bugs, and ensure quality standards.",
      date: "6th Week",
      position: "left",
    },
    {
      title: "Deployment",
      description: "Deploy the project on the production environment and monitor performance.",
      date: "7th Week",
      position: "right",
    },
    {
      title: "Maintenance & Support",
      description: "Provide ongoing maintenance, offer support, and address user feedback.",
      date: "Ongoing",
      position: "left",
    },
  ];

  const stats = [
    {
      icon: ClockIcon,
      title: "7-Week Sprints",
      description: "Our standard development cycle, focusing on rapid iteration and delivery.",
    },
    {
      icon: SparklesIcon,
      title: "Agile Methodology",
      description: "Enabling flexibility and continuous client feedback throughout the process.",
    },
    {
      icon: ChartBarIcon,
      title: "98% Success Rate",
      description: "Projects completed on time and within scope due to rigorous planning.",
    },
  ];

  return (
    <section className="bg-[#070508] border-t border-[#2D2B3B]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Left: Sticky info panel */}
          <div className="flex flex-col w-full lg:w-1/3 lg:sticky lg:top-28 self-start">
            <span className="text-sm font-semibold text-[#3567FF] uppercase tracking-widest mb-3">
              Workflow
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-3">
              Project Workflow
            </h2>
            <p className="text-lg text-[#61CE70] font-semibold mb-4">
              A Structured Path to Digital Success
            </p>
            <p className="text-sm lg:text-base text-[#8791AD] mb-10 leading-relaxed">
              Explore the stages involved in the project development process, ensuring transparency, predictability, and control from concept to deployment.
            </p>

            <div className="space-y-6">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-start space-x-4 group">
                  <div className="p-2.5 rounded-xl bg-[#3567FF]/10 text-[#3567FF] flex-shrink-0 group-hover:bg-[#3567FF] group-hover:text-white transition-all duration-300">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{stat.title}</h3>
                    <p className="text-sm text-[#8791AD] mt-0.5">{stat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Timeline */}
          <div className="w-full lg:w-2/3">
            <div className="relative">
              {/* Centre line */}
              <div
                className="absolute h-full border-l-2"
                style={{
                  left: "50%",
                  borderColor: "#3567FF",
                  opacity: 0.35,
                }}
              />

              {workflowSteps.map((step, index) => (
                <div
                  key={index}
                  className={`mb-10 flex ${
                    step.position === "right" ? "flex-row-reverse" : ""
                  } items-start w-full`}
                >
                  {/* Empty side */}
                  <div className="w-5/12" />

                  {/* Centre dot */}
                  <div className="flex-shrink-0 z-10 mx-auto flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-[#3567FF] border-2 border-[#070508] shadow-[0_0_10px_rgba(53,103,255,0.6)]" />
                  </div>

                  {/* Content card */}
                  <div className={`order-1 w-5/12 ${step.position === "right" ? "pr-6 text-right" : "pl-6"}`}>
                    <p className="mb-1 text-xs font-semibold text-[#3567FF] uppercase tracking-wider">
                      {step.date}
                    </p>
                    <div className="glow-card rounded-xl p-4">
                      <h4 className="font-bold text-base text-white mb-1">
                        {step.title}
                      </h4>
                      <p className="text-sm text-[#8791AD] leading-snug">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
