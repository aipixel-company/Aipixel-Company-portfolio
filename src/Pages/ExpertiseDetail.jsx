import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import PageHero from "../Components/PageHero";
import CTABanner from "../Components/CTABanner";
import ContactusFormSection from "../Components/ContactusFormSection";

const expertiseDataMap = {
  "web-development": {
    name: "Web Development",
    description: "AI Pixal builds scalable and visually appealing web applications that deliver outstanding performance and adapt seamlessly to future business growth.",
    extendedDesc: "Web Development is more than writing code—it is engineering interactive, responsive ecosystems that solve actual business challenges. We specialize in creating high-performance applications with Server Side Rendering (SSR), lightning-fast REST/GraphQL APIs, secure authentication systems, and robust database storage. From small SaaS applications to enterprise-grade portals, we design every codebase with strict separation of concerns, modular architectures, and automated testing.",
    icon: "🌐",
    gradient: "from-blue-500 to-cyan-500",
    tools: ["React", "Next.js", "Node.js", "Express", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    useCases: ["Enterprise Portals", "SaaS Dashboards", "Custom Content Management Systems", "Social Communities"]
  },
  "user-interface-design": {
    name: "User Interface Design",
    description: "Our design team creates engaging, user-friendly interfaces that balance aesthetics with usability, ensuring intuitive digital experiences.",
    extendedDesc: "Great products start with incredible design. We construct user-centered interfaces by mapping customer journeys, running user research, and testing usability prototypes. We maintain strict compliance with visual design fundamentals—ensuring precise hierarchy, consistent layout grids, readable typography scales, and seamless transitions. We deliver complete, interactive Figma design systems that bridge the gap between design concepts and development execution.",
    icon: "🎨",
    gradient: "from-purple-500 to-pink-500",
    tools: ["Figma", "Adobe XD", "Sketch", "Prototyping", "Design Tokens", "Wireframing"],
    useCases: ["Mobile Apps", "E-Commerce Mockups", "Corporate Branding Guidelines", "SaaS Dashboards"]
  },
  "artificial-intelligence": {
    name: "AI Solutions",
    description: "We deliver AI-driven solutions that automate workflows, personalize customer journeys, and help businesses solve complex challenges.",
    extendedDesc: "Artificial Intelligence is transforming how software reads, reasons, and executes processes. AI Pixal designs, trains, and integrates custom machine learning and natural language processing architectures. We specialize in LLM customizations, RAG pipeline construction, prompt engineering, predictive modeling, and automation setups. We build systems that extract insights, optimize operations, and automate repetitive customer interactions.",
    icon: "🤖",
    gradient: "from-green-500 to-emerald-500",
    tools: ["OpenAI API", "Langchain", "Python", "TensorFlow", "PyTorch", "Gemini", "Pandas"],
    useCases: ["Intelligent Customer Agents", "Predictive Analytics Systems", "Automated Ingredient Tracing", "Document Parsing & Classification"]
  },
  "devops": {
    name: "DevOps",
    description: "Our DevOps experts streamline collaboration between development and operations, enabling faster deployments and continuous delivery pipelines.",
    extendedDesc: "DevOps is the backbone of automated release cycles and stable system uptimes. We build modular, repeatable infrastructure-as-code repositories, containerize applications, and orchestrate server clusters. Our configurations ensure zero-downtime upgrades, automatic scale triggers, and robust monitoring that alerts developers before problems affect users.",
    icon: "⚙️",
    gradient: "from-orange-500 to-red-500",
    tools: ["Docker", "Kubernetes", "AWS", "GitHub Actions", "Terraform", "Prometheus", "Grafana"],
    useCases: ["CI/CD Automation", "High-Availability Clusters", "Serverless Infrastructure", "Log & Telemetry Centralization"]
  },
  "mobile-app-development": {
    name: "Mobile App Development",
    description: "AI Pixal designs and develops mobile apps that offer seamless user experiences across all platforms with effective prototyping.",
    extendedDesc: "We develop responsive, cross-platform and native mobile software designed to delight users. By optimizing application size, render times, and offline caching, we ensure our applications function seamlessly on both iOS and Android. We connect mobile frontends with REST/GraphQL backends and handle the complete submission workflow on store platforms.",
    icon: "📱",
    gradient: "from-indigo-500 to-purple-500",
    tools: ["React Native", "Flutter", "Swift", "Kotlin", "Redux", "SQLite", "Firebase"],
    useCases: ["Consumer Marketplaces", "Real-Time Telemetry Panels", "Digital Wallet Systems", "Lifestyle & Fashion Storefronts"]
  },
  "blockchain": {
    name: "BlockChain",
    description: "We create secure and transparent blockchain-based applications that enhance trust and empower businesses with decentralized technologies.",
    extendedDesc: "Decentralized technologies provide unparalleled data integrity and auditable transaction systems. We write gas-optimized smart contracts, engineer secure decentralized protocols, and build modern Web3 applications. Whether integrating cryptographic validation or provably fair random functions, we focus on audit readiness and bulletproof contract security.",
    icon: "⛓️",
    gradient: "from-gray-700 to-gray-900",
    tools: ["Solidity", "Ether.js", "Web3.js", "Hardhat", "Chainlink VRF", "Ethereum", "IPFS"],
    useCases: ["Smart Contract Development", "Decentralized Applications (DApps)", "Tokenization Frameworks", "Provably Fair Gaming Auditing"]
  },
  "quality-assurance": {
    name: "Quality Assurance",
    description: "AI Pixal ensures top quality by performing rigorous testing processes that eliminate bugs and guarantee optimal stability.",
    extendedDesc: "Quality Assurance is about building trust. We construct automated and manual test strategies that evaluate performance, security, responsiveness, and functional correctness. We identify bottlenecks and logical gaps early in the development lifecycle, preventing bugs from ever reaching production.",
    icon: "✅",
    gradient: "from-green-600 to-lime-500",
    tools: ["Selenium", "Jest", "Playwright", "Cypress", "Postman", "Manual Audits"],
    useCases: ["Cross-Browser Testing", "Load & API Regression", "Accessibility Compliance (WCAG)", "Mobile App Emulation"]
  },
  "software-testing": {
    name: "Software Testing",
    description: "Our testing team validates functionality, security, and usability, ensuring flawless performance across platforms.",
    extendedDesc: "Rigorous testing guarantees software stability under stress. We validate databases, API response headers, frontend layout rendering, and third-party integrations. Our automated test suites run on every commit, saving deployment overhead and maintaining zero regression rates.",
    icon: "🔍",
    gradient: "from-teal-500 to-cyan-500",
    tools: ["JUnit", "PyTest", "Cypress", "Mocha", "Supertest", "SonarQube"],
    useCases: ["Automated Regression Suites", "Security vulnerability scanning", "Load testing under high requests", "Unit test implementation"]
  },
  "wordpress": {
    name: "WordPress",
    description: "We build creative, flexible, and fully optimized WordPress websites that empower businesses to publish and scale content effortlessly.",
    extendedDesc: "WordPress powers a large portion of the web, and we make it fast and secure. We design custom themes, build plugins from scratch, and integrate block editor templates that enable marketing teams to update copy without writing code. We focus on caching rules and database optimization to keep site speeds fast.",
    icon: "💻",
    gradient: "from-blue-700 to-blue-900",
    tools: ["PHP", "WordPress Core", "ACF Pro", "Elementor", "MySQL", "WooCommerce", "REST API"],
    useCases: ["Corporate Portals", "Editorial Blogs", "B2C Web Stores", "LMS (Learning Management Systems)"]
  },
  "fintech": {
    name: "Fintech",
    description: "AI Pixal develops innovative financial solutions, empowering businesses with secure, modern, and compliant technologies.",
    extendedDesc: "Financial technology requires extreme security, auditing trails, and high compliance standards. We design applications handling secure payment triggers, double-entry ledgers, dynamic credit risk calculations, and microlending transactions. We ensure zero leak rates and strict authorization guidelines.",
    icon: "💰",
    gradient: "from-green-600 to-emerald-600",
    tools: ["Stripe API", "Node.js", "PostgreSQL", "Encryption keys", "Secure Webhooks", "Auth0"],
    useCases: ["Microlending Platforms", "Automatic Split Payout Engines", "Credit Scoring Dashboards", "Ledger Sync Middleware"]
  },
  "application-maintenance": {
    name: "Application Maintenance",
    description: "We provide proactive support and regular maintenance services to keep software systems updated, stable, and secure.",
    extendedDesc: "Software needs regular care to prevent security debt and package staleness. We offer scheduled server migrations, dependencies updates, performance tuning, and bug mitigation. Our monitoring setup identifies resource leaks or slow database queries, applying fixes before users complain.",
    icon: "🔧",
    gradient: "from-yellow-500 to-orange-500",
    tools: ["Nginx", "Docker", "Snyk Security", "PM2", "AWS Systems Manager", "Datadog"],
    useCases: ["Proactive Package Upgrades", "Database Index Tuning", "Security Patching", "Telemetric Monitoring Configuration"]
  },
  "software-development": {
    name: "Software Development",
    description: "Our software engineers design and deliver interactive applications that combine reliability, usability, and performance.",
    extendedDesc: "Custom software is the differentiator for modern businesses. We design and deliver custom software solutions using clean code standards and scalable design patterns. We collaborate closely with your stakeholders to gather product requirements, structure object relationships, and launch production-grade software.",
    icon: "💻",
    gradient: "from-blue-600 to-indigo-600",
    tools: ["Python", "Node.js", "Java", "Go", "Git", "PostgreSQL", "Docker"],
    useCases: ["Custom ERP Development", "API Middleware", "Customer Portals", "Internal Productivity Tools"]
  },
  "project-management": {
    name: "Project Management",
    description: "AI Pixal ensures projects are delivered on time, within scope, and with maximum efficiency using proven frameworks.",
    extendedDesc: "A great strategy requires disciplined execution. We utilize Agile Scrum frameworks, set transparent sprint priorities, and host bi-weekly demos. This keeps stakeholders aligned, minimizes scope creep, and ensures we deliver software on time and within target budgets.",
    icon: "📊",
    gradient: "from-purple-600 to-indigo-600",
    tools: ["Jira", "Linear", "Trello", "Agile Scrum", "Sprint Planning", "Risk Mitigation"],
    useCases: ["Agile Development Sprints", "Product Roadmap Planning", "Cross-Functional Syncs", "Scope & Budget Auditing"]
  },
  "aws": {
    name: "AWS Integration",
    description: "We leverage Amazon Web Services to deliver secure, scalable, and cost-effective cloud infrastructure for business transformation.",
    extendedDesc: "AWS provides an incredibly broad suite of cloud tools. We design secure virtual private networks (VPCs), configure serverless execution clusters, deploy reliable database replications, and set up content distribution networks (CDN). We optimize resource allocation, saving up to 40% on monthly cloud bills.",
    icon: "☁️",
    gradient: "from-orange-400 to-red-500",
    tools: ["AWS EC2", "AWS Lambda", "S3", "RDS PostgreSQL", "VPC Networking", "IAM Security", "CloudFront"],
    useCases: ["Serverless Application Hosting", "Secure Database Replication", "Static Assets CDN Delivery", "Auto-scaling web clusters"]
  },
  "data-structures-and-algorithms": {
    name: "Data Structures & Algorithms",
    description: "Our experts apply data structures and algorithms to build efficient, optimized, and reliable systems for complex problems.",
    extendedDesc: "Efficient algorithms make heavy computing possible. We analyze algorithmic complexities, construct efficient data indexes, and optimize sorting or graph parsing algorithms. This minimizes RAM footprints and CPU utilization, allowing your apps to operate fast even on cheap servers.",
    icon: "📊",
    gradient: "from-blue-500 to-teal-500",
    tools: ["C++", "Python", "Go", "Data Indexing", "Graph Algorithms", "Big O Optimization"],
    useCases: ["High-speed Feeds Syncing", "Real-Time GPS Route Optimization", "Search & Auto-Suggest Engines", "Telemetry Telemetry Reduction"]
  },
  "programming-languages": {
    name: "Programming Languages",
    description: "AI Pixal developers are proficient in a wide range of programming languages, enabling tailored solutions across diverse platforms.",
    extendedDesc: "Choosing the correct tool is vital. We utilize JavaScript/TypeScript for dynamic web applications, Python for heavy data handling and ML development, Go for lightweight high-throughput backends, Swift/Kotlin for mobile apps, and PHP/C++ for legacy themes or embedded systems.",
    icon: "👨‍💻",
    gradient: "from-indigo-500 to-purple-500",
    tools: ["JavaScript", "TypeScript", "Python", "GoLang", "Kotlin", "Swift", "PHP"],
    useCases: ["Tailored Application Backend", "API Middleware", "Responsive Web Interfaces", "Automated Script Development"]
  },
  "cloud-platform-integration": {
    name: "Cloud Platform Integration",
    description: "We integrate applications with leading cloud platforms, providing flexibility and seamless connections for business growth.",
    extendedDesc: "Multi-cloud architectures avoid vendor lock-in. We connect hybrid environments, set up cross-cloud API networks, and integrate standard identity providers (OIDC/SAML) with cloud platforms, keeping your applications highly available and modular.",
    icon: "🌩️",
    gradient: "from-cyan-500 to-blue-500",
    tools: ["Google Cloud (GCP)", "Azure", "AWS", "OIDC", "SAML Integration", "Auth0", "Cloudflare"],
    useCases: ["Hybrid Application Networking", "Single Sign-On Systems", "Cross-Platform Asset Transfers", "Edge Compute Deployment"]
  },
  "text-editors": {
    name: "Text Editors Integration",
    description: "Our team equips developers with the best text editors that streamline productivity and enhance the software development workflow.",
    extendedDesc: "Productivity tools shape how fast developers deliver. We script custom extensions, build syntax packages, and configure automated linters inside standard text editors. This speeds up coding speeds, enforces style rules, and keeps our codebases consistent across all team members.",
    icon: "📝",
    gradient: "from-gray-600 to-gray-800",
    tools: ["VS Code Configs", "Neovim scripting", "ESLint Integration", "Prettier Guidelines", "LSP Customizations"],
    useCases: ["Custom Development Workflows", "Automated Linter Integrations", "Code Style Standardizations", "Snippet Engine Configurations"]
  },
  "integrated-development-environments": {
    name: "IDEs",
    description: "We enable access to modern IDEs that simplify coding, debugging, and testing for efficient developer workflows.",
    extendedDesc: "Integrated development environments are critical for compiling, profiling, and debugging complex applications. We configure Docker-based dev containers, coordinate local database mocks, and integrate test runners directly within our team IDE configurations, accelerating development velocity.",
    icon: "🔧",
    gradient: "from-purple-500 to-pink-500",
    tools: ["JetBrains Configs", "Xcode Settings", "Docker Dev Containers", "Remote Debuggers", "Local Stack Mocking"],
    useCases: ["Local development environments", "Visual telemetry debug setups", "Static analysis integration", "Automated compiling configurations"]
  },
  "databases": {
    name: "Databases",
    description: "AI Pixal designs secure, efficient, and scalable database systems that ensure reliable data storage and management.",
    extendedDesc: "Databases are the foundation of any digital application. We specialize in structuring relational schemas (PostgreSQL, MySQL), configuring document stores (MongoDB), and leveraging caching databases (Redis). We design indexes, optimize queries, and configure replication nodes to ensure zero data loss.",
    icon: "🗄️",
    gradient: "from-blue-600 to-cyan-600",
    tools: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "SQL optimization", "Prisma ORM"],
    useCases: ["High-speed Caching Layers", "Full-Text Search Indexing", "Double-Entry Ledger Tables", "Relational User Schemas"]
  },
  "networking-basics": {
    name: "Networking Basics",
    description: "We provide comprehensive networking training and solutions, empowering teams with strong foundations in connectivity.",
    extendedDesc: "Secure data routing is essential. We configure virtual subnets, setup load balancers, handle certificate generation for TLS/SSL encryption, and optimize content deliveries. We ensure packets move securely across APIs using secure protocols (HTTP/2, WebSockets, gRPC).",
    icon: "🌐",
    gradient: "from-green-500 to-blue-500",
    tools: ["Nginx Gateway", "Load Balancers", "SSL/TLS certificates", "gRPC", "HTTP/2 protocols", "WebSockets"],
    useCases: ["WebSocket connections", "Secure reverse-proxy setup", "Load balancer routing configurations", "Custom Domain Certificates"]
  },
  "basics-of-testing": {
    name: "Software Testing Basics",
    description: "Our training in software testing equips professionals with essential skills to identify bugs and ensure reliable products.",
    extendedDesc: "A complete testing mindset guarantees reliable software. We teach and apply key testing fundamentals—ranging from unit tests and boundary analysis to integration tests and system validation, making sure developers write testable, modular, and maintainable software code.",
    icon: "🧪",
    gradient: "from-red-500 to-pink-500",
    tools: ["Unit Testing", "Boundary Analysis", "Mocking libraries", "Integration Testing", "TDD Practices"],
    useCases: ["Test Driven Development", "logical code verification", "External API mocking configurations", "Regression boundary checks"]
  },
  "software-development-life-cycle": {
    name: "SDLC",
    description: "AI Pixal follows a structured SDLC methodology to ensure projects move smoothly from concept to deployment with quality.",
    extendedDesc: "Our Software Development Life Cycle process balances planning speed with execution quality. We guide projects through Requirements Gathering, Architectural Design, Code Implementation, QA Verification, Production Launch, and SLA Maintenance, keeping communications clear at every stage.",
    icon: "🔄",
    gradient: "from-indigo-500 to-purple-500",
    tools: ["Agile Roadmap", "Requirements Gathering", "UML Architectures", "Sprint Retrospectives", "SLA Agreements"],
    useCases: ["Commercial Software Launches", "Architectural Blueprints", "Sprint Performance Audits", "Customer SLA Checklists"]
  },
  "seo-search-engine-optimization": {
    name: "SEO",
    description: "Our SEO experts apply proven strategies that improve search visibility, drive organic traffic, and enhance brand presence.",
    extendedDesc: "SEO is a technical prerequisite for business visibility. We deploy server-side rendering, optimize image file sizes, structure semantic HTML layout trees, and set up schema metadata tags. This helps search engines crawl and index pages fast, organic traffic growth.",
    icon: "🔎",
    gradient: "from-yellow-500 to-orange-500",
    tools: ["Schema Markups", "Sitemaps generation", "Google Search Console", "Lighthouse optimization", "Meta tag injectors"],
    useCases: ["Organic Traffic Expansion", "Page speed optimization", "Rich-snippet search result setups", "Content architecture structuring"]
  }
};

