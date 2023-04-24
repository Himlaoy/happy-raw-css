import React from 'react';
import logo from '/news/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { FaBeer, FaUserCircle } from 'react-icons/fa';


const Header = () => {
    return (
        <Container>
            <div className='text-center mt-4'>
                <img src={logo} alt="" />
                <p><small>Journalism Without Fear or Favour</small></p>
                <p><small>{moment().format("dddd, MMMM, YYYY")}</small></p>
                <div className='d-flex mt-3'>
                    <Button variant='danger'>Latest</Button>
                    <Marquee>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Marquee>

                </div>
            </div>
            <Navbar bg="white" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav text-decoration-none">
                        <Nav className="mx-auto text-decoration-none gap-3 ">
                            <Link style={{textDecoration:'none'}}  to="/">Home</Link>
                            <Link style={{textDecoration:'none'}} >About</Link>
                            <Link style={{textDecoration:'none'}} >Career</Link>
                        </Nav>
                        <Nav className='gap-3 text-decoration-none' >
                            <Link style={{textDecoration:'none'}}><FaUserCircle></FaUserCircle></Link>
                            <Link style={{textDecoration:'none'}} to="/login">Login</Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
            <div>
                
            </div>
        </Container>

    );
};

export default Header;




{/* <header className='head'>
                <img src={logo} alt="" />
                <div>
                    <ul className='items'>
                        <li className='item'>Home</li>
                        <li className='item'>About</li>
                        <li className='item'>Contact us</li>
                    </ul>
                </div>
            </header>
            <h3></h3> */}