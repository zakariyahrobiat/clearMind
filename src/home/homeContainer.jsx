import React from 'react'
import { useAuth } from '../context/AuthContext'
import { BackgroundLayout } from '../Layout/BackgroundLayout'
import { Link } from 'react-router-dom'
import image from "../assets/image.png"
function HomeContainer({logo,name,discription,children, button, link, condition}) {
    const {count} = useAuth()
  return (
    <BackgroundLayout>
    
      <div className='flex flex-col md:flex-row text-center items-start justify-between h-screen w-screen'>
      <div className=' h-1/2 w-full md:w-2/5 md:h-full'>
          <img src={image} alt="Moodscape illustration" className='h-full w-full'/>
        </div>
        <div className=' md:w-3/5 '>
        <div className='md:w-1/2 m-auto p-5 md:p-0'>
              <h1 className='text-blueText text-5xl font-bold  pb-3 md:pb-6'>{logo}</h1>
          <p className='font-bold text-3xl text-blackText py-3 md:py-10'>{name}</p>
          <p className='font-normal text-lg  pb-3 md:pb-10'>{discription}</p>
          <div>{children}</div> 
          <Link to={`/${link}`}><button className='bg-blueText w-full text-backgroundColor text-2xl font-bold px-6 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300'>Continue</button></Link>
          </div>
          <div className='lg:w-3/5 m-auto pt-3 md:pt-10'><p className='text-lg font-medium'>{condition}</p>
        </div>
        </div>
        
        
      </div>
    </BackgroundLayout>
  )
}

export default HomeContainer
