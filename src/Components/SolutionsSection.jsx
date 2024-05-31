import React from "react";
import { GoDotFill } from "react-icons/go";
import { FaAngleRight } from "react-icons/fa6";


const problems = [
  {
    title: "Build your perfect development team",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequatur omnis, minus deserunt aspernatur aliquid similique adipisci voluptate debitis natus quasi, repellat eius obcaecati fugiat blanditiis, aperiam aut eveniet quaerat vitae doloribus atque ad. A dolor sapiente tempore harum enim, numquam mollitia eius rem!",
  },
  {
    title: "Adopt digital transformations",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequatur omnis, minus deserunt aspernatur aliquid similique adipisci voluptate debitis natus quasi, repellat eius obcaecati fugiat blanditiis, aperiam aut eveniet quaerat vitae doloribus atque ad. A dolor sapiente tempore harum enim, numquam mollitia eius rem!",
  },
  {
    title: "Unify your enterprise's digital ecosystem",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequatur omnis, minus deserunt aspernatur aliquid similique adipisci voluptate debitis natus quasi, repellat eius obcaecati fugiat blanditiis, aperiam aut eveniet quaerat vitae doloribus atque ad. A dolor sapiente tempore harum enim, numquam mollitia eius rem!",
  },
];

export default function SolutionsSection() {
  return (
    <div className="w-full h-[80vh]">
      <h1 className="text-center text-4xl font-body pt-5 mt-5">
        Problems We'll Help You Solve
      </h1>
      <div className="flex gap-3 p-4 mt-6">
        {problems.map((problem, index) => (
          <div key={index} className="p-3 border rounded-lg">
            <div className="flex flex-row items-center">
              <GoDotFill />
              <h1 className="font-body font-medium text-lg ml-2">
                {problem.title}
              </h1>
            </div>
            <p className="mt-4 text-gray-600">{problem.description}</p>
          </div>
        ))}
      </div>
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 py-10">
        <p className="text-3xl text-center text-white">
          Ready to realise your product vision?
          <a
            href="/contact-us"
            className="text-xl text-white ml-2 inline-flex items-center"
          >
            partner with us <FaAngleRight className="ml-1" />
          </a>
        </p>
      </div>
    </div>
  );
}
