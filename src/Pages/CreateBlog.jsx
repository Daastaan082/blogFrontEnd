import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Editor from 'react-simple-wysiwyg';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
const CreateBlog = () => {
        const [html, setHtml] = useState("")
        const navigate = useNavigate()
        function onChange(e) {
          setHtml(e.target.value);
        }
        
        const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm();

          const formSubmit = async (data) =>{
            const newData = {...data,"description":html}
            const res = await fetch("http://localhost:8000/api/blogs",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(newData)
            })
            toast("Blog Successully Created")

            navigate('/')

          }

  return (
    <>
        <div className="container">
            <div className='d-flex justify-content-between py-4'>
                <h4>Create Blog</h4>
                <Link to='/' className='btn btn-success'>
                    Post
                </Link>
            </div>
            <div className="card border-0 shadow-lg">
                <form onSubmit={handleSubmit(formSubmit)}>
                <div className='card-body'>
                    <div className='mb-2'>
                    <label htmlFor='' className='form-label'>Title</label>
                    <input
                     {...register('title',{required:true})} 
                     type='text'
                     className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                     id='Title' 
                     placeholder='Enter your Title' />
                     {errors.title && <p className='invalid-feedback'>Title is Required</p>}
                    </div>
                    <div className='mb-2'>
                    <label htmlFor='' className='form-label'>ShortDescription</label>
                    <textarea
                    {...register('shortDesc')}
                     cols='30' 
                     rows='5' 
                     className='form-control'></textarea>
                    </div>
                    
                    <div className='mb-2'>
                    <label htmlFor='' className='form-label'>Describtion</label>
                    
                    <Editor value={html} onChange={onChange}  
                       containerProps={{style:{height:'400px'}}}
                    />
                    
                    {/* <textarea className='form-control' name='' id='' cols='30' rows='10'></textarea> */}
                    </div>
                    <div className='mb-2'>
                    <label htmlFor='' className='form-label'>Image</label><br/>
                    <input type='file'/>
                    </div>
                    <div className='mb-2'>
                    <label htmlFor='' 
                    className='form-label'>Author</label>
                    <input
                     {...register('author',{required:true})}
                     type='text' 
                     className={`form-control ${errors.author ? 'is-invalid' : ''}`}

                     placeholder='Author'/>
                     {errors.author && <p className='invalid-feedback'>Author is Required</p>}
                    </div>
                    <button className='btn btn-success'>Create</button>
                </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default CreateBlog