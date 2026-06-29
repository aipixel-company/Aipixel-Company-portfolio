import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import PageHero from "../Components/PageHero";
import CTABanner from "../Components/CTABanner";
import ContactusFormSection from "../Components/ContactusFormSection";
import SEO from "../Components/SEO";

// Import client logos for referencing inside industry client cards
import airhubLogo from "../assets/airhub.png";
import birdsworldLogo from "../assets/birdsworld.png";
import bankmusqatLogo from "../assets/bankmusqat.png";
import techgalaxyLogo from "../assets/techgalaxy.png";
import adventureclubLogo from "../assets/adventureclub.png";
import moosaLogo from "../assets/moosa.png";
import laraceLogo from "../assets/larace.png";
import seedlogoLogo from "../assets/seedlogo.png";
import universalskillsLogo from "../assets/universalskills.png";
import halalchefLogo from "../assets/halalchef.png";
import singafLogo from "../assets/singaf.png";

const industriesData = {
  logistics: {
    name: "Logistics",
    cardtitle: "Logistics & Supply Chain Management",
    description: "The Logistics industry is a critical component of supply chain management, involving the planning, implementation, and control of the movement and storage of goods, services, and information.",
    extendedDesc: "AI Pixal transforms logistics operations through real-time tracking, flight safety dashboard software, and automated resource dispatch applications. We help fleet managers, courier services, and supply chain coordinators optimize warehouse capacity, secure telemetry, and eliminate routing delays.",
    icon: "📦",
    client: {
      name: "Airhub",
      logo: airhubLogo,
      slug: "airhub",
      desc: "Complete drone operations management, airspace compliance, and real-time aerial tracking systems.",
      metric: "50+ fleets controlled in real-time"
    }
  },
  ecommerce: {
    name: "Ecommerce",
    cardtitle: "Building Scalable and Engaging Online Stores",
    description: "The E-commerce industry involves building shopping frameworks, dynamic catalogs, secure transaction paths, and multi-vendor networks to reach customers globally.",
    extendedDesc: "We construct high-performance storefronts designed to scale. By introducing NextGen image caching, Stripe Connect multi-party payouts, and automated product catalog aggregators, we help sellers keep bounce rates low and conversions high.",
    icon: "🛒",
    client: {
      name: "Birds World",
      logo: birdsworldLogo,
      slug: "birdsworld",
      desc: "Global multi-vendor e-commerce marketplace connecting international sellers and checkouts.",
      metric: "75% accelerated seller onboarding"
    }
  },
  fintech: {
    name: "FinTech",
    cardtitle: "Fintech Solutions for a Secure and Efficient Future",
    description: "The Fintech industry combines finance and technology, encompassing mobile banking, online lending, peer-to-peer payments, blockchain, and cryptocurrency.",
    extendedDesc: "Financial software demands extreme reliability, bank-grade encryption, and bulletproof ledger schemas. We design microlending integrations, custom payment gateways, and banking middleware systems that handle high traffic securely.",
    icon: "💳",
    client: {
      name: "Bank Muscat",
      logo: bankmusqatLogo,
      slug: "bankmusqat",
      desc: "Advanced mobile banking application interfaces and secure retail banking transactional gateways.",
      metric: "3x transaction load speed optimization"
    }
  },
  trading: {
    name: "Trading",
    cardtitle: "Developing the AI powered Trading Applications",
    description: "The Trading industry involves the buying and selling of goods and services across different markets. Modern technology has transformed trading, making it faster.",
    extendedDesc: "Milliseconds matter in trade markets. We build high-frequency websocket APIs, real-time index charts, and AI-assisted automation pipelines that enable merchants and brokers to secure trades instantly.",
    icon: "📈",
    client: {
      name: "Tech Galaxy",
      logo: techgalaxyLogo,
      slug: "techgalaxy",
      desc: "High-throughput message brokers and wholesale e-trading execution engines.",
      metric: "50k websocket transactions/sec"
    }
  },
  tourism: {
    name: "Tourism",
    cardtitle: "Building intelligent travel platforms with AI-powered recommendations",
    description: "The Tourism industry encompasses businesses and services that cater to travelers — from accommodations and booking portals to personalized guides.",
    extendedDesc: "Modern travelers demand frictionless booking, instant ticket confirmations, and localized recommendations. We construct custom event reservation booking software, payment triggers, and localized recommendations engines.",
    icon: "✈️",
    client: {
      name: "Adventure Club",
      logo: adventureclubLogo,
      slug: "adventureclub",
      desc: "Real-time activity booking engine, reservation schedulers, and ticketing automation.",
      metric: "Zero overbooking events recorded"
    }
  },
  automotive: {
    name: "Automotive",
    cardtitle: "Developing connected car solutions, electric vehicle (EV)",
    description: "The Automotive industry is at the forefront of technological innovations, including electric vehicles and autonomous driving systems that transform transportation.",
    extendedDesc: "Digitizing automotive platforms requires seamless vehicle configuration UI, live service calendars, and dealership integrations. We build customer-facing sales portals that link dealerships with buyers.",
    icon: "🚗",
    client: {
      name: "Moosa Group",
      logo: moosaLogo,
      slug: "moosa",
      desc: "Dealership configurator, online booking workflows, and customer sales pipeline.",
      metric: "30% increase in digital service bookings"
    }
  },
  finance: {
    name: "Finance",
    cardtitle: "Advanced Financial Banking Applications",
    description: "The Finance industry involves secure monetary transactions, banking platforms, wealth management and digital wallets.",
    extendedDesc: "We modernize financial infrastructures by designing robust API integrations, responsive dashboards, and microservice architectures that deliver high security and compliance.",
    icon: "🏦",
    client: {
      name: "Bank Muscat",
      logo: bankmusqatLogo,
      slug: "bankmusqat",
      desc: "Advanced mobile banking application interfaces and secure retail banking transactional gateways.",
      metric: "3x transaction load speed optimization"
    }
  },
  insurance: {
    name: "Insurance",
    cardtitle: "Digital Insurance and Microlending Platforms",
    description: "Insurance technology enables quick claim processing, underwriting logic, and digital policy selection.",
    extendedDesc: "AI Pixal engineers digital insurance modules and microlending checkouts integrated with ML prediction models, helping underwriters calculate risk metrics instantaneously.",
    icon: "🛡️",
    client: {
      name: "Seed Finance",
      logo: seedlogoLogo,
      slug: "seedlogo",
      desc: "Microlending, savings tracking and microinsurance platform systems.",
      metric: "Scaled to 50,000 active users"
    }
  },
  marketplace: {
    name: "Marketplace",
    cardtitle: "Boutique Fashion and Multi-Vendor Hubs",
    description: "Marketplace ecosystems require flexible seller integrations, automated payouts, and fast image rendering.",
    extendedDesc: "We build premium marketplace checkouts, incorporating Stripe automated split payouts and optimized media delivery systems to maximize visitor retention.",
    icon: "🛍️",
    client: {
      name: "Singaf",
      logo: singafLogo,
      slug: "singaf",
      desc: "Premier Omani fashion and lifestyle boutique marketplace connecting Omani designers.",
      metric: "1.1 seconds average page load time"
    }
  },
  "augmented-reality": {
    name: "Augmented Reality",
    cardtitle: "Metaverse and Interactive Virtual Environments",
    description: "Augmented reality and virtual environments redefine fan engagement, immersive simulators, and gaming.",
    extendedDesc: "AI Pixal connects virtual worlds with web frontends, integrating provably fair outcome triggers, real-time animation feeds, and crypto transactions.",
    icon: "🕶️",
    client: {
      name: "Larace",
      logo: laraceLogo,
      slug: "larace",
      desc: "Virtual horse racing sports and blockchain metaverse gaming platform.",
      metric: "$1.2M+ secured in smart contracts"
    }
  },
  education: {
    name: "Education",
    cardtitle: "Global E-Learning Platforms & Skill Portals",
    description: "E-learning platforms require adaptive stream transcoding, interactive dashboards, and global content delivery.",
    extendedDesc: "We construct customized virtual classrooms, video compression pipelines, and certification workflows that keep learners engaged regardless of network speeds.",
    icon: "🎓",
    client: {
      name: "Universal Skills",
      logo: universalskillsLogo,
      slug: "universalskills",
      desc: "Adaptive video streaming portal and skill development certificates.",
      metric: "80% reduction in video buffering events"
    }
  },
  food: {
    name: "Food",
    cardtitle: "Restaurant Catering & Ingredient Traceability",
    description: "Food and catering tech manages online ordering menus, batch tracking, and direct delivery fleets.",
    extendedDesc: "We build direct meal-ordering applications and automated dispatcher apps that increase margins and trace compliance standards.",
    icon: "🍲",
    client: {
      name: "Halal Chef",
      logo: halalchefLogo,
      slug: "halalchef",
      desc: "Custom meal-prep orders and food batch traceability audit ledgers.",
      metric: "100% compliant audit logs"
    }
  }
};

