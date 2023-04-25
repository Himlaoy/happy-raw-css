import React from 'react';
import { Collapse } from 'react-bootstrap';
import {  useLoaderData, useParams } from 'react-router-dom';
import NewsCard from './NewsCard/NewsCard';

const Category = () => {
    const {id} = useParams()
    const news = useLoaderData()
    console.log(news);


    return (
        <div>
            { id && <h2>This is all category :{news.length}</h2>}
            {
                news.map(ns=><NewsCard news={ns} key={ns._id}></NewsCard>)
            }
           
        </div>
    );
};

export default Category;