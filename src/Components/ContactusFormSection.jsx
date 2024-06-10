import React, { useState } from "react";
import CustomerReveiw from "./CustomerReveiw";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../Firebase";

export default function ContactusFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    attachment: null,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      rating: 5,
      title: "Stayin' Alive",
      quote:
        "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
      author: "Michael Scott",
    },
    {
      rating: 5,
      title: "Stayin' Alive",
      quote:
        "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
      author: "Michael Scott",
    },
    {
      rating: 5,
      title: "Stayin' Alive",
      quote:
        "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
      author: "Michael Scott",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "attachment") {
      setFormData({ ...formData, attachment: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let attachmentURL = "";
      if (formData.attachment) {
        const attachmentName = encodeURIComponent(formData.attachment.name);
        const storageRef = ref(storage, `attachments/${attachmentName}`);

        await uploadBytes(storageRef, formData.attachment);

        attachmentURL = await getDownloadURL(storageRef);
      }

      await addDoc(collection(db, "contacts"), {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message,
        attachmentURL,
        createdAt: new Date(),
      });

      alert("Form submitted successfully!");
      // Reset form data
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        attachment: null,
      });
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert(`Error submitting form: ${error.message}`);
    }
  };

  return (
    <div className="bg-[#1e1d28] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
      <div className="grid gap-8 grid-cols-2 mx-5 p-4">
        <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right p-5">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to discuss your software requirements?
          </h2>
          <form onSubmit={handleSubmit} className="mt-3">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="fullName"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="fullName"
                className="absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Full Name
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="email"
                name="email"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="phone"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="phone"
                className="absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number (123-456-7890)
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="company"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.company}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="company"
                className="absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Company (Ex. Google)
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <textarea
                name="message"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.message}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="message"
                className="absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Message
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="file"
                name="attachment"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                onChange={handleChange}
                required
              />
              <label
                htmlFor="attachment"
                className="absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Attachment
              </label>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Contact us
            </button>
          </form>
        </div>
        <div className="px-4 h-full">
          <CustomerReveiw />
        </div>
      </div>
    </div>
  );
}
