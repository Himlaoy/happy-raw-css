import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Page/Header/Header';
import RightNav from '../Page/RightNav/RightNav';
import { Outlet } from 'react-router-dom';

const NewsLayOut = () => {
    return (
        <Container>
            <Header></Header>
            <Row>
                <Col lg={9}>
                    <Outlet></Outlet>
                </Col>
                <Col lg={3}>
                    <RightNav></RightNav>
                </Col>
            </Row>
        </Container>
    );
};

export default NewsLayOut;