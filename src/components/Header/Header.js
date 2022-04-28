import React from 'react';
import CustomLink from '../../utilities/CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    // FUNCTION FOR NAVBAR SCROLL 
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 90) {
            document.querySelector('.header-container').classList.add('header-container-bg');
            document.querySelector('.header-container').classList.add('shadow-lg');
        }
        else {
            document.querySelector('.header-container').classList.remove('header-container-bg');
            document.querySelector('.header-container').classList.remove('shadow-lg');
        }
    })


    return (
        <div className='header-container'>
            <div className='header-content'>
                {/* LOGO */}
                <div>

                    <p className='p-0 m-0'
                        style={{
                            fontFamily: "Mr Dafoe", fontSize: "30px"
                        }}
                    >Aleeha</p>
                    <p className='p-0 m-0'
                        style={{
                            fontFamily: "Bebas Neue"
                        }}
                    >Techonologies</p>
                </div>

                {/* LINKS  */}
                <div className='nav-links'>

                    <CustomLink to="/">Home</CustomLink>
                    <CustomLink to="/services">Services</CustomLink>
                    <CustomLink to="/projects">Projects</CustomLink>
                    <CustomLink to="/about">About</CustomLink>
                    <CustomLink to="/blog">Blog</CustomLink>
                    <CustomLink to="/contact">Contact</CustomLink>
                    <CustomLink to="/meetus">Meet Us</CustomLink>

                </div>
            </div>
        </div>
    );
};

export default Header;