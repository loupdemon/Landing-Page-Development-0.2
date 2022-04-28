import React from 'react';
import './Blog.css';
import BlogCard from './BlogCard/BlogCard';
import useBlog from '../../customHooks/useBlog';

const Blog = () => {
    const [data, setData] = useBlog();
    console.log(data);
    return (
        <div className="blog-container">

            <p className='text-3xl mb-1 blog-heading' style={{
                color: "rgb(0,165,255)"
            }}>OUR BLOG</p>

            <p className='' style={{
                fontSize: "14px", letterSpacing: "3px",padding:"0px 40px"
            }}>Blog is where, we normally write about what we are doing and what we did so far.</p>


            <div className='blog-content py-10'>
                {
                    data.map((x)=>{
                        return (
                            <BlogCard key={x.id} blogData={x}></BlogCard>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Blog;