export default function ExpertiseDetail() {
  const { id } = useParams();
  const expertise = expertiseDataMap[id];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!expertise) {
    return (
      <div className="min-h-screen bg-[#070508] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-bold text-white mb-4">Expertise Area Not Found</h1>
        <p className="text-[#8791AD] mb-8">The expertise domain you are looking for does not exist in our systems.</p>
        <Link to="/expertise" className="btn-premium-blue px-6 py-3 rounded-full text-sm font-semibold">
          ← Back to Expertise
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070508]">
      {/* Dynamic Header */}
      <PageHero
        badge="Technical Expertise Area"
        title={expertise.name}
        highlight="Domain"
        subtitle={expertise.description}
        ctaText="Talk to a Specialist"
        ctaLink="#contact"
        secondaryText="View Full Capabilities"
        secondaryLink="/expertise"
      />

      {/* Main Copy Section */}
      <section className="py-12 lg:py-16 bg-[#070508] border-t border-[#2D2B3B]/30 relative overflow-hidden">
        {/* Glow */}
        <div className={`absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-br ${expertise.gradient} opacity-5 blur-[120px] rounded-full pointer-events-none`} />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <span className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${expertise.gradient} flex items-center justify-center text-3xl shadow-lg`}>
              {expertise.icon}
            </span>
            <h2 className="text-3xl font-extrabold text-white">Capability Overview</h2>
          </div>

          <p className="text-lg text-[#8791AD] leading-relaxed mb-12">
            {expertise.extendedDesc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Tools */}
            <div className="glow-card rounded-2xl p-6 border border-white/5">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                🔧 Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {expertise.tools.map((tool, idx) => (
                  <span key={idx} className={`text-xs font-semibold px-3 py-1.5 rounded-full border border-white/5 bg-[#1E1D28]/60 text-white`}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Target Use Cases */}
            <div className="glow-card rounded-2xl p-6 border border-white/5">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                🎯 Core Use Cases
              </h3>
              <ul className="space-y-2">
                {expertise.useCases.map((useCase, idx) => (
                  <li key={idx} className="text-sm text-[#8791AD] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#61CE70]" />
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title={`Work with our ${expertise.name} Experts`}
        subtitle="Need custom engineering in this field? Let's analyze your architecture requirements today."
        primaryText="Schedule Call"
        primaryLink="#contact"
        secondaryText="View Case Studies"
        secondaryLink="/clients"
      />

      {/* Contact Form */}
      <div id="contact">
        <ContactusFormSection />
      </div>
    </div>
  );
}
