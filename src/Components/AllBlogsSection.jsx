import React from "react";

const blogPosts = [
  {
    id: 1,
    date: "February 19, 2021",
    title: "Noster tincidunt reprimique ad pro",
    excerpt:
      "Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.",
    image:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsb2d8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    date: "January 21, 2021",
    title: "In usu laoreet repudiare legendos",
    excerpt:
      "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.",
    image:
      "https://plus.unsplash.com/premium_photo-1669904022334-e40da006a0a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    date: "January 22, 2021",
    title: "In usu laoreet repudiare legendos",
    excerpt:
      "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.",
    image:
      "https://images.unsplash.com/photo-1526566762798-8fac9c07aa98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsb2clMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
  },
  {
    id: 4,
    date: "January 23, 2021",
    title: "In usu laoreet repudiare legendos",
    excerpt:
      "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.",
    image:
      "https://images.unsplash.com/photo-1501959181532-7d2a3c064642?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGJsb2clMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
  },
  {
    id: 5,
    date: "January 24, 2021",
    title: "In usu laoreet repudiare legendos",
    excerpt:
      "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGJsb2clMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
  },
  {
    id: 6,
    date: "January 25, 2021",
    title: "In usu laoreet repudiare legendos",
    excerpt:
      "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 7,
    date: "January 26, 2021",
    title: "In usu laoreet repudiare legendos",
    excerpt:
      "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29jaWFsfGVufDB8fDB8fHww",
  },
];

export default function AllBlogsSection() {
  return (
    <section className=" text-gray-100">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        {blogPosts.slice(0, 1).map((post) => (
          <a
            key={post.id}
            rel="noopener noreferrer"
            href="#"
            className={`block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-white text-black`}
          >
            <img
              src={post.image}
              alt={post.title}
              className="object-cover w-full h-64  sm:h-96 lg:col-span-7 bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                {post.title}
              </h3>
              <span className="text-xs text-gray-400">{post.date}</span>
              <p>{post.excerpt}</p>
            </div>
          </a>
        ))}
        <div className="grid justify-center  sm:grid-cols-3">
          {blogPosts.slice(1).map((post) => (
            <a
              key={post.id}
              rel="noopener noreferrer"
              href="#"
              className={`max-w-sm mx-auto group hover:no-underline focus:no-underline ${
                post.id % 2 === 0 ? "bg-blue-900" : "bg-white text-black"
              } ${post.id > 3 ? "hidden sm:block" : ""}`}
            >
              <img
                role="presentation"
                className="object-cover w-full  h-44 bg-gray-500"
                src={post.image}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  {post.title}
                </h3>
                <span className="text-xs text-gray-400">{post.date}</span>
                <p>{post.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="px-6 py-3 text-sm rounded-md hover:bg-gray-700 bg-gray-900 text-white"
          >
            Load more posts...
          </button>
        </div>
      </div>
    </section>
  );
}
