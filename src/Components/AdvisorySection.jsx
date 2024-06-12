import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Product Design",
    description:
      "AI Pixel doesn't just design products; they design experiences. Their team goes beyond aesthetics, prioritizing user-centered design principles.  They leverage the latest UI/UX trends and conduct user research to create visually appealing and intuitive interfaces that resonate with your target audience.",
  },
  {
    title: "Web Development",
    description:
      "AI Pixel builds robust and secure web applications engineered for growth. They don't just focus on functionality; they prioritize performance optimization. Their developers leverage cutting-edge technologies and best practices to ensure your website loads quickly, delivers a seamless user experience across all devices.",
  },
  {
    title: "Project Management",
    description:
      "AI Pixel understands the importance of efficient project management. Their experienced project managers utilize agile methodologies and industry-leading tools to ensure your project stays on schedule, within budget. They prioritize clear communication and collaboration, keeping you informed and involved throughout the entire development process.",
  },
  {
    title: "Responsive Design",
    description:
      "In today's mobile-centric world, responsiveness is no longer a luxury; it's a necessity. AI Pixel ensures your website and web applications adapt flawlessly to any screen size, be it desktops, tablets, or smartphones.  They go beyond basic responsiveness by optimizing user interfaces for touch interactions, creating a smooth and intuitive experience regardless of the device used.",
  },
  {
    title: "SEO Optimization",
    description:
      "AI Pixel understands the power of organic search traffic. Their SEO specialists integrate proven strategies into your website development process, optimizing your content and website structure to rank higher in search engine results pages (SERPs) for relevant keywords. This translates to increased visibility, attracting potential customers who are actively searching for your offerings.",
  },
  {
    title: "IT Consulting Services",
    description:
      "Navigating the ever-evolving IT landscape can be challenging. AI Pixel's IT consulting services provide valuable insights and strategic recommendations tailored to your business goals. Their experienced consultants analyze your current IT infrastructure, identify potential areas for improvement, and suggest cost-effective solutions that align with your unique needs.",
  },
  {
    title: "Software Development",
    description:
      "AI Pixel builds custom software solutions that tackle your specific business challenges. They don't offer a one-size-fits-all approach.  Their development team takes the time to understand your workflows and pain points, crafting software solutions that automate tasks, improve efficiency, and streamline your operations, freeing up your team to focus on core business activities.",
  },
  {
    title: "Technical Feasibility Study",
    description:
      "AI Pixel offers technical feasibility studies to assess the viability and cost-effectiveness of your project before development begins. This in-depth analysis considers technical constraints, resource requirements, and potential challenges, ensuring your project vision is grounded in technical reality. This proactive approach saves you time, money, and resources by identifying potential roadblocks in the early stages.",
  },
  {
    title: "Mobile App Development",
    description:
      "AI Pixel designs and develops high-quality mobile applications for both Android and iOS platforms. They understand the unique user behavior patterns associated with mobile devices and create app experiences that are intuitive, engaging, and optimized for performance.AI Pixel works closely with you to ensure your mobile app delivers value to your users and strengthens your brand presence in the mobile ecosystem.",
  },
];

export default function AdvisorySection() {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-semibold ml-5 px-4 mt-5">
        Advisory Services
      </h1>
      <div className="grid grid-cols-3 gap-4 mt-2 p-[4rem]">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative p-3 h-[16.5rem] rounded-lg bg-gray-100 my-4 hover:shadow-teal-100 hover:shadow-xl hover:cursor-pointer flex flex-col items-center justify-center bg-cover bg-center"
          >
            <div className="absolute top-0 left-0  text-blue-800 rounded-full h-7 w-7 p-7 flex items-center justify-center font-semibold">
              {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </div>
            <div className="flex flex-col items-center p-4 rounded-md">
              <h1 className="font-body font-medium text-lg mb-2">
                {service.title}
              </h1>
              <p className="mt-4 text-gray-600 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gradient-to-r from-gray-700 to-black py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between text-white text-center lg:text-left">
            <div className="flex items-center mb-4 lg:mb-0">
              <div className="w-1 text-5xl text-blue-500  mr-4">|</div>
              <p className="text-xl">
                Evolve your business with one of the world’s leading <br /> software
                partners.
              </p>
            </div>
            <div className="  m-auto">
              <Link to="/contact-us"
                className="text-xl text-white inline-flex items-center"
              >
                Partner with us <FaAngleRight className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
