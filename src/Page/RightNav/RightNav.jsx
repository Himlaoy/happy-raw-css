import React from 'react';
import { Button } from 'react-bootstrap';
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const RightNav = () => {
    return (
        <div>
            <h2>Login with</h2>
            <Button variant="outline-primary"><FaFacebook></FaFacebook> Login with Facebook</Button>
            <br />
            <Button variant="outline-secondary"><FaGoogle></FaGoogle> Login with Google</Button>
            <h3 className='mt-3'>Find us on </h3>
            <Button variant="outline-secondary"><FaFacebook></FaFacebook> FaceBook</Button>
            <br />
            <Button variant="outline-success"><FaTwitter></FaTwitter> Twitter</Button>
            <br />
            <Button variant="outline-warning"><FaInstagram></FaInstagram> Instagram</Button>
        </div>
    );
};

export default RightNav;