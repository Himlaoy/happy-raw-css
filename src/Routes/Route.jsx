import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Page/Home/Home';
import Main from '../LayOut/Main';
import Category from '../Page/Category';
import NewsLayOut from '../LayOut/NewsLayOut';
import News from '../Page/News/News';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/category/:id',
                element:<Category></Category>,
                
            }
        ]
    },
    {
        path:'news',
        element:<NewsLayOut></NewsLayOut>,
        children:[
            {
                path:':id',
                element:<News></News>,
            }
        ]
    }
])

export default router;