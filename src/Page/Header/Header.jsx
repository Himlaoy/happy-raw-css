import React from 'react';
import logo from '/logo/logo.png'

const Header = () => {
    return (
        <div>
            <header className='head'>
                <img src={logo} alt="" />
                <div>
                    <ul className='items'>
                        <li className='item'>Home</li>
                        <li className='item'>About</li>
                        <li className='item'>Contact us</li>
                    </ul>
                </div>
            </header>
            <h3></h3>
        </div>

    );
};

export default Header;