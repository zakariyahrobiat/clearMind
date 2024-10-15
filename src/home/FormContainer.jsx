import React from 'react'
import { useAuth } from '../context/AuthContext'
import { BackgroundLayout } from '../Layout/BackgroundLayout'
import { Link } from 'react-router-dom'
import image from "../assets/image.png"
export const FormContainer = () => {
  return (
    <BackgroundLayout>
    
      <div className='flex flex-col md:flex-row text-center items-start justify-between h-screen w-screen'>
      <div className=' h-1/2 w-full md:w-2/5 md:h-full'>
          <img src={image} alt="Moodscape illustration" className='h-full w-full'/>
        </div>
        <div className=' md:w-3/5 '>
        <div className='md:w-2/3 m-auto p-5 md:p-0'>
              <h1 className='text-blueText text-5xl font-bold  pb-3 md:pb-6'>Moodscape</h1>
          <p className='font-bold text-3xl text-blackText py-3 md:py-10'>Assign youself a unique username</p>
          <p className='font-normal text-lg  pb-3 md:pb-10'>A usename is a cute name that you want to use on the app. The username is your identity</p>
          <form action="" className='text-left mb-3 lg:mb-10'>
<label htmlFor="name" className='text-lg font-medium'>Enter username</label>
<input type="text" name="name" id=""  className='w-full bg-inputColor px-6 py-2 rounded-md '/>
</form> 
          <Link to=""><button className='bg-blueText w-full text-backgroundColor text-2xl font-bold px-6 py-2 rounded-md  shadow-lg hover:bg-blue-700 transition duration-300'>Continue</button></Link>
          </div>
          
        </div>
        
        
      </div>
    </BackgroundLayout>
  )
}

export default FormContainer

 