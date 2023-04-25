import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';

import Main from '../LayOut/Main';
import Category from '../Page/Category';
import NewsLayOut from '../LayOut/NewsLayOut';
import News from '../Page/News/News';
import LoginLayOut from '../LayOut/LoginLayOut';

import Register from '../Page/Register/Register';
import Login from '../Page/Register/Login';

const router = createBrowserRouter([
    {
        path:'/',
        element: <LoginLayOut></LoginLayOut>,
        children:[
            {
                path:'/',
                element: <Navigate to="/category/0"></Navigate>,
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>,
            }
        ]
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