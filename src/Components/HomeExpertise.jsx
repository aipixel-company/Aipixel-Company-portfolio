import React, { useRef, useState, useMemo } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const expertiseData = [
  {
    id: 1,
    field: "Web Development",
    name: "Web Development",
    description:
      "Craft exceptional web experiences. AI Pixel specializes in building robust and scalable web applications that not only look stunning but can also handle explosive growth.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    field: "UI/UX Design",
    name: "User Interface Design",
    description:
      "Design that delights. AI Pixel's UI/UX design team creates intuitive and engaging user interfaces that prioritize usability and aesthetics.",
    image:
      "https://images.unsplash.com/photo-1690228254548-31ef53e40cd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVpJTIwdXhiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    field: "Artificial Intelligence",
    name: "AI Solutions",
    description:
      " Unlock the power of AI. AI Pixel leverages cutting-edge AI solutions to tackle complex business challenges. From automating tasks to personalizing experiences. ",
    image:
      "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    field: "DevOps",
    name: "DevOps",
    description:
      " Streamline your development lifecycle. AI Pixel's DevOps experts ensure seamless collaboration between development and operations teams. ",
    image:
      "https://t3.ftcdn.net/jpg/02/82/37/86/240_F_282378637_7DL904AvZkZovk3RqLdLwNe21RNcjpzg.jpg",
  },
  {
    id: 5,
    field: "Mobile App Development",
    name: "Mobile App Development",
    description:
      "Apps that move mountains. AI Pixel helps you bring your mobile app ideas to life. Their team creates high-quality prototypes to validate your concept and ensure a smooth user experience across all devices.",
    image:
      "https://t3.ftcdn.net/jpg/07/54/89/84/240_F_754898470_UkeNJNbXfoYRhWUXMBytyYF2rkuzKwTZ.jpg",
  },
  {
    id: 6,
    field: "BlockChain",
    name: "BlockChain",
    description:
      "Build trust and transparency. AI Pixel brings blockchain expertise to the table, helping you design and develop secure, transparent applications.",
    image:
      "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvY2tjaGFpbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 7,
    field: "Quality Assurance",
    name: "Quality Assurance",
    description:
      " Deliver flawless experiences. AI Pixel's rigorous quality assurance (QA) process ensures your software is bug-free and delivers exceptional performance.",
    image:
      "https://t3.ftcdn.net/jpg/03/44/80/42/240_F_344804298_22au4y0IUNj7yyv3mLyrxAeX9954M5MF.jpg",
  },
  {
    id: 8,
    field: "Software Testing",
    name: "Software Testing",
    description:
      "Guarantee optimal functionality. AI Pixel's comprehensive software testing services leave no stone unturned.",
    image:
      "https://images.unsplash.com/photo-1518349619113-03114f06ac3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29mdHdhcmUlMjB0ZXN0aW5nfGVufDB8fDB8fHww",
  },
  {
    id: 9,
    field: "WordPress",
    name: "WordPress",
    description:
      "Empower your content creation. AI Pixel leverages the power of WordPress to create dynamic and visually appealing websites.",
    image:
      "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29yZHByZXNzfGVufDB8fDB8fHww",
  },
  {
    id: 10,
    field: "Fintech",
    name: "Fintech",
    description:
      "Innovate in the financial landscape. AI Pixel offers specialized expertise in Fintech development.",
    image:
      "https://plus.unsplash.com/premium_photo-1683141154082-324d296f3c66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmludGVjaHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 11,
    field: "Application maintenance ",
    name: "Application maintenance ",
    description:
      "Keep your software running smoothly. AI Pixel provides ongoing application maintenance services to ensure your software remains secure, stable, and up-to-date.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGljYXRpb24lMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww",
  },
  {
    id: 12,
    field: "Software Development ",
    name: "Software Development ",
    description:
      "Designing interactive elements for user engagement is our specialty at AI Pixel.",
    image:
      "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 13,
    field: "Project Management",
    name: "Project Management",
    description:
      " At AI Pixel, we understand the importance of effective project management. Our experienced team ensures that projects are completed on time, within budget and highest Quality",
    image:
      "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvamVjdCUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 14,
    field: "AWS",
    name: "AWS",
    description:
      " Designing interactive elements for user engagement is our specialty at AI Pixel. We leverage the power of AWS to create scalable and reliable cloud solutions",
    image:
      "https://t4.ftcdn.net/jpg/05/42/29/57/240_F_542295701_fZVdsAuV5OBjQ2BUDhjOTBR32JThLRa6.jpg",
  },
  {
    id: 15,
    field: "Data Structures and Algorithms",
    name: "Data Structures & Algorithms",
    description:
      "Understanding how to store and manipulate data efficiently is crucial in today's data-driven world. At AI Pixel, we have expertise in designing and implementing data structures and algorithms",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGRhdGElMjBzdHJ1Y3R1cmVzJTIwYW5kJTIwYWxnb3JpdGhtc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 16,
    field: "Programming Languages",
    name: "Programming Languages",
    description:
      " Learning various languages to create software programs is our bread and butter at AI Pixel. Our team of experienced developers is proficient in a wide range of programming languages",
    image:
      "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 17,
    field: "Cloud Platform Integration",
    name: "Cloud Platform Integration",
    description:
      "Scale with agility. AI Pixel integrates your applications with leading cloud platforms, enabling scalability and flexibility.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fHww",
  },
  {
    id: 18,
    field: "Text Editors",
    name: "Text Editors",
    description:
      "Basic tools for writing and editing text files for programming are essential for developers. At AI Pixel",
    image:
      "https://images.unsplash.com/photo-1512317049220-d3c6fcaf6681?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGV4dCUyMGVkaXRvcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 19,
    field: "Integrated Development Environments",
    name: "IDEs",
    description:
      "Comprehensive tools for writing and debugging code are indispensable for developers. At AI Pixel, we offer access to top-tier IDEs that provide a seamless development experience",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fERldmVsb3BtZW50fGVufDB8fDB8fHww",
  },
  {
    id: 20,
    field: "Databases",
    name: "Databases",
    description:
      "At AI Pixel, we specialize in designing and implementing databases that are efficient, scalable, and secure",
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRhdGFiYXNlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  // {
  //   id: 21,
  //   field: "Operating System",
  //   name: "Operating Systems",
  //   description: "The core software that manages computer resources is crucial for ensuring smooth and reliable operation. At AI Pixel, we have expertise in a variety of operating systems.",
  //   image:
  //     "https://images.unsplash.com/photo-1536395268859-7cf1233a5d55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3BlcmF0aW5nJTIwc3lzdGVtfGVufDB8fDB8fHww",
  // },
  {
    id: 22,
    field: "Networking Basics",
    name: "Networking Basics",
    description:
      "At AI Pixel, we provide comprehensive training in networking basics.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmV0d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 23,
    field: "Basics of Testing",
    name: "Software Testing",
    description:
      "At AI Pixel, we provide thorough training in the basics of software testing, equipping individuals and teams with the knowledge and skills",
    image:
      "https://images.unsplash.com/photo-1600267147646-33cf514b5f3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRlc3Rpbmd8ZW58MHx8MHx8fDA%3D",
  },

  // {
  //   id: 25,
  //   field: "Encryption and Cryptography",
  //   name: "Encryption & Cryptography",
  //   description: " At AI Pixel, we offer expertise in encryption and cryptography, helping businesses safeguard their sensitive information and maintain the trust of their customers.",
  //   image: "https://www.google.com/search?q=encryption+and+cryptography+image",
  // },
  {
    id: 26,
    field: "Software Development Life Cycle",
    name: "SDLC",
    description:
      " At AI Pixel, we follow a rigorous SDLC methodology that ensures the successful delivery of software projects from inception to deployment.",
    image:
      "https://plus.unsplash.com/premium_photo-1714311947210-4e6a3410155d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29mdHdhcmUlMjBkZXZlbG9wbWVudCUyMGxpZmVjeWNsZXxlbnwwfHwwfHx8MA%3D%3D",
  },

  {
    id: 28,
    field: "SEO (Search Engine Optimization)",
    name: "SEO",
    description:
      "At AI Pixel, we offer expertise in SEO strategies and techniques that help businesses increase their online visibility and achieve higher rankings in search engine results pages.",
    image:
      "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VvfGVufDB8fDB8fHww",
  },
];

const questions = [
  {
    id: "development",
    question: "What area of expertise are you looking for?",
    options: [
      "Web Development",
      "UI/UX Design",
      "Artificial Intelligence",
      "DevOps",
      "Mobile App Development",
      "BlockChain",
      "Quality Assurance",
      "Software Testing",
      "WordPress",
      "Fintech",
      "Project Management",
      "AWS",
    ],
  },
];

const QuestionCard = React.memo(
  ({
    question,
    index,
    activeQuestion,
    filters,
    handleFilterChange,
    handleResetFilters,
  }) => (
    <div
      key={question.id}
      className={`w-full transition-transform duration-300 rounded-lg shadow-md p-4 bg-white ${
        index === activeQuestion ? "transform -translate-y-2" : ""
      }`}
      style={{ opacity: index <= activeQuestion ? 1 : 0.5 }}
    >
      <div>
        <h2 className="text-lg font-medium mb-3">{question.question}</h2>
        <div className="flex flex-wrap gap-2">
          {question.options.map((option) => (
            <button
              key={option}
              className={`px-4 py-2 border rounded-full text-sm ${
                filters[question.id] === option
                  ? "bg-blue-500 text-white"
                  : "bg-white hover:bg-blue-100"
              }`}
              onClick={() => handleFilterChange(question.id, option, index)}
              disabled={index > activeQuestion}
            >
              {option}
            </button>
          ))}
        </div>
        <button
          onClick={handleResetFilters}
          className="mt-4 px-2 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Reset Filters
        </button>
      </div>
    </div>
  )
);

const ExpertiseCard = React.memo(({ expertise }) => (
  <div
    key={expertise.id}
    className="relative expertise-card flex-shrink-0 w-80 border-2 bg-white rounded-lg shadow-lg p-2"
  >
    <div className="absolute bottom-0 w-full h-1/2 rounded-lg hidden md:block lg:block">
      <LazyLoadImage
        src={expertise.image}
        alt={expertise.field}
        effect="blur"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
    <div className="relative z-10 expertise-overlay flex flex-col h-full">
      <div className="content-start flex items-center rounded-t-md">
        <GoDotFill className="text-black m-2" />
        <h2 className="text-sm font-light text-black ml-1 p-1">
          {expertise.field}
        </h2>
      </div>
      <div className="flex flex-col items-center h-full bg-opacity-75 p-2 rounded-b-md">
        <div>
          <h2 className="text-lg font-semibold mb-2 text-black">
            {expertise.name}
          </h2>
          <p className="text-black font-light">{expertise.description}</p>
        </div>
      </div>
    </div>
  </div>
));

export default function HomeExpertise() {
  const [filters, setFilters] = useState({
    development: "",
    service: "",
    technology: "",
    state: "",
    need: "",
    requirements: "",
  });

  const [activeQuestion, setActiveQuestion] = useState(0);
  const containerRef = useRef(null);

  const handleFilterChange = (filterType, value, index) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
    setActiveQuestion(index + 1);
  };

  const handleResetFilters = () => {
    setFilters({
      development: "",
      service: "",
      technology: "",
      state: "",
      need: "",
      requirements: "",
    });
    setActiveQuestion(0);
  };

  const handleScrollLeft = () => {
    containerRef.current.scrollBy({ left: -335, behavior: "smooth" });
  };

  const handleScrollRight = () => {
    containerRef.current.scrollBy({ left: 335, behavior: "smooth" });
  };

  const filteredExpertiseData = useMemo(() => {
    return expertiseData.filter((expertise) => {
      const developmentMatch =
        !filters.development || expertise.field === filters.development;
      const serviceMatch =
        !filters.service || expertise.field === filters.service;
      const technologyMatch =
        !filters.technology || expertise.field === filters.technology;
      const stateMatch = !filters.state || expertise.field === filters.state;
      const needMatch = !filters.need || expertise.field === filters.need;
      const requirementsMatch =
        !filters.requirements || expertise.field === filters.requirements;

      return (
        developmentMatch &&
        serviceMatch &&
        technologyMatch &&
        stateMatch &&
        needMatch &&
        requirementsMatch
      );
    });
  }, [filters]);

  return (
    <div className="flex flex-col items-center w-full h-full p-10 bg-gray-50">
      <div className="w-full flex flex-col items-center pt-16 pb-10">
        <h1 className="md:text-3xl lg:text-3xl text-base font-semibold mb-3 capitalize text-center">
          Unleash Your Digital Potential with Cutting-Edge Solutions
        </h1>
        <p className="md:text-base lg:text-base text-sm font-light mb-3 text-center">
          AI Pixel empowers businesses of all sizes with a comprehensive suite
          of services designed to propel them into the future. Here's a closer
          look at how their expertise can transform your digital landscape.
        </p>
      </div>

      <div className="flex flex-row w-full h-full">
        <div className="w-1/3 md:flex lg:flex hidden flex-col items-start ">
          {questions.map((question, index) => (
            <QuestionCard
              key={question.id}
              question={question}
              index={index}
              activeQuestion={activeQuestion}
              filters={filters}
              handleFilterChange={handleFilterChange}
              handleResetFilters={handleResetFilters}
            />
          ))}
        </div>

        <div className="md:w-2/3 lg:w-2/3 overflow-scroll flex flex-col h-full md:pl-10 lg:pl-10 pl-0">
          <div className="flex flex-row w-full md:h-[70vh] lg:h-[70vh] overflow-hidden">
            <div className="w-full flex flex-col md:h-[70vh] lg:h-[70vh] h-[50vh]">
              <div
                className="flex overflow-x-auto space-x-4 md:h-[60vh] lg:h-[60vh] h-[30vh] scrollbar"
                style={{ maxWidth: "calc(100vw - 100px)" }}
                ref={containerRef}
              >
                {filteredExpertiseData.map((expertise) => (
                  <ExpertiseCard key={expertise.id} expertise={expertise} />
                ))}
              </div>
              <div className="flex mt-4 mb-4 gap-3">
                <button
                  onClick={handleScrollLeft}
                  className="mx-2 p-1 text-xl bg-gray-200 rounded-full hover:bg-gray-300 hover:drop-shadow-2xl"
                >
                  <FiChevronLeft />
                </button>
                <button
                  onClick={handleScrollRight}
                  className="mx-2 p-1 text-xl bg-gray-200 rounded-full hover:bg-gray-300 hover:drop-shadow-2xl"
                >
                  <FiChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