export default function IndustryDetail() {
  const { id } = useParams();
  const industry = industriesData[id];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!industry) {
    return (
      <div className="min-h-screen bg-[#070508] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-bold text-white mb-4">Industry Not Found</h1>
        <p className="text-[#8791AD] mb-8">The industry sector you are looking for does not exist in our systems.</p>
        <Link to="/industries" className="btn-premium-blue px-6 py-3 rounded-full text-sm font-semibold">
          ← Back to Industries
        </Link>
      </div>
    );
  }

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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": industry.name,
        "item": `https://aipixel.tech/industries/${id}`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#070508]">
      <SEO
        title={`AI & Software Solutions for ${industry.name} | AI Pixel`}
        description={industry.description}
        canonicalPath={`/industries/${id}`}
        schema={breadcrumbSchema}
      />
      {/* Page Hero */}
      <PageHero
        badge="Industry Sector Transformation"
        title={industry.name}
        highlight="Sector"
        subtitle={industry.cardtitle}
        ctaText="Start Industry Project"
        ctaLink="#contact"
        secondaryText="All Industries"
        secondaryLink="/industries"
      />

      {/* Description Copy */}
      <section className="py-12 lg:py-16 bg-[#070508] border-t border-[#2D2B3B]/30 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-14 h-14 rounded-2xl bg-[#3567FF]/10 border border-[#3567FF]/20 flex items-center justify-center text-2xl">
              {industry.icon}
            </span>
            <h2 className="text-3xl font-extrabold text-white">Sector Overview</h2>
          </div>

          <p className="text-lg text-[#8791AD] leading-relaxed mb-12">
            {industry.extendedDesc}
          </p>

          <h3 className="text-2xl font-bold text-white mb-8 border-b border-[#2D2B3B]/40 pb-4">
            Respective Client Project
          </h3>

          {/* Respective Client Spotlight Card */}
          <div className="glow-card rounded-2xl p-8 border border-white/5 flex flex-col md:flex-row items-center gap-8 bg-[#1E1D28]/30">
            <div className="w-40 h-40 flex items-center justify-center bg-[#070508] rounded-xl p-4 border border-[#2D2B3B]/45">
              <img
                src={industry.client.logo}
                alt={industry.client.name}
                className="max-w-full max-h-full object-contain filter brightness-110"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#3567FF] bg-[#3567FF]/10 px-3 py-1 rounded-full border border-[#3567FF]/20">
                Partner Case Study
              </span>
              <h4 className="text-2xl font-bold text-white mt-3 mb-2">
                {industry.client.name} Project
              </h4>
              <p className="text-[#8791AD] text-sm leading-relaxed mb-4">
                {industry.client.desc}
              </p>
              <div className="text-[#61CE70] text-sm font-semibold mb-6">
                📈 Result: {industry.client.metric}
              </div>

              <Link
                to={`/clients/${industry.client.slug}`}
                className="btn-premium-blue px-6 py-3 rounded-full text-xs font-semibold inline-flex items-center gap-2"
              >
                View Case Study
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title={`Innovate in ${industry.name}`}
        subtitle="Let's build intelligent platforms with our specialized engineering teams today."
        primaryText="Schedule Call"
        primaryLink="#contact"
        secondaryText="All Industries"
        secondaryLink="/industries"
      />

      {/* Contact Form */}
      <div id="contact">
        <ContactusFormSection />
      </div>
    </div>
  );
}
