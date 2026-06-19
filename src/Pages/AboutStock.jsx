import React from 'react'
import PageHero from '../Components/PageHero'
import AboutSlider from '../Components/AboutSlider'
import OurVison from '../Components/OurVison'
import OurUniqueFeatures from '../Components/OurUniqueFeatures'
import CeoMessage from '../Components/CeoMessage'
import StatsSection from '../Components/StatsSection'
import Map from '../Components/Map'
import CTABanner from '../Components/CTABanner'
import ContactusFormSection from '../Components/ContactusFormSection'

export default function AboutStock() {
  return (
    <div className='bg-[#070508]'>
      {/* 1. Hero Banner */}
      <PageHero
        badge="Our Story"
        title="Building Digital"
        highlight="Excellence"
        subtitle="We are a passionate team of engineers, designers, and strategists dedicated to crafting transformative digital solutions for businesses worldwide."
        ctaText="Work With Us"
        ctaLink="/contact-us"
        secondaryText="Our Services"
        secondaryLink="/services"
      />

      {/* 2. About Slider / Mission */}
      <AboutSlider />

      {/* 3. Our Vision */}
      <OurVison />

      {/* 4. Stats */}
      <StatsSection />

      {/* 5. Unique Features / Values */}
      <OurUniqueFeatures />

      {/* 6. CEO Message */}
      <CeoMessage />

      {/* 7. Global Map */}
      <Map />

      {/* 8. CTA Banner */}
      <CTABanner
        title="Ready to Build the Future Together?"
        subtitle="Partner with AI Pixal and bring your digital vision to life with our world-class team."
        primaryText="Start a Conversation"
        primaryLink="/contact-us"
        secondaryText="View Our Work"
        secondaryLink="/clients"
      />

      {/* 9. Contact Form */}
      <ContactusFormSection />
    </div>
  )
}
