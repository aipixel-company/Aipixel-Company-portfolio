import React, { useEffect, useRef, useState } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import profilepic from '../assets/profilepic.png';

const CustomerSuccessSlider = () => {
  const sliderRef = useRef(null);
  const keenSliderInstance = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoSlideInterval = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      keenSliderInstance.current = new KeenSlider(sliderRef.current, {
        loop: true,
        slides: {
          origin: 'center',
          perView: 1.25,
          spacing: 24,
        },
        breakpoints: {
          '(min-width: 640px)': {
            slides: {
              origin: 'center',
              perView: 1.5,
              spacing: 24,
            },
          },
          '(min-width: 1024px)': {
            slides: {
              origin: 'auto',
              perView: 1.8,
              spacing: 32,
            },
          },
          '(min-width: 1280px)': {
            slides: {
              origin: 'auto',
              perView: 2.2,
              spacing: 40,
            },
          },
        },
        slideChanged: (slider) => {
          setCurrentSlide(slider.track.details.rel);
        },
      });

      // Start auto-slide
      startAutoSlide();

      return () => {
        if (keenSliderInstance.current) {
          keenSliderInstance.current.destroy();
        }
        if (autoSlideInterval.current) {
          clearInterval(autoSlideInterval.current);
        }
      };
    }
  }, []);

  const startAutoSlide = () => {
    autoSlideInterval.current = setInterval(() => {
      if (keenSliderInstance.current) {
        keenSliderInstance.current.next();
      }
    }, 1000); // 1 second
  };

  const stopAutoSlide = () => {
    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current);
      autoSlideInterval.current = null;
    }
  };

  const handlePrev = () => {
    if (keenSliderInstance.current) {
      keenSliderInstance.current.prev();
      // Restart auto-slide after manual navigation
      stopAutoSlide();
      startAutoSlide();
    }
  };

  const handleNext = () => {
    if (keenSliderInstance.current) {
      keenSliderInstance.current.next();
      // Restart auto-slide after manual navigation
      stopAutoSlide();
      startAutoSlide();
    }
  };

  const handleSlideClick = (index) => {
    if (keenSliderInstance.current) {
      keenSliderInstance.current.moveToIdx(index);
      // Restart auto-slide after manual navigation
      stopAutoSlide();
      startAutoSlide();
    }
  };

  const cardDetails = [
    {
      title: "Mathew",
      content: "I highly recommend your software to anyone looking for a way to create a stunning portfolio. It's the easiest and most affordable way to create a professional portfolio that will help you to stand out from the crowd.",
      author: 'Mathew',
      position: 'Creative Director',
      company: 'Design Studio',
      image: profilepic,
      rating: 5,
      project: 'Portfolio Platform',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: "Badar-al-Sahi",
      content: "We just ask for development! They build the whole product with branding. I'd happily describe them as a reliable service company. Their attention to detail and commitment to quality is exceptional.",
      author: 'Badar-al-Sahi',
      position: 'CEO',
      company: 'Tech Innovations',
      image: profilepic,
      rating: 5,
      project: 'Brand Development',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: "Horizon Trading",
      content: "When looking for a strategic IT-partner for the development of a corporate ERP solution, we chose Ai-Pixal. The company proved itself a reliable provider of IT services with exceptional technical expertise.",
      author: 'Sarah Johnson',
      position: 'CTO',
      company: 'Horizon Trading',
      image: profilepic,
      rating: 5,
      project: 'ERP System',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: "Robsoreson",
      content: "Your software is a must-have for anyone who wants to create a DASHBOARD. It's easy to use, affordable, and has all the features you need to make your portfolio stand out from the crowd. Highly recommended!",
      author: 'Robert Sorenson',
      position: 'Product Manager',
      company: 'Data Insights Inc',
      image: profilepic,
      rating: 5,
      project: 'Analytics Dashboard',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: "Muhanad",
      content: "Ai-Pixal was chosen to replace our previous development team and to work on relaunching our freight forwarding logistics web-service after careful research and several conversations. Outstanding results!",
      author: 'Muhanad Ali',
      position: 'Operations Director',
      company: 'Logistics Pro',
      image: profilepic,
      rating: 5,
      project: 'Logistics Platform',
      gradient: 'from-indigo-500 to-purple-500'
    },
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="relative py-10 lg:py-14 bg-[#070508] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-900/10 rounded-full mix-blend-screen filter blur-xl opacity-40 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-900/10 rounded-full mix-blend-screen filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-900/10 rounded-full mix-blend-screen filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3567FF]/10 text-[#3567FF] text-sm font-semibold mb-6 border border-[#3567FF]/20">
            <span className="w-2 h-2 bg-[#61CE70] rounded-full animate-pulse"></span>
            Client Success Stories
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our <span className="gradient-text-accent">Clients Say</span>
          </h2>
          
          <p className="text-xl text-[#8791AD] max-w-3xl mx-auto leading-relaxed">
            Discover why businesses trust AI Pixal for their digital transformation journey. 
            Here's what our satisfied clients have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:items-start">
          {/* Stats & Controls Sidebar */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <div className="bg-[#1E1D28] rounded-2xl p-6 border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-4">Client Love</h3>
              
              <div className="space-y-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-[#3567FF]">95%</div>
                  <div className="text-[#8791AD] text-sm">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#b1ea109]">50+</div>
                  <div className="text-[#8791AD] text-sm">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#61CE70]">4.8</div>
                  <div className="text-[#8791AD] text-sm">Average Rating</div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex flex-row gap-4 justify-center lg:justify-start">
                <button
                  aria-label="Previous slide"
                  onClick={handlePrev}
                  className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-[#070508] text-white hover:bg-white/5 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  aria-label="Next slide"
                  onClick={handleNext}
                  className="flex items-center justify-center w-12 h-12 rounded-full border border-[#3567FF]/20 bg-[#3567FF]/10 text-[#3567FF] hover:bg-[#3567FF]/20 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Slide Indicator */}
              <div className="hidden lg:flex items-center justify-center gap-2 mt-8">
                {cardDetails.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleSlideClick(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-[#3567FF] w-6' : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Slider Section */}
          <div className="lg:col-span-3">
            <div 
              ref={sliderRef} 
              className="keen-slider pb-12"
              onMouseEnter={stopAutoSlide} // Pause on hover
              onMouseLeave={startAutoSlide} // Resume when not hovering
            >
              {cardDetails.map((card, index) => (
                <div key={index} className="keen-slider__slide">
                  <div className="group relative h-full bg-[#1E1D28]/40 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/5 hover:border-[#3567FF]/30">
                    {/* Gradient Accent */}
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${card.gradient} rounded-t-2xl`} />
                    
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 opacity-5">
                      <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                      </svg>
                    </div>

                    <div className="relative z-10">
                      {/* Rating */}
                      <div className="mb-4">
                        <StarRating rating={card.rating} />
                      </div>

                      {/* Content */}
                      <p className="text-lg text-[#8791AD] leading-relaxed mb-6 line-clamp-5">
                        "{card.content}"
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={card.image}
                            alt={`${card.author}'s picture`}
                            className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-lg"
                          />
                          <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r ${card.gradient} border-2 border-white`} />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-bold text-white text-lg">{card.author}</h4>
                            <span className="text-[#3567FF]">•</span>
                            <span className="text-sm text-[#8791AD]">{card.position}</span>
                          </div>
                          <p className="text-[#8791AD] text-sm">{card.company}</p>
                          <p className="text-[#3567FF] text-sm font-semibold">{card.project}</p>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1E1D28] border border-white/10 text-white hover:bg-white/5 transition-all duration-300 shadow-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={handleNext}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1E1D28] border border-[#3567FF]/20 text-[#3567FF] hover:bg-[#3567FF]/10 transition-all duration-300 shadow-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default CustomerSuccessSlider;