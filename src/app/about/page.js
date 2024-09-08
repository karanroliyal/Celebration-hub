import React from 'react'
import TopBanner from '../../../components/TopBanner'
import OurService from '../../../components/OurService'
import Aboutus from '../../../components/Aboutus'
import WhatMakeUsDifferent from '../../../components/WhatMakeUsDifferent'

export default function About() {
  return (
    <div className='About-page-wrapper' >
      <TopBanner  Title="About us" image="https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg" description="Creating Unforgettable Moments with Expert Planning, Stunning Decorations, and Personalized Touches" />
      <Aboutus/>
      <WhatMakeUsDifferent/>
      <OurService/>
    </div>
  )
}
