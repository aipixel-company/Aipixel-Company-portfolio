import React, { useState } from "react";
import { GrAttachment } from "react-icons/gr";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../Firebase";

function ContactUsMain() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
    attachment: null,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!form.firstName) tempErrors.firstName = "First Name is required.";
    if (!form.lastName) tempErrors.lastName = "Last Name is required.";
    if (!form.email) tempErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      tempErrors.email = "Email is invalid.";
    if (!form.company) tempErrors.company = "Company is required.";
    if (!form.message) tempErrors.message = "Message is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setForm({ ...form, [e.target.name]: value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, attachment: e.target.files[0] });
    setErrors({ ...errors, attachment: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      try {
        let attachmentURL = "";
        if (form.attachment) {
          const attachmentName = encodeURIComponent(form.attachment.name);
          const storageRef = ref(storage, `attachments/${attachmentName}`);
          await uploadBytes(storageRef, form.attachment);
          attachmentURL = await getDownloadURL(storageRef);
        }

        await addDoc(collection(db, "contacts"), {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          company: form.company,
          message: form.message,
          attachmentURL,
          createdAt: new Date(),
        });

        setForm({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          message: "",
          attachment: null,
        });

        alert("Thank you! Your message has been sent successfully.");
      } catch (error) {
        console.error("Error submitting form: ", error);
        alert(`Error submitting form: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row bg-gradient-to-b from-indigo-800/70 to-black/70">
      {/* Left Panel */}
      <div
        className="lg:w-1/2 w-full flex flex-col justify-center items-center text-white p-10 relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1685080462887-6c6f32d9ec85?q=80&w=2000')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-b from-indigo-800/70 to-black/70"></div> */}
        <div className="relative z-10 text-center lg:text-left max-w-lg">
          <h2 className="text-4xl font-extrabold mb-4">Let’s Build the Future</h2>
          <p className="text-lg mb-6 opacity-90">
            At <span className="font-semibold text-indigo-300">AI-Pixel</span>,
            we believe in innovation without limits. Share your ideas, and let’s
            turn them into intelligent, future-ready solutions.
          </p>
          <blockquote className="italic border-l-4 pl-4 border-indigo-400 text-gray-200">
            “We don’t just write code — we craft transformations.”  
          </blockquote>
          <p className="mt-3 font-semibold">— Mian Usman, CEO</p>
        </div>
      </div>

      {/* Right Panel - Contact Form */}
      <div className="lg:w-1/2 w-full flex justify-center items-center mt-10 p-10 ">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="w-full max-w-lg bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-gray-200"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Contact Us
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-indigo-500"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </div>
            <div>
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-indigo-500"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="mt-4">
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-indigo-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="mt-4">
            <input
              id="company"
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Company / Organization"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-indigo-500"
            />
            {errors.company && (
              <p className="text-red-500 text-sm">{errors.company}</p>
            )}
          </div>

          <div className="mt-4">
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <div className="mt-4 flex items-center gap-3">
            <label
              htmlFor="attachment"
              className="flex items-center cursor-pointer text-indigo-600 hover:text-indigo-800 font-medium"
            >
              <GrAttachment className="mr-2" /> Add Attachment
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

          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg transition"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactUsMain;
