import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Components/Card';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import CreateBlog from './Pages/CreateBlog';
import { ToastContainer, toast } from 'react-toastify';
const App = () => {
  return (
    <>
    <div className='bg-dark text-center py-2 shadow-lg'>
      <h1 className='text-white'>Blog App</h1>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateBlog/>} />
    </Routes>
    <ToastContainer />
    </>
  )
}

export default App