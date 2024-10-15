import React from 'react'
import { useAuth } from '../context/AuthContext'
import { BackgroundLayout } from '../Layout/BackgroundLayout'
import { Link } from 'react-router-dom'
import image from "../assets/image.png"
import HomeContainer from "./homeContainer"
export const FormContainer = () => {
  return (
    <BackgroundLayout>
    <HomeContainer logo="Moodscape" name="Assign youself a unique username" link="Avater"  discription="A usename is a cute name that you want to use on the app. The username is your identity">
    <><form action="" className='text-left mb-3 lg:mb-10'><label htmlFor="name" className='text-lg font-medium'>Enter username</label>
<input type="" name="name" id=""  className='w-full bg-inputColor px-6 py-2 rounded-md '/>
</form>
</>
    </HomeContainer>s
    </BackgroundLayout>
  )
}

export default FormContainer

 