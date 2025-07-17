import Image from 'next/image'
import React from 'react'
import bgImg from '../../public/bg-Img.jpg'
import logo from '../../public/logo.png'
import { FaGithub, FaGoogle } from "react-icons/fa";

const Signin = () => {
  return (
    <div className='w-full h-screen overflow-hidden flex flex-col p-8 pl-18 gap-10 text-white'
    style={{
        backgroundImage: `url(${bgImg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    }}
    >
      <div className='pt-4'>
        <Image src={logo} alt="logo" width={120} height={120} />
      </div>

      <div className='flex flex-col h-full w-full max-w-md gap-8 rounded-xl border border-white/10 p-4'>
        <h1 className='text-3xl font-bold inria-serif-bold'>SIGN IN TO EDULIFT</h1>
        <p className='text-md'>Create an account or <span className='text-blue-400 hover:text-blue-300 cursor-pointer'>Login</span></p>
        <div className='flex gap-4 text-black'>
          <input className='bg-white   placeholder:text-black p-1 pl-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" placeholder='First Name'/>
          <input className='bg-white placeholder:text-black p-1 pl-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" placeholder='Last Name'/>
        </div>
        <input className='bg-white text-black placeholder:text-black p-1 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' type="email" placeholder='Email'/>
        <input className='bg-white text-black placeholder:text-black p-1 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' type="password" placeholder='Password'/>
        <input className='bg-white text-black placeholder:text-black p-1 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' type="password" placeholder='Confirm Password'/>
        <div className='flex items-center justify-center'>
          <button className='bg-gray-500 hover:bg-gray-700 rounded-md w-fit p-3 px-8 transition-colors duration-200 cursor-pointer'>Sign Up</button>
        </div>
        <div className='flex justify-center items-center gap-6'>
          <hr className='flex-1 border-white'/>
          <span className='px-4'>or Login using</span>
          <hr className='flex-1'></hr>
        </div>
        <div className='flex justify-center gap-6'>
          <button 
            className='p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200'
            aria-label="Login with Google"
          >
            <FaGoogle size={24} className="text-white"/>
          </button>
          <button 
            className='p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200'
            aria-label="Login with GitHub"
          >
            <FaGithub size={24} className="text-white"/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Signin
