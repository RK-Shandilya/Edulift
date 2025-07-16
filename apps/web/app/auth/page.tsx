import Image from 'next/image'
import React from 'react'
import bgImg from '../../public/bg-img.avif'
import logo from '../../public/logo.png'

const Signin = () => {
  return (
    <div className='w-full h-screen overflow-hidden'
    style={{
        backgroundImage: `url(${bgImg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    }}
    >
      <Image src={logo} alt="logo" width={100} height={100} 
      className='p-4'
      />
      <div className='flex flex-col h-full w-full p-4'>
        <h1 className='text-2xl font-bold'>SIGN IN TO EDULIFT</h1>
        <h3 className='text-sm text-white'>Create an account or <span className='text-blue-500'>Login</span></h3>
      </div>
    </div>
  )
}

export default Signin
