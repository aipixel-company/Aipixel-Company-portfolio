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
        renderMode: "performance",
        drag: false, // prevent dragging to keep it smooth
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
        slideChanged: (slider) => {
          setCurrentSlide(slider.track.details.rel);
        },
        created(slider) {
          slider.moveToIdx(5, true, {
            duration: 0, // start instantly
          });

          slider.on("created", () => {
            slider.moveToIdx(slider.track.details.abs + 1, true, {
              duration: 6000, // smooth continuous motion
              easing: (t) => t, // linear easing (no stop/pause)
            });
          });

          slider.on("animationEnded", (s) => {
            s.moveToIdx(s.track.details.abs + 1, true, {
              duration: 6000,
              easing: (t) => t,
            });
          });
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
    <section className="">
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
                  <blockquote className="flex h-full  flex-col justify-between bg-gradient-to-r from-white to-blue-100 p-6 shadow-sm sm:p-8 lg:p-12">
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