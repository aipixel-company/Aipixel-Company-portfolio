import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import PageHero from "../Components/PageHero";
import CTABanner from "../Components/CTABanner";
import ContactusFormSection from "../Components/ContactusFormSection";

const servicesData = {
  "web-development": {
    title: "Web Development",
    subtitle: "Modern, high-performance web applications built for business scale.",
    description: "At AI Pixal, we design and engineer cutting-edge web platforms tailored to your business objectives. Our technical team works with state-of-the-art frameworks to deliver interactive, highly secure, and blazing-fast user interfaces. We focus on semantic markup, solid server architecture, and efficient data processing to ensure your application can handle millions of active sessions seamlessly.",
    icon: "🌐",
    features: [
      {
        title: "Frontend Engineering",
        desc: "Using React, Next.js, and modern tailwind systems to build pixel-perfect, highly responsive interfaces."
      },
      {
        title: "Robust Backend APIs",
        desc: "Developing fast, secure backend microservices using Node.js, Express, Django, and PostgreSQL databases."
      },
      {
        title: "Custom E-Commerce Solutions",
        desc: "Engineering complex shopping platforms, custom checkout logic, and payment integrations with Stripe/PayPal."
      },
      {
        title: "Optimization & SEO",
        desc: "Ensuring top lighthouse scores with server-side rendering (SSR), image compression, and semantic HTML structures."
      }
    ]
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    subtitle: "Native and cross-platform mobile apps for iOS and Android.",
    description: "We build intuitive, fluid mobile applications that bring your digital products directly to your users' fingertips. Whether leveraging cross-platform efficiency with Flutter and React Native, or utilizing Swift and Kotlin for pure native speed, our designs guarantee stellar performance and absolute device compliance.",
    icon: "📱",
    features: [
      {
        title: "Cross-Platform Frameworks",
        desc: "Write once, deploy everywhere. Using Flutter and React Native to accelerate time-to-market while keeping quality high."
      },
      {
        title: "Native iOS & Android",
        desc: "Leveraging Swift and Kotlin for heavy computing, custom hardware features, and maximum interface smoothness."
      },
      {
        title: "Mobile UI/UX Design",
        desc: "Optimizing mobile gestures, touch targets, and offline capabilities to make user interactions feel effortless."
      },
      {
        title: "App Store Deployment",
        desc: "Handling end-to-end publishing, review compliance, and setup on Google Play Store and Apple App Store."
      }
    ]
  },
  "ai-machine-learning": {
    title: "AI & Machine Learning",
    subtitle: "Automate processes and unlock insights with intelligent algorithms.",
    description: "Empower your software systems with predictive capabilities and natural language reasoning. AI Pixal builds custom machine learning models, integrates advanced LLM solutions (OpenAI, Gemini), and automates classification or computer vision pipelines to eliminate manual work and elevate business intelligence.",
    icon: "🤖",
    features: [
      {
        title: "LLM & Generative AI",
        desc: "Developing custom agents, semantic search tools, and retrieval-augmented generation (RAG) using OpenAI/Gemini APIs."
      },
      {
        title: "Predictive Analytics",
        desc: "Constructing regression and classification models to forecast market demand, customer churn, and user behaviors."
      },
      {
        title: "Computer Vision Systems",
        desc: "Developing image processing and object detection algorithms for safety compliance, visual search, and tagging."
      },
      {
        title: "Intelligent Automation",
        desc: "Replacing repetitive office processes with AI decision logic that handles paperwork, emails, and data extraction."
      }
    ]
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    subtitle: "Human-centered designs that drive engagement and conversions.",
    description: "Stunning visuals meet functional simplicity. Our UI/UX designers map user journeys, run heuristic evaluations, and construct complete wireframes and clickable prototypes in Figma. We make sure every pixel serves a purpose, maximizing user retention and making the interface feel alive.",
    icon: "🎨",
    features: [
      {
        title: "User Research & Journey Mapping",
        desc: "Analyzing user behaviors, defining personas, and detailing entry-to-exit maps before writing code."
      },
      {
        title: "Wireframing & Interactive Prototyping",
        desc: "Designing structural blueprints and realistic mockups to align design stakeholders and test layouts early."
      },
      {
        title: "High-Fidelity UI Systems",
        desc: "Creating polished visual assets, cohesive typography scales, custom icons, and dynamic dark/light design tokens."
      },
      {
        title: "Usability Audits & Testing",
        desc: "Auditing existing systems to locate conversion leaks, structural friction, and accessibility barriers (WCAG)."
      }
    ]
  },
  "cloud-devops": {
    title: "Cloud & DevOps",
    subtitle: "Scalable, secure, and fully automated cloud infrastructures.",
    description: "Say goodbye to server downtime. We specialize in building cloud-native systems, automated deployment pipelines (CI/CD), and infrastructure-as-code scripts. We keep your apps running 24/7 with zero interruption, scaling resources dynamically as user volume rises.",
    icon: "☁️",
    features: [
      {
        title: "Infrastructure as Code",
        desc: "Writing modular Terraform and CloudFormation code to deploy reproducible cloud infrastructure on AWS/GCP."
      },
      {
        title: "Containerization & Orchestration",
        desc: "Using Docker and Kubernetes to isolate applications, maximize resource efficiency, and ease multi-cloud migrations."
      },
      {
        title: "Automated CI/CD Pipelines",
        desc: "Setting up GitHub Actions, GitLab CI, or Jenkins to automatically run test suites and build production images."
      },
      {
        title: "24/7 Monitoring & Alerts",
        desc: "Integrating Datadog, Prometheus, and Grafana to track error rates, CPU loads, and alert developers instantly."
      }
    ]
  },
  "cybersecurity": {
    title: "Cybersecurity",
    subtitle: "Enterprise-grade threat protection, auditing, and compliance.",
    description: "Protect your proprietary databases and user accounts from cyber threats. Our security engineers conduct extensive code audits, vulnerability scans, and penetration tests. We help your business align with standard compliance frameworks, providing complete peace of mind.",
    icon: "🔒",
    features: [
      {
        title: "Vulnerability Assessments",
        desc: "Using automated tools and manual review to scan databases, network ports, and APIs for active security bugs."
      },
      {
        title: "Penetration Testing",
        desc: "Executing authorized simulated cyberattacks to locate logical weaknesses in authentication and data flows."
      },
      {
        title: "Compliance Consulting",
        desc: "Helping your systems align with GDPR, HIPAA, PCI-DSS, and prepare for SOC2 auditing processes."
      },
      {
        title: "Secure Code Audits",
        desc: "Reviewing pull requests and repository configurations to ensure developers do not leak secrets or introduce SQL injection risks."
      }
    ]
  }
};

