import React from 'react'
import TopBanner from '../../../components/TopBanner'
import ContactForm from '../../../components/ContactForm'

export default function Contact() {
  return (
    <div className='Contact-page-wrapper' >
      
      <TopBanner Title="Contact us" image="https://images.pexels.com/photos/16249317/pexels-photo-16249317/free-photo-of-a-man-in-a-sweater-talking-on-a-phone.jpeg" description="Creating Unforgettable Moments with Expert Planning, Stunning Decorations, and Personalized Touches" />

      <ContactForm/>

    </div>
  )
}
