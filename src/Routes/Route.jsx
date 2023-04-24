import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Page/Home/Home';
import Main from '../LayOut/Main';
import Category from '../Page/Category';

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
                path:'category',
                element:<Category></Category>,
                loader:()=> fetch('http://localhost:5000/')
            }
        ]
    }
])

export default router;