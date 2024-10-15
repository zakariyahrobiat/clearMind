import React from 'react'
import { useAuth } from '../context/context'
import { BackgroundLayout } from '../Layout/BackgroundLayout'
import { Link } from 'react-router-dom'
import image from "../assets/image.png"
function LandingPage() {
    const {count} = useAuth()
  return (
    <BackgroundLayout>
      <div className='flex flex-col-reverse md:flex-row text-center items-center justify-between h-screen p-5'>
        <div className=' md:w-1/2 '>
        <div className='md:w-2/3 m-auto'>
              <h1 className='text-headingColor text-5xl font-bold  pb-3 md:pb-6'>Moodscape</h1>
          <p className='font-bold text-3xl text-blueText py-3 md:py-6'>Get Started</p>
          <p className='font-normal text-lg  pb-3 md:pb-6'>Join our anonymous mental health community. We are all imperfectly perfect here and we support one another each day</p>
          <Link to="/Form"><button className='bg-blueText w-full text-backgroundColor text-2xl font-bold px-6 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300'>Continue</button></Link>
          </div>
          <div className='lg:w-3/4 m-auto pt-3 md:pt-6'><p className='text-lg font-medium'>By continuing, you confirm you’re  18+ and accepting out <span className='text-blueText font-semibold'> Terms & Conditions</span> and <span className='text-blueText font-semibold'>Privacy Policy</span></p>
        </div>
        </div>
        
        <div className=' h-1/2 w-full md:w-1/2 md:h-full'>
          <img src={image} alt="Moodscape illustration"   className='h-full w-full'/>
        </div>
      </div>
    </BackgroundLayout>
  )
}

export default LandingPage
