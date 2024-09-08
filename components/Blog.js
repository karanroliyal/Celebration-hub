import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import blog from '../public/blog1.jpg'
import blog2 from '../public/camera.jpg'

export default function Blog() {
    return (
        <div className='blog-section-wrapper' >
            <Container>
                <h2 className='heading' >Blog</h2>
                <Row  xs={2} md={3} lg={4} >
                    <Col>
                        <div className='blog-container' >
                            <div className='image-container'  >
                                <Image className='blog-image' src={blog} alt='image' />
                            </div>
                            <div className='text-container'>
                                <h3>Title of Blog</h3>
                                <p>Description of blog</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='blog-container' >
                            <div className='image-container'>
                                <Image className='blog-image' src={blog2} alt='image' />
                            </div>
                            <div className='text-container'>
                            <h3>Title of Blog</h3>
                                <p>Description of blog</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='blog-container' >
                            <div className='image-container'>
                                <Image className='blog-image' src={blog} alt='image' />
                            </div>
                            <div className='text-container'>
                            <h3>Title of Blog</h3>
                                <p>Description of blog</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='blog-container' >
                            <div className='image-container'>
                                <Image className='blog-image' src={blog} alt='image' />
                            </div>
                            <div className='text-container'>
                            <h3>Title of Blog</h3>
                                <p>Description of blog</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='blog-container' >
                            <div className='image-container'>
                                <Image className='blog-image' src={blog} alt='image' />
                            </div>
                            <div className='text-container'>
                            <h3>Title of Blog</h3>
                                <p>Description of blog</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='blog-container' >
                            <div className='image-container'>
                                <Image className='blog-image' src={blog} alt='image' />
                            </div>
                            <div className='text-container'>
                            <h3>Title of Blog</h3>
                                <p>Description of blog</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='blog-container' >
                            <div className='image-container'>
                                <Image className='blog-image' src={blog} alt='image' />
                            </div>
                            <div className='text-container'>
                            <h3>Title of Blog</h3>
                                <p>Description of blog</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='blog-container' >
                            <div className='image-container'>
                                <Image className='blog-image' src={blog} alt='image' />
                            </div>
                            <div className='text-container'>
                            <h3>Title of Blog</h3>
                                <p>Description of blog</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
