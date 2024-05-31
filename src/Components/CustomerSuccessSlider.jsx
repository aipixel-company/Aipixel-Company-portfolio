import React, { useEffect, useRef } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';

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

  // Array of card details
  const cardDetails = [
    {
      title: "Mathew",
      content:
        "I highly recommend your software to anyone looking for a way to create a stunning portfolio. It's the easiest and most affordable way to create a professional portfolio that will help you to stand out from the crowd.",
      author: 'Mathew',
    },
    {
      title: "Jhon",
      content:
        "we just ask for development ! they build the whole product with branding I,d happily describe them A reliable service company",
      author: 'Jhon',
    },
    {
      title: "David",
      content:
        "Your software is a must-have for anyone who wants to create a  DASHBOARD. It's easy to use, affordable, and has all the features you need to make your portfolio stand out from the crowd.",
      author: 'David',
    },
    
   
  ];

  return (
    <section className="">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
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
                  className=" size-8 "
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
                  className="size-8 "
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
                    <div>
                      <div className="flex gap-0.5 text-green-500">
                        {[...Array(5)].map((_, starIndex) => (
                          <svg
                            key={starIndex}
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                          </svg>
                        ))}
                      </div>
                      <div className="mt-4">
                        <p className="text-2xl font-bold text-rose-600 sm:text-3xl">{card.title}</p>
                        <p className="mt-4 leading-relaxed text-gray-700">{card.content}</p>
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

