import React from 'react'
import "./Home.css"
import home_image from "../images/Code typing-amico.png"
function Home() {
  return (
    <div className=' container mx-auto flex flex-col-reverse md:flex-row items-center md:space-x-80 '>
        <div className='md:w-1/2'>
       
      <h1 className='text-4xl font-extrabold '>I'm Anwar Ahmed</h1>
      <h1 className='text-3xl text-secondary font-extrabold my-4'>Software Engineer</h1>
      <p className='mb-6 text-lg'>
        Welcome to my portfolio,where innovation meets excellence.Explore my comprehensive services,cutting edge solutions and exceptional expertise.Let's embark on a journey of success together.
      </p>
      <a href="/CV2.pdf"
      download="CV2.pdf"
      className='rounded-full border-2 px-4 py-2 border-secondary bg-secondary text-white cursor-pointer  hover:bg-blue-700 '>Download Resume</a>
        </div>
      <div className='md:w-2/3'>
        <img src={home_image} className=''/>
      </div>
    </div>
  )
}

export default Home
