import React from 'react';
import './About.css';
import photo from '../../assets/cover-photos/mars-sector-6-IgUR1iX0mqM-unsplash.jpg';

const About = () => {
    return (
        <div className='about-container mb-20'>



            <div className='about-content about-content1'>
                <div className='about-content1-img w-2/5'>
                    <img src={photo} alt="" className='' style={{
                        height: "340px",
                    }} />
                </div>
                <div className='about-content1-text w-3/5 pl-10'>
                    <p className=''
                        style={{
                            fontSize: "14px", letterSpacing: "3px"
                        }}>WELCOME TO ALEEHA-TECH</p>

                    <p className='text-3xl mb-5 about-content1-text-heading'>Software Development Company</p>

                    <p className='about-content1-text-discription'>
                        After years of experience in Software development industry, we decided to create values by offering development services to the people we care.<br /><br /> With us, our customers are always winners and relationship with customer is our achievement at the end of the day. We build what our customers dream.<br /><br /> Due to long industry experience we can offer services at budget and that makes our customers winner with us. It's always win-win situation we work and deal.<br /><br /> The perfect product is our promise to you. We back our integrity and hard work to deliver on time. You are never late with Us.
                    </p>
                </div>
            </div>



            {/* <div className='about-content about-content2 flex flex-col justify-center items-center mt-20'>

                <p className='text-3xl mb-3 about-content1-text-heading'>THE AMAZING TEAM</p>
                <p className=''
                    style={{
                        fontSize: "14px", letterSpacing: "3px"
                    }}>Team that starves to deliver you the world class products.</p>
            </div> */}



        </div>
    );
};

export default About;