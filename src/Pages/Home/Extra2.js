import React from 'react';
import nasa from '../../Images/nasa.png'
import nbc from '../../Images/nbc.png'
import discover from '../../Images/discover.png'
import mit from '../../Images/mit.png'

const Extra2 = () => {
    return (
        <div className='bg-gray-900  items-center grid grid-cols-2 py-8 mt-12'>
            <h1 className='text-2xl text-white font-bold uppercase'>Trusted By The Best <br />We Deliver the best </h1>
            <div className='grid grid-cols-4'>
                <img cl src={nasa} alt="" />
                <img src={discover} alt="" />
                <img src={nbc} alt="" />
                <img src={mit} alt="" />
            </div>
        </div>
    );
};

export default Extra2;