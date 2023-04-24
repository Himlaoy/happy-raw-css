import React from 'react';
import { Button } from 'react-bootstrap';
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';

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
            <Qzone></Qzone>
            <div className='mt-2 text-white text-center rounded'
                style={{
                    height: '350px',
                    width: '260px',
                    backgroundSize: 'cover',
                    backgroundImage: `url(${"/news/bg1.png"})`
                }}
            >
                <h2 className='text-white text-center'>Create an Amazing Newspaper</h2>
                <h4 className='text-center'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</h4>
                <Button variant="danger">Learn More</Button>

            </div>
        </div>
    );
};

export default RightNav;