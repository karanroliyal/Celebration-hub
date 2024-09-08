import Image from 'next/image'
import React from 'react'
import { Container } from 'react-bootstrap'
import About1 from '../public/about1.png'



export default function Aboutus() {
    return (
        <div className='about-us-content-wrapper' >
            <Container>


                <div className='about-flex' >
                    <div>
                        <Image src={About1} alt='About us' />
                    </div>
                    <div>
                        <h2 className='heading'><span>About - </span> Celebration Hub</h2>
                        <p>At Celebration Hub, we believe that every moment is worth celebrating, and we are here to make your special occasions truly unforgettable. As a comprehensive event service provider, we offer a wide range of solutions to ensure your celebrations are nothing short of spectacular.
                            At Celebration Hub, we understand that your celebrations are more than just events—they are cherished memories in the making. We are committed to providing exceptional service, ensuring that every detail is handled with care, so you can relax and enjoy your big moments.

                            Let us be your trusted partner in making your celebrations extraordinary. Welcome to Celebration Hub, where every celebration becomes a masterpiece.
                        </p>
                    </div>
                </div>
                <div className='about-flex' >
                    <div>
                        <h2 className='heading'><span>About - </span> Celebration Hub</h2>
                        <p>At Celebration Hub, we believe that every moment is worth celebrating, and we are here to make your special occasions truly unforgettable. As a comprehensive event service provider, we offer a wide range of solutions to ensure your celebrations are nothing short of spectacular.
                            At Celebration Hub, we understand that your celebrations are more than just events—they are cherished memories in the making. We are committed to providing exceptional service, ensuring that every detail is handled with care, so you can relax and enjoy your big moments.

                            Let us be your trusted partner in making your celebrations extraordinary. Welcome to Celebration Hub, where every celebration becomes a masterpiece.
                        </p>
                    </div>
                    <div>
                        <Image src={About1} alt='About us' />
                    </div>

                </div>

            </Container>
        </div>
    )
}
