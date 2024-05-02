'use client'
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { FaEyeSlash,FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { register, selectError } from '@/lib/redux/slices/authSlice';


const Signup = () => {
  const [age,setAge] =useState('');
  const [email,setEmail] = useState('');
  const [username,setUsername] = useState('');
  const [fullname,setFullname] = useState('');
  const [password,setPassword] = useState('');

  const [windowWidth, setWindowWidth] = useState(null);
  const [formSubmitted,setFormSubmitted] = useState(false);
  const [showPassword,setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const router = useRouter();


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize(); 
    window.addEventListener('resize', handleResize); 
    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);


  const registerSubmit = async (e)=>{
    e.preventDefault();
    try{
      const userdata = {age,email,username,fullname,password};
      const actionResult = await dispatch(register(userdata));
      if(register.fulfilled.match(actionResult)){
        console.log("uqrlu giris");
        router.push('/');
      }
    }
    catch{
      console.error('Login error:', error);
    }
  }


  const bgStyle = windowWidth <= 500 ? { backgroundColor: 'rgb(73,15,17)' } : { backgroundColor: '#000' };


  return (
    <div className={`flex min-h-screen justify-center items-center bg-[#fff]  text-[#fff]`} style={bgStyle}>
      <div className='p-8 rounded-lg max-w-md w-full' style={{ backgroundColor: 'rgb(73,15,17)' }}>
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
            <div className="relative">
              <input type={showPassword ? 'text' : 'password'} id="password" className='w-full px-3 py-2 rounded bg-[#fff] text-[#000] text-sm focus:outline-none focus:ring-2 focus:ring-[#911D21]' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash className='h-5 w-5 text-black' /> : <FaEye className='h-5 w-5 text-black' />}
              </div>
            </div>
          </div>
          <div className='mb-4'>
            {error && <span className="text-red-500">{error}</span>}
            {formSubmitted && <span className="text-red-500">Email and password are required.</span>}
          </div>
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
