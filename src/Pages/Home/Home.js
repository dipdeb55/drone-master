import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Extra2 from './Extra2';
import FpvDrone from './FpvDrone';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner />
            <Tools />
            <Extra2 />
            <Reviews />
            <BusinessSummary />
            <FpvDrone />
        </div>
    );
};

export default Home;