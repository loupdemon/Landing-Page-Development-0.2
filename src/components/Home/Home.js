import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container py-10'>
            <div className='home-content my-7'>
                <div className='home-text'>
                    <p className=''>HI! WE ARE ALEEHA TECH BD LIMITED</p>
                    <p className='my-7 text-5xl'>
                        <span className='font-bold'>Software Solutions</span>, Data Analysis, Machine Learning, Design And <span className='font-bold'>Consultancy</span> Firm
                    </p>
                    <p>
                        You are one step away to bring your dream ideas to reality. We are here o help you to build software,mobile appkications, data driven solutions.
                    </p>
                    <button className='appointment-btn mt-10 mb-10'>Let's Start Planning Together</button>
                </div>
                <div className='home-img'>

                </div>
            </div>
        </div>
    );
};

export default Home;