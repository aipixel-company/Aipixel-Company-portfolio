import React from 'react'
import AboutSlider from '../Components/AboutSlider'
import ContactusFormSection from '../Components/ContactusFormSection'
import OurVison from '../Components/OurVison'
import Map from '../Components/Map'
import OurUniqueFeatures from '../Components/OurUniqueFeatures'

export default function AboutStock() {
  return (
    <>
    <div className=' bg-gray-100'>
    <AboutSlider/>
     <OurVison/>
     <OurUniqueFeatures/>
     <Map/>
    <ContactusFormSection/>
    </div>
     
    </>
  )
}
