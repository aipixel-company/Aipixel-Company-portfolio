import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import HomeSlider from '../Components/HomeSlider'
import HomeExpertise from '../Components/HomeExpertise'
import CustomerReview from '../Components/CustomerSuccessSlider'
import CollaboratingPartners from '../Components/CollaboratingPartners'
import BlogSection from '../Components/BlogSection'
import ContactusFormSection from '../Components/ContactusFormSection'
import CustomerSuccessSlider from '../Components/CustomerSuccessSlider'
import Map from '../Components/Map'

export default function HomeStock() {
  return (
    <>
        <div className=' bg-gray-100'>

      <HomeSlider/>
       <HomeExpertise/>
       <CustomerSuccessSlider/>
       <CollaboratingPartners/>
       <BlogSection/>
       <Map/>
       <ContactusFormSection/>

      </div>
    </>
  )
}
