import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Page/Home/Home';
import Main from '../LayOut/Main';
import Category from '../Page/Category';
import NewsLayOut from '../LayOut/NewsLayOut';
import News from '../Page/News/News';
import LoginLayOut from '../LayOut/LoginLayOut';

const router = createBrowserRouter([
    {
        path:'/',
        element: <LoginLayOut></LoginLayOut>
    },
    {
        path:'category',
        element:<Main></Main>,
        children:[
            {
                path:':id',
                element:<Category></Category>,
                loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`)
                
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
                loader:({params})=> fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default router;