import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData()
    const { author, category_id, details, image_url, rating, thumbnail_url, title, total_view, _id } = news
    return (
        <Card>
            <Card.Img variant="top" src={thumbnail_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}><Button variant="danger">See all news category</Button></Link>
            </Card.Body>
        </Card>
    );
};

export default News;