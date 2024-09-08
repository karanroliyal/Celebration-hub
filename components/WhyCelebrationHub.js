"use client"
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



export default function WhyCelebrationHub() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrow: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };
  return (
    <div className="why-choose-us-section">
      <Container>
        <h2 className='heading'>Why <span>Choose Us</span></h2>
        <Container>
          <Slider {...settings}>
            <div className='card-container'>
              <div>🎯</div>
              <div className='text-section' ><h5>Trusted marketplace from <b>Matrimony.com</b> group</h5></div>
            </div>
            <div className='card-container'>
              <div>💡</div>
              <div className='text-section' ><h5>Trusted marketplace from <b>Matrimony.com</b> group</h5></div>
            </div>
            <div className='card-container'>
              <div>⚡</div>
              <div className='text-section' ><h5>Trusted marketplace from <b>Matrimony.com</b> group</h5></div>
            </div>
            <div className='card-container'>
              <div>📞</div>
              <div className='text-section' ><h5>Trusted marketplace from <b>Matrimony.com</b> group</h5></div>
            </div>
          </Slider></Container>
      </Container>
    </div>

  );
}
