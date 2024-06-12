import React, { useEffect, useRef } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import profilepic from '../assets/profilepic.png'

const CustomerSuccessSlider = () => {
  const sliderRef = useRef(null);
  const keenSliderInstance = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      keenSliderInstance.current = new KeenSlider(sliderRef.current, {
        loop: true,
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
        },
      });

      return () => {
        if (keenSliderInstance.current) {
          keenSliderInstance.current.destroy();
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
        "I highly recommend your software to anyone looking for a way to create a stunning portfolio. It's the easiest and most affordable way to create a professional portfolio that will help you to stand out from the crowd.",
      author: 'Mathew',
      image: profilepic // Replace with actual image URL
    },
    {
      title: "Badar-al-Sahi",
      content:
        "We just ask for development! They build the whole product with branding. I'd happily describe them as a reliable service company.",
      author: 'Badar-al-Sahi',
      image: profilepic // Replace with actual image URL
    },
    {
      title: "Horizon Trading",
      content:
        "When looking for a strategic IT-partner for the development of a corporate ERP solution, we chose Ai-Pixel. The company proved itself a reliable provider of IT services.",
      author: 'Horizon Trading',
      image: profilepic // Replace with actual image URL
    },
    {
      title: "Robsoreson",
      content:
        "Your software is a must-have for anyone who wants to create a DASHBOARD. It's easy to use, affordable, and has all the features you need to make your portfolio stand out from the crowd.",
      author: 'Robsoreson',
      image: profilepic // Replace with actual image URL
    },
    {
      title: "Muhanad",
      content:
        "Ai-Pixel was chosen to replace our previous development team and to work on relaunching our freight forwarding logistics web-service after careful research and several conversations.",
      author: 'Robsoreson',
      image: profilepic // Replace with actual image URL
    },
  ];

  return (
    <section className="">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center ltr:sm:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Read trusted reviews from our customers
            </h2>
           
            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                aria-label="Previous slide"
                onClick={handlePrev}
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:shadow-xl "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className=" size-5 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                    strokeWidth="2"
                  />
                </svg>
              </button>
              <button
                aria-label="Next slide"
                onClick={handleNext}
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:shadow-xl"
              >
                <svg
                  className="size-5 "
                  fill="none"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <div ref={sliderRef} className="keen-slider">
              {cardDetails.map((card, index) => (
                <div key={index} className="keen-slider__slide">
                  <blockquote className="flex h-full flex-col justify-between bg-gradient-to-r from-white to-blue-100 p-6 shadow-sm sm:p-8 lg:p-12">
                    <div className="flex items-start">
                      <img
                        src={card.image}
                        alt={`${card.author}'s picture`}
                        className=" h-10  rounded-full object-cover"
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
