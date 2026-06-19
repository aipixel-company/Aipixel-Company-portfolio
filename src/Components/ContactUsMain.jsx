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
  const [contactMode, setContactMode] = useState("message"); // "message" or "call"

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
    <section className="w-full min-h-screen flex flex-col lg:flex-row bg-[#070508]">
      {/* Left Panel */}
      <div
        className="lg:w-1/2 w-full flex flex-col justify-center items-center text-white p-10 relative min-h-[45vh] lg:min-h-screen"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1685080462887-6c6f32d9ec85?q=80&w=2000')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#070508]/85"></div>
        <div className="relative z-10 text-center lg:text-left max-w-lg mt-8">
          <h2 className="text-4xl font-extrabold mb-4">Let’s Build the Future</h2>
          <p className="text-lg mb-6 opacity-90 text-[#8791AD]">
            At <span className="font-semibold text-[#3567FF]">AI-Pixal</span>,
            we believe in innovation without limits. Share your ideas, and let’s
            turn them into intelligent, future-ready solutions.
          </p>
          <blockquote className="italic border-l-4 pl-4 border-[#3567FF] text-[#8791AD]">
            “We don’t just write code — we craft transformations.”  
          </blockquote>
          <p className="mt-3 font-semibold text-white">— Mian Usman, CEO</p>
        </div>
      </div>

      {/* Right Panel - Contact Form */}
      <div className="lg:w-1/2 w-full flex justify-center items-center mt-10 p-10">
        <div className="w-full max-w-lg bg-[#1E1D28]/45 border border-white/5 backdrop-blur-lg rounded-2xl shadow-xl p-8">
          {/* Mode Switcher Tabs */}
          <div className="flex border-b border-white/10 mb-8">
            <button
              type="button"
              className={`pb-3 pr-6 text-sm font-semibold border-b-2 transition-all duration-300 ${
                contactMode === "message"
                  ? "border-[#3567FF] text-[#3567FF]"
                  : "border-transparent text-[#8791AD] hover:text-white"
              }`}
              onClick={() => setContactMode("message")}
            >
              Send Message
            </button>
            <button
              type="button"
              className={`pb-3 px-6 text-sm font-semibold border-b-2 transition-all duration-300 ${
                contactMode === "call"
                  ? "border-[#3567FF] text-[#3567FF]"
                  : "border-transparent text-[#8791AD] hover:text-white"
              }`}
              onClick={() => setContactMode("call")}
            >
              Schedule a Call
            </button>
          </div>

          {contactMode === "message" ? (
            <form onSubmit={handleSubmit} noValidate>
              <h1 className="text-3xl font-bold text-white mb-6 text-center">
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
                    className="w-full bg-[#070508]/60 border border-white/10 text-white placeholder-white/30 rounded-lg p-3 focus:outline-none focus:border-[#3567FF] transition-all"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
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
                    className="w-full bg-[#070508]/60 border border-white/10 text-white placeholder-white/30 rounded-lg p-3 focus:outline-none focus:border-[#3567FF] transition-all"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
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
                  className="w-full bg-[#070508]/60 border border-white/10 text-white placeholder-white/30 rounded-lg p-3 focus:outline-none focus:border-[#3567FF] transition-all"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
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
                  className="w-full bg-[#070508]/60 border border-white/10 text-white placeholder-white/30 rounded-lg p-3 focus:outline-none focus:border-[#3567FF] transition-all"
                />
                {errors.company && (
                  <p className="text-red-500 text-sm mt-1">{errors.company}</p>
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
                  className="w-full bg-[#070508]/60 border border-white/10 text-white placeholder-white/30 rounded-lg p-3 focus:outline-none focus:border-[#3567FF] transition-all resize-none"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <div className="mt-4 flex items-center gap-3">
                <label
                  htmlFor="attachment"
                  className="flex items-center cursor-pointer text-[#3567FF] hover:text-[#3567FF]/80 font-medium"
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
                  className="w-full py-3 bg-[#3567FF] hover:bg-[#3567FF]/85 text-white font-semibold rounded-lg shadow-lg hover:shadow-[#3567FF]/20 transition duration-300"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          ) : (
            <div className="flex flex-col h-full">
              <h1 className="text-3xl font-bold text-white mb-6 text-center">
                Schedule a Call
              </h1>
              <p className="text-[#8791AD] mb-6 text-center">
                Select a convenient slot on our calendar to book a meeting.
              </p>
              <div className="w-full rounded-2xl overflow-hidden bg-white" style={{ height: "550px" }}>
                <iframe
                  src="https://calendly.com/aipixelsolutions1?hide_landing_page_details=1&hide_gdpr_banner=1"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Schedule a Call with AI Pixal"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ContactUsMain;
