import React from 'react';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Page/Header/Header';
import Home from '../Page/Home/Home';
import LeftNav from '../Page/LeftNav/LeftNav';
import RightNav from '../Page/RightNav/RightNav';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';

const Main = () => {
    return (
        <Container>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Row>
                <Col lg={3}>
                    <LeftNav></LeftNav>
                </Col>
                <Col lg={6}>
                    <Outlet></Outlet>
                </Col>
                <Col lg={3}>
                    <RightNav></RightNav>
                </Col>
            </Row>
        </Container>
    );
};

export default Main;