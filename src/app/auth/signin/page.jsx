"use client"
import React, { useState } from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { login } from '../../../lib/redux/slices/authSlice'; 

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = { email, password };
      await dispatch(login(userData));
      router.push('/');
    } catch (error) {
      console.error('Ошибка входа:', error);
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
            <input type="password" id="password" className='w-full px-3 py-2 rounded bg-[#fff] text-[#000] text-sm focus:outline-none focus:ring-2 focus:ring-[#911D21]' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <div className='mb-4 text-xs mt-[5px]'>
              <a href="#" className="text-[#fff] hover:underline">Forgot Password?</a>
            </div>
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
