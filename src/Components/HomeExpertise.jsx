import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";

const expertiseData = [
  {
    id: 1,
    field: "Web Development",
    name: "Web Development",
    description: "Building robust and scalable software solutions.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    field: "UI/UX Design",
    name: "User Interface Design",
    description: "Creating intuitive and engaging user interfaces.",
    image:
      "https://images.unsplash.com/photo-1690228254548-31ef53e40cd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVpJTIwdXhiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
  },
  
  {
    id: 3,
    field: "Artificial Intelligence",
    name: "AI Solutions",
    description: "Implementing AI to solve complex problems.",
    image:
      "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    field: "DevOps",
    name: "DevOps",
    description: "Conducting research to enhance user experience.",
    image:
      "https://t3.ftcdn.net/jpg/02/82/37/86/240_F_282378637_7DL904AvZkZovk3RqLdLwNe21RNcjpzg.jpg",
  },
  {
    id: 5,
    field: "Mobile App Development",
    name: "Mobile App Development",
    description: "Creating prototypes to test and validate ideas.",
    image:
      "https://t3.ftcdn.net/jpg/07/54/89/84/240_F_754898470_UkeNJNbXfoYRhWUXMBytyYF2rkuzKwTZ.jpg",
  },
  {
    id: 6,
    field: "BlockChain",
    name: "BlockChain",
    description: "Designing visually appealing digital products.",
    image:
      "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvY2tjaGFpbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 7,
    field: "Quality Assurance",
    name: "Quality Assurance",
    description: "Designing interactive elements for user engagement.",
    image:
      "https://t3.ftcdn.net/jpg/03/44/80/42/240_F_344804298_22au4y0IUNj7yyv3mLyrxAeX9954M5MF.jpg",
  },
  {
    id: 8,
    field: "Software Testing",
    name: "Software Testing",
    description: "Designing interactive elements for user engagement.",
    image:
      "https://images.unsplash.com/photo-1518349619113-03114f06ac3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29mdHdhcmUlMjB0ZXN0aW5nfGVufDB8fDB8fHww",
  },
  {
    id: 9,
    field: "WordPress",
    name: "WordPress",
    description: "Designing interactive elements for user engagement.",
    image:
      "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29yZHByZXNzfGVufDB8fDB8fHww",
  },
  {
    id: 10,
    field: "Fintech",
    name: "Fintech",
    description: "Designing interactive elements for user engagement.",
    image:
      "https://plus.unsplash.com/premium_photo-1683141154082-324d296f3c66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmludGVjaHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 11,
    field: "Application maintenance ",
    name: "Application maintenance ",
    description: "Designing interactive elements for user engagement.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGljYXRpb24lMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww",
  },
  {
    id: 12,
    field: "Software Development ",
    name: "Software Development ",
    description: "Designing interactive elements for user engagement.",
    image:
      "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 13,
    field: "Project Management",
    name: "Project Management",
    description: "Designing interactive elements for user engagement.",
    image:
      "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvamVjdCUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 14,
    field: "AWS",
    name: "AWS",
    description: "Designing interactive elements for user engagement.",
    image:
      "https://t4.ftcdn.net/jpg/05/42/29/57/240_F_542295701_fZVdsAuV5OBjQ2BUDhjOTBR32JThLRa6.jpg",
  },
];

export default function HomeExpertise() {
  const containerRef = useRef(null);

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft - 325,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + 325,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center pt-16 pb-20">
        <h1 className="text-4xl font-semibold mb-3 capitalize">
          Achieve Your Goals with Us!
        </h1>
      </div>

      <div className="flex flex-row w-full h-[70vh] overflow-hidden">
        {" "}
        <div className="w-full flex flex-col h-[70vh] mx-5">
          <div
            className="flex overflow-x-auto space-x-1 h-[60vh] scrollbar"
            style={{ maxWidth: "calc(100% - 100px)" }}
            ref={containerRef}
          >
            {expertiseData.map((expertise) => (
              <div
                key={expertise.id}
                className="flex-shrink-0 overflow-y-hidden w-80 border-2 bg-white rounded-md p-2"
                style={{
                  backgroundImage: `url(${expertise.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="content-start flex bg-opacity-75 bg-gray-500 p-2 rounded-t-md">
                  <GoDotFill className="text-black" />
                  <h2 className="text-sm font-light text-black ml-2">
                    {expertise.field}
                  </h2>
                </div>
                <div className="flex flex-col items-center mt-20 h-full bg-opacity-75 bg-gray-300 p-2 rounded-b-md">
                  <div>
                    <h2 className="text-lg font-semibold mb-2 text-black">
                      {expertise.name}
                    </h2>
                    <p className="text-black">{expertise.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex mt-4 mb-4 justify-center gap-3">
            {/* Left scroll button */}
            <button
              onClick={handleScrollLeft}
              className="mx-2 p-1 text-5xl bg-gray-200 rounded-full hover:bg-gray-300 hover:drop-shadow-2xl"
            >
              <FiChevronLeft />
            </button>
            {/* Right scroll button */}
            <button
              onClick={handleScrollRight}
              className="mx-2 p-1 text-5xl bg-gray-200 rounded-full hover:bg-gray-300 hover:drop-shadow-2xl"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
