import React, { useEffect, useRef } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import profilepic from '../assets/profilepic.png';

const CustomerSuccessSlider = () => {
  const sliderRef = useRef(null);
  const keenSliderInstance = useRef(null);
  const autoSlideInterval = useRef(null); // reference for auto-slide interval

  // Auto slide function
  const startAutoSlide = () => {
    if (keenSliderInstance.current) {
      autoSlideInterval.current = setInterval(() => {
        keenSliderInstance.current.next();
      }, 4000); // slides every 4 seconds
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      keenSliderInstance.current = new KeenSlider(sliderRef.current, {
        loop: true,
        renderMode: "performance",
        drag: false, // prevent manual dragging for smooth auto motion
        slides: {
          origin: 'center',
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          '(min-width: 1024px)': {
            slides: {
              origin: 'auto',
              perView: 1.5,
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
      });

      // Start auto-slide
      startAutoSlide();

      // Cleanup
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

  const handlePrev = () => {
    if (keenSliderInstance.current) {
      keenSliderInstance.current.prev();
    }
  };

  const handleNext = () => {
    if (keenSliderInstance.current) {
      keenSliderInstance.current.next();
    }
  };

  const cardDetails = [
    {
      title: "Mathew",
      content:
        "I highly recommend your software to anyone looking for a way to create a stunning portfolio. It's the easiest and most affordable way to create a professional portfolio that will help you stand out from the crowd.",
      author: 'Mathew',
      image: profilepic
    },
    {
      title: "Badar-al-Sahi",
      content:
        "We just ask for development! They build the whole product with branding. I'd happily describe them as a reliable service company.",
      author: 'Badar-al-Sahi',
      image: profilepic
    },
    {
      title: "Horizon Trading",
      content:
        "When looking for a strategic IT-partner for ERP solution development, we chose Ai-Pixel. The company proved itself reliable and efficient.",
      author: 'Horizon Trading',
      image: profilepic
    },
    {
      title: "Robsoreson",
      content:
        "Your software is a must-have for anyone who wants to create a dashboard. It's easy to use, affordable, and powerful.",
      author: 'Robsoreson',
      image: profilepic
    },
    {
      title: "Muhanad",
      content:
        "Ai-Pixel was chosen to replace our previous team and relaunch our logistics web-service after careful research and conversations.",
      author: 'Muhanad',
      image: profilepic
    },
  ];

  return (
    <section>
      <div className="mx-auto px-4 sm:px-4 lg:me-0 lg:py-8 overflow-hidden lg:pe-0 lg:ps-8 xl:py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center ltr:sm:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Read trusted reviews from our customers
            </h2>

            <div className="hidden lg:mt-8 lg:flex justify-center lg:gap-4">
              <button
                aria-label="Previous slide"
                onClick={handlePrev}
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white hover:shadow-xl"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="w-5 h-5">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>

              <button
                aria-label="Next slide"
                onClick={handleNext}
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white hover:shadow-xl"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="w-5 h-5">
                  <path d="M9 6l6 6-6 6"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <div ref={sliderRef} className="keen-slider">
              {cardDetails.map((card, index) => (
                <div key={index} className="keen-slider__slide">
                  <blockquote className="flex h-full flex-col justify-between bg-gradient-to-r from-white to-blue-100 p-6 shadow-sm sm:p-8 lg:p-12 rounded-2xl">
                    <div className="flex items-start">
                      <img
                        src={card.image}
                        alt={`${card.author}'s picture`}
                        className="h-10 rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <div className="mt-4">
                          <p className="text-2xl font-bold text-rose-600 sm:text-3xl">{card.title}</p>
                          <p className="mt-4 leading-relaxed text-gray-700">{card.content}</p>
                        </div>
                      </div>
                    </div>
                    <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                      &mdash; {card.author}
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSuccessSlider;
