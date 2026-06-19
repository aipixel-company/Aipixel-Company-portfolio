import React, { useState } from "react";
import CustomerReveiw from "./CustomerReveiw";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../Firebase";

export default function ContactusFormSection() {
  const [contactMode, setContactMode] = useState("message"); // "message" or "call"
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    attachment: null,
  });

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
        // Simple file name sanitation; consider more robust handling for production
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

      alert("Form submitted successfully! 🎉");
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
    // Outer container: Dark background with a subtle gradient/texture for depth
    <div className="bg-[#070508] min-h-screen p-4 sm:py-6 sm:px-12">
      <div className="flex flex-col justify-center items-center mb-10 mx-auto">
        {contactMode === "message" ? (
          <>
            <h2 className="text-4xl font-extrabold tracking-tight text-white mb-4 leading-tight">
              Ready to <span className="gradient-text-accent">Discuss</span> Your Software Requirements? 🚀
            </h2>
            <p className="text-[#8791AD] text-lg">
              Let's build something amazing together. Fill out the form and we'll be in touch.
            </p>
          </>
        ) : (
          <>
            <h2 className="text-4xl font-extrabold tracking-tight text-white mb-4 leading-tight">
              Schedule a <span className="gradient-text-accent">Discovery Call</span> 📅
            </h2>
            <p className="text-[#8791AD] text-lg">
              Select a convenient slot on our calendar to book a direct meeting with our engineering team.
            </p>
          </>
        )}
      </div>
      <div className="max-w-6xl mx-auto py-8">

        {/* Title and Subtitle OUTSIDE of the glassmorphic card */}


        <div className="grid gap-12 lg:grid-cols-2">

          {/* Form Section - The Glassmorphic Panel */}
          <div className="p-8 rounded-3xl shadow-2xl backdrop-filter backdrop-blur-xl bg-[#1E1D28]/45 border border-white/5 transform hover:shadow-blue-500/5 transition duration-500">
            {/* Mode Switcher Tabs */}
            <div className="flex border-b border-white/10 mb-8">
              <button
                type="button"
                className={`pb-3 pr-6 text-sm font-semibold border-b-2 transition-all duration-300 ${contactMode === "message"
                  ? "border-[#3567FF] text-[#3567FF]"
                  : "border-transparent text-[#8791AD] hover:text-white"
                  }`}
                onClick={() => setContactMode("message")}
              >
                Send Message
              </button>
              <button
                type="button"
                className={`pb-3 px-6 text-sm font-semibold border-b-2 transition-all duration-300 ${contactMode === "call"
                  ? "border-[#3567FF] text-[#3567FF]"
                  : "border-transparent text-[#8791AD] hover:text-white"
                  }`}
                onClick={() => setContactMode("call")}
              >
                Schedule a Call
              </button>
            </div>

            {contactMode === "message" ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative z-0 w-full group">
                  <input
                    type="text"
                    name="fullName"
                    className="block py-3 px-0 w-full text-white bg-transparent border-0 border-b border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-[#3567FF] peer transition duration-300"
                    placeholder=" "
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                  <label
                    htmlFor="fullName"
                    className="absolute text-base text-white/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#3567FF] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
                  >
                    Full Name
                  </label>
                </div>

                <div className="relative z-0 w-full group">
                  <input
                    type="email"
                    name="email"
                    className="block py-3 px-0 w-full text-white bg-transparent border-0 border-b border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-[#3567FF] peer transition duration-300"
                    placeholder=" "
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-base text-white/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#3567FF] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
                  >
                    Email address
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative z-0 w-full group">
                    <input
                      type="tel"
                      pattern="[0-9]{11}"
                      name="phone"
                      className="block py-3 px-0 w-full text-white bg-transparent border-0 border-b border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-[#3567FF] peer transition duration-300"
                      placeholder=" "
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                    <label
                      htmlFor="phone"
                      className="absolute text-base text-white/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#3567FF] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
                    >
                      Phone number
                    </label>
                  </div>

                  <div className="relative z-0 w-full group">
                    <input
                      type="text"
                      name="company"
                      className="block py-3 px-0 w-full text-white bg-transparent border-0 border-b border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-[#3567FF] peer transition duration-300"
                      placeholder=" "
                      value={formData.company}
                      onChange={handleChange}
                      required
                    />
                    <label
                      htmlFor="company"
                      className="absolute text-base text-white/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#3567FF] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
                    >
                      Company
                    </label>
                  </div>
                </div>

                <div className="relative z-0 w-full group">
                  <textarea
                    name="message"
                    className="block py-3 px-0 w-full text-white bg-transparent border-0 border-b border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-[#3567FF] peer resize-none h-24 transition duration-300"
                    placeholder=" "
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <label
                    htmlFor="message"
                    className="absolute text-base text-white/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#3567FF] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
                  >
                    Tell us about your project...
                  </label>
                </div>

                {/* Attachment */}
                <div className="relative z-0 w-full group pt-4">
                  <label htmlFor="attachment" className="block text-base text-white/70 mb-2">
                    Attach documents (Optional)
                  </label>
                  <input
                    type="file"
                    name="attachment"
                    className="block w-full text-sm text-white/80 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#3567FF]/10 file:text-[#3567FF] hover:file:bg-[#3567FF]/20 transition duration-300"
                    onChange={handleChange}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full mt-8 py-3 px-6 text-lg font-semibold rounded-full text-white btn-premium-blue hover:shadow-[#3567FF]/25 shadow-lg transition duration-300 transform hover:scale-[1.02] active:scale-95"
                >
                  Send Your Request
                </button>
              </form>
            ) : (
              <div className="w-full rounded-2xl overflow-hidden bg-white" style={{ height: "600px" }}>
                <iframe
                  src="https://calendly.com/aipixelsolutions1?hide_landing_page_details=1&hide_gdpr_banner=1"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Schedule a Call with AI Pixal"
                ></iframe>
              </div>
            )}
          </div>

          {/* Customer Review Section */}
          <div className="hidden lg:block">
            <CustomerReveiw />
            {/* You might want to wrap CustomerReveiw in a similar glassmorphic container 
                or ensure its own styling fits the new dark/vibrant theme. */}
          </div>
        </div>
      </div>
    </div>
  );
}