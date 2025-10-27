import React from "react";

// The data array remains unchanged for the scrolling logic.
const expertiseData = [
  {
    title: "Brand Building",
    details:
      "Craft a lasting impression. AI Pixel doesn't just create logos; they build brands. Their team conducts in-depth market research to understand your audience and competitors. They then craft a compelling brand story, design a unique visual identity, and develop a consistent brand voice across all touchpoints.",
    backgroundImage:
      "https://images.unsplash.com/photo-1497493292307-31c376b6e479?fit=crop&w=800&q=80",
    icon: "🎨",
  },
  {
    title: "Product Development",
    details:
      "Innovate and disrupt. AI Pixel is your partner in bringing groundbreaking product ideas to life. They combine design thinking with cutting-edge technology to develop user-centric products that solve real problems and delight customers. Their agile development process ensures rapid prototyping, iteration, and a smooth path to market.",
    backgroundImage:
      "https://images.unsplash.com/photo-1593642634367-d91a135587b5?fit=crop&w=800&q=80",
    icon: "💡",
  },
  {
    title: "Website Development",
    details:
      "Create captivating online experiences. AI Pixel builds modern, responsive websites that not only look stunning but also convert visitors into loyal customers. They leverage the latest web development technologies to deliver exceptional user experience (UX) and search engine optimization (SEO) to boost your online visibility.",
    backgroundImage:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2Vic2l0ZSUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww",
    icon: "🌐",
  },
  {
    title: "Application & Hybrid Development",
    details:
      "Seamless solutions for every device. AI Pixel empowers you to reach your audience wherever they are. Their team develops native mobile applications for iOS and Android, as well as hybrid applications that seamlessly bridge the gap between web and mobile. This allows you to deliver a consistent, high-performance experience across all platforms.",
    backgroundImage:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?fit=crop&w=800&q=80",
    icon: "📱",
  },
  {
    title: "Staff Augmentation",
    details:
      "Scale your team with skilled professionals. AI Pixel provides expert staff augmentation services to address your specific talent needs. They can quickly identify and deploy top-tier developers, designers, and project managers to bolster your in-house team and accelerate project completion.",
    backgroundImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "👥",
  },
  {
    title: "Marketing Services",
    details:
      "Reach the right audience and tell your story. AI Pixel offers comprehensive marketing services to amplify your brand message and acquire new customers. They leverage data-driven insights to create targeted campaigns across various channels, including social media, search engine marketing (SEM), and content marketing. Their focus is on driving measurable results and maximizing your return on investment (ROI).",
    backgroundImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "📈",
  },
  {
    title: "Deployment Services",
    details:
      "Launch with confidence. AI Pixel ensures a smooth and efficient deployment process for your applications and websites. They handle everything from server configuration and security to data migration and user training. Their team provides ongoing support to address any issues that may arise post-launch.",
    backgroundImage:
      "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?fit=crop&w=800&q=80",
    icon: "🚀",
  },
  {
    title: "UX Consulting",
    details:
      "Unlock the full potential of your products with Ai-Pixel`s expert UX consulting services. We specialize in creating intuitive, user-friendly interfaces that meet the needs of your target audience. Our team of seasoned UX professionals will guide you through enhancing user experience, ensuring your digital solutions are not only functional but also delightful to use. Transform your user interactions and drive higher satisfaction and engagement with our tailored UX strategies.",
    backgroundImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "🧠",
  },
  {
    title: "Brand Building",
    details:
      "Craft a lasting impression. AI Pixel doesn't just create logos; they build brands. Their team conducts in-depth market research to understand your audience and competitors. They then craft a compelling brand story, design a unique visual identity, and develop a consistent brand voice across all touchpoints.",
    backgroundImage:
      "https://images.unsplash.com/photo-1497493292307-31c376b6e479?fit=crop&w=800&q=80",
    icon: "🎨",
  },
  {
    title: "Product Development",
    details:
      "Innovate and disrupt. AI Pixel is your partner in bringing groundbreaking product ideas to life. They combine design thinking with cutting-edge technology to develop user-centric products that solve real problems and delight customers. Their agile development process ensures rapid prototyping, iteration, and a smooth path to market.",
    backgroundImage:
      "https://images.unsplash.com/photo-1593642634367-d91a135587b5?fit=crop&w=800&q=80",
    icon: "💡",
  },
  {
    title: "Website Development",
    details:
      "Create captivating online experiences. AI Pixel builds modern, responsive websites that not only look stunning but also convert visitors into loyal customers. They leverage the latest web development technologies to deliver exceptional user experience (UX) and search engine optimization (SEO) to boost your online visibility.",
    backgroundImage:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2Vic2l0ZSUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww",
    icon: "🌐",
  },
  {
    title: "Application & Hybrid Development",
    details:
      "Seamless solutions for every device. AI Pixel empowers you to reach your audience wherever they are. Their team develops native mobile applications for iOS and Android, as well as hybrid applications that seamlessly bridge the gap between web and mobile. This allows you to deliver a consistent, high-performance experience across all platforms.",
    backgroundImage:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?fit=crop&w=800&q=80",
    icon: "📱",
  },
  {
    title: "Staff Augmentation",
    details:
      "Scale your team with skilled professionals. AI Pixel provides expert staff augmentation services to address your specific talent needs. They can quickly identify and deploy top-tier developers, designers, and project managers to bolster your in-house team and accelerate project completion.",
    backgroundImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "👥",
  },
  {
    title: "Marketing Services",
    details:
      "Reach the right audience and tell your story. AI Pixel offers comprehensive marketing services to amplify your brand message and acquire new customers. They leverage data-driven insights to create targeted campaigns across various channels, including social media, search engine marketing (SEM), and content marketing. Their focus is on driving measurable results and maximizing your return on investment (ROI).",
    backgroundImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "📈",
  },
  {
    title: "Deployment Services",
    details:
      "Launch with confidence. AI Pixel ensures a smooth and efficient deployment process for your applications and websites. They handle everything from server configuration and security to data migration and user training. Their team provides ongoing support to address any issues that may arise post-launch.",
    backgroundImage:
      "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?fit=crop&w=800&q=80",
    icon: "🚀",
  },
  {
    title: "UX Consulting",
    details:
      "Unlock the full potential of your products with Ai-Pixel`s expert UX consulting services. We specialize in creating intuitive, user-friendly interfaces that meet the needs of your target audience. Our team of seasoned UX professionals will guide you through enhancing user experience, ensuring your digital solutions are not only functional but also delightful to use. Transform your user interactions and drive higher satisfaction and engagement with our tailored UX strategies.",
    backgroundImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "🧠",
  },
  
];

