import React from 'react'

const Display = () => {
  return (

    <div className='grid grid-cols-2 items-center  mx-10 sm:grid-cols-1  sm:mb-7'>
      <div className='dis-img h-[450px]'>
        <dotlottie-player src="https://lottie.host/27af2812-b66e-470e-aa2b-a691e6b34886/cozAQH3gRT.json" background="transparent" speed="1" loop autoplay></dotlottie-player>

      </div>
      <div className='dis-info space-y-3 sm:text-center sm:px-4' >
        <h1 className='text-3xl font-bold'>Hi, I am Aayush</h1>
        <p className='text-red-500 italic'>Some Dev, Freelancer, Rounder</p>
        <p>As an IT student, I thrive in a world where technology is both my playground and my challenge. With a deep-seated curiosity and a penchant for problem-solving, I navigate through intricate coding languages, system architectures, and network configurations with precision and passion. I am constantly learning and adapting to keep pace with the rapid evolution of technology, from mastering new programming paradigms to understanding the latest cybersecurity threats</p>

      </div>


    </div>
  )
}

export default Display
