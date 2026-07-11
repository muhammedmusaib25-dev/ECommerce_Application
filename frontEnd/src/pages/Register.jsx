import {React, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import login from '../assets/login.webp'
import { toast } from 'sonner'
import { useLocation } from 'react-router-dom'

const Register = () => {
  const [email, setEmail]= useState('')
  const [password, setPassword]=useState('')
  const [name , setName]=useState('')
  const [confirmPassword, setConfirmPassword]=useState('')

  const location= useLocation()
  const navigate= useNavigate();
 

  function registerUser(e){
    e.preventDefault();
    if(email=="" || password=="" || name=="" || confirmPassword==""){
          toast.error("Please enter all the fields..")
          return;
        }  

    if(password!=confirmPassword){
        toast.error('Password does match, please re-enter the password')
        return 
    }
    else{
        toast.success('Registered sucessfull')
        navigate('/profile')
    }
 
  }

  return (
    <div className="flex">
      
      <div className='w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12'>
        <form className='w-full max-w-md bg-white p-8 rounded-lg border shadow-sm'
          onSubmit={(e)=>{registerUser(e)}}>
          <div className='flex justify-center mb-6'>
            <h2 className='text-xl font-medium'>Rabbit</h2>
          </div>
          <h2 className='text-2xl font-bold text-center mb-6'>Hey there!</h2>
          <p className='text-center mb-6'>
            Please Register your Account 
          </p>
            {/* Name */}
          <div className='mb-4'>
            <label className='block text-sm font-semibold mb-2'>Name</label>
            <input type="text" value={name} 
            onChange={(e)=>setName(e.target.value)}
            className='w-full p-2 border rounded'
            placeholder='Enter your Name' />
          </div>
            {/* Email */}
          <div className='mb-4'>
            <label className='block text-sm font-semibold mb-2'>Email</label>
            <input type="email" value={email} 
            onChange={(e)=>setEmail(e.target.value)}
            className='w-full p-2 border rounded'
            placeholder='Enter your email address' />
          </div>
            {/* Password */}
          <div className='mb-4'>
            <label className='block text-sm font-semibold mb-2'>Password</label>
            <input type="password" value={password} 
            onChange={(e)=>setPassword(e.target.value)}
            className='w-full p-2 border rounded'
            placeholder='Enter your password' />
          </div>
            {/* Confirm Password */}
          <div className='mb-4'>
            <label className='block text-sm font-semibold mb-2'>Confirm Password</label>
            <input type="password" value={confirmPassword} 
            onChange={(e)=>setConfirmPassword(e.target.value)}
            className='w-full p-2 border rounded'
            placeholder='Confirm your password' />
          </div>

          <button
          className='mb-4 w-full py-2 bg-rabbit-red border shadow-lg
          font-semibold text-white rounded-lg
          hover:bg-secondary-red'
          type='submit'>
            SignUp
          </button>
          <p className='mt-6 text-center text-sm'>
            Already have an account?{" "} 
            <Link to={"/register"}
             className='font-semibold text-rabbit-red'>
             Sign in
            </Link>
          </p>
        </form>
      </div>

       <div className='hidden md:block w-1/2 bg-gray-800'>
          <div className="h-full flex flex-col justify-center items-center">
            <img src={login} alt="Login to your Account" 
            className='h-[750px] w-full object-cover'/>
          </div>
        </div>
      
    </div>
  )
}

export default Register