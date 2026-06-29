import React from 'react'
import SEO from '../Components/SEO'
import PageHero from '../Components/PageHero'
import ContactUsMain from '../Components/ContactUsMain'
import Map from '../Components/Map'
import ContactusFormSection from '../Components/ContactusFormSection'

export default function ContactUsStock() {
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
        "name": "Contact Us",
        "item": "https://aipixel.tech/contact-us"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Contact AI Pixel | Schedule a Technical Consultation"
        description="Get in touch with the AI Pixel development team. Schedule a free technical consultation to review your software design, custom AI model needs, and timeline."
        canonicalPath="/contact-us"
        schema={breadcrumbSchema}
      />
      {/* 1. Hero Banner */}
      <PageHero
        badge="Contact Us"
        title="Let's Build"
        highlight="Together"
        subtitle="Ready to start your next project? Reach out and our team will get back to you within 24 hours."
        // ctaText="Send a Message"
        ctaLink="#contact-form"
      />

      {/* 2. Contact Info + Form */}
      {/* <ContactUsMain /> */}

      {/* 3. Main Contact Form Section */}
      <div id="contact-form">
        <ContactusFormSection />
      </div>

      {/* 4. Global Map */}
      <Map />
    </>
  )
}
