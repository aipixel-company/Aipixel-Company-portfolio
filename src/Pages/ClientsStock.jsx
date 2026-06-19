import React from 'react'
import PageHero from '../Components/PageHero'
import ClientsSection from '../Components/ClientsSection'
import CustomerSuccessSlider from '../Components/CustomerSuccessSlider'
import CollaboratingPartners from '../Components/CollaboratingPartners'
import StatsSection from '../Components/StatsSection'
import CTABanner from '../Components/CTABanner'
import ContactusFormSection from '../Components/ContactusFormSection'

export default function ClientsStock() {
  return (
    <>
      {/* 1. Hero Banner */}
      <PageHero
        badge="Our Clients"
        title="Trusted by"
        highlight="Industry Leaders"
        subtitle="From startups to enterprise organizations — we've built lasting partnerships with businesses that demand excellence."
        accentColor="green"
      />

      {/* 2. Stats */}
      <StatsSection />

      {/* 3. Client showcase cards */}
      <ClientsSection />

      {/* 4. Testimonials */}
      <CustomerSuccessSlider />

      {/* 5. Partner logos marquee */}
      {/* <CollaboratingPartners /> */}

      {/* 6. CTA */}
      <CTABanner
        title="Join Our Growing Client Family"
        subtitle="Let's create something remarkable together. Reach out and let's discuss your project."
        primaryText="Get in Touch"
        primaryLink="/contact-us"
        secondaryText="View Services"
        secondaryLink="/services"
        accentColor="green"
      />

      {/* 7. Contact Form */}
      <ContactusFormSection />
    </>
  )
}
