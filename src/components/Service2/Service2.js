import React from 'react';
import './Service2.css';
import time from '../../assets/service-icon/calendar.png'
import relation from '../../assets/service-icon/relationships.png'
import trust from '../../assets/service-icon/shield.png'

const Service2 = () => {
    return (
        <div className='service2-container mb-10'>
            <div className='service2-content'>

                <div className='service2-text-container flex'>

                    <div className='service2-card'>
                        <div className='flex items-center mb-3'>
                            <img src={time} alt="" style={{ height: "50px" }} />
                            <p className='service2-card-heading'>
                                Right on Time
                            </p>
                        </div>
                        <p className='service2-card-discription'>
                            Time is the most important part of our commitment. The whole team believes in on time
                            delivery. This is something we are proud to maintain in each of our projects.
                        </p>
                    </div>

                    <div className='service2-card'>
                        <div className='flex items-center mb-3'>
                            <img src={relation} alt="" style={{ height: "50px" }} />
                            <p className='service2-card-heading'>
                                Relationship
                            </p>
                        </div>
                        <p className='service2-card-discription'>
                            It’s not an end to our relationship when a customer gets the product delivered. It is
                            when our relationship starts. We value each relationship we made with our customers.
                        </p>
                    </div>

                    <div className='service2-card'>
                        <div className='flex items-center mb-3'>
                            <img src={trust} alt="" style={{ height: "50px" }} />
                            <p className='service2-card-heading'>
                                Trust
                            </p>
                        </div>
                        <p className='service2-card-discription'>
                            Our clients believe in us to deliver just the product the dreamed of and we never
                            disappoint. The trust develops in us while we build something together, is the greatest
                            achievement for us.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Service2;