// Combine the original data with a duplicated copy for the infinite loop effect.
const carouselData = [...expertiseData, ...expertiseData];

const ExpertiseTab = () => {
  return (
    <section className="bg-gray-950 py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500">
          Our Full Suite of Expertise
        </h2>
        <p className="text-xl text-gray-400 mt-3">
          Explore the services that define our digital innovation.
        </p>
      </div>

      {/* Horizontal Scroll Container with Fade Mask */}
      <div className="relative w-full max-w-full overflow-x-scroll scrollbar-hide">
        {/* Slower Scroll Speed: Changed the duration to 120s 
          Note: This requires the 'scroll' keyframe to be defined in your tailwind.config.js 
        */}
        <div
          className="flex min-w-max animate-[scroll_150s_linear_infinite] hover:animation-play-state:paused"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, white 10%, white 90%, transparent)",
          }}
        >
          {carouselData.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[320px] lg:w-[400px] p-4 group"
            >
              <div
                className="
         h-[400px] rounded-2xl shadow-xl overflow-hidden relative
         bg-cover bg-center transition-all duration-500 cursor-pointer
         group-hover:scale-[1.03] group-hover:shadow-2xl
        "
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              >
                {/* Dark, subtle gradient overlay for professionalism and text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>

                {/* Content positioning: at the bottom of the card */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <span className="text-4xl mb-2 inline-block">
                    {item.icon}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                    {item.details}
                  </p>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS to hide the scrollbar (Necessary for the clean look) */}
      <style>{`
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
    .scrollbar-hide {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }
   `}</style>
    </section>
  );
};

export default ExpertiseTab;
