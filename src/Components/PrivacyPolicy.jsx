import React, { useRef } from "react";

export default function PrivacyPolicy() {
  const privacyPolicySteps = [
    {
      title: "Who are we?",
      description: (
        <>
          We are AI-PIXAL, a software company located in Lahore, Pakistan and
          Doha, Qatar. We provide a range of digital services worldwide.
        </>
      ),
    },
    {
      title: "Why do we process your data?",
      description: (
        <>
          We use your personal data to provide and improve our services. The
          data helps us manage your account, fulfill our contractual obligations,
          communicate with you, provide customer support, and enhance your user
          experience.
          <br />
          Please keep in mind that you can always withdraw your consent by
          leaving us a clear note at any time.
          <br />
          Also, you may always object to our processing activities based on the
          legitimate interest and have your data completely erased from all our
          systems.
        </>
      ),
    },
    {
      title: "What information do we process?",
      description: (
        <>
          Here is a complete list of the personal data we may want to know about you:
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-[#8791AD]">
            <li>Your full name</li>
            <li>Your email</li>
            <li>Your phone number</li>
            <li>The fact that you've visited our website</li>
            <li>Your Company Name</li>
            <li>What website referred you to aipixal.solutions</li>
          </ul>
        </>
      ),
    },
    {
      title: "Who will we share your data with?",
      description: (
        <>
          <strong className="text-white">AI-PIXAL Group</strong>
          <br />
          We may disclose your information to our affiliates or subsidiaries, which may help us to process it.
          <br />
          <strong className="text-white">Service Providers</strong>
          <br />
          We may disclose your data to third party vendors, service providers, contractors or agents who perform functions on our behalf. We'll make sure that they treat it as protectively as we do.
        </>
      ),
    },
    {
      title: "Where is your data processed?",
      description: (
        <>
          Your data may be processed in Pakistan and may be transferred to Oman.
          Nevertheless, your data will always be safe and under GDPR protection,
          despite where it is processed.
        </>
      ),
    },
    {
      title: "How long will my data be kept?",
      description: (
        <>
          We will delete your personal data as soon as we no longer have a need
          or a legal basis to process it.
          <br />
          Don't forget that you may always command us to delete all the
          information we have about you as described here.
        </>
      ),
    },
    {
      title: "What are my rights?",
      description: (
        <>
          We treat all our visitors equally according to the rules offered by
          the GDPR, which is believed to be the most progressive and extensive
          piece of privacy legislation as for now.
          <br />
          Your rights are as follows:
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-[#8791AD]">
            <li>The right to be informed</li>
            <li>The right of access</li>
            <li>The right to rectification</li>
            <li>The right of erasure</li>
            <li>The right to restrict processing</li>
            <li>The right for data portability</li>
            <li>The right to object</li>
            <li>Your rights in relation to automated decision making and profiling</li>
            <li>The right to withdraw your consent as described here</li>
            <li>The right to lodge a complaint with a supervisory authority</li>
          </ul>
        </>
      ),
    },
    {
      title: "Do you profile me?",
      description: (
        <>
          If you've consented to receive marketing materials from us, we'll use
          the information we have about you, as described in this Policy, to
          provide you with more relevant materials. That's all the profiling we do.
        </>
      ),
    },
    {
      title: "What about cookies?",
      description: (
        <>
          If you've read this Policy up to this moment, we believe that you've
          deserved to have yourself a delicious cookie. Also, we want to believe
          that we deserve to place some of those tasty bits of data on your device.
        </>
      ),
    },
    {
      title: "Is my data secured?",
      description: (
        <>
          AI-PIXAL is ISO-27001 certified. Therefore we don't allow any
          unreliable practices regarding the security of the information we deal
          with. Consequently, we take all appropriate technical and
          organisational measures to keep your data safe, as required by the GDPR.
        </>
      ),
    },
    {
      title: "Still have some questions?",
      description: (
        <>
          You can reach us at aipixal.solutions, if you:
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-[#8791AD]">
            <li>Want to know more about privacy of your information</li>
            <li>Want to make any kind of claim or request with regard to your personal data</li>
            <li>Want to say that we are wrong in any privacy issue</li>
            <li>Want to share your thought how we could make our privacy practices better</li>
            <li>Just bored and want to talk about privacy</li>
          </ul>
          We promise that we'll reply. At least once, if you are just bored.
        </>
      ),
    },
  ];

  const sectionRefs = privacyPolicySteps.map(() => useRef(null));

  const handleClick = (index) => {
    sectionRefs[index].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[#070508] min-h-screen">
      {/* Hero Header */}
      <div className="relative pt-24 pb-16 px-6 text-center border-b border-[#2D2B3B]/40">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(53,103,255,0.12), transparent 70%)",
          }}
        />
        <div className="relative z-10">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#3567FF] border border-[#3567FF]/30 bg-[#3567FF]/10">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            AI-PIXAL Privacy Policy
          </h1>
          <p className="text-[#8791AD] mt-3 text-sm">Last Updated: 13th June 2024</p>
          <div className="h-px w-24 bg-[#3567FF]/40 mx-auto mt-6" />
          <p className="leading-relaxed mt-6 text-[#8791AD] max-w-2xl mx-auto">
            We at AI-PIXAL respect your personal data and want to be GDPR friendly. That is why, we
            have tried to make information in this Privacy Policy understandable and clear, while
            boring only to the extent required by the law.
          </p>
        </div>
      </div>

      {/* Main two-column layout */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 py-16 px-4 md:px-8">
        {/* Sidebar navigation */}
        <div className="flex flex-col w-full md:sticky md:top-28 lg:w-1/3 self-start">
          <div className="bg-[#1E1D28] rounded-2xl border border-[#2D2B3B] p-6">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#8791AD] mb-4">
              Contents
            </h3>
            <ul className="space-y-1">
              {privacyPolicySteps.map((step, index) => (
                <li key={index}>
                  <button
                    className="w-full text-left px-3 py-2.5 rounded-xl text-sm text-[#8791AD] hover:text-[#3567FF] hover:bg-[#3567FF]/10 transition-all duration-200 cursor-pointer"
                    onClick={() => handleClick(index)}
                  >
                    {step.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-2/3">
          {privacyPolicySteps.map((step, index) => (
            <div
              key={index}
              ref={sectionRefs[index]}
              className="mb-10 glow-card rounded-2xl p-6 md:p-8"
            >
              <h2 className="font-bold text-xl text-white mb-4 flex items-center gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#3567FF]/15 text-[#3567FF] text-xs font-bold flex items-center justify-center border border-[#3567FF]/25">
                  {index + 1}
                </span>
                {step.title}
              </h2>
              <p className="text-[#8791AD] leading-relaxed text-sm md:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
