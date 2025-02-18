import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Components/Card';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import CreateBlog from './Pages/CreateBlog';
import { ToastContainer, toast } from 'react-toastify';
import BlogDetail from './Pages/BlogDetail';
import EditBlog from './Pages/EditBlog';
import Login from './Pages/Login';
import Register from './Pages/Register';
const App = () => {
  return (
    <>
    <div className='bg-dark text-center py-2 shadow-lg'>
      <h1 className='text-white'>Blog App</h1>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/blog/:id" element={<BlogDetail/>} />
      <Route path="/create" element={<CreateBlog/>} />
      <Route path='/blog/edit/:id' element={ <EditBlog/>} />
    </Routes>
    <ToastContainer />
    </>
  )
}

export default App