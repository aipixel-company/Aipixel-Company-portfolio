import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageHero from '../Components/PageHero';
import AdvisorySection from '../Components/AdvisorySection';
import EngineeringServices from '../Components/EngineeringServices';
import OptimisationServices from '../Components/OptimisationServices';
import ExpertiseServices from '../Components/ExpertiseServices';
import IndustriesWeWorkServices from '../Components/IndustriesWeWorkServices';
import SolutionsSection from '../Components/SolutionsSection';
import CTABanner from '../Components/CTABanner';
import ContactusFormSection from '../Components/ContactusFormSection';
import SEO from '../Components/SEO';

export default function ServicesStock() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://aipixel.tech"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://aipixel.tech/services"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Software Engineering & AI Services | AI Pixel"
        description="Explore the range of digital solutions engineered by AI Pixel, including custom web systems, mobile applications, machine learning models, cloud DevOps, and cybersecurity."
        canonicalPath="/services"
        schema={breadcrumbSchema}
      />
      {/* 1. Hero */}
      <PageHero
        badge="Our Services"
        title="Powering the Future with"
        highlight="AI & Innovation"
        subtitle="At AI-PIXAL, we design next-gen digital products with intelligent automation, scalable technology, and human-centered design — helping your business thrive."
      />

      {/* 2. Solutions Problems */}
      <div id="solutions">
        <SolutionsSection />
      </div>

      {/* 3. Advisory Services */}
      <div id="advisory">
        <AdvisorySection />
      </div>

      {/* 4. Engineering */}
      <div id="engineering">
        <EngineeringServices />
      </div>

      {/* 5. Optimisation */}
      <div id="optimisation">
        <OptimisationServices />
      </div>

      {/* 6. Industries we serve */}
      <div id="industries">
        <IndustriesWeWorkServices />
      </div>

      {/* 7. Expertise accordion */}
      <div id="expertise">
        <ExpertiseServices />
      </div>

      {/* 8. CTA */}
      <CTABanner
        title="Ready to Transform Your Business?"
        subtitle="Schedule a free consultation and discover how AI Pixal can accelerate your digital transformation."
        primaryText="Book a Free Call"
        primaryLink="/contact-us"
        secondaryText="View Our Work"
        secondaryLink="/clients"
      />

      {/* 9. Contact Form */}
      <div id="contact">
        <ContactusFormSection />
      </div>
    </>
  );
}
