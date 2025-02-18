import React, { useState , useEffect } from 'react';
import Card from '../Components/Card'
import { Link } from 'react-router-dom'
const Home = () => {
   
  const [blogs,setBlogs] = useState()
  const fetchBlogs = async () =>{
    const res = await fetch("http://localhost:8000/api/blogsee")
    const result = await res.json()
    setBlogs(result.data)
    console.log(result)
  }
  useEffect(() => {
    fetchBlogs();
  }, [])
  
  return (
    <>
    
    <div className='container'>
      <div className='d-flex justify-content-between py-4'>
        <h4>Blogs</h4>
        <Link className='btn btn-primary' to='/create'>
        Create
        </Link>
      </div>
      <div className='row'>
        
           {
            (blogs) && blogs.map((blog) => {
            return (<Card blog={blog} key={blog.id}/>)
           })
           }
        </div>
    </div>
    </>
  )
}

export default Home