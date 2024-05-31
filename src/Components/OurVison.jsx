import React from "react";

const OurVision = () => {
  const slides = [
    {
      image: "https://pagedone.io/asset/uploads/1696244059.png",
    },
  ];

  return (
    <>
      <section className=" ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between gap-8">
            <div className="w-full flex items-center justify-center flex-col lg:w-2/5">
              <div className="block lg:text-left text-center">
                <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-5">
                  Our <span className="text-indigo-600">Vision</span>
                </h2>
                <p className="text-gray-500 mb-10 max-lg:max-w-xl max-lg:mx-auto">
                  Our commitment to delivering tangible value for our customers
                  sets AI-PIXEL apart. Our meticulous attention to detail and
                  quality is unparalleled in the industry. We’re more than just
                  a service provider; we prioritize our customers' success as if
                  it were our own. By sharing development risks, we empower them
                  to confidently embrace new technologies.
                </p>
              </div>
            </div>
            <div className="lg:w-3/5 py-3 rounded-lg">
              <div className="max-w-xl mx-auto">
                <img
                  src={slides[0].image}
                  alt="Blog Slide"
                  className="rounded-2xl w-full mb-9 h-[20rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurVision;
