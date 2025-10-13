import React from "react";
import industryImage from '../assets/industrybg.jpg'; 
import { useNavigate } from "react-router-dom";

export default function IndustriesMain() {
  const headingClasses = "text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl";
  const preHeadingClasses = "text-sm font-semibold uppercase tracking-wider text-cyan-400"; // Lighter cyan for contrast
  const paragraphClasses = "mt-6 text-xl text-gray-200 max-w-2xl"; // Lighter text for better contrast and increased max-width
  const featureTitleClasses = "font-semibold text-lg text-white";
  const featureSubtitleClasses = "mt-2 text-sm text-gray-300"; 
  const iconColorClass = "text-cyan-400"; // Lighter cyan for contrast
  
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden" id="industries-hero">
      
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          backgroundImage: `url(${industryImage})`, 
          backgroundSize: 'cover', 
          backgroundPosition: '5% center', 
          filter: 'grayscale(30%) brightness(0.9)' 
        }}
        aria-hidden="true"
      ></div>

      <div 
        className="absolute inset-0 z-10 bg-gradient-to-br from-gray-900 via-gray-900/70 to-gray-700/50" 
        aria-hidden="true"
      ></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center lg:text-left">
          <header className="mb-10">
            <p className={preHeadingClasses}>
              Strategic AI Solutions
            </p>
            
            <h1 className={headingClasses}>
              Industries Where We Drive Value
            </h1>
          </header>

          <p className={`${paragraphClasses} mx-auto lg:mx-0`}>
            At AI Pixel, we deploy specialized expertise to create transformative AI and data engineering solutions. Our deep industry knowledge allows us to tackle the unique challenges and opportunities across diverse sectors, focusing on measurable business impact.
          </p>
          
          
        </div>

        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          
          <div className="flex items-start">
            <svg className={`flex-shrink-0 w-8 h-8 ${iconColorClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.557 23.557 0 0112 16.5c-2.73 0-5.3-.647-7.66-1.745M21 13.255V12h-9m9 1.255l-3.344 3.344m-2.656-2.656a9 9 0 11-12.727-12.727 9 9 0 0112.727 12.727z"></path>
            </svg>
            <div className="ml-4">
              <p className={featureTitleClasses}>FinTech & Banking</p>
              <p className={featureSubtitleClasses}>Precision risk modeling, enhanced fraud detection, and regulatory compliance automation.</p>
            </div>
          </div>

          <div className="flex items-start">
            <svg className={`flex-shrink-0 w-8 h-8 ${iconColorClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3 1.343 3 3v2c0 1.657-1.343 3-3 3s-3-1.343-3-3v-2c0-1.657 1.343-3 3-3zM21 21v-2a4 4 0 00-3-3.75m0 0H6M6 14.25A2.25 2.25 0 003.75 12V6c0-1.24-.75-2.25-1.75-2.25S1 4.76 1 6v6c0 1.24.75 2.25 1.75 2.25S5 13.24 5 12V6c0-1.24-.75-2.25-1.75-2.25S1.5 4.76 1.5 6v6A2.25 2.25 0 003.75 14.25"></path>
            </svg>
            <div className="ml-4">
              <p className={featureTitleClasses}>Supply Chain & Mfg</p>
              <p className={featureSubtitleClasses}>Predictive demand forecasting, inventory optimization, and automated quality assurance.</p>
            </div>
          </div>

          <div className="flex items-start">
            <svg className={`flex-shrink-0 w-8 h-8 ${iconColorClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            <div className="ml-4">
              <p className={featureTitleClasses}>E-commerce & Retail</p>
              <p className={featureSubtitleClasses}>Hyper-personalization engines, dynamic pricing, and advanced customer behavior analysis.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <svg className={`flex-shrink-0 w-8 h-8 ${iconColorClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9.25V6.75A1.75 1.75 0 0015.25 5H8.75A1.75 1.75 0 007 6.75V9.25M17 9.25V17.25A1.75 1.75 0 0115.25 19H8.75A1.75 1.75 0 017 17.25V9.25m10 0H7"></path>
            </svg>
            <div className="ml-4">
              <p className={featureTitleClasses}>Healthcare & Pharma</p>
              <p className={featureSubtitleClasses}>AI-driven research acceleration, diagnostic support systems, and operational efficiency.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <svg className={`flex-shrink-0 w-8 h-8 ${iconColorClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.7V15.3a1 1 0 01-1.447.894L15 14m-5.485-5.485a7 7 0 1010.97 10.97 7 7 0 00-10.97-10.97z"></path>
            </svg>
            <div className="ml-4">
              <p className={featureTitleClasses}>Media & Entertainment</p>
              <p className={featureSubtitleClasses}>Audience segmentation, content recommendation algorithms, and metadata automation.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <svg className={`flex-shrink-0 w-8 h-8 ${iconColorClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12a9 9 0 009 9c2.37 0 4.544-.828 6.257-2.203M12 3v3m-3 12h6m-3-6h.01M3 15h2m-2-6h2m14 0h2m-2 6h2M6.75 6.75l1.414 1.414M15.836 6.75L14.422 8.164m1.414 7.072l1.414 1.414M6.75 17.25l1.414-1.414"></path>
            </svg>
            <div className="ml-4">
              <p className={featureTitleClasses}>Energy & Utilities</p>
              <p className={featureSubtitleClasses}>Grid optimization, predictive maintenance, and renewable resource forecasting.</p>
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
}