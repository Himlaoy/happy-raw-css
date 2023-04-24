import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [category, setCategory] = useState([])
    console.log(category)


    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res=>res.json())
        .then(data=>setCategory(data))
        .catch(error=>console.log(error.message))
    },[])

    return (
        <div>
            <h2>All category is here</h2>
            {
                category.map(ct=><p key={ct.id}>
                    <Link to={`/category/${ct.id}`} className='text-decoration-none text-black'>{ct.name}</Link>

                    </p> )
            }
        </div>
    );
};

export default LeftNav;