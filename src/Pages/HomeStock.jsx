import React from 'react'
import HomeSlider from '../Components/HomeSlider'
import HomeExpertise from '../Components/HomeExpertise'
import CollaboratingPartners from '../Components/CollaboratingPartners'
import BlogSection from '../Components/BlogSection'
import ContactusFormSection from '../Components/ContactusFormSection'
import CustomerSuccessSlider from '../Components/CustomerSuccessSlider'
import Map from '../Components/Map'

export default function HomeStock() {
  return (
    <>
        <div className=''>

      <HomeSlider/>
       <HomeExpertise/>
       <CollaboratingPartners/>
       <BlogSection/>
       <CustomerSuccessSlider/>
       <Map/>
       <ContactusFormSection/>

      </div>
    </>
  )
}
