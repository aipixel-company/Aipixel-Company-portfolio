import React, { useState, useEffect, useRef } from "react";
import SEO from "./SEO";
import {
  ShieldCheck,
  Building2,
  FileText,
  Cpu,
  Globe,
  Share2,
  Server,
  Clock,
  UserCheck,
  Target,
  Cookie,
  Lock,
  RefreshCw,
  HelpCircle,
  Mail,
  MapPin,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ChevronRight
} from "lucide-react";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { id: "who-we-are", title: "1. Who are we?", icon: Building2 },
    { id: "why-we-process", title: "2. Why do we process your data?", icon: FileText },
    { id: "what-information", title: "3. What information do we process?", icon: UserCheck },
    { id: "how-we-use-ai", title: "4. How we use AI tools", icon: Cpu },
    { id: "google-services", title: "5. Data from Google services", icon: Globe },
    { id: "data-sharing", title: "6. Who will we share your data with?", icon: Share2 },
    { id: "data-location", title: "7. Where is your data processed?", icon: Server },
    { id: "data-retention", title: "8. How long will my data be kept?", icon: Clock },
    { id: "your-rights", title: "9. What are my rights?", icon: ShieldCheck },
    { id: "profiling", title: "10. Do you profile me?", icon: Target },
    { id: "cookies", title: "11. What about cookies?", icon: Cookie },
    { id: "data-security", title: "12. Is my data secured?", icon: Lock },
    { id: "policy-changes", title: "13. Changes to this policy", icon: RefreshCw },
    { id: "questions-contact", title: "14. Still have some questions?", icon: HelpCircle },
  ];

  const sectionRefs = useRef([]);

  const scrollToSection = (index) => {
    setActiveSection(index);
    const element = sectionRefs.current[index];
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sectionRefs.current[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections.length]);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://aipixel.tech",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Privacy Policy",
        "item": "https://aipixel.tech/privacy-policy",
      },
    ],
  };

  return (
    <section className="bg-[#070508] min-h-screen text-[#8791AD] font-sans selection:bg-[#3567FF]/30 selection:text-white">
      <SEO
        title="Privacy Policy | AI-PIXAL"
        description="Official Privacy Policy for AI-PIXAL (AIPIXAL LTD). Discover how we safeguard your data, use AI responsibly, and comply with UK GDPR and global privacy standards."
        canonicalPath="/privacy-policy"
        schema={breadcrumbSchema}
      />

      {/* Hero Header */}
      <div className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 text-center border-b border-[#2D2B3B]/40 overflow-hidden">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 75% 55% at 50% 0%, rgba(53,103,255,0.16), transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#3567FF] border border-[#3567FF]/30 bg-[#3567FF]/10 backdrop-blur-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-[#3567FF]" />
            Data Protection & Privacy
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            AI-PIXAL Privacy Policy
          </h1>
          <p className="text-sm font-medium text-[#3567FF] mt-3">
            Last updated: 23 September 2026
          </p>
          <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-[#3567FF] to-transparent mx-auto mt-6" />
          <p className="leading-relaxed mt-6 text-[#8791AD] text-base sm:text-lg max-w-2xl mx-auto">
            We at AI-PIXAL respect your personal data. That is why we have tried to make this Privacy Policy clear and understandable, while boring only to the extent required by the law.
          </p>

          {/* Key Compliance Badges */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-[#1E1D28] text-white border border-[#2D2B3B]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#61CE70]" /> UK GDPR & DPA 2018
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-[#1E1D28] text-white border border-[#2D2B3B]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#3567FF]" /> Human in the Loop AI
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-[#1E1D28] text-white border border-[#2D2B3B]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#3567FF]" /> Google API Limited Use Compliant
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-[#1E1D28] text-white border border-[#2D2B3B]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#61CE70]" /> Transparent Data Retention
            </span>
          </div>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 py-16 px-4 sm:px-6 lg:px-8">
        {/* Sticky Sidebar Navigation */}
        <aside className="w-full lg:w-80 flex-shrink-0">
          <div className="lg:sticky lg:top-28 space-y-6">
            <div className="bg-[#1E1D28] rounded-2xl border border-[#2D2B3B] p-5 shadow-xl">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#2D2B3B]">
                <h2 className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#3567FF]" />
                  Contents
                </h2>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#3567FF]/10 text-[#3567FF] font-mono">
                  14 Sections
                </span>
              </div>
              <nav aria-label="Table of Contents">
                <ul className="space-y-1">
                  {sections.map((sec, index) => {
                    const IconComponent = sec.icon;
                    const isActive = activeSection === index;
                    return (
                      <li key={sec.id}>
                        <button
                          type="button"
                          onClick={() => scrollToSection(index)}
                          className={`w-full text-left px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center justify-between group ${
                            isActive
                              ? "bg-[#3567FF] text-white shadow-md shadow-[#3567FF]/20"
                              : "text-[#8791AD] hover:text-white hover:bg-white/5"
                          }`}
                        >
                          <span className="flex items-center gap-2.5 truncate">
                            <IconComponent
                              className={`w-4 h-4 flex-shrink-0 transition-colors ${
                                isActive ? "text-white" : "text-[#8791AD] group-hover:text-[#3567FF]"
                              }`}
                            />
                            <span className="truncate">{sec.title}</span>
                          </span>
                          <ChevronRight
                            className={`w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity ${
                              isActive ? "opacity-100 text-white" : "text-[#8791AD]"
                            }`}
                          />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            {/* Quick Entity Card in Sidebar */}
            <div className="hidden lg:block bg-[#1E1D28]/60 rounded-2xl border border-[#2D2B3B] p-5 text-xs space-y-3">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Building2 className="w-4 h-4 text-[#3567FF]" />
                Registered Entity
              </div>
              <p className="text-[#8791AD] leading-relaxed">
                <strong className="text-white">AIPIXAL LTD</strong>
                <br />
                CUI No: <span className="font-mono text-white/90">0336561</span>
                <br />
                PSEB Reg: <span className="font-mono text-white/90">Z-25-20521/26</span>
              </p>
              <div className="pt-2 border-t border-[#2D2B3B] flex flex-col gap-1.5 text-[#8791AD]">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#3567FF] flex-shrink-0" />
                  37 L Block, Johar Town, Lahore
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#3567FF] flex-shrink-0" />
                  <a
                    href="mailto:mu4374923@gmail.com"
                    className="hover:text-white transition-colors underline decoration-[#3567FF]/50"
                  >
                    mu4374923@gmail.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </aside>

        {/* Policy Content Sections */}
        <main className="w-full lg:flex-1 space-y-12">
          {/* Section 1 */}
          <article
            ref={(el) => (sectionRefs.current[0] = el)}
            id="who-we-are"
            className="glow-card rounded-2xl p-6 sm:p-8 relative"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#3567FF]/15 text-[#3567FF] text-sm font-bold flex items-center justify-center border border-[#3567FF]/30">
                1
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight">Who are we?</h2>
            </div>
            <div className="space-y-4 text-base leading-relaxed">
              <p>
                We are <strong className="text-white">AIPIXAL LTD</strong> (Corporate Unique Identification No: <span className="font-mono text-white">0336561</span>, PSEB Registration No: <span className="font-mono text-white">Z-25-20521/26</span>), a company registered in England and Wales under company number <span className="font-mono text-white">0336561</span>, with our registered operational office at <span className="text-white">37 L Block, Phase Johar Town, Lahore</span>. We are an AI and software engineering company working with clients in the United Kingdom, Oman and worldwide. Our growth brand is <strong className="text-white">Devziv</strong>.
              </p>
              <p>
                For this policy, we are the <strong className="text-white">data controller</strong> for the personal data described here. We also have team members and operations in Pakistan and Oman, who work for us under our instructions and this policy.
              </p>
            </div>

            {/* Entity Highlights Card */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#070508]/60 rounded-xl p-4 border border-[#2D2B3B]">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#8791AD]">Company Name</span>
                <p className="text-sm font-semibold text-white">AIPIXAL LTD (AI-PIXAL)</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#8791AD]">Registration & CUI No.</span>
                <p className="text-sm font-semibold text-white font-mono">0336561</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#8791AD]">PSEB Registration</span>
                <p className="text-sm font-semibold text-white font-mono">Z-25-20521/26</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#8791AD]">Global Footprint & Brands</span>
                <p className="text-sm font-semibold text-white">UK, Oman, Pakistan & Worldwide (Devziv)</p>
              </div>
            </div>
          </article>

          {/* Section 2 */}
          <article
            ref={(el) => (sectionRefs.current[1] = el)}
            id="why-we-process"
            className="glow-card rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#3567FF]/15 text-[#3567FF] text-sm font-bold flex items-center justify-center border border-[#3567FF]/30">
                2
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Why do we process your data, and on what legal basis?
              </h2>
            </div>
            <p className="text-base leading-relaxed mb-6">
              UK data protection law asks us to tell you not only why we use your data, but on what legal basis. Here it is, plainly:
            </p>

            {/* Table */}
            <div className="overflow-x-auto rounded-xl border border-[#2D2B3B] mb-6">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1E1D28] border-b border-[#2D2B3B] text-white font-semibold">
                    <th className="py-3.5 px-4 sm:px-6 w-3/5">Why</th>
                    <th className="py-3.5 px-4 sm:px-6 w-2/5">Legal basis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2D2B3B]">
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 sm:px-6 text-white font-medium">
                      To reply to your enquiry, prepare a proposal, and deliver work you have asked us for
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <span className="inline-block px-2.5 py-1 rounded-md text-xs font-medium bg-[#3567FF]/15 text-[#3567FF] border border-[#3567FF]/30">
                        Contract, or steps you asked us to take before a contract
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 sm:px-6 text-white font-medium">
                      To send invoices, keep accounts and meet tax and legal duties
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <span className="inline-block px-2.5 py-1 rounded-md text-xs font-medium bg-[#61CE70]/15 text-[#61CE70] border border-[#61CE70]/30">
                        Legal obligation
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 sm:px-6 text-white font-medium">
                      To keep our website, systems and data secure
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <span className="inline-block px-2.5 py-1 rounded-md text-xs font-medium bg-amber-500/15 text-amber-400 border border-amber-500/30">
                        Legitimate interests
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 sm:px-6 text-white font-medium">
                      To follow up with businesses about work that is relevant to them
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <span className="inline-block px-2.5 py-1 rounded-md text-xs font-medium bg-amber-500/15 text-amber-400 border border-amber-500/30">
                        Legitimate interests (you can object at any time, and we will stop)
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 sm:px-6 text-white font-medium">
                      To send you marketing emails, if you are an individual
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <span className="inline-block px-2.5 py-1 rounded-md text-xs font-medium bg-purple-500/15 text-purple-300 border border-purple-500/30">
                        Consent (you can withdraw it at any time)
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 rounded-xl bg-[#070508]/70 border border-[#2D2B3B] text-sm leading-relaxed">
              <p>
                You can always withdraw your consent, or object to processing based on legitimate interests, by leaving us a clear note at the contact below. If you object, we stop, unless we have a compelling legal reason not to, and we will tell you if that is the case.
              </p>
            </div>
          </article>

          {/* Section 3 */}
          <article
            ref={(el) => (sectionRefs.current[2] = el)}
            id="what-information"
            className="glow-card rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#3567FF]/15 text-[#3567FF] text-sm font-bold flex items-center justify-center border border-[#3567FF]/30">
                3
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                What information do we process?
              </h2>
            </div>
            <p className="text-base leading-relaxed mb-6">
              Here is the list of personal data we may hold about you:
            </p>

            <ul className="space-y-3.5 mb-8">
              {[
                {
                  title: "Your full name, job title and company name",
                  detail: "Used for professional correspondence, proposal preparation, and business relationship management.",
                },
                {
                  title: "Your email address and phone number",
                  detail: "Used for direct client communication, project updates, and meeting scheduling.",
                },
                {
                  title: "What you tell us when you contact us or work with us",
                  detail: "Includes messages, project details, requirements specifications, and documents you share.",
                },
                {
                  title: "Records of calls and meetings we have had with you",
                  detail: "Dates, meeting notes, action items, and audio/video recordings only if you have explicitly agreed to them.",
                },
                {
                  title: "Invoicing and payment details",
                  detail: "We never store full card numbers. All payments are securely processed by established providers like PayPal and Payoneer.",
                },
                {
                  title: "Website visit data",
                  detail: "The fact that you visited our website, the pages you viewed, and which website referred you to aipixal.tech.",
                },
                {
                  title: "Basic technical data",
                  detail: "IP address, browser type, operating system, and device identifiers, retained strictly for security and diagnostic purposes.",
                },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-[#070508]/40 border border-[#2D2B3B]/60"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#3567FF] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                    <p className="text-xs text-[#8791AD] mt-0.5">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/25 text-sm text-amber-200/90 leading-relaxed">
              <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <p>
                <strong className="text-amber-300">Special Category Data:</strong> We do not collect special category data (for example health, religion or political views) unless you choose to share it with us for a specific project, and we ask you not to.
              </p>
            </div>
          </article>

          {/* Section 4 */}
          <article
            ref={(el) => (sectionRefs.current[3] = el)}
            id="how-we-use-ai"
            className="glow-card rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#3567FF]/15 text-[#3567FF] text-sm font-bold flex items-center justify-center border border-[#3567FF]/30">
                4
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                How we use AI tools
              </h2>
            </div>
            <p className="text-base leading-relaxed mb-6">
              We are an AI company, and we use AI tools ourselves, including an internal assistant that helps our team stay organised. It may, for example, summarise messages and emails we have exchanged with you, remind us of what we agreed, help draft replies, and prepare proposals and documents.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#070508]/60 border border-[#2D2B3B] space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <UserCheck className="w-4 h-4 text-[#3567FF]" />
                  A person stays in charge
                </div>
                <p className="text-xs leading-relaxed">
                  Nothing is sent to you, published or paid on our behalf without a member of our team approving it.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#070508]/60 border border-[#2D2B3B] space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <Lock className="w-4 h-4 text-[#61CE70]" />
                  No automated decisions about you
                </div>
                <p className="text-xs leading-relaxed">
                  We do not make decisions that have legal or similarly significant effects on you by automated means alone.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#070508]/60 border border-[#2D2B3B] space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#3567FF]" />
                  Trusted providers only
                </div>
                <p className="text-xs leading-relaxed">
                  Our AI tools run on the infrastructure of established providers acting as our processors (see section 6). We choose settings and plans under which your data is not used to train their public models, where the provider offers that choice.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#070508]/60 border border-[#2D2B3B] space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <Target className="w-4 h-4 text-purple-400" />
                  You can opt out
                </div>
                <p className="text-xs leading-relaxed">
                  If you would rather your communications with us were not processed by AI tools, tell us and we will respect that.
                </p>
              </div>
            </div>
          </article>

          {/* Section 5 */}
          <article
            ref={(el) => (sectionRefs.current[4] = el)}
            id="google-services"
            className="glow-card rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#3567FF]/15 text-[#3567FF] text-sm font-bold flex items-center justify-center border border-[#3567FF]/30">
                5
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Data from Google services
              </h2>
            </div>
            <div className="space-y-4 text-base leading-relaxed">
              <p>
                Our internal tools may connect to Google services (such as Gmail, Google Calendar and Google Drive) for AI-PIXAL's own accounts.
              </p>
              <div className="p-5 rounded-xl bg-[#3567FF]/10 border border-[#3567FF]/30 text-white text-sm leading-relaxed space-y-3">
                <p className="font-semibold text-[#3567FF] flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  Google API Services User Data Policy Compliance
                </p>
                <p className="text-[#8791AD]">
                  AI-PIXAL's use and transfer of information received from Google APIs to any other app adheres to the{" "}
                  <strong className="text-white">Google API Services User Data Policy</strong>, including the Limited Use requirements.
                </p>
                <p className="text-white font-medium">
                  In plain words: this data is used only to provide those internal features to our own team, it is never sold, never used for advertising, and never used to train general AI models.
                </p>
              </div>
            </div>
          </article>

          {/* Section 6 */}
          <article
            ref={(el) => (sectionRefs.current[5] = el)}
            id="data-sharing"
            className="glow-card rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#3567FF]/15 text-[#3567FF] text-sm font-bold flex items-center justify-center border border-[#3567FF]/30">
                6
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Who will we share your data with?
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed">
              <p className="text-white font-medium">
                We never sell your personal data. We share it only with:
              </p>

              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-[#070508]/60 border border-[#2D2B3B]">
                  <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                    <Server className="w-4 h-4 text-[#3567FF]" />
                    Service providers (processors)
                  </h3>
                  <p className="text-xs text-[#8791AD] mb-3">
                    Who help us run the business, under written contracts that require them to protect your data as carefully as we do. These fall into these categories:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <li className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3567FF]" />
                      <span><strong className="text-white">Email, calendar & storage:</strong> Google Workspace</span>
                    </li>
                    <li className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3567FF]" />
                      <span><strong className="text-white">Messaging:</strong> WhatsApp, Slack</span>
                    </li>
                    <li className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3567FF]" />
                      <span><strong className="text-white">AI & Model providers:</strong> Anthropic, Google, Cloudflare, fal.ai, ElevenLabs</span>
                    </li>
                    <li className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3567FF]" />
                      <span><strong className="text-white">Hosting & Web:</strong> Scalable cloud providers</span>
                    </li>
                    <li className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3567FF]" />
                      <span><strong className="text-white">Payment processors:</strong> PayPal, Payoneer</span>
                    </li>
                    <li className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3567FF]" />
                      <span><strong className="text-white">Advisers:</strong> Certified accountants & legal counsel</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#070508]/60 border border-[#2D2B3B]">
                  <h3 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#61CE70]" />
                    Our international team members
                  </h3>
                  <p className="text-xs text-[#8791AD]">
                    Our team members in the UK, Oman and Pakistan, who need the data to do the work, under strict confidentiality obligations.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#070508]/60 border border-[#2D2B3B]">
                  <h3 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    Authorities
                  </h3>
                  <p className="text-xs text-[#8791AD]">
                    Where statutory laws, courts, or regulatory obligations strictly require it.
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#8791AD] italic">
                A current list of the providers we use is available on request.
              </p>
            </div>
          </article>

          {/* Section 7 */}
          <article
            ref={(el) => (sectionRefs.current[6] = el)}
            id="data-location"
            className="glow-card rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#3567FF]/15 text-[#3567FF] text-sm font-bold flex items-center justify-center border border-[#3567FF]/30">
                7
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Where is your data processed?
              </h2>
            </div>
            <div className="space-y-4 text-base leading-relaxed">
              <p>
                Your data is processed in the <strong className="text-white">United Kingdom</strong>, and may also be processed in <strong className="text-white">Pakistan</strong> and <strong className="text-white">Oman</strong>, where members of our team work, and in countries where our service providers operate (for example the United States and the European Union).
              </p>
              <div className="p-4 rounded-xl bg-[#070508]/60 border border-[#2D2B3B] space-y-2 text-sm">
                <h3 className="font-semibold text-white flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#3567FF]" />
                  International Transfer Safeguards
                </h3>
                <p>
                  Where your data leaves the UK to a country that the UK has not recognised as providing adequate protection, we protect it with appropriate safeguards, such as the <strong className="text-white">UK International Data Transfer Agreement (IDTA)</strong> or the <strong className="text-white">UK Addendum to the EU Standard Contractual Clauses (SCCs)</strong>. You can ask us for a copy of the relevant safeguards.
                </p>
              </div>
              <p className="text-sm">
                If you are in Oman, we also respect your rights under Oman's <strong className="text-white">Personal Data Protection Law (Royal Decree 6/2022)</strong>, including its requirements around consent for marketing.
              </p>
            </div>
          </article>

          {/* Section 8 */}
          <article
            ref={(el) => (sectionRefs.current[7] = el)}
            id="data-retention"
            className="glow-card rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#3567FF]/15 text-[#3567FF] text-sm font-bold flex items-center justify-center border border-[#3567FF]/30">
                8
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                How long will my data be kept?
              </h2>
            </div>
            <p className="text-base leading-relaxed mb-6">
              We keep your data only as long as we need it:
            </p>

            {/* Retention Table */}
            <div className="overflow-x-auto rounded-xl border border-[#2D2B3B] mb-6">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1E1D28] border-b border-[#2D2B3B] text-white font-semibold">
                    <th className="py-3.5 px-4 sm:px-6 w-1/2">Data</th>
                    <th className="py-3.5 px-4 sm:px-6 w-1/2">How long</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2D2B3B]">
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 text-white font-medium">
                      Enquiries that do not lead to work
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-[#8791AD]">
                      Up to 2 years after our last contact
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 text-white font-medium">
                      Client and project records
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-[#8791AD]">
                      For the relationship, then up to 6 years (for legal and accounting reasons)
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 text-white font-medium">
                      Invoices and financial records
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-[#8791AD]">
                      6 years after the end of the financial year they relate to (UK law)
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 text-white font-medium">
                      Marketing preferences
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-[#8791AD]">
                      Until you unsubscribe or object; we keep a short record that you opted out, so we do not contact you again
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 text-white font-medium">
                      Website and security logs
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-[#8791AD]">
                      Up to 90 days
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm">
              Don't forget that you can ask us to delete your data at any time, as described below.
            </p>
          </article>

          {/* Section 9 */}
          <article
            ref={(el) => (sectionRefs.current[8] = el)}
            id="your-rights"
            className="glow-card rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#3567FF]/15 text-[#3567FF] text-sm font-bold flex items-center justify-center border border-[#3567FF]/30">
                9
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                What are my rights?
              </h2>
            </div>
            <p className="text-base leading-relaxed mb-6">
              Under UK data protection law, you have these rights:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                { title: "The right to be informed", desc: "That is what this transparent policy is for." },
                { title: "The right of access", desc: "Obtain a full copy of the data we hold about you." },
                { title: "The right to rectification", desc: "Fixing anything that is inaccurate or incomplete." },
                { title: "The right to erasure", desc: "Having your data permanently erased ('right to be forgotten')." },
                { title: "The right to restrict processing", desc: "Pausing the use of your data under specific conditions." },
                { title: "The right to data portability", desc: "Receiving your data in a structured, machine-readable format." },
                { title: "The right to object", desc: "Including the right to stop direct marketing at any time." },
                { title: "Rights in relation to automated decision-making", desc: "Protection against solely automated decisions and profiling." },
                { title: "The right to withdraw your consent", desc: "Freely revoke consent at any time without penalty." },
              ].map((r, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-[#070508]/50 border border-[#2D2B3B] flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-[#3567FF]/10 text-[#3567FF] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{r.title}</h3>
                    <p className="text-xs text-[#8791AD] mt-0.5">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#070508]/60 border border-[#2D2B3B] space-y-3 text-sm">
              <p className="text-white font-medium">
                We will reply within one month. There is no charge in most cases.
              </p>
              <div className="pt-3 border-t border-[#2D2B3B] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <p>
                  You also have the right to complain to the UK Information Commissioner's Office (ICO). We would appreciate the chance to put things right first, so please contact us before going to the ICO.
                </p>
                <a
                  href="https://ico.org.uk"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#3567FF] hover:underline flex-shrink-0 font-medium"
                >
                  ico.org.uk <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </article>

          {/* Section 10 */}
          <article
            ref={(el) => (sectionRefs.current[9] = el)}
            id="profiling"
            className="glow-card rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#3567FF]/15 text-[#3567FF] text-sm font-bold flex items-center justify-center border border-[#3567FF]/30">
                10
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Do you profile me?
              </h2>
            </div>
            <p className="text-base leading-relaxed">
              If you have agreed to receive marketing from us, or you work at a business we think our services would help, we use the information described in this policy to make what we send you more relevant. That's all the profiling we do, and you can object to it at any time.
            </p>
          </article>

          {/* Section 11 */}
          <article
            ref={(el) => (sectionRefs.current[10] = el)}
            id="cookies"
            className="glow-card rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#3567FF]/15 text-[#3567FF] text-sm font-bold flex items-center justify-center border border-[#3567FF]/30">
                11
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                What about cookies?
              </h2>
            </div>
            <div className="space-y-4 text-base leading-relaxed mb-6">
              <p>
                If you've read this policy up to this moment, we believe you deserve a delicious cookie. We also place some small, tasty bits of data on your device, but only with your permission when they are not essential.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#070508]/60 border border-[#2D2B3B]">
                  <h3 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#61CE70]" />
                    Essential Cookies
                  </h3>
                  <p className="text-xs text-[#8791AD]">
                    Essential cookies keep the website working and secure. These do not need your consent.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#070508]/60 border border-[#2D2B3B]">
                  <h3 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                    <Target className="w-4 h-4 text-[#3567FF]" />
                    Analytics & Marketing Cookies
                  </h3>
                  <p className="text-xs text-[#8791AD]">
                    Help us understand how the site is used. We only set these if you accept them in our cookie banner, and you can change your mind at any time.
                  </p>
                </div>
              </div>
            </div>

            {/* Cookie List Table */}
            <div className="overflow-x-auto rounded-xl border border-[#2D2B3B]">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1E1D28] border-b border-[#2D2B3B] text-white font-semibold">
                    <th className="py-3 px-4">Cookie</th>
                    <th className="py-3 px-4">Provider</th>
                    <th className="py-3 px-4">Purpose</th>
                    <th className="py-3 px-4">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2D2B3B]">
                  <tr className="hover:bg-white/[0.02]">
                    <td className="py-3 px-4 font-mono text-[#3567FF]">_ga</td>
                    <td className="py-3 px-4 text-white">Google Analytics</td>
                    <td className="py-3 px-4 text-[#8791AD]">Distinguishes unique users and tracks website metrics anonymously</td>
                    <td className="py-3 px-4 text-white font-mono">2 years</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02]">
                    <td className="py-3 px-4 font-mono text-[#3567FF]">_ga_*</td>
                    <td className="py-3 px-4 text-white">Google Analytics</td>
                    <td className="py-3 px-4 text-[#8791AD]">Used to persist session state and event parameters</td>
                    <td className="py-3 px-4 text-white font-mono">2 years</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02]">
                    <td className="py-3 px-4 font-mono text-[#61CE70]">theme_state</td>
                    <td className="py-3 px-4 text-white">AI-PIXAL</td>
                    <td className="py-3 px-4 text-[#8791AD]">Essential session navigation and UI rendering preferences</td>
                    <td className="py-3 px-4 text-white font-mono">Session</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          {/* Section 12 */}
          <article
            ref={(el) => (sectionRefs.current[11] = el)}
            id="data-security"
            className="glow-card rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#3567FF]/15 text-[#3567FF] text-sm font-bold flex items-center justify-center border border-[#3567FF]/30">
                12
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Is my data secured?
              </h2>
            </div>
            <div className="space-y-4 text-base leading-relaxed">
              <p>
                We take appropriate technical and organisational measures to keep your data safe, as required by UK data protection law. These include:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Access to personal data only for people who need it",
                  "Secrets and passwords kept in secure encrypted storage, never in plain files",
                  "Encryption in transit, and multi-factor sign-in on our key accounts",
                  "Human approval before anything leaves our systems on our behalf",
                  "Regular reviews of the providers we use",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-[#070508]/50 border border-[#2D2B3B] flex items-center gap-2.5 text-xs sm:text-sm text-white font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#61CE70] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm">
                Our security practices follow recognised frameworks, and we intend to seek formal certification (such as ISO/IEC 27001) as the business grows. If we do, we will say so here.
              </p>

              <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/25 text-rose-200/90 text-sm leading-relaxed">
                If a personal data breach ever puts your rights at risk, we will tell you and the ICO as the law requires.
              </div>
            </div>
          </article>

          {/* Section 13 */}
          <article
            ref={(el) => (sectionRefs.current[12] = el)}
            id="policy-changes"
            className="glow-card rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#3567FF]/15 text-[#3567FF] text-sm font-bold flex items-center justify-center border border-[#3567FF]/30">
                13
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Changes to this policy
              </h2>
            </div>
            <p className="text-base leading-relaxed">
              We will update this policy when the way we handle personal data changes. The date at the top always shows the latest version. If a change is significant, we will let our clients know.
            </p>
          </article>

          {/* Section 14 */}
          <article
            ref={(el) => (sectionRefs.current[13] = el)}
            id="questions-contact"
            className="glow-card rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#3567FF]/15 text-[#3567FF] text-sm font-bold flex items-center justify-center border border-[#3567FF]/30">
                14
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Still have some questions?
              </h2>
            </div>
            <div className="space-y-4 text-base leading-relaxed mb-6">
              <p>
                You can reach us at{" "}
                <a
                  href="mailto:mu4374923@gmail.com"
                  className="text-white font-semibold underline decoration-[#3567FF] hover:text-[#3567FF] transition-colors"
                >
                  mu4374923@gmail.com
                </a>{" "}
                or{" "}
                <a
                  href="mailto:privacy@aipixal.tech"
                  className="text-white font-semibold underline decoration-[#3567FF] hover:text-[#3567FF] transition-colors"
                >
                  privacy@aipixal.tech
                </a>{" "}
                if you:
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  "Want to know more about the privacy of your information",
                  "Want to make a request about your personal data",
                  "Want to tell us we have got something wrong",
                  "Want to share how we could make our privacy practices better",
                  "Are just bored and want to talk about privacy",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-[#8791AD]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3567FF]" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm italic text-[#8791AD]">
                We promise we'll reply. At least once, if you are just bored.
              </p>
            </div>

            {/* Corporate Identification Badge Card */}
            <div className="bg-[#070508] rounded-xl border border-[#2D2B3B] p-5 sm:p-6 space-y-4">
              <div className="flex items-center gap-2 text-white font-bold text-sm tracking-wide">
                <Building2 className="w-5 h-5 text-[#3567FF]" />
                Official Corporate Registration Details
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div>
                  <span className="text-[#8791AD] block text-xs">Entity / Organization</span>
                  <span className="text-white font-semibold">AI-PIXAL (AIPIXAL LTD)</span>
                </div>
                <div>
                  <span className="text-[#8791AD] block text-xs">Corporate Unique Identification No (CUI)</span>
                  <span className="text-white font-mono font-semibold">0336561</span>
                </div>
                <div>
                  <span className="text-[#8791AD] block text-xs">PSEB Registration No</span>
                  <span className="text-white font-mono font-semibold">Z-25-20521/26</span>
                </div>
                <div>
                  <span className="text-[#8791AD] block text-xs">Official Contact Email</span>
                  <a
                    href="mailto:mu4374923@gmail.com"
                    className="text-[#3567FF] hover:underline font-mono"
                  >
                    mu4374923@gmail.com
                  </a>
                </div>
                <div className="sm:col-span-2 pt-2 border-t border-[#2D2B3B]">
                  <span className="text-[#8791AD] block text-xs">Registered Operations Address</span>
                  <span className="text-white">37 L Block, Phase Johar Town, Lahore</span>
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>
    </section>
  );
}
