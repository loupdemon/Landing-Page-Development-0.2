import React from 'react';
import './Contactus.css';

import map from '../../assets/contact/map.png';
import call from '../../assets/contact/customer-service.png';
import email from '../../assets/contact/email.png';
import web from '../../assets/contact/web-link.png';
import Iframe from 'react-iframe';

const Contactus = () => {
    return (
        <div className='contact-container mb-20'>
            <div className='contact-content'>

                <div className='contact-details px-5'>
                    <p className=''
                        style={{
                            fontSize: "14px", letterSpacing: "3px"
                        }}>CONTACT</p>

                    <p className='text-3xl mb-8'
                        style={{
                            color: "rgb(0,165,255)"
                        }}>GET IN TOUCH</p>


                    {/* CARD Add */}
                    <div className='flex contact-card'>
                        <div className='contact-details-img w-1/5'>
                            <img src={map} alt="" />
                        </div>
                        <div className='contact-details-textDetails w-4/5 ml-5'>
                            <p className='mb-3'
                                style={{
                                    fontSize: "14px", letterSpacing: "3px", 
                                }}>Address</p>

                            <p className='text-content mb-1'>RCCF+93M, Kuril Kazi bari Dhaka, Dhaka 1229</p>
                            <p className='text-content'>Bazar Road ,Bhuapur-bus-stand, Tangail, Dhaka, Bangladesh</p>

                        </div>
                    </div>

                    {/* CARD  phone*/}
                    <div className='flex contact-card'>
                        <div className='contact-details-img w-1/5'>
                            <img src={call} alt="" />
                        </div>
                        <div className='contact-details-textDetails w-4/5 ml-5'>
                            <p className='mb-3'
                                style={{
                                    fontSize: "14px", letterSpacing: "3px", 
                                }}>Phone</p>

                            <p className='text-content mb-1'>HR(Dhaka) 01402199906, 01918468932</p>
                            <p className='text-content'>HR(Tangail) 01917468932</p>

                        </div>
                    </div>

                    {/* CARD  mail*/}
                    <div className='flex contact-card'>
                        <div className='contact-details-img w-1/5'>
                            <img src={email} alt="" />
                        </div>
                        <div className='contact-details-textDetails w-4/5 ml-5'>
                            <p className='mb-3'
                                style={{
                                    fontSize: "14px", letterSpacing: "3px", 
                                }}>Mail</p>

                            <p className='text-content mb-1'>aleeha-tech@gmail.com</p>

                        </div>
                    </div>

                    {/* CARD website */}
                    {/* <div className='flex contact-card'>
                        <div className='contact-details-img w-1/5'>
                            <img src={web} alt="" />
                        </div>
                        <div className='contact-details-textDetails w-4/5 ml-5'>
                            <p className='mb-3'
                                style={{
                                    fontSize: "14px", letterSpacing: "3px", 
                                }}>Website</p>

                            <p className='text-content mb-1'>www.aleehaTech.com</p>

                        </div>
                    </div> */}


                </div>


                {/* GOOGLE MAP LOCATION  */}
                <div className='google-map px-5 flex flex-col'>
                    <p className=''
                        style={{
                            fontSize: "14px", letterSpacing: "3px"
                        }}>FIND US</p>

                    <p className='text-3xl mb-8'
                        style={{
                            color: "rgb(0,165,255)"
                        }}>REACH US OUT</p>


                    <div className='h-full' style={{
                        paddingBottom:"20px"
                    }}>
                        <Iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d383.6586084902142!2d90.421456190967!3d23.81872792274736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7c14b67e909%3A0x803c0a22f65fea78!2sKuril%20Kazi%20Bari!5e0!3m2!1sen!2sbd!4v1651116146555!5m2!1sen!2sbd"
                            width="100%" height="100%"
                            style="border:0;" allowfullscreen=""
                            loading="lazy" >

                        </Iframe>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contactus;