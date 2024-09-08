'use client'
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../public/Celebration-Logo.png'
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <div className='Header-wrapper'>
      <Navbar expand="lg" className="bg-body-tertiary" >
        <Container >
          <Navbar.Brand href="/"><Image src={Logo} alt='Celebration Hub' width={200} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              navbarScroll
            >
              <Link href={"/"} className='my-nav-bar-links' >Home</Link>
              <NavDropdown className='my-nav-bar-links' title="Services" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown className='my-nav-bar-links' title="Locations" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Link className='my-nav-bar-links' href={"about"} >About</Link>

              <Link className='my-nav-bar-links' href={"blog"} >
                Blog
              </Link>
              <Link className='my-nav-bar-links' href={"contact"} >
                Contact
              </Link>
            </Nav>
            {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