export default function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData[id];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#070508] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
        <p className="text-[#8791AD] mb-8">The service page you are looking for does not exist.</p>
        <Link to="/services" className="btn-premium-blue px-6 py-3 rounded-full text-sm font-semibold">
          ← Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070508]">
      {/* Hero Banner */}
      <PageHero
        badge="Core Service Details"
        title={service.title}
        highlight="Details"
        subtitle={service.subtitle}
        ctaText="Start Your Project"
        ctaLink="#contact"
        secondaryText="All Services"
        secondaryLink="/services"
      />

      {/* Main Copy Description */}
      <section className="py-12 lg:py-16 bg-[#070508] border-t border-[#2D2B3B]/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-16 h-16 rounded-2xl bg-[#3567FF]/10 border border-[#3567FF]/20 flex items-center justify-center text-3xl">
              {service.icon}
            </span>
            <h2 className="text-3xl font-extrabold text-white">Service Overview</h2>
          </div>
          <p className="text-lg text-[#8791AD] leading-relaxed mb-12">
            {service.description}
          </p>

          <h3 className="text-2xl font-bold text-white mb-8 border-b border-[#2D2B3B]/40 pb-4">Key Capabilities</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((feat, index) => (
              <div key={index} className="glow-card rounded-2xl p-6 border border-white/5">
                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#3567FF]" />
                  {feat.title}
                </h4>
                <p className="text-sm text-[#8791AD] leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <CTABanner
        title={`Accelerate with ${service.title}`}
        subtitle="Schedule a free technical session with our developers to review your design and timeline requirements."
        primaryText="Schedule Session"
        primaryLink="#contact"
        secondaryText="View Case Studies"
        secondaryLink="/clients"
      />

      {/* Contact form */}
      <div id="contact">
        <ContactusFormSection />
      </div>
    </div>
  );
}
