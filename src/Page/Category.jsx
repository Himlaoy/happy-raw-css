import React from 'react';
import { Collapse } from 'react-bootstrap';
import {  useLoaderData, useParams } from 'react-router-dom';

const Category = () => {
    const {id} = useParams()
    const news = useLoaderData()
    const {author,category_id,details,image_url,rating,thumbnail_url,title,total_view,_id} = news
    console.log(news);


    return (
        <div>
            <h2>This is all category :{id}</h2>
        </div>
    );
};

export default Category;