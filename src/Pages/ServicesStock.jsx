import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ServicesMain from '../Components/ServicesMain';
import AdvisorySection from '../Components/AdvisorySection';
import EngineeringServices from '../Components/EngineeringServices';
import OptimisationServices from '../Components/OptimisationServices';
import ExpertiseServices from '../Components/ExpertiseServices';
import ContactusFormSection from '../Components/ContactusFormSection';
import IndustriesWeWorkServices from '../Components/IndustriesWeWorkServices';

export default function ServicesStock() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <>
      <div id="main">
        <ServicesMain />
      </div>
      <div id="advisory">
        <AdvisorySection />
      </div>
      <div id="engineering">
        <EngineeringServices />
      </div>
      <div id="optimisation">
        <OptimisationServices />
      </div>
      <div id="industries">
        <IndustriesWeWorkServices />
      </div>
      <div id="expertise">
        <ExpertiseServices />
      </div>
      <div id="contact">
        <ContactusFormSection />
      </div>
    </>
  );
}
