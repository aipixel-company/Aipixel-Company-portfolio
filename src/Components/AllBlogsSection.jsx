import React from "react";
import { Link } from "react-router-dom";
import blog from "../assets/blog.png"
import blog1 from "../assets/blog1.jpg"
import blog2 from "../assets/blog2.png"


const cardsData = [
  {
    id: 1,
    imgSrc: blog2,
   
    title: "The Future of Quantum Computing in Software Development",
    description: "Quantum computing is an emerging field with the potential to revolutionize software development by solving complex problems that are currently infeasible for classical computers.",
  },
  {
    id: 2,
    imgSrc: blog1,
   
    title: "The Role of DevOps in Modern Software Development",
    description: "DevOps has emerged as a critical practice in modern software development, bridging the gap between development and operations teams to improve collaboration, efficiency, and delivery speed.",
  },
  {
    id: 3,
    imgSrc: blog,
   
    title: "The Impact of Cloud Computing on Software Development",
    description: "Cloud computing has revolutionized the software development industry, offering unprecedented scalability, flexibility, and cost-efficiency. ",
  },
];

const Card = ({ imgSrc, category, title, description, id }) => (
  <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
    <img src={imgSrc} alt="Card img" className=" w-full h-[12rem] rounded-t-xl" />
    <div className="flex flex-grow">
      <div className="triangle"></div>
      <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
        <div>
          <p  className="inline-block mb-4 text-base font-bold capitalize text-black">
            {title}
          </p>
          
          <p className="mb-4 text-black text-sm">{description}</p>
        </div>
        <div>
          <Link to={`/blog/${id}`} className="inline-block pb-1 mt-2 text-sm font-black text-gray-800 uppercase border-b border-transparent hover:border-gray-800">
            Read More 
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default function AllBlogsSection() {
  return (
    <div className="flex justify-center items-center bg-gradient-to-t from-gray-200 to-indigo-600">
      
        <section className="text-gray-100">
         
            <div className="flex justify-center ">
              <section className="flex flex-col justify-center  xl:min-h-screen px-4 pt-[3rem] xl:pt-[6rem] mx-auto sm:px-6">
                <div className="flex flex-wrap items-center justify-center mb-8">
                  <h2 className="mr-10 text-4xl font-semibold md:text-5xl">
                    Blogs
                  </h2>
                 
                </div>

                <div className="flex flex-wrap -mx-4">
                  {cardsData.map((card, index) => (
                    <Card
                      key={index}
                      id={card.id}
                      imgSrc={card.imgSrc}
                      title={card.title}
                      description={card.description}
                    />
                  ))}
                </div>
              </section>
            </div>
          
        </section>
      
    </div>
  );
}
