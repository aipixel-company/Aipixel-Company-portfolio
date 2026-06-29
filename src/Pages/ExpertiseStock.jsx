import React from 'react'
import SEO from '../Components/SEO'
import PageHero from '../Components/PageHero'
import ExpertiseTab from '../Components/ExpertiseTab'
import ExpertiseFeatures from '../Components/ExpertiseFeatures'
import ExpertiseServices from '../Components/ExpertiseServices'
import ExpertisePageMain from '../Components/ExpertisePageMain'
import CTABanner from '../Components/CTABanner'
import ContactusFormSection from '../Components/ContactusFormSection'

export default function ExpertiseStock() {
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
        "name": "Expertise",
        "item": "https://aipixel.tech/expertise"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Technical Expertise & Domain Mastery | AI Pixel"
        description="Discover the core engineering capabilities of AI Pixel across machine learning, user interface design, blockchain, cloud infrastructure, and software quality assurance."
        canonicalPath="/expertise"
        schema={breadcrumbSchema}
      />
      {/* 1. Hero Banner */}
      <PageHero
        badge="Our Expertise"
        title="Capabilities That"
        highlight="Drive Results"
        subtitle="From cutting-edge AI to scalable cloud infrastructure — explore the full spectrum of technical expertise we bring to every engagement."
      />

      {/* 2. Expertise Main overview */}
      <ExpertisePageMain />

      {/* 3. Full carousel of expertise areas */}
      <ExpertiseTab />

      {/* 4. Feature cards grid */}
      <ExpertiseFeatures />

      {/* 5. Accordion of specialized services */}
      <ExpertiseServices />

      {/* 6. CTA */}
      <CTABanner
        title="Let's Build Something Extraordinary"
        subtitle="Ready to leverage our expertise? Let's talk about how we can solve your toughest technical challenges."
        primaryText="Talk to an Expert"
        primaryLink="/contact-us"
        secondaryText="Browse Services"
        secondaryLink="/services"
      />

      {/* 7. Contact Form */}
      <ContactusFormSection />
    </>
  )
}
