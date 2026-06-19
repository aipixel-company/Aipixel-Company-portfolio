import React from 'react'
import HomeSlider from '../Components/HomeSlider'
import TrustedBySection from '../Components/TrustedBySection'
import DeliverablesSection from '../Components/DeliverablesSection'
import PainPointsSection from '../Components/PainPointsSection'
import ComparisonSection from '../Components/ComparisonSection'
import ServicesGrid from '../Components/ServicesGrid'
import PackagesSection from '../Components/PackagesSection'
import StatsSection from '../Components/StatsSection'
import HomeExpertise from '../Components/HomeExpertise'
import WhyChooseUs from '../Components/WhyChooseUs'
import CustomerSuccessSlider from '../Components/CustomerSuccessSlider'
import CollaboratingPartners from '../Components/CollaboratingPartners'
import BlogSection from '../Components/BlogSection'
import CTABanner from '../Components/CTABanner'
import Map from '../Components/Map'
import ContactusFormSection from '../Components/ContactusFormSection'

export default function HomeStock() {
  return (
    <>
      {/* 1. Hero — Badge + Large heading + Subtitle + CTA (DevZiv style) */}
      <HomeSlider />



      {/* 3. Deliverables — "What you get with AIPixal" (DevZiv: checklist + image) */}
      <DeliverablesSection />

      {/* 4. Pain Points — "When technology is weak..." (DevZiv: Conversion Leaks cards) */}
      <PainPointsSection />

      {/* 5. Comparison — "Old way vs AIPixal way" (DevZiv: side-by-side) */}
      <ComparisonSection />

      {/* 6. Services — "Our Core Services" grid (DevZiv: Our Services) */}
      <ServicesGrid />

      {/* 7. Packages — Engagement models (DevZiv: Packages section) */}
      <PackagesSection />

      {/* 8. Stats Band — Numbers at a glance */}
      <StatsSection />

      {/* 9. Expertise Carousel — Tech stack showcase */}
      <HomeExpertise />

      {/* 10. Why Choose Us — 2-col feature grid */}
      <WhyChooseUs />

      {/* 11. Client Testimonials Slider */}
      <CustomerSuccessSlider />

      {/* 12. Collaborating Partners Marquee */}
      {/* <CollaboratingPartners /> */}

      {/* 13. Blog / Insights Grid */}
      <BlogSection />

      {/* 14. CTA Banner */}
      <CTABanner />

      {/* 15. Global Presence Map */}
      <Map />

      {/* 16. Contact Form */}
      <ContactusFormSection />
    </>
  )
}
