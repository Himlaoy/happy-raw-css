import React from 'react';
import './Home.css'
import bg from '/image/background.jpg'
import logo from '/logo/logo.png'
import author from '/image/author.jpg';
import png from '/icons/bar-chart.png'
import png1 from '/icons/coding.png'
import png2 from '/icons/digital-marketing.png'
import png3 from '/icons/phone-call.png'

const Home = () => {
    return (
        <div>
           
            {/* banner section */}

            <section>
                <div className='bg'>
                    <div>
                        <h2>Hello Developer</h2>
                        <p>Every agency will be have a good luck if it will make AI his employee</p>
                    </div>
                </div>
            </section>
            <section className='details'>
                <div>
                    <h2>Here, I am a Developer. All info about me is here</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero temporibus distinctio error.</p>
                    <div className='author'>
                        <img  src={author} alt="" />
                        <div className='laden'>
                            <p>Usama bin laden</p>
                            <p>Pakistan</p>
                        </div>
                    </div>
                </div>
                <div className='pngg'>
                    <img className='png' src={png} alt="" />
                    <img className='png' src={png1} alt="" />
                    <img className='png' src={png2} alt="" />
                    <img className='png' src={png3} alt="" />
                </div>

            </section>
        </div>
    );
};

export default Home;