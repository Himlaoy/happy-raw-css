import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Form, Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container className='mx-auto  w-96' >
            <Form >
                <div>
                    <label className='d-block mb-2' htmlFor="email">Email</label>
                    <input type="email" name="email" required id="email" />
                </div>
                <div>
                    <label className='d-block mb-2 ' htmlFor="password">Password</label>
                    <input type="password" name="password" required id="password" />
                </div>
                <input className='mt-3 ' type="submit" value="Login" />
            </Form>
            <p>Don't have an account ? please <Link to="/register">Register</Link></p>
        </Container>
    );
};

export default Login;