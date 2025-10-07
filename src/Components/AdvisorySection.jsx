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
    <section className="w-full">
      {/* Section Heading */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          Advisory Services
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Discover how AI Pixel empowers businesses with cutting-edge technology, strategy, and design solutions tailored for growth.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-16 pb-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative p-6 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-100"
          >
            {/* Number badge */}
            <div className="absolute -top-4 -left-4 bg-gradient-to-r from-[#647A82] to-[#00BFA6] text-white rounded-full h-10 w-10 flex items-center justify-center font-semibold shadow-md">
              {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </div>

            <div className="flex flex-col">
              <h2 className="font-semibold text-lg text-gray-900 mb-3">
                {service.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-[#647A82] to-[#00BFA6] py-10">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between text-white text-center lg:text-left">
          <div className="mb-6 lg:mb-0">
            <p className="text-2xl font-medium leading-snug">
              Evolve your business with one of the world’s leading <br /> software partners.
            </p>
          </div>
          <div>
            <Link
              to="/contact-us"
              className="text-lg font-semibold bg-white text-[#647A82] px-6 py-3 rounded-full shadow-md inline-flex items-center hover:bg-gray-100 transition-all"
            >
              Partner with us <FaAngleRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
