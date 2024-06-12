import React from "react";
import navlogo from "../assets/navlogo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-white">
        <div className="mx-10 max-w-screen-xl space-y-8 py-16 lg:space-y-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="mb-10">
                <img src={navlogo} alt="" className="h-[5rem]" />
              </div>
              <h1 className="font-bold">Address:</h1>

              <p className="mt-4 max-w-xs text-gray-500">
                37L Block Johar Town, Lahore
              </p>

              <ul className="mt-8 flex gap-6">
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/aipixel2023?igsh=b2pxajdxc3JnODFk"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/aipixel123/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M19 0h-14c-2.75 0-5 2.25-5 5v14c0 2.75 2.25 5 5 5h14c2.75 0 5-2.25 5-5v-14c0-2.75-2.25-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.4c-.96 0-1.6-.7-1.6-1.6s.65-1.6 1.6-1.6 1.6.7 1.6 1.6-.65 1.6-1.6 1.6zm13.5 11.4h-3v-5.6c0-1.4-.5-2.3-1.7-2.3-1 0-1.5.7-1.8 1.3-.1.2-.1.4-.1.7v5.9h-3v-10h3v1.3c.5-.7 1.3-1.7 3.1-1.7 2.2 0 3.7 1.4 3.7 4.5v6zm0 0" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
              <div>
                <p className="font-medium">Services</p>

                <nav aria-label="Footer Navigation" className="mt-6">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <Link
                        to="/services"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Product Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Mobile Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        UI/UX Design
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div>
                <p className="font-medium">Company</p>

                <nav aria-label="Footer Navigation" className="mt-6">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <Link
                        to="/about-us"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        About Us
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/contact-us"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div>
                <p className="font-medium">Contact</p>

                <nav aria-label="Footer Navigation" className="mt-6">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <Link
                        to="/contact-us"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Contact Form
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact-us"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Location
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/contact-us"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Feedback
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-gray-100">
        <div className="mx-10 max-w-screen-xl px-4 py-6 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p className="mt-4 text-center text-sm text-gray-500 sm:order-first sm:mt-0">
            &copy; 2023 AI Pixel. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
