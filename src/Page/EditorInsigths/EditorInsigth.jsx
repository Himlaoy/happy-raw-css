import React from 'react';
import editor1 from '/news/editorsInsight1.png';
import editor2 from '/news/editorsInsight2.png';
import editor3 from '/news/editorsInsight3.png';
import { Card, Col, Row } from 'react-bootstrap';

const EditorInsigth = () => {
    return (
        <Row xs={1} md={2} lg={3} className="g-4 mt-3">
            <Col>
                <Card>
                    <Card.Img variant="top" src={editor1} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={editor3} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={editor2} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </Row>
    );
};

export default EditorInsigth;