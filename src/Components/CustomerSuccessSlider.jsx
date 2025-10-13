import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import profilepic from "../assets/profilepic.png";

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
          perView: 3,
          spacing: 24,
        },
        breakpoints: {
          "(max-width: 1024px)": {
            slides: { perView: 2, spacing: 20 },
          },
          "(max-width: 640px)": {
            slides: { perView: 1.2, spacing: 16 },
          },
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

      return () => {
        if (keenSliderInstance.current) {
          keenSliderInstance.current.destroy();
        }
      };
    }
  }, []);

  const cardDetails = [
    {
      title: "Mathew",
      content:
        "I highly recommend your software to anyone looking for a stunning portfolio. It's the easiest and most affordable way to stand out from the crowd.",
      author: "Mathew",
      image: profilepic,
    },
    {
      title: "Badar-al-Sahi",
      content:
        "We asked just for development! They built the whole product with branding. I'd happily describe them as a reliable service company.",
      author: "Badar-al-Sahi",
      image: profilepic,
    },
    {
      title: "Horizon Trading",
      content:
        "When looking for a strategic IT partner for ERP, we chose Ai-Pixel. They proved themselves a reliable provider of IT services.",
      author: "Horizon Trading",
      image: profilepic,
    },
    {
      title: "Robsoreson",
      content:
        "Your software is a must-have for anyone who wants to create a dashboard. Easy to use, affordable, and packed with features.",
      author: "Robsoreson",
      image: profilepic,
    },
    {
      title: "Muhanad",
      content:
        "Ai-Pixel replaced our previous team and relaunched our logistics platform with professionalism and speed.",
      author: "Muhanad",
      image: profilepic,
    },
  ];

  return (
    <section className="bg-gradient-to-r from-white to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Trusted by Our Customers
          </h2>
          <p className="mt-4 text-gray-600">
            See what our clients say about their experience with us
          </p>
        </div>

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider">
          {cardDetails.map((card, index) => (
            <div key={index} className="keen-slider__slide">
              <blockquote className="flex h-full flex-col justify-between bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8">
                <div className="flex items-start space-x-4">
                  <img
                    src={card.image}
                    alt={card.author}
                    className="h-12 w-12 rounded-full object-cover shadow"
                  />
                  <div>
                    <p className="text-lg font-semibold text-rose-600">
                      {card.title}
                    </p>
                    <p className="mt-2 text-gray-700 leading-relaxed text-sm md:text-base">
                      {card.content}
                    </p>
                  </div>
                </div>
                <footer className="mt-4 text-sm font-medium text-gray-500">
                  — {card.author}
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerSuccessSlider;
