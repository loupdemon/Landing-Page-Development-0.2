import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

import fb from '../../assets/socials/facebook.png';
import insta from '../../assets/socials/instagram.png';
import twitter from '../../assets/socials/twitter.png';
import wa from '../../assets/socials/whatsapp.png';
import discord from '../../assets/socials/discord.png';
import git from '../../assets/socials/github.png';
import yt from '../../assets/socials/youtube.png';
import blogger from '../../assets/socials/blogger.png';
import li from '../../assets/socials/linkedin.png';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-content'>


                <div className='footer-card-content'>

                    {/* INTRO  */}
                    <div className='footer-card-group footer-card-content-allehaTechIntro mx-10'>
                        <p className='text-xl mb-8'>Aleeha Techonologies Ltd</p>
                        <p style={{ color: "grey" }}>
                            Software Solutions, Data Analytics, Machine Learning, Design And Consultancy Company
                        </p>

                        <div className='footer-card-content-socials mt-10'>
                            <a href="" target={"_blank"}>
                                <img src={fb} alt="" />
                            </a>

                            <a href="" target={"_blank"}>
                                <img src={insta} alt="" />
                            </a>

                            <a href="" target={"_blank"}>
                                <img src={twitter} alt="" />
                            </a>

                            <a href="" target={"_blank"}>
                                <img src={wa} alt="" />
                            </a>

                            <a href="" target={"_blank"}>
                                <img src={git} alt="" />
                            </a>

                            <a href="" target={"_blank"}>
                                <img src={discord} alt="" />
                            </a>

                            <a href="" target={"_blank"}>
                                <img src={yt} alt="" />
                            </a>

                            <a href="" target={"_blank"}>
                                <img src={blogger} alt="" />
                            </a>

                            <a href="" target={"_blank"}>
                                <img src={li} alt="" />
                            </a>


                        </div>
                    </div>


                    <div className='footer-card-group flex'>
                        {/* LINKS  */}

                        <div className='footer-card-content-links mx-10'>
                            <p className='text-xl mb-8'>Links</p>
                            <div style={{ color: "grey" }}>
                                <div className='footer-card-content-singleLink flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                    <Link to='/'>Home</Link>
                                </div>
                                <div className='footer-card-content-singleLink flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                    <Link to='/service'>Service</Link>
                                </div>
                                <div className='footer-card-content-singleLink flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                    <Link to='/projects'>Projects</Link>
                                </div>
                                <div className='footer-card-content-singleLink flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                    <Link to='/about'>About</Link>
                                </div>
                                <div className='footer-card-content-singleLink flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                    <Link to='/blog'>Blog</Link>
                                </div>
                                <div className='footer-card-content-singleLink flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                    <Link to='/contact'>Contact</Link>
                                </div>
                                <div className='footer-card-content-singleLink flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                    <Link to='/meetus'>Meet Us</Link>
                                </div>
                            </div>
                        </div>



                        {/* SERVICE  */}

                        <div className='footer-card-content-service mx-10'>
                            <p className='text-xl mb-8'>Services</p>
                            <div style={{ color: "grey" }}>
                                <div className='footer-card-content-singleLink flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                    <Link to='/service/ss'>Software_Solutions</Link>
                                </div>
                                <div className='footer-card-content-singleLink flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                    <Link to='/service/as'>Analytical_Solutions</Link>
                                </div>
                                <div className='footer-card-content-singleLink flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                    <Link to='/service/c'>Consultancy</Link>
                                </div>
                                <div className='footer-card-content-singleLink flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                    <Link to='/service/uiux'>UI/UX Design</Link>
                                </div>
                                <div className='footer-card-content-singleLink flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                    <Link to='/service/ma'>Mobile Applications</Link>
                                </div>
                                <div className='footer-card-content-singleLink flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                    <Link to='/service/sqa'>SQA Service</Link>
                                </div>

                            </div>
                        </div>
                    </div>



                    {/* ADDRESS  */}
                    <div className='footer-card-group footer-card-content-haveQus mx-10'>
                        <p className='text-xl mb-8'>Have a Questions?</p>

                        <div className='flex mb-2' style={{ color: "grey" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <p >
                                Bazar Road ,Bhuapur-bus-stand, Tangail, Dhaka, Bangladesh
                            </p>
                        </div>
                        <div className='flex mb-2' style={{ color: "grey" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <p>
                                01402199906<br />
                                01918468932<br />
                                01917468932<br />
                            </p>
                        </div>
                        <div className='flex' style={{ color: "grey" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <p >
                                aleeha-tech@gmail.com
                            </p>
                        </div>

                    </div>


                </div>






                <p style={{
                    fontSize: "12px", letterSpacing: "3px", marginTop: "100px"
                }}>Copyright ©2022 All rights reserved.
                </p>


            </div>
        </div>
    );
};

export default Footer;