import React from 'react';
import './BlogCard.css';

import photo from '../../../assets/donald-giannatti-Wj1D-qiOseE-unsplash.jpg'

const BlogCard = ({blogData}) => {
    // console.log(blogData)
    const {img,time,text} = blogData;
    const {date,month,year} = time;
    const {title,details} = text;

    return (
        <div className='mx-10 blogCard'>
            <div >
                <img src={img} alt="" style={{
                    height: "200px",width:"100%"
                }} />

                {/* BLOG DATE  */}
                <div className='blogDate flex justify-center items-center px-3 py-1'>
                    <p className='text-5xl'>{date}</p>
                    <div className='flex flex-col justify-center ml-1'>
                        <p className='text-sm'>{year}</p>
                        <p className='text-sm'>{month}</p>
                    </div>
                </div>

            </div>


            <div className='p-5'>
                <p className='text-xl' style={{
                    color: "rgb(0,165,255)"
                }}>
                    {title}</p>


                <p className='my-3' style={{
                    fontSize: "14px", color: "grey"
                }}>
                    {details}
                </p>

                <div className='mb-10'>
                    <button className='font-bold blog-readMore-btn'>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;