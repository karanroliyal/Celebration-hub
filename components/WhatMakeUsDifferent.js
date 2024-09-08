import Image from 'next/image';
import React from 'react';
import { Container, Row , Col } from 'react-bootstrap';
import Camera from '../public/camera.png'

export default function WhatMakeUsDifferent() {
    return (
        <div className='What-Make-Us-Different-wrapper' >
            <Container>

                <div className='What-Make-Us-Different' >
                    <div className='text-container' ><h2>What Make Us Different</h2></div>
                    <Row xs={2} md={3} lg={3} >
                        <Col>
                            <div className='card-container'>
                                <div className='image-container'>
                                    <Image src={Camera} width={50} height={50} />
                                </div>
                                <div className='text-wrapper'>
                                    <h5>Photography</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, blanditiis.</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className='card-container'>
                                <div className='image-container'>
                                    <Image src={Camera} width={50} height={50} />
                                </div>
                                <div className='text-wrapper'>
                                    <h5>Photography</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, blanditiis.</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className='card-container'>
                                <div className='image-container'>
                                    <Image src={Camera} width={50} height={50} />
                                </div>
                                <div className='text-wrapper'>
                                    <h5>Photography</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, blanditiis.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

            </Container>
        </div>
    );
}
