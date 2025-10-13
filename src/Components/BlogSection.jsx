import React, { useState } from "react";

const BlogSection = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    {
      image: "https://pagedone.io/asset/uploads/1696244059.png",
      title: "Clever ways to invest in product to organize your portfolio",
      description:
        "Discover smart investment strategies to streamline and organize your portfolio. Explore innovative approaches to optimize your...",
    },
    {
      image:
        "https://images.unsplash.com/photo-1715744005019-57c97a5d29e9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHxzNXx8fGVufDB8fHx8fA%3D%3D",
      title: "How to grow your profit through systematic investment",
      description:
        "Unlock the power of systematic investment with us and watch your profits soar. Our expert team will guide you on the path to financial...",
    },
    {
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Maximizing your investments with expert advice",
      description:
        "Learn how to maximize your investment returns with insights from leading financial experts. Gain the knowledge you need to succeed...",
    },
    {
      image:
        "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Investment trends to watch in 2024",
      description:
        "Stay ahead of the curve with our analysis of the top investment trends to watch in 2024. Discover where the smart money is headed...",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Expert tips for diversifying your portfolio",
      description:
        "Diversification is key to a successful portfolio. Learn from the experts how to balance risk and reward by spreading your investments...",
    },
  ];

  const handlePrevSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className=" py-9">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between gap-8">
          <div className="w-full flex items-center justify-center flex-col lg:w-2/5">
            <div className="block lg:text-left text-center">
              <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-5">
                <span className="text-indigo-600">Expert </span>insights
              </h2>
              <p className="text-gray-500 mb-10 max-lg:max-w-xl max-lg:mx-auto">
                Welcome to our blog section, where knowledge meets inspiration.
                Explore insightful articles, expert tips, and the latest trends
                in our field.
              </p>
              {/* <a
                href="javascript:;"
                className="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 lg:mx-0 mx-auto flex justify-center text-gray-900 font-semibold transition-all duration-300 hover:bg-gray-100"
              >
                View All
              </a> */}
            </div>
            <div className="flex items-center lg:justify-start justify-center mt-8 gap-6 mb-4">
              <button
                className="group flex justify-center items-center border border-solid border-indigo-600 w-11 h-11 transition-all duration-500 rounded-full hover:bg-indigo-600"
                onClick={handlePrevSlide}
              >
                <svg
                  className="h-6 w-6 text-indigo-600 group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                className="group flex justify-center items-center border border-solid border-indigo-600 w-11 h-11 transition-all duration-500 rounded-full hover:bg-indigo-600"
                onClick={handleNextSlide}
              >
                <svg
                  className="h-6 w-6 text-indigo-600 group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="lg:w-3/5  rounded-lg">
            <div className="max-w-xl mx-auto p-3">
              <img
                src={slides[slideIndex].image}
                srcSet={`${slides[slideIndex].image} 1x, ${slides[slideIndex].image} 2x`}
                loading="lazy"
                alt="Blog Slide"
                className=" w-full mb-6 sm:h-[20rem] rounded-2xl"
              />
              <h3 className="text-xl text-gray-900 font-medium leading-8 mb-4 group-hover:text-indigo-600">
                {slides[slideIndex].title}
              </h3>
              <p className="text-gray-500 leading-6 transition-all duration-500 mb-8">
                {slides[slideIndex].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
