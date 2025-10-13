import React, { useEffect } from "react";
import navlogo from "../assets/navlogo.png";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'

export default function Footer() {
  useEffect(() => {
    // Scrolls to top on component mount, good practice for navigating to a new "page"
    window.scrollTo(0, 0);
  }, []);

  // Tailwind CSS classes for consistent styling
  const linkClasses = "text-gray-600 hover:text-cyan-600 transition-colors duration-200";
  const headingClasses = "text-lg font-bold text-gray-900 mb-4 tracking-wide";
  const socialIconClasses = "text-gray-500 hover:text-cyan-600 transition-colors duration-200";

  return (
    <>
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Using a 4-column layout now that the newsletter column is removed */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12">
            
            {/* Column 1: Logo and Contact Info (Expanded slightly) */}
            <div className="col-span-2 md:col-span-1">
              <div className="mb-6">
                <img
                  src={navlogo}
                  alt="AI Pixel Logo"
                  className="h-12 w-auto filter grayscale opacity-80"
                />
              </div>

              <div className="space-y-3">
                <p className="text-sm font-semibold text-gray-800">Location:</p>
                <p className="text-sm text-gray-600">
                  37L Block Johar Town, Lahore
                </p>
                
                <p className="text-sm font-semibold text-gray-800 pt-3">Get in Touch:</p>
                <p className="text-sm text-gray-600">
                  Email: <a href="mailto:info@aipixel.com" className={linkClasses}>info@aipixel.com</a>
                </p>
              </div>

              {/* Social Media Icons */}
              <ul className="mt-8 flex gap-5">
                <li>
                  <span
                    className={`${socialIconClasses} cursor-not-allowed`}
                  >
                    <span className="sr-only">Facebook</span>
                    {/* Facebook SVG */}
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </span>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/aipixel2023?igsh=b2pxajdxc3JnODFk"
                    rel="noreferrer"
                    target="_blank"
                    className={socialIconClasses}
                  >
                    <span className="sr-only">Instagram</span>
                    {/* Instagram SVG */}
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2.163c3.204 0 3.584.015 4.85.063 1.052.049 1.79.217 2.426.465.636.247 1.173.597 1.748 1.153s.906 1.112 1.153 1.748c.247.636.416 1.363.465 2.426.048 1.266.063 1.646.063 4.849s-.015 3.583-.063 4.85c-.049 1.052-.217 1.79-.465 2.426-.247.636-.597 1.173-1.153 1.748s-1.112.906-1.748 1.153c-.636.247-1.363.416-2.426.465-1.266.048-1.646.063-4.85.063s-3.583-.015-4.85-.063c-1.052-.049-1.79-.217-2.426-.465-.636-.247-1.173-.597-1.748-1.153s-.906-1.112-1.153-1.748c-.247-.636-.416-1.363-.465-2.426-.048-1.266-.063-1.646-.063-4.85s.015-3.583.063-4.85c.049-1.052.217-1.79.465-2.426.247-.636.597-1.173 1.153-1.748s1.112-.906 1.748-1.153c.636-.247 1.363-.416 2.426-.465C8.417 2.178 8.797 2.163 12 2.163zm0 1.802c-3.181 0-3.584.016-4.81.062-1.01.047-1.42.203-1.72.324-.31.121-.55.282-.79.521s-.4.48-.521.79c-.121.3-.277.71-.324 1.72-.046 1.226-.062 1.629-.062 4.81s.016 3.584.062 4.81c.047 1.01.203 1.42.324 1.72.121.31.282.55.521.79s.48.4.79.521c.3.121.71.277 1.72.324 1.226.046 1.629.062 4.81.062s3.584-.016 4.81-.062c1.01-.047 1.42-.203 1.72-.324.31-.121.55-.282.79-.521s.4-.48.521-.79c.121-.3.277-.71.324-1.72.046-1.226.062-1.629.062-4.81s-.016-3.584-.062-4.81c-.047-1.01-.203-1.42-.324-1.72-.121-.31-.282-.55-.521-.79s-.48-.4-.79-.521c-.3-.121-.71-.277-1.72-.324C15.584 3.981 15.181 3.965 12 3.965zm0 3.655A4.38 4.38 0 1016.38 12 4.38 4.38 0 0012 7.62zm0 7.15A2.77 2.77 0 1114.77 12 2.77 2.77 0 0112 14.77zm4.398-7.584a1.04 1.04 0 100 2.08 1.04 1.04 0 000-2.08z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/aipixel123/"
                    rel="noreferrer"
                    target="_blank"
                    className={socialIconClasses}
                  >
                    <span className="sr-only">LinkedIn</span>
                    {/* LinkedIn SVG */}
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.75 0-5 2.25-5 5v14c0 2.75 2.25 5 5 5h14c2.75 0 5-2.25 5-5v-14c0-2.75-2.25-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.4c-.96 0-1.6-.7-1.6-1.6s.65-1.6 1.6-1.6 1.6.7 1.6 1.6-.65 1.6-1.6 1.6zm13.5 11.4h-3v-5.6c0-1.4-.5-2.3-1.7-2.3-1 0-1.5.7-1.8 1.3-.1.2-.1.4-.1.7v5.9h-3v-10h3v1.3c.5-.7 1.3-1.7 3.1-1.7 2.2 0 3.7 1.4 3.7 4.5v6zm0 0" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Column 2: Services */}
            <div>
              <p className={headingClasses}>Services</p>
              <nav aria-label="Footer Services Navigation" className="mt-4">
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link to="/services#advisory" className={linkClasses}>Advisory Services</Link>
                  </li>
                  <li>
                    <Link to="/services#engineering" className={linkClasses}>Engineering</Link>
                  </li>
                  <li>
                    <Link to="/services#optimisation" className={linkClasses}>Optimization</Link>
                  </li>
                  <li>
                    <Link to="/services#industries" className={linkClasses}>Industries</Link>
                  </li>
                  {/* Added Services link as a catch-all */}
                  <li>
                    <Link to="/services" className={linkClasses}>All Services</Link>
                  </li>
                </ul>
              </nav>
            </div>
            
            {/* Column 3: Company */}
            <div>
              <p className={headingClasses}>Company</p>
              <nav aria-label="Footer Company Navigation" className="mt-4">
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link to="/aboutus" className={linkClasses}>About Us</Link>
                  </li>
                  <li>
                    <Link to="/contact-us" className={linkClasses}>Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/blogs" className={linkClasses}>Blog</Link>
                  </li>
                  <li>
                    <Link to="/clients" className={linkClasses}>Clients</Link>
                  </li>
                  {/* <li>
                    <Link to="/portfolio" className={linkClasses}>Portfolio</Link> 
                  </li> */}
                </ul>
              </nav>
            </div>

            {/* Column 4: Legal & Resources */}
            {/* Consolidated legal and key info into a strong final column */}
            <div className="md:col-span-1">
              <p className={headingClasses}>Resources</p>
              <nav aria-label="Footer Resources Navigation" className="mt-4">
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link to="/privacy-policy" className={linkClasses}>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/terms-of-service" className={linkClasses}>Terms of Service</Link>
                  </li>
                   {/* <li>
                    <Link to="/sitemap" className={linkClasses}>Sitemap</Link>
                  </li>
                  <li>
                    <Link to="/faq" className={linkClasses}>FAQ</Link>
                  </li> */}
                </ul>
              </nav>
            </div>

          </div>
        </div>
      </footer>

      {/* Copyright Bar - Soft light background */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:flex sm:items-center sm:justify-between">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} AI Pixel. All rights reserved.
          </p>
          
          {/* Subtle legal links in the corner */}
          <div className="flex justify-center sm:justify-start mt-2 sm:mt-0 space-x-4">
             <Link to="/privacy-policy" className="text-sm text-gray-500 hover:text-gray-700 transition">Privacy</Link>
             <span className="text-gray-300">|</span>
             <Link to="/terms-of-service" className="text-sm text-gray-500 hover:text-gray-700 transition">Terms</Link>
          </div>
        </div>
      </div>
    </>
  );
}