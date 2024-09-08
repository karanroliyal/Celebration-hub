"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

export default function TopBanner({ Title, image , description }) {

  const [imageUrl, setImageUrl] = useState(image)

  return (
    <div className='Top-Banner-Wrapper' >
      {/* <div className='banner-image-container' style={{backgroundImage:`url(${imageUrl})`}} >
            <h1 className='Banner-Heading' >About us</h1>
      </div> */}

      <Container>
        <div className='my-flex' >
          <div className='banner-name-container'>
            <h1>{Title}</h1>
            <p>{description}</p>
          </div>
          <div className='top-banner-right-image-container' style={{backgroundImage:`url(${imageUrl})`}} >
          </div>
        </div>
      </Container>

    </div>
  )
}
