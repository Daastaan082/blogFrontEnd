import React, { use, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BlogDetail = () => {
    
    const [blog, setBlog] = useState([]);
    const params = useParams();
    const fetchBlog = async () => {
        const res =  await fetch("http://localhost:8000/api/blogs/"+params.id)
        const result = await res.json();
        setBlog(result.data);
    }
    useEffect(() => {
      fetchBlog();
    }, [])
    
    return (
        <div className='container'>
        <div className="d-flex justify-content-between pt-5 mb-4">
            <h2>{blog.title}</h2>
            <div>
                <a href='/' className='btn btn-dark'>back to blogs</a>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-12'>
                <p>by <strong>{blog.author}</strong> on {blog.date}</p>

                {
                    <img src='https://placehold.co/800x250' className='card-img-top'/>
                }

                <div className='mt-5' dangerouslySetInnerHTML={{ __html: blog.description }}>
                </div>
            </div>
        </div>
    </div>
    )
}

export default BlogDetail