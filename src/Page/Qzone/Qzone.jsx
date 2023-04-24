import React from 'react';
import png1 from '/news/qZone1.png'
import png2 from '/news/qZone2.png'
import png3 from '/news/qZone3.png'

const Qzone = () => {
    return (
        <div className='bg-secondary rounded py-3 mt-3'>
            <img src={png1} alt="" />
            <img src={png2} alt="" />
            <img src={png3} alt="" />
        </div>
    );
};

export default Qzone;