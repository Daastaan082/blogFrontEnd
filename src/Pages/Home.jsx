import React from 'react'
import Card from '../Components/Card'
import { Link } from 'react-router-dom'
const Home = () => {
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
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
    </>
  )
}

export default Home