import React, { useRef } from "react";

export default function PrivacyPolicy() {
  const privacyPolicySteps = [
    {
      title: "Who are we?",
      description: (
        <>
          We are AI-PIXEL, a software company located at 37L Block Johar Town,
          Lahore. We provide a range of digital services worldwide.
        </>
      ),
    },
    {
      title: "Why do we process your data?",
      description: (
        <>
          We use your personal data to provide and improve our services. The
          data helps us manage your account, fulfill our contractual
          obligations, communicate with you, provide customer support, and
          enhance your user experience.
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
          Here is a complete list of the personal data we may want to know about
          you:
          <ul className="list-disc list-inside ml-4">
            <li>Your full name</li>
            <li>Your email</li>
            <li>Your phone number</li>
            <li>The fact that you’ve visited our website</li>
            <li>Your Company Name</li>
            <li>What website referred you to aipixel.solutions</li>
          </ul>
        </>
      ),
    },
    {
      title: "Who will we share your data with?",
      description: (
        <>
          <strong>AI-PIXEL Group</strong>
          <br />
          We may disclose your information to our affiliates or subsidiaries,
          which may help us to process it.
          <br />
          <strong>Service Providers</strong>
          <br />
          We may disclose your data to third party vendors, service providers,
          contractors or agents who perform functions on our behalf, such as
          website management, hosting, technical support and marketing
          analytics. We’ll make sure that they treat it as protective as we do.
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
          We will delete your personal data as soon, as we no longer have a need
          or a legal basis to process it. <br />
          Don’t forget that you may always command us to delete all the
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
          Your rights are as follows (more info):
          <ul className="list-disc list-inside ml-4">
            <li>The right to be informed</li>
            <li>The right of access</li>
            <li>The right to rectification</li>
            <li>The right of erasure</li>
            <li>The right to restrict processing</li>
            <li>The right for data portability</li>
            <li>The right to object</li>
            <li>
              Your rights in relation to automated decision making and profiling
            </li>
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
          If you’ve consented to receive marketing materials from us, we’ll use
          the information we have about you, as described in this Policy, to
          provide you with more relevant materials. That’s all the profiling we
          do.
        </>
      ),
    },
    {
      title: "What about cookies?",
      description: (
        <>
          If you’ve read this Policy up to this moment, we believe that you’ve
          deserved to have yourself a delicious cookie. Also, we want to believe
          that we deserve to place some of those tasty bits of data on your
          device.
        </>
      ),
    },
    {
      title: "Is my data secured?",
      description: (
        <>
          AI-PIXEL is ISO-27001 certified. Therefore we don’t allow any
          unreliable practices regarding the security of the information we deal
          with. Consequently, we take all appropriate technical and
          organisational measures to keep your data safe, as required by the
          GDPR. Below are the examples of how we do that.
        </>
      ),
    },
    {
      title: "Still have some questions?",
      description: (
        <>
          You can reach us at aipixel.solutions , if you:
          <ul className="list-disc list-inside ml-4">
            <li>Want to know more about privacy of your information</li>
            <li>
              Want to make any kind of claim or request with regard to your
              personal data
            </li>
            <li>Want to say that we are wrong in any privacy issue</li>
            <li>
              Want to share your thought how we could make our privacy practices
              better
            </li>
            <li>Just bored and want to talk about privacy</li>
          </ul>
          We promise that we’ll reply. At least once, if you are just bored.
        </>
      ),
    },
  ];

  const sectionRefs = privacyPolicySteps.map(() => useRef(null));

  const handleClick = (index) => {
    sectionRefs[index].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section>
        <div
          className="relative text-black cursor-default"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-vector/patent-law-illustration_23-2148684285.jpg?w=826&t=st=1718300970~exp=1718301570~hmac=f389e896cb09c230962d2981a866b1dd679a4b2cd0472cfcfc0f8ffeb2a48147')",
          }}
        >
          <div className="bg-white bg-opacity-40 py-8 px-6 sm:px-16 md:px-32">
            <h1 className="mt-20 text-center text-3xl md:text-5xl">
              AI-PIXEL Privacy Policy
            </h1>
            <p className="mt-5 text-center">Last Updated: 13th June 2024</p>
            <hr className="my-4" />
            <p className="leading-loose mt-3">
              We at AI-PIXEL respect your personal data and want to be GDPR
              friendly. That is why, we have tried to make information in this
              Privacy Policy understandable and clear, while boring only to the
              extent, required by the law.
            </p>
          </div>
        </div>
        <div className="text-black py-8 cursor-default">
          <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            <div className="flex flex-col w-full md:sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-4 md:px-8">
              <div className="space-y-4 p-3 border-2">
                {privacyPolicySteps.map((step, index) => (
                  <div
                    key={index}
                    className="text-black cursor-pointer"
                    onClick={() => handleClick(index)}
                  >
                    {step.title}
                  </div>
                ))}
              </div>
            </div>
            <div className="ml-0 md:ml-12 lg:w-2/3 mt-8 md:mt-0">
              <div className="container mx-auto w-full h-full">
                <div className="p-4 md:p-10 h-full">
                  {privacyPolicySteps.map((step, index) => (
                    <div
                      key={index}
                      ref={sectionRefs[index]}
                      className="mb-8 flex w-full"
                    >
                      <div className="w-full px-1 py-4 mt-16">
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">
                          {step.title}
                        </h4>
                        <p className="font-light">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
