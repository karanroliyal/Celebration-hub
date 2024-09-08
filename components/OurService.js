import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import Product from '../public/photo.png'
import Photography from '../public/camera.jpg'
// import Catering from '../public/catering.jpg'
// import Decoration from '../public/Decoration.jpg'
// import invitatinCard from '../public/invitation-card.jpg'
// import Salon from '../public/salon.jpg'
// import Banquet from '../public/banquate-hall.jpg'



export default function OurService() {
    return (
        <div className='Our-Srvice-wrapper'>

            <Container>

                <div>
                    <h2 className='heading' >Vendor <span>Categories</span></h2>
                </div>
                <Row xs={2} md={3} lg={4} >
                    <Col>
                        <div className='categories-wrapper'>
                            <div>
                                <Image src={Photography} alt='image' />
                                <div className='text-wrapper' >
                                    <h5>Photography</h5>
                                </div>
                            </div>
                        </div>

                    </Col>
                    <Col>
                        <div className='categories-wrapper'>
                            <div>
                                <Image src={Photography} alt='image' />
                                <div className='text-wrapper' >
                                    <h5>Catering</h5>
                                </div>
                            </div>
                        </div>

                    </Col>
                    <Col>
                        <div className='categories-wrapper'>
                            <div>
                                <Image src={Photography} alt='image' />
                                <div className='text-wrapper' >
                                    <h5>Decoration</h5>
                                </div>
                            </div>
                        </div>

                    </Col>
                    <Col>
                        <div className='categories-wrapper'>
                            <div>
                                <Image src={Photography} alt='image' />
                                <div className='text-wrapper' >
                                    <h5>Invitatin Card</h5>
                                </div>
                            </div>
                        </div>

                    </Col>
                    <Col>
                        <div className='categories-wrapper'>
                            <div>
                                <Image src={Photography} alt='image' />
                                <div className='text-wrapper' >
                                    <h5>Salon</h5>
                                </div>
                            </div>
                        </div>

                    </Col>
                    <Col>
                        <div className='categories-wrapper'>
                            <div>
                                <Image src={Photography} alt='image' />
                                <div className='text-wrapper' >
                                    <h5>Banquet Hall</h5>
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>

            </Container>

        </div>
    );
}
