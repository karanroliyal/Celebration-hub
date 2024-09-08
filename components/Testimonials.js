"use client"
import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Quote from "../public/quotes.svg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


export default function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    };
    return (
        <div className='testimonials-section-wrapper'>
            <Container>
                <h2 className='heading'> <span>Testimonials</span> </h2>
                <Slider {...settings}>

                    <div className='testimonial-container' >
                        <div className='image-container'><Image src={Quote} alt='testimonial image' /></div>
                        <div className='review-container'>
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rerum facere aliquam odio, atque debitis delectus mollitia dicta in porro, odit temporibus doloremque beatae? Recusandae.</h6>
                        </div>
                        <div className='client-name'><p>Karan Rawat</p></div>
                    </div>
                    <div className='testimonial-container' >
                        <div className='image-container'><Image src={Quote} alt='testimonial image' /></div>
                        <div className='review-container'>
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rerum facere aliquam odio, atque debitis delectus mollitia dicta in porro, odit temporibus doloremque beatae? Recusandae.</h6>
                        </div>
                        <div className='client-name'><p>Karan Rawat</p></div>
                    </div>
                    <div className='testimonial-container' >
                        <div className='image-container'><Image src={Quote} alt='testimonial image' /></div>
                        <div className='review-container'>
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rerum facere aliquam odio, atque debitis delectus mollitia dicta in porro, odit temporibus doloremque beatae? Recusandae.</h6>
                        </div>
                        <div className='client-name'><p>Karan Rawat</p></div>
                    </div>
                    <div className='testimonial-container' >
                        <div className='image-container'><Image src={Quote} alt='testimonial image' /></div>
                        <div className='review-container'>
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rerum facere aliquam odio, atque debitis delectus mollitia dicta in porro, odit temporibus doloremque beatae? Recusandae.</h6>
                        </div>
                        <div className='client-name'><p>Karan Rawat</p></div>
                    </div>
                    <div className='testimonial-container' >
                        <div className='image-container'><Image src={Quote} alt='testimonial image' /></div>
                        <div className='review-container'>
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rerum facere aliquam odio, atque debitis delectus mollitia dicta in porro, odit temporibus doloremque beatae? Recusandae.</h6>
                        </div>
                        <div className='client-name'><p>Karan Rawat</p></div>
                    </div>
                    <div className='testimonial-container' >
                        <div className='image-container'><Image src={Quote} alt='testimonial image' /></div>
                        <div className='review-container'>
                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rerum facere aliquam odio, atque debitis delectus mollitia dicta in porro, odit temporibus doloremque beatae? Recusandae.</h6>
                        </div>
                        <div className='client-name'><p>Karan Rawat</p></div>
                    </div>

                </Slider>
            </Container>
        </div>
    );
}
