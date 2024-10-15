import React from 'react'
import { useAuth } from '../context/AuthContext'
import { BackgroundLayout } from '../Layout/BackgroundLayout'
import { Link } from 'react-router-dom'
import image from "../assets/image.png"
import HomeContainer from './homeContainer'
function LandingPage() {
    const {count} = useAuth()
  return (
    <BackgroundLayout>
      <HomeContainer logo="Moodscape" name="Get Started" link="Form" discription="Join our anonymous mental health community. We are all imperfectly perfect here and we support one another each day" condition={(
        <>By continuing, you confirm you’re 18+ and accepting our 
          <span className='text-blueText font-semibold'> Terms & Conditions</span> 
          and <span className='text-blueText font-semibold'>Privacy Policy</span>
   </>
  )}>
     
       
          
        </HomeContainer>
     
    </BackgroundLayout>
  )
}

export default LandingPage
