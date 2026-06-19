import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import PageHero from "../Components/PageHero";
import CTABanner from "../Components/CTABanner";
import ContactusFormSection from "../Components/ContactusFormSection";

// Import client logos
import moosaLogo from "../assets/moosa.png";
import laraceLogo from "../assets/larace.png";
import bankmusqatLogo from "../assets/bankmusqat.png";
import dtecLogo from "../assets/dtec.png";
import adventureclubLogo from "../assets/adventureclub.png";
import arkaanLogo from "../assets/arkaan.png";
import techgalaxyLogo from "../assets/techgalaxy.png";
import absherLogo from "../assets/absher.png";
import airhubLogo from "../assets/airhub.png";
import birdsworldLogo from "../assets/birdsworld.png";
import seedlogoLogo from "../assets/seedlogo.png";
import universalskillsLogo from "../assets/universalskills.png";
import turingLogo from "../assets/turing.png";
import halalchefLogo from "../assets/halalchef.png";
import royaldelhiLogo from "../assets/royaldelhi.png";
import singafLogo from "../assets/singaf.png";

const caseStudiesData = {
  dtec: {
    clientName: "Dtec",
    logo: dtecLogo,
    title: "Dtec Startup & Incubator Ecosystem Management Portal",
    industry: "Retail & Startup Incubators",
    metric: "45% increase in operational efficiency",
    challenge: "Managing thousands of tech startups, desk bookings, networking events, and billing cycles manually created massive administrative overhead and scheduling conflicts.",
    solution: "We engineered a clean, glassmorphic community and coworking reservation dashboard using React and Django. The system coordinates calendar synchronization, provides automated SMS desk alerts, and manages Stripe subscription integrations.",
    results: [
      "Onboarded over 1,000 active technology startups seamlessly.",
      "Achieved a 45% reduction in booking conflict tickets.",
      "Consolidated event organization, billing invoices, and resource tracking into a single panel."
    ]
  },
  moosa: {
    clientName: "Moosa Group",
    logo: moosaLogo,
    title: "Moosa Group Connected Automotive Configuration & Booking Portal",
    industry: "Automotive Distribution",
    metric: "30% increase in digital service bookings",
    challenge: "The dealer network operated with high offline friction. Customers couldn't configure vehicle accessories online, and booking repair operations required telephone desk queues.",
    solution: "AI Pixal developed a 3D accessory preview configurator, centralized dealer inventories database, and integrated an online booking system for vehicle maintenance visits.",
    results: [
      "Boosted digital workshop bookings by 30% within four months.",
      "Improved online sales inquiries conversion rates by 20%.",
      "Unified five regional dealer inventory records into one real-time cloud catalog."
    ]
  },
  bankmusqat: {
    clientName: "Bank Muscat",
    logo: bankmusqatLogo,
    title: "Bank Muscat Retail Banking UI Optimization & Middleware API",
    industry: "Banking & Finance",
    metric: "3x transaction speed improvement",
    challenge: "High consumer session volumes caused transaction queue delays. Mobile banking interfaces had layout clutter that caused user friction during transaction checkouts.",
    solution: "We designed a highly optimized, responsive retail banking middleware API layer using Go, and built clean, modular card interfaces to simplify local bank transactions.",
    results: [
      "Accelerated average query load times by 3x.",
      "Achieved sub-second transaction validation times.",
      "Drastically improved UX scores for user account settings dashboards."
    ]
  },
  adventureclub: {
    clientName: "Adventure Club",
    logo: adventureclubLogo,
    title: "Adventure Club Real-Time Reservation Scheduling Engine",
    industry: "Travel & Adventure Tourisms",
    metric: "Zero overbooking events recorded",
    challenge: "Accepting reservations through third-party platforms led to database synchronization delays, resulting in overbooked activities and unhappy customers.",
    solution: "We engineered a direct-to-consumer ticketing scheduler that uses WebSockets for real-time seat lockouts, and integrated regional payment links with dynamic barcode tickets.",
    results: [
      "Eliminated booking overlaps, achieving a zero overbooking rate.",
      "Moved over 60% of bookings to automated online checkouts.",
      "Reduced call center ticket support queries by 40%."
    ]
  },
  arkaan: {
    clientName: "Arkaan",
    logo: arkaanLogo,
    title: "Arkaan Commercial Construction Site Dispatch System",
    industry: "Construction & Infrastructure",
    metric: "Saved 200+ dispatcher hours monthly",
    challenge: "Coordinating cement trucks, raw materials, and staff across ten massive development sites relied on manual spreadsheets and voice radio calls.",
    solution: "AI Pixal designed a mobile logistics and dispatch tracking app for foreman phones, linked to a central cloud dashboard showing truck telemetry and status.",
    results: [
      "Saved dispatcher coordinators over 200 hours of phone verifications.",
      "Reduced material delivery lag times by 25%.",
      "Created an audit trail of material receipts."
    ]
  },
  larace: {
    clientName: "Larace",
    logo: laraceLogo,
    title: "Larace Blockchain Horse Racing Metaverse Platform",
    industry: "Blockchain & Sports Gaming",
    metric: "$1.2M+ secured in smart contracts",
    challenge: "Building virtual horse racing games requires random-outcome logic that players can audit and trust as provably fair, without central developer tampering.",
    solution: "We wrote gas-optimized Solidity smart contracts and deployed Chainlink VRF (Verifiable Random Function) triggers to process racing outcomes.",
    results: [
      "Processed over 100,000 virtual racing events safely.",
      "Secured more than $1.2M in smart contract transactions.",
      "Built a Web3 dashboard with web3.js for seamless digital wallet connectivity."
    ]
  },
  seedlogo: {
    clientName: "Seed Finance",
    logo: seedlogoLogo,
    title: "Seed Microlending & Savings Application Portal",
    industry: "Fintech",
    metric: "Scaled to 50,000 active users",
    challenge: "Manual underwritings made micro-loan distributions slow and expensive, preventing the app from scaling across fast-growing regions.",
    solution: "We developed a mobile microlending client and integrated an automated credit underwriting script using basic machine learning predictors.",
    results: [
      "Grew active accounts to 50,000 within the first quarter.",
      "Reduced average application-to-approval times to less than 3 minutes.",
      "Kept default rate below 2.5% through data-driven scoring."
    ]
  },
  techgalaxy: {
    clientName: "Tech Galaxy",
    logo: techgalaxyLogo,
    title: "Tech Galaxy Enterprise Websocket Trading Engine",
    industry: "Wholesale Trade & Technology",
    metric: "50,000 websocket events per second",
    challenge: "Lagging exchange feeds caused order executions to fail, leading to heavy losses for wholesale merchants.",
    solution: "We designed a high-throughput websocket broker in Go, using data-indexing to queue order requests with sub-millisecond lag.",
    results: [
      "Supported 50,000 trading requests per second under peak load.",
      "Achieved average feed latency of under 5 milliseconds.",
      "Provided brokers with instantaneous market data syncing."
    ]
  },
  turing: {
    clientName: "Turing IT Solutions",
    logo: turingLogo,
    title: "Turing AI-Powered Conversational Database Query Interface",
    industry: "IT Solutions & Business Intelligence",
    metric: "SQL extraction in seconds",
    challenge: "Non-technical executives struggled to generate business charts, relying on specialized database administrators for weekly SQL queries.",
    solution: "We implemented an LLM middleware that parses conversation English sentences into optimized PostgreSQL queries, rendering diagrams dynamically.",
    results: [
      "Enabled business leaders to query records directly in seconds.",
      "Reduced database team backlog by 75%.",
      "Deployed secure data-masking to prevent database leaks."
    ]
  },
  universalskills: {
    clientName: "Universal Skills",
    logo: universalskillsLogo,
    title: "Universal Skills Global Adaptive E-Learning Portal",
    industry: "Online Education",
    metric: "80% reduction in video buffering events",
    challenge: "High video buffering latency caused student bounce rates to spike in areas with low-bandwidth internet connectivity.",
    solution: "We deployed an adaptive video transcoder using HLS (HTTP Live Streaming) and configured a multi-region CDN caching strategy.",
    results: [
      "Reduced video buffering queries by 80%.",
      "Increased average class completion rate by 35%.",
      "Enabled video playbacks even at 100kbps connection speeds."
    ]
  },
  absher: {
    clientName: "Absher",
    logo: absherLogo,
    title: "Absher NFC Smart Business Cards Ecosystem",
    industry: "NFC Communications",
    metric: "10,000+ business profiles hosted",
    challenge: "Generating fast-loading profile links for physical NFC business cards required a serverless architecture that can render web content in milliseconds.",
    solution: "AI Pixal engineered a fast static site generator with global edge caching and built a profiling dashboard for NFC card owners.",
    results: [
      "Hosted over 10,000 digital business card profiles.",
      "Achieved page speeds scores of 98/100 on Google PageSpeed.",
      "Enabled contactless card shares in under 1 second."
    ]
  },
  airhub: {
    clientName: "Airhub",
    logo: airhubLogo,
    title: "Airhub Drone Telemetry & Airspace Compliance Dashboard",
    industry: "Drone Surveillance",
    metric: "50 fleets monitored simultaneously",
    challenge: "Tracking multiple flights, geo-fences, and compliance rules in real-time was limited by laggy mapping systems.",
    solution: "We created a WebGL map dashboard that processes telemetry from dozens of drones, checking geofence coordinates dynamically.",
    results: [
      "Allows simultaneous monitoring of 50 active drone flights.",
      "Achieved latency of under 50 milliseconds for mapping updates.",
      "Integrated airspace geo-database rules seamlessly."
    ]
  },
  birdsworld: {
    clientName: "Birds World",
    logo: birdsworldLogo,
    title: "Birds World Global Multi-Vendor E-Commerce Hub",
    industry: "E-Commerce",
    metric: "75% faster seller onboarding",
    challenge: "Fragmented seller interfaces and manual payment splits led to check-out delays and accounting overhead.",
    solution: "We built a customized merchant backend dashboard with Stripe Connect integrations to automatically split transactions at checkout.",
    results: [
      "Reduced vendor onboarding setup times by 75%.",
      "Supported thousands of daily shopping transactions.",
      "Minimized vendor payout administration to zero manual work."
    ]
  },
  halalchef: {
    clientName: "Halal Chef",
    logo: halalchefLogo,
    title: "Halal Chef Ingredient Traceability Booking Portal",
    industry: "Food & Beverage",
    metric: "100% compliant audit logs",
    challenge: "Demonstrating strict compliance with halal batch standards required an automated database trace log from supply to checkout.",
    solution: "We designed an ingredient trace ledger that records supply batch numbers and prints digital traceability certificates on buyer receipts.",
    results: [
      "Achieved 100% compliance ratings during food audits.",
      "Increased user checkout conversion by 15% due to transparency.",
      "Automated vendor shipment logs directly with inventory."
    ]
  },
  royaldelhi: {
    clientName: "Royal Delhi",
    logo: royaldelhiLogo,
    title: "Royal Delhi Delivery Fleet & Ordering App",
    industry: "Food & Beverage",
    metric: "22% margin expansion on direct orders",
    challenge: "High delivery fees from third-party applications reduced restaurant margins on food deliveries.",
    solution: "We engineered a direct online food catalog, customized dispatch app, and driver map system.",
    results: [
      "Shifted 40% of orders to the direct app, saving 22% on third-party commissions.",
      "Optimized dispatch paths to reduce delivery lag by 15 minutes.",
      "Enabled customers to track drivers in real-time."
    ]
  },
  singaf: {
    clientName: "Singaf",
    logo: singafLogo,
    title: "Singaf Premium Fashion Boutique Marketplace",
    industry: "E-Commerce",
    metric: "1.1 seconds average page load time",
    challenge: "High-resolution boutique product images caused slow pages load times, leading to cart drops.",
    solution: "We deployed next-generation image format transcoding, pre-rendering, and a global edge caching system.",
    results: [
      "Reduced average page loading times to 1.1 seconds.",
      "Lowered shopping cart drops by 28%.",
      "Designed a responsive clothing grid that scales across all screen ratios."
    ]
  }
};

