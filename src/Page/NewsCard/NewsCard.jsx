import moment from 'moment';
import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {

    const { author, category_id, details, image_url, rating, thumbnail_url, title, total_view, _id } = news

    return (
        <Card className=" mt-3">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ width: '40px' }} src={author?.img} roundedCircle />
                <div className='flex-grow-1 ms-2'>
                    <p className='mb-0'>{author?.name}</p>
                    <p>{moment().format("dd-MM-YYYY")}</p>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={thumbnail_url} />
                <Card.Text>
                    {details.length < 250 ? <>{details}</> : <span>{details.slice(0, 250)} <Link to={`/news/${_id}`} className='text-decoration-none'>.....ReadMore</Link></span>}
                </Card.Text>

            </Card.Body>
            <Card.Footer className="text-muted">
                <div>
                    <Rating
                        placeholderRating={rating?.number}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    >

                    </Rating>
                </div>
                <div className='d-flex'>
                    <p><FaEye></FaEye></p>
                    <p>{total_view}</p>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;