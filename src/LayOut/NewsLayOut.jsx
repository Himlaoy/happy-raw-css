import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Page/Header/Header';

import LeftNav from '../Page/LeftNav/LeftNav';
import RightNav from '../Page/RightNav/RightNav';

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