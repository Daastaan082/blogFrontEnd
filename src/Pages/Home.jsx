import React, { useState , useEffect } from 'react';
import Card from '../Components/Card'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Home = () => {
  function logout(){
    localStorage.removeItem('token');
    localStorage.removeItem("id")
    toast.success("Logged off")
    navigate('/login')
  }
   const navigate = useNavigate();
  const [blogs,setBlogs] = useState()
  const fetchBlogs = async () =>{
    const res = await fetch("http://localhost:8000/api/blogsee")
    const result = await res.json()
    setBlogs(result.data)
    console.log(result)
  }
  useEffect(() => {
    if(!localStorage.getItem("token"))
      {
        navigate("/login");
      }
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
        <button className='btn btn-danger' onClick={logout}>Logout</button>
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