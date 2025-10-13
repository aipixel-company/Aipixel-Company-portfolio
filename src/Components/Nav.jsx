 import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FiChevronDown, 
  FiChevronUp, 
  FiMenu, 
  FiX,
  FiArrowRight,
  FiCalendar,
  FiMail,
  FiStar,
  FiCheckCircle,
  FiExternalLink
} from "react-icons/fi";
import logo from "../assets/navlogo.png";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownStyle, setDropdownStyle] = useState({});
  const navigate = useNavigate();
  const dropdownRefs = useRef({});

  // Online splash images from Unsplash for each category
  const navImages = {
    "Artificial Intelligence": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "Advisory": "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "Engineering": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "Solutions": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "Optimization": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  };

  // Navigation data structure with enhanced content
  const navItems = [
    {
      name: "Artificial Intelligence",
      image: navImages["Artificial Intelligence"],
      description: "Transform your business with cutting-edge AI solutions",
      megaMenu: [
        {
          title: "AI Development",
          items: [
            "AI Agents",
            "AI Workshop", 
            "AI PoC & MVP",
            "Generative AI",
            "Machine Learning",
            "MLOps",
            "Conversational AI"
          ]
        }
      ],
      features: ["Real-time Analytics", "Custom Models", "24/7 Support"],
      stats: "70% faster implementation"
    },
    {
      name: "Advisory",
      image: navImages["Advisory"],
      description: "Strategic guidance for digital transformation",
      megaMenu: [
        {
          title: "Consulting Services",
          items: [
            "Discovery Workshop",
            "Market Research",
            "Technical Feasibility Study",
            "Product Strategy",
            "UI/UX Design",
            "Digital Transformation"
          ]
        }
      ],
      features: ["Industry Experts", "Proven Methodologies", "ROI Focused"],
      stats: "200+ projects delivered"
    },
    {
      name: "Engineering",
      image: navImages["Engineering"],
      description: "Build robust and scalable software solutions",
      megaMenu: [
        {
          title: "Development",
          items: [
            "Product Development",
            "Application Development",
            "Application Modernization",
            "POC Development",
            "AI Software Development",
            "Cloud Engineering",
            "Cloud Migration"
          ]
        }
      ],
      features: ["Agile Development", "Quality Assurance", "Continuous Delivery"],
      stats: "50% cost reduction"
    },
    {
      name: "Solutions",
      image: navImages["Solutions"],
      description: "End-to-end platform solutions and expertise",
      megaMenu: [
        {
          title: "Platform Solutions",
          items: [
            "Microsoft Dynamics 365",
            "Salesforce", 
            "AWS",
            "Power BI",
            "SAP",
            "ServiceNow",
            "Shopify"
          ]
        },
        {
          title: "Specialized Expertise",
          items: [
            "UX Design",
            "RPA",
            "DevOps",
            "Internet of Things",
            "Blockchain",
            "AR/VR/MR",
            "Data Science"
          ]
        }
      ],
      features: ["Multi-platform", "Custom Integration", "Expert Support"],
      stats: "30+ platforms supported"
    },
    {
      name: "Optimization",
      image: navImages["Optimization"],
      description: "Maximize performance and reduce costs",
      megaMenu: [
        {
          title: "Performance & Operations",
          items: [
            "Cloud Cost Optimization",
            "Software Audit",
            "Quality Assurance",
            "Support & Maintenance"
          ]
        }
      ],
      features: ["Cost Reduction", "Performance Boost", "Ongoing Maintenance"],
      stats: "40% performance improvement"
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setActiveDropdown(null);
    setMobileOpen(false);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setMobileOpen(false);
  };

  const handleDropdownEnter = (index, event) => {
    const element = dropdownRefs.current[index];
    if (element) {
      const rect = element.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      
      // Calculate position to prevent overflow
      let left = -200;
      if (rect.right + 600 > viewportWidth) {
        left = viewportWidth - rect.right - 650;
      }
      
      setDropdownStyle({
        left: `${left}px`,
        opacity: 0,
        transform: 'translateY(-10px)'
      });
      
      setActiveDropdown(index);
      
      // Smooth animation
      setTimeout(() => {
        setDropdownStyle({
          left: `${left}px`,
          opacity: 1,
          transform: 'translateY(0)'
        });
      }, 10);
    }
  };

  const handleDropdownLeave = () => {
    setDropdownStyle({
      opacity: 0,
      transform: 'translateY(-10px)'
    });
    
    setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 font-['Inter'] ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2" 
            : "bg-white/90 backdrop-blur-sm py-4"
        }`}
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div 
              className="flex-shrink-0 cursor-pointer group"
              onClick={() => handleNavigation("/")}
            >
              <div className="flex items-center space-x-3">
                <span className={`font-bold text-xl tracking-tight transition-all duration-300 ${
                  scrolled ? "text-gray-900" : "text-gray-900"
                }`}>
                  <img src={logo} alt="Company Logo" className="h-[2.4rem]" />
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div 
                  key={index}
                  className="relative"
                  ref={el => dropdownRefs.current[index] = el}
                  onMouseEnter={(e) => handleDropdownEnter(index, e)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    className={`px-4 py-2 text-sm font-semibold transition-all duration-300 relative group flex items-center space-x-1 ${
                      scrolled ? "text-gray-800" : "text-gray-800"
                    } ${
                      activeDropdown === index ? "text-blue-600" : "hover:text-blue-600"
                    }`}
                  >
                    <span className="relative">
                      {item.name}
                      <span 
                        className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                          activeDropdown === index ? "w-full" : "group-hover:w-full"
                        }`}
                      ></span>
                    </span>
                    <FiChevronDown 
                      className={`w-3 h-3 transition-transform duration-300 ${
                        activeDropdown === index ? "rotate-180 text-blue-600" : "text-gray-500"
                      }`} 
                    />
                  </button>

                  {/* Enhanced Mega Dropdown */}
                  {activeDropdown === index && (
                    <div 
                      className="absolute top-full mt-2 w-[800px] bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden"
                      style={{
                        ...dropdownStyle,
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      <div className="flex">
                        {/* Left side - Content */}
                        <div className="flex-1 p-6">
                          <div className="flex items-start mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                              <FiStar className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                              <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                              <div className="mt-2 inline-flex items-center px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-xs font-semibold">
                                <FiStar className="w-3 h-3 mr-1" />
                                {item.stats}
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-6">
                            {item.megaMenu.map((section, sectionIndex) => (
                              <div key={sectionIndex}>
                                <h4 className="text-lg font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100">
                                  {section.title}
                                </h4>
                                <ul className="space-y-2">
                                  {section.items.map((subItem, subIndex) => (
                                    <li key={subIndex}>
                                      <button
                                        onClick={() => handleNavigation(`/${subItem.toLowerCase().replace(/\s+/g, '-')}`)}
                                        className="text-gray-700 hover:text-blue-600 transition-all duration-200 text-left w-full text-sm font-medium py-2 px-3 rounded-lg hover:bg-blue-50 flex items-center group"
                                      >
                                        <FiArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1" />
                                        <span>{subItem}</span>
                                      </button>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>

                          {/* Features */}
                          <div className="mt-6 pt-4 border-t border-gray-100">
                            <h4 className="font-semibold text-gray-900 mb-3">Why Choose Us:</h4>
                            <div className="flex flex-wrap gap-2">
                              {item.features.map((feature, featureIndex) => (
                                <span 
                                  key={featureIndex}
                                  className="inline-flex items-center px-3 py-1 rounded-full bg-blue-700 text-white text-xs font-medium"
                                >
                                  <FiCheckCircle className="w-3 h-3 mr-1" />
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Right side - Attractive Image and CTA */}
                        <div className="w-64 relative group overflow-hidden">
                          <div 
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{
                              backgroundImage: `url(${item.image})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center'
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-blue-600/60"></div>
                          </div>
                          
                          <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                            <div>
                              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 border border-white/30">
                                <FiCalendar className="w-8 h-8 text-white" />
                              </div>
                              <h4 className="text-white font-bold text-lg mb-2">
                                Ready to Get Started?
                              </h4>
                              <p className="text-blue-100 text-sm mb-4">
                                Join 1000+ companies that trust our expertise
                              </p>
                            </div>
                            
                            <button 
                              onClick={() => handleNavigation("/contact")}
                              className="w-full bg-white text-blue-600 px-4 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 group"
                            >
                              <FiExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                              <span>Start Project</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              
              <button 
                onClick={() => handleNavigation("/contact")}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <FiMail className="w-4 h-4" />
                <span>Contact Us</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-300 border border-gray-200"
            >
              {mobileOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>

          {/* Enhanced Mobile Menu */}
          <div 
            className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-200 transition-all duration-500 overflow-hidden ${
              mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
              {navItems.map((item, index) => (
                <div key={index} className="border-b border-gray-100 pb-3 last:border-0">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                    className="flex items-center justify-between w-full text-left text-gray-900 font-semibold py-3 text-base bg-gray-50 rounded-lg px-4 hover:bg-blue-50 transition-colors duration-300"
                  >
                    <span className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                        <FiStar className="w-4 h-4 text-white" />
                      </div>
                      {item.name}
                    </span>
                    {activeDropdown === index ? 
                      <FiChevronUp className="w-4 h-4 text-blue-600" /> : 
                      <FiChevronDown className="w-4 h-4 text-gray-500" />
                    }
                  </button>
                  
                  {activeDropdown === index && (
                    <div className="mt-3 space-y-4 animate-fade-in bg-white rounded-lg p-4 border border-gray-200 shadow-lg">
                      {/* Mobile Image Banner */}
                      <div 
                        className="h-32 rounded-lg bg-cover bg-center relative overflow-hidden mb-4"
                        style={{ backgroundImage: `url(${item.image})` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60"></div>
                        <div className="relative z-10 p-4 h-full flex flex-col justify-center">
                          <h3 className="text-white font-bold text-lg">{item.name}</h3>
                          <p className="text-blue-100 text-sm">{item.description}</p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="inline-flex items-center px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-xs font-semibold mb-3">
                          <FiStar className="w-3 h-3 mr-1" />
                          {item.stats}
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {item.features.map((feature, featureIndex) => (
                            <span 
                              key={featureIndex}
                              className="inline-flex items-center px-2 py-1 rounded-full bg-blue-50 text-blue-700 text-xs"
                            >
                              <FiCheckCircle className="w-3 h-3 mr-1" />
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {item.megaMenu.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                          <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide border-b border-gray-100 pb-2">
                            {section.title}
                          </h3>
                          <ul className="space-y-2">
                            {section.items.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <button
                                  onClick={() => handleNavigation(`/${subItem.toLowerCase().replace(/\s+/g, '-')}`)}
                                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm py-2 px-3 rounded-lg hover:bg-blue-50 block w-full text-left flex items-center space-x-3 group"
                                >
                                  <FiArrowRight className="w-3 h-3 text-blue-500 transition-transform duration-300 group-hover:translate-x-1" />
                                  <span>{subItem}</span>
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 space-y-3">
                <button 
                  onClick={() => handleNavigation("/webinar")}
                  className="w-full text-center text-blue-600 font-semibold py-3 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <FiStar className="w-4 h-4" />
                  <span>Watch Featured Webinar</span>
                </button>
                <button 
                  onClick={() => handleNavigation("/contact")}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <FiExternalLink className="w-4 h-4" />
                  <span>Start Your Project</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes fade-in {
          from { 
            opacity: 0; 
            transform: translateY(-8px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>

      {/* Overlay for mobile menu */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={closeAllDropdowns}
        />
      )}
    </>
  );
};

export default Nav;