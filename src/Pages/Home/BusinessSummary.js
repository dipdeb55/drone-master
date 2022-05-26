import React from 'react';
import countries from '../../Images/world.png'
import people from '../../Images/people.png'
import feedback from '../../Images/trust.png'
import bg from '../../Images/bg.png'
import satisfaction from '../../Images/satisfaction.png'


const BusinessSummary = () => {
    return (
        <div className='bg-cover mt-12 mb-6' style={{
            background: `url(${bg}) center`,
            backgroundSize: "cover"
        }}>
            <h1 className='text-5xl font-bold text-indigo-500'>Our Services</h1>
            <p className='text-3xl mt-4'>WE SUCCESSFULLY FULFILL OUR COUSTOMER NEED</p>
            <section className='grid grid-cols-2 lg:grid-cols-4 gap-7 justify-items-center mt-5'>
                <div>
                    <img className='w-14 lg:w-24' src={countries} alt="" />
                    <p className='text-info text-5xl font-semibold mt-4'>55</p>
                    <h1 className='text-info text-2xl'>Countries</h1>
                </div>
                <div>
                    <img className='w-14 lg:w-24' src={people} alt="" />
                    <p className='text-info text-5xl font-semibold mt-4'>600+</p>
                    <h1 className='text-info text-2xl'>Customer</h1>
                </div>
                <div>
                    <img className='w-14 lg:w-24' src={feedback} alt="" />
                    <p className='text-info text-5xl font-semibold mt-4'>400+</p>
                    <h1 className='text-info text-2xl'>Deals</h1>
                </div>
                <div>
                    <img className='w-14 lg:w-24' src={satisfaction} alt="" />
                    <p className='text-info text-5xl font-semibold mt-4'>450+</p>
                    <h1 className='text-info text-2xl'>FeedBack</h1>
                </div>
                <div></div>
            </section>
        </div>

    );
};

export default BusinessSummary;