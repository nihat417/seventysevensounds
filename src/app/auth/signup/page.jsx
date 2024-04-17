'use client'
import React, { useState } from 'react';
import Link from "next/link";
import { useDispatch, useSelector } from 'react-redux';
import { register, selectError } from '@/lib/redux/slices/authSlice';


const Signup = () => {
  const [age,setAge] =useState('');
  const [email,setEmail] = useState('');
  const [username,setUsername] = useState('');
  const [fullname,setFullname] = useState('');
  const [password,setPassword] = useState('');

  const [formSubmitted,setFormSubmitted] = useState(false);
  const [showPassword,setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const error = useSelector(selectError);


  const registerSubmit = async (e)=>{
    e.preventDefault();
    try{
      const userdata = {age,email,username,fullname,password};
      const actionResult = await dispatch(register(userdata));
      if(register.fulfilled.match(actionResult)){
        console.log("uqrlu giris");
      }
    }
    catch{

    }
  }


  return (
    <div className="flex min-h-screen justify-center items-center bg-[#000] text-[#fff]">
      <div className='p-8 rounded-lg max-w-md w-full' style={{ backgroundColor: 'rgba(145, 29, 33, 0.5)' }}>
        <div className="mb-4 border-b border-[#fff] pb-2">
          <h1 className='text-center mb-4 text-lg' style={{ letterSpacing: '0.1em' }}>R e g i s t e r</h1>
        </div>
        <form onSubmit={registerSubmit}>
          <div className='mb-4'>
            <label htmlFor="email" className='block mb-1'>Username</label>
            <input type="text"  className='w-full px-3 py-2 rounded bg-[#fff] text-[#000] text-sm focus:outline-none focus:ring-2 focus:ring-[#911D21]' placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
          </div>
          <div className='mb-4'>
            <label htmlFor="email" className='block mb-1'>Full Name</label>
            <input type="text"  className='w-full px-3 py-2 rounded bg-[#fff] text-[#000] text-sm focus:outline-none focus:ring-2 focus:ring-[#911D21]' placeholder='Enter FullName' value={fullname} onChange={(e)=>setFullname(e.target.value)}/>
          </div>
          <div className='mb-4'>
            <label htmlFor="email" className='block mb-1'>Email</label>
            <input type="email"  className='w-full px-3 py-2 rounded bg-[#fff] text-[#000] text-sm focus:outline-none focus:ring-2 focus:ring-[#911D21]' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className='mb-4'>
            <label htmlFor="age" className='block mb-1'>Age</label>
            <input type="number" className='w-full px-3 py-2 rounded bg-[#fff] text-[#000] text-sm focus:outline-none focus:ring-2 focus:ring-[#911D21]' placeholder='Enter Age' value={age} onChange={(e)=>setAge(e.target.value)}/>
          </div>
          <div className='mb-4'>
            <label htmlFor="password" className='block mb-1'>Password</label>
            <input type="password" id="password" className='w-full px-3 py-2 rounded bg-[#fff] text-[#000] text-sm focus:outline-none focus:ring-2 focus:ring-[#911D21]' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          {error && <span className="text-red-500">{error}</span>}
          <button type="submit" className='w-full py-2 rounded-full bg-[#000] text-[#fff] hover:bg-[#B9272F] focus:outline-none focus:ring-2 focus:ring-[#911D21] mb-4'>Submit</button>
          <div className='text-center text-sm mt-2'>
            <Link href="signin" className="text-[#fff] hover:underline">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
