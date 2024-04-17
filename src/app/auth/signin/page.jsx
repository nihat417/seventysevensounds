"use client"
import React, { useState } from 'react';
import { FaEyeSlash,FaEye } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectError } from '../../../lib/redux/slices/authSlice'; 

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setFormSubmitted(true);
      console.error('Email and password are required.');
      return;
    }
    try {
      const userData = { email, password };
      const actionResult = await dispatch(login(userData));
      if (login.fulfilled.match(actionResult)) {
        router.push('/');
      } else {
        //console.error('Login failed:', actionResult.error);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="flex min-h-screen justify-center items-center bg-[#000] text-[#fff]">
      <div className='p-8 rounded-lg max-w-md w-full' style={{ backgroundColor: 'rgba(145, 29, 33, 0.5)' }}>
        <div className="mb-4 border-b border-[#fff] pb-2">
          <h1 className='text-center mb-4 text-lg' style={{ letterSpacing: '0.1em' }}>L o g i n</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor="email" className='block mb-1'>Email</label>
            <input type="email" id="email" className='w-full px-3 py-2 rounded bg-[#fff] text-[#000] text-sm focus:outline-none focus:ring-2 focus:ring-[#911D21]' placeholder='Enter Username' value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className='mb-4'>
            <label htmlFor="password" className='block mb-1'>Password</label>
            <div className="relative">
              <input type={showPassword ? 'text' : 'password'} id="password" className='w-full px-3 py-2 rounded bg-[#fff] text-[#000] text-sm focus:outline-none focus:ring-2 focus:ring-[#911D21]' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash className='h-5 w-5 text-black' /> : <FaEye className='h-5 w-5 text-black' />}
              </div>
            </div>
            <div className='mb-4 text-xs mt-[5px]'>
              <a href="#" className="text-[#fff] hover:underline">Forgot Password?</a>
            </div>
          </div>
          <div className='mb-4'>
            {error && <span className="text-red-500">{error}</span>}
            {formSubmitted && <span className="text-red-500">Email and password are required.</span>}
          </div>
          <button type="submit" className='w-full py-2 rounded-full bg-[#000] text-[#fff] hover:bg-[#B9272F] focus:outline-none focus:ring-2 focus:ring-[#911D21] mb-4'>Submit</button>
        </form>
        <div className='text-center text-sm mt-2'>
          <Link href="signup" className="text-[#fff] hover:underline">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
