import React from "react";
import PageHero from "../Components/PageHero";
import AllBlogsSection from "../Components/AllBlogsSection";
import CTABanner from "../Components/CTABanner";
import ContactusFormSection from "../Components/ContactusFormSection";

export default function BlogStock() {
  return (
    <>
      {/* 1. Hero Banner */}
      <PageHero
        badge="Blog & Insights"
        title="Ideas That"
        highlight="Inspire"
        subtitle="Explore thought leadership, technical deep-dives, and industry insights from the AI Pixal team."
      />

      {/* 2. All Blogs Grid */}
      <AllBlogsSection />

      {/* 3. CTA */}
      <CTABanner
        title="Have a Project in Mind?"
        subtitle="Let's discuss how we can help bring your digital ideas to life."
        primaryText="Contact Us"
        primaryLink="/contact-us"
        secondaryText="Our Services"
        secondaryLink="/services"
      />

      {/* 4. Contact Form */}
      <ContactusFormSection />
    </>
  );
}