export default function CaseStudyDetail() {
  const { id } = useParams();
  const caseStudy = caseStudiesData[id];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-[#070508] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-bold text-white mb-4">Case Study Not Found</h1>
        <p className="text-[#8791AD] mb-8">The case study you are looking for does not exist in our systems.</p>
        <Link to="/clients" className="btn-premium-blue px-6 py-3 rounded-full text-sm font-semibold">
          ← Back to Clients
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070508]">
      {/* Hero Banner */}
      <PageHero
        badge="Case Study / Success Story"
        title={caseStudy.clientName}
        highlight="Case Study"
        subtitle={caseStudy.title}
        ctaText="Build a Similar Solution"
        ctaLink="#contact"
        secondaryText="All Valued Clients"
        secondaryLink="/clients"
      />

      {/* Main Copy */}
      <section className="py-12 lg:py-16 bg-[#070508] border-t border-[#2D2B3B]/30 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/3 left-1/3 w-[450px] h-[450px] bg-[#3567FF]/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          
          {/* Logo and Industry header */}
          <div className="flex flex-col sm:flex-row items-center gap-8 mb-12 border-b border-[#2D2B3B]/40 pb-8 text-center sm:text-left">
            <div className="w-36 h-36 flex items-center justify-center bg-[#1E1D28] rounded-xl p-4 border border-[#2D2B3B]/45">
              <img
                src={caseStudy.logo}
                alt={caseStudy.clientName}
                className="max-w-full max-h-full object-contain filter brightness-110"
              />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-white">{caseStudy.clientName}</h2>
              <p className="text-[#8791AD] text-sm mt-1">Sector: {caseStudy.industry}</p>
              <div className="text-[#61CE70] text-lg font-bold mt-3">
                📈 ROI: {caseStudy.metric}
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {/* Challenge */}
            <div className="glow-card rounded-2xl p-8 border border-white/5 bg-[#1E1D28]/25">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                ⚠️ The Challenge
              </h3>
              <p className="text-[#8791AD] leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="glow-card rounded-2xl p-8 border border-white/5 bg-[#1E1D28]/25">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                💡 Our Solution
              </h3>
              <p className="text-[#8791AD] leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>

            {/* Results */}
            <div className="glow-card rounded-2xl p-8 border border-white/5 bg-[#1E1D28]/25">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                🏆 Key Results & Impact
              </h3>
              <ul className="space-y-4">
                {caseStudy.results.map((result, idx) => (
                  <li key={idx} className="text-[#8791AD] leading-relaxed flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#61CE70]/10 border border-[#61CE70]/30 text-[#61CE70] flex items-center justify-center text-xs font-bold mt-1">
                      ✓
                    </span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title={`Scale Your Product Like ${caseStudy.clientName}`}
        subtitle="Schedule a free technology consulting call with our software engineers to review your requirements today."
        primaryText="Schedule Session"
        primaryLink="#contact"
        secondaryText="Browse Other Work"
        secondaryLink="/clients"
      />

      {/* Contact Form */}
      <div id="contact">
        <ContactusFormSection />
      </div>
    </div>
  );
}
