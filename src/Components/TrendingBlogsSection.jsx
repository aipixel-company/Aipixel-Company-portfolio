import React from "react";

const blogPosts = [
  {
    id: 1,
    date: "12 April 2021",
    title: "The Decorated Ways",
    excerpt: "Dive into minimalism",
    image: "https://i.ibb.co/DYxtCJq/img-1.png",
  },
  {
    id: 2,
    date: "12 April 2021",
    title: "The Decorated Ways",
    excerpt: "Dive into minimalism",
    image: "https://i.ibb.co/3C5HvxC/img-2.png",
  },
  {
    id: 3,
    date: "12 April 2021",
    title: "The Decorated Ways",
    excerpt: "Dive into minimalism",
    image: "https://i.ibb.co/Ms4qyXp/img-3.png",
  },
  {
    id: 4,
    date: "12 April 2021",
    title: "The Decorated Ways",
    excerpt: "Dive into minimalism",
    image: "https://i.ibb.co/6Wfjf2w/img-4.png",
  },
  {
    id: 5,
    date: "12 April 2021",
    title: "The Decorated Ways",
    excerpt: "Dive into minimalism",
    image: "https://i.ibb.co/3yvZBpm/img-5.png",
  },
  {
    id: 6,
    date: "12 April 2021",
    title: "The Decorated Ways",
    excerpt: "Dive into minimalism",
    image: "https://i.ibb.co/gDdnJb5/img-6.png",
  },
];

export default function TrendingBlogsSection() {
  return (
    <div className="flex justify-center items-center bg-gradient-to-t from-gray-200 to-indigo-600">
      <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
        <div role="main" className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-semibold leading-9 text-center text-gray-50">
            This Week Blogs
          </h1>
          <p className="text-base leading-normal text-center text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
            If you're looking for random paragraphs, you've come to the right
            place. When a random word or a random sentence isn't quite enough
          </p>
        </div>
        <div className="lg:flex items-stretch md:mt-12 mt-8">
          <div className="lg:w-1/2">
            <div className="sm:flex items-center justify-between  gap-x-6">
              {blogPosts.slice(0, 2).map((post) => (
                <div key={post.id} className="sm:w-1/2 relative">
                  <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                      {post.date}
                    </p>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">
                        {post.title}
                      </h2>
                      <p className="text-base leading-4 text-white mt-2">
                        {post.excerpt}
                      </p>
                      {/* <a
                        href="javascript:void(0)"
                        className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a> */}
                    </div>
                  </div>
                  <img src={post.image} className="w-full" alt={post.title} />
                </div>
              ))}
            </div>
            <div className="relative">
              <div>
                <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                  {blogPosts[2].date}
                </p>
                <div className="absolute bottom-0 left-0 md:p-10 p-6">
                  <h2 className="text-xl font-semibold 5 text-white">
                    {blogPosts[2].title}
                  </h2>
                  <p className="text-base leading-4 text-white mt-2">
                    {blogPosts[2].excerpt}
                  </p>
                  {/* <a
                    href="javascript:void(0)"
                    className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                  >
                    <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      className="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a> */}
                </div>
              </div>
              <img
                src={blogPosts[2].image}
                alt={blogPosts[2].title}
                className="w-full mt-8 md:mt-6 hidden sm:block"
              />
              <img
                className="w-full mt-4 sm:hidden"
                src="https://i.ibb.co/6XYbN7f/Rectangle-29.png"
                alt="sitting place"
              />
            </div>
          </div>
          <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
            <div className="relative">
              <div>
                <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                  {blogPosts[3].date}
                </p>
                <div className="absolute bottom-0 left-0 md:p-10 p-6">
                  <h2 className="text-xl font-semibold 5 text-white">
                    {blogPosts[3].title}
                  </h2>
                  <p className="text-base leading-4 text-white mt-2">
                    {blogPosts[3].excerpt}
                  </p>
                  {/* <a
                    href="javascript:void(0)"
                    className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                  >
                    <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      className="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a> */}
                </div>
              </div>
              <img
                src={blogPosts[3].image}
                alt={blogPosts[3].title}
                className="w-full sm:block hidden"
              />
              <img
                className="w-full sm:hidden"
                src="https://i.ibb.co/dpXStJk/Rectangle-29.png"
                alt="sitting place"
              />
            </div>
            <div className="sm:flex items-center justify-between  gap-x-6 md:mt-6 mt-4">
              {blogPosts.slice(4).map((post) => (
                <div key={post.id} className="relative w-full mb-4 sm:mb-0">
                  <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                      {post.date}
                    </p>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">
                        {post.title}
                      </h2>
                      <p className="text-base leading-4 text-white mt-2">
                        {post.excerpt}
                      </p>
                      {/* <a
                        href="javascript:void(0)"
                        className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a> */}
                    </div>
                  </div>
                  <img src={post.image} className="w-full" alt={post.title} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
