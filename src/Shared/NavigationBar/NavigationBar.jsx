import React, { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


const NavigationBar = () => {
    const {user} = useContext(AuthContext)
    return (
        <Navbar bg="white" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav text-decoration-none">
                    <Nav className="mx-auto text-decoration-none gap-3 ">
                        <Link style={{ textDecoration: 'none' }} to="/">Home</Link>
                        <Link style={{ textDecoration: 'none' }} >About</Link>
                        <Link style={{ textDecoration: 'none' }} >Career</Link>
                    </Nav>
                    <Nav className='gap-3 text-decoration-none' >
                        {
                            user ? <Link style={{ textDecoration: 'none' }} to="/Logout">LogOut</Link> : <><Link style={{ textDecoration: 'none' }}><FaUserCircle></FaUserCircle></Link>

                                <Button variant="success"><Link to="/login">Login</Link></Button>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
};

export default NavigationBar;