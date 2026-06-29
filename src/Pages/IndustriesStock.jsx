import React from 'react'
import SEO from '../Components/SEO'
import PageHero from '../Components/PageHero'
import IndustriesMain from '../Components/IndustriesMain'
import IndustriesWeWorkWith from '../Components/IndustriesWeWorkWith'
import IndustriesWeWorkServices from '../Components/IndustriesWeWorkServices'
import IndustriesCards from '../Components/IndustriesCards'
import IndustriesTimeline from '../Components/IndustriesTimeline'
import CTABanner from '../Components/CTABanner'
import ContactusFormSection from '../Components/ContactusFormSection'

export default function IndustriesStock() {
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
        "name": "Industries",
        "item": "https://aipixel.tech/industries"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Industries & Sectors We Empower | AI Pixel"
        description="We deliver customized digital transformation and AI integration across logistics, e-commerce, fintech, sports, education, and food traceability sectors."
        canonicalPath="/industries"
        schema={breadcrumbSchema}
      />
      {/* 1. Hero Banner */}
      <PageHero
        badge="Industries"
        title="Sectors We"
        highlight="Transform"
        subtitle="We bring specialized AI and technology expertise to drive measurable impact across the world's most dynamic industries."
        accentColor="green"
      />

      {/* 2. Industries hero features grid */}
      <IndustriesMain />

      {/* 3. Scrolling industry card carousel */}
      {/* <IndustriesWeWorkWith /> */}

      {/* 4. Industry logos grid */}
      <IndustriesWeWorkServices />

      {/* 5. Technology stack cards */}
      <IndustriesCards />

      {/* 6. Project Timeline */}
      <IndustriesTimeline />

      {/* 7. CTA */}
      <CTABanner
        title="Ready to Transform Your Industry?"
        subtitle="Work with our specialists to unlock AI-powered growth and competitive advantage for your sector."
        primaryText="Schedule a Call"
        primaryLink="/contact-us"
        secondaryText="Learn More"
        secondaryLink="/aboutus"
        accentColor="green"
      />

    </>
  )
}
