import React, { useState } from "react";
import { GrAttachment } from "react-icons/gr";
import aboutbackground from "../assets/aboutbackground.jpg";
import { Checkbox } from "@material-tailwind/react";

function ContactUsMain() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    attachment: null,
    newsSubscription: false, // Added for news subscription checkbox
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!form.firstName) tempErrors.firstName = "First Name is required.";
    if (!form.lastName) tempErrors.lastName = "Last Name is required.";
    if (!form.email) tempErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      tempErrors.email = "Email is invalid.";
    if (!form.address) tempErrors.address = "Company is required.";
    if (!form.city) tempErrors.city = "Message is required.";
    if (!form.attachment) tempErrors.attachment = "Attachment is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm({ ...form, [e.target.name]: value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, attachment: e.target.files[0] });
    setErrors({ ...errors, attachment: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission logic here
      console.log(form);
      // Reset form after submission
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        attachment: null,
        newsSubscription: false,
      });
    }
  };

  return (
    <div
      className="flex items-center h-screen"
      style={{
        backgroundImage: `url(${aboutbackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        noValidate
        className="container flex flex-col ml-5 mt-16 rounded-xl max-w-4xl bg-gradient-to-r from-blue-100 to-blue-700 p-6"
      >
        <h1 className="text-4xl font-medium text-center mb-4">Get In Touch</h1>
        <div className="grid grid-cols-3 gap-6 p-6">
          <div>
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium mb-1"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="input-field"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium mb-1"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="input-field"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="input-field"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="mb-4 mt-6 flex items-center">
              <GrAttachment className="mr-2 text-2xl" />
              <label
                htmlFor="attachment"
                className="cursor-pointer block text-sm font-medium"
              >
                Add Attachment
              </label>
              <input
                id="attachment"
                type="file"
                name="attachment"
                onChange={handleFileChange}
                className="hidden"
              />
              {errors.attachment && (
                <p className="text-red-500 text-sm">{errors.attachment}</p>
              )}
            </div>
            <div className="mt-6 flex items-center">
              <Checkbox
                id="newsSubscription"
                name="newsSubscription"
                checked={form.newsSubscription}
                onChange={handleChange}
                color="gray"
                outline={false}
                size="sm"
              />
              <label
                htmlFor="newsSubscription"
                className="cursor-pointer block text-sm font-medium"
              >
                I want to receive news
              </label>
            </div>
          </div>
          <div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium mb-1"
              >
                Company
              </label>
              <input
                id="address"
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Company"
                className="input-field"
              />
              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="city" className="block text-sm font-medium mb-1">
                Message
              </label>
              <input
                id="city"
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="Message"
                className="input-field"
              />
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city}</p>
              )}
            </div>
          </div>
          <div>
            <p className="text-white">
              We're Pakistan's premier software house, crafting AI-driven
              solutions that redefine possibilities. Explore our portfolio and
              discover how we can elevate your business in the digital realm.
            </p>
            <p className="text-xl mt-2">CEO, </p>
            <span>Mian Usman</span>
          </div>
        </div>
        <div className="">
          <button
            type="submit"
            className="border rounded-lg px-4 py-2 bg-gray-900 text-white"
          >
            Contact Us
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactUsMain;
