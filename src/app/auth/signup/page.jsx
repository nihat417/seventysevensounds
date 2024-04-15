import React from 'react';

const Signup = () => {
  return (
    <div className="flex min-h-screen justify-center items-center bg-[#000] text-[#fff]">
      <div className='p-8 rounded-lg max-w-md w-full' style={{ backgroundColor: 'rgba(145, 29, 33, 0.5)' }}>
        <div className="mb-4 border-b border-[#fff] pb-2">
          <h1 className='text-center mb-4 text-lg' style={{ letterSpacing: '0.1em' }}>R e g i s t e r</h1>
        </div>
        <div className='mb-4'>
          <label htmlFor="email" className='block mb-1'>Username</label>
          <input type="text"  className='w-full px-3 py-2 rounded bg-[#fff] text-[#000] text-sm focus:outline-none focus:ring-2 focus:ring-[#911D21]' placeholder='Enter Username'/>
        </div>
        <div className='mb-4'>
          <label htmlFor="email" className='block mb-1'>Full Name</label>
          <input type="text"  className='w-full px-3 py-2 rounded bg-[#fff] text-[#000] text-sm focus:outline-none focus:ring-2 focus:ring-[#911D21]' placeholder='Enter FullName'/>
        </div>
        <div className='mb-4'>
          <label htmlFor="email" className='block mb-1'>Email</label>
          <input type="email"  className='w-full px-3 py-2 rounded bg-[#fff] text-[#000] text-sm focus:outline-none focus:ring-2 focus:ring-[#911D21]' placeholder='Enter Email'/>
        </div>
        <div className='mb-4'>
          <label htmlFor="age" className='block mb-1'>Email</label>
          <input type="number" className='w-full px-3 py-2 rounded bg-[#fff] text-[#000] text-sm focus:outline-none focus:ring-2 focus:ring-[#911D21]' placeholder='Enter Email'/>
        </div>
        <div className='mb-4'>
          <label htmlFor="password" className='block mb-1'>Password</label>
          <input type="password" id="password" className='w-full px-3 py-2 rounded bg-[#fff] text-[#000] text-sm focus:outline-none focus:ring-2 focus:ring-[#911D21]' placeholder='Enter Password'/>
        </div>
        <button className='w-full py-2 rounded-full bg-[#000] text-[#fff] hover:bg-[#B9272F] focus:outline-none focus:ring-2 focus:ring-[#911D21] mb-4'>Submit</button>
        <div className='text-center text-sm mt-2'>
          <a href="/signin" className="text-[#fff] hover:underline">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
