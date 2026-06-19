import React from 'react'
import PageHero from '../Components/PageHero'
import ContactUsMain from '../Components/ContactUsMain'
import Map from '../Components/Map'
import ContactusFormSection from '../Components/ContactusFormSection'

export default function ContactUsStock() {
  return (
    <>
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
