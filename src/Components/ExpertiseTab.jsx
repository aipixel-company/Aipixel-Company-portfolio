import React, { useState } from "react";

const expertiseData = [
  {
    title: "Brand Building",
    details:
      " Craft a lasting impression. AI Pixel doesn't just create logos; they build brands. Their team conducts in-depth market research to understand your audience and competitors. They then craft a compelling brand story, design a unique visual identity, and develop a consistent brand voice across all touchpoints.",
    backgroundImage:
      "https://images.unsplash.com/photo-1497493292307-31c376b6e479?fit=crop&w=800&q=80",
  },
  {
    title: "Product Development",
    details:
      "Innovate and disrupt. AI Pixel is your partner in bringing groundbreaking product ideas to life. They combine design thinking with cutting-edge technology to develop user-centric products that solve real problems and delight customers. Their agile development process ensures rapid prototyping, iteration, and a smooth path to market.",
    backgroundImage:
      "https://images.unsplash.com/photo-1593642634367-d91a135587b5?fit=crop&w=800&q=80",
  },
  {
    title: "Website Development",
    details:
      "Create captivating online experiences. AI Pixel builds modern, responsive websites that not only look stunning but also convert visitors into loyal customers.  They leverage the latest web development technologies to deliver exceptional user experience (UX) and search engine optimization (SEO) to boost your online visibility.",
    backgroundImage:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2Vic2l0ZSUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww",
  },
  {
    title: "Application & Hybrid Development",
    details:
      "Seamless solutions for every device.  AI Pixel empowers you to reach your audience wherever they are. Their team develops native mobile applications for iOS and Android, as well as hybrid applications that seamlessly bridge the gap between web and mobile. This allows you to deliver a consistent, high-performance experience across all platforms.",
    backgroundImage:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?fit=crop&w=800&q=80",
  },
  {
    title: "Staff Augmentation",
    details:
      "Scale your team with skilled professionals. AI Pixel provides expert staff augmentation services to address your specific talent needs. They can quickly identify and deploy top-tier developers, designers, and project managers to bolster your in-house team and accelerate project completion.",
    backgroundImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Marketing Services",
    details:
      "Reach the right audience and tell your story. AI Pixel offers comprehensive marketing services to amplify your brand message and acquire new customers. They leverage data-driven insights to create targeted campaigns across various channels, including social media, search engine marketing (SEM), and content marketing.  Their focus is on driving measurable results and maximizing your return on investment (ROI).",
    backgroundImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Deployment Services",
    details:
      " Launch with confidence. AI Pixel ensures a smooth and efficient deployment process for your applications and websites. They handle everything from server configuration and security  to data migration and user training. Their team provides ongoing support to address any issues that may arise post-launch.",
    backgroundImage:
      "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?fit=crop&w=800&q=80",
  },
  {
    title: "UX Consulting",
    details:
      "Unlock the full potential of your products with Ai-Pixel`s expert UX consulting services. We specialize in creating intuitive, user-friendly interfaces that meet the needs of your target audience. Our team of seasoned UX professionals will guide you through enhancing user experience, ensuring your digital solutions are not only functional but also delightful to use. Transform your user interactions and drive higher satisfaction and engagement with our tailored UX strategies.",
    backgroundImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const ExpertiseTab = () => {
  const [activeTab, setActiveTab] = useState(expertiseData[0]);

  return (
    <div className=" text-black py-20">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 flex flex-col mb-8 md:mb-0">
            {expertiseData.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(item)}
                className={`py-4  px-3 mb-2 text-left rounded-md focus:outline-none transition-colors duration-300 ${
                  activeTab.title === item.title
                    ? "bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 text-black"
                    : "bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 hover:from-blue-600 hover:via-blue-700 hover:to-gray-800 text-white"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
          <div
            className="w-full md:w-3/4 p-6 ml-0 md:ml-3 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${activeTab.backgroundImage})` }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {activeTab.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-200 bg-black bg-opacity-50 p-4 rounded-lg">
              {activeTab.details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseTab;
