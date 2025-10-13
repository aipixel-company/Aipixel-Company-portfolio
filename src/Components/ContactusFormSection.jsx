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
    <div className="bg-gradient-to-br from-gray-900 to-[#1e1d28] min-h-screen p-4 sm:p-12">
      <div className="max-w-6xl mx-auto py-8">
        <div className="grid gap-12 lg:grid-cols-2">
          
          {/* Form Section - The Glassmorphic Panel */}
          <div className="p-8 rounded-3xl shadow-2xl backdrop-filter backdrop-blur-xl bg-white/5 border border-white/10 transform hover:shadow-cyan-500/50 transition duration-500">
            <h2 className="text-4xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Ready to <span className="text-cyan-400">Discuss</span> Your Software Requirements? 🚀
            </h2>
            <p className="text-gray-300 mb-8">
              Let's build something amazing together. Fill out the form and we'll be in touch.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
              {/* Full Name */}
              <div className="relative z-0 w-full group">
                <input
                  type="text"
                  name="fullName"
                  maxLength="50"
                  className="block py-3 px-0 w-full text-white bg-transparent border-0 border-b border-white/30 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-400 peer transition duration-300"
                  placeholder=" "
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="fullName"
                  className="absolute text-base text-white/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-cyan-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
                >
                  Full Name
                </label>
              </div>

              {/* Email address */}
              <div className="relative z-0 w-full group">
                <input
                  type="email"
                  name="email"
                  maxLength="80"
                  className="block py-3 px-0 w-full text-white bg-transparent border-0 border-b border-white/30 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-400 peer transition duration-300"
                  placeholder=" "
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute text-base text-white/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-cyan-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
                >
                  Email address
                </label>
              </div>

              {/* Phone number & Company (simplified for 1-column layout) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative z-0 w-full group">
                  <input
                    type="tel"
                    pattern="[0-9]{11}"
                    maxLength="11"
                    name="phone"
                    className="block py-3 px-0 w-full text-white bg-transparent border-0 border-b border-white/30 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-400 peer transition duration-300"
                    placeholder=" "
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <label
                    htmlFor="phone"
                    className="absolute text-base text-white/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-cyan-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
                  >
                    Phone number
                  </label>
                </div>
                
                <div className="relative z-0 w-full group">
                  <input
                    type="text"
                    name="company"
                    maxLength="50"
                    className="block py-3 px-0 w-full text-white bg-transparent border-0 border-b border-white/30 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-400 peer transition duration-300"
                    placeholder=" "
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                  <label
                    htmlFor="company"
                    className="absolute text-base text-white/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-cyan-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
                  >
                    Company
                  </label>
                </div>
              </div>

              {/* Message */}
              <div className="relative z-0 w-full group">
                <textarea
                  name="message"
                  className="block py-3 px-0 w-full text-white bg-transparent border-0 border-b border-white/30 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-400 peer resize-none h-24 transition duration-300"
                  placeholder=" "
                  maxLength="200"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="message"
                  className="absolute text-base text-white/50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-cyan-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
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
                  className="block w-full text-sm text-white/80 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cyan-500/20 file:text-cyan-300 hover:file:bg-cyan-500/30 transition duration-300"
                  onChange={handleChange}
                />
                {/* Note: Removed 'required' from attachment as file upload is often optional */}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-8 py-3 px-6 text-lg font-semibold rounded-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 shadow-lg shadow-cyan-500/50 transition duration-300 transform hover:scale-[1.02] active:scale-95"
              >
                Send Your Request
              </button>
            </form>
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