import React from 'react'
import { BackgroundLayout } from '../Layout/BackgroundLayout'
import { Link } from 'react-router-dom'
import image from "../assets/image.png"
import HomeContainer from "./homeContainer"
const Avater = () => {
  return (
    <BackgroundLayout>
    <HomeContainer logo="Moodscape" name="Take some time to reflect on your mood" discription="My day is......."></HomeContainer>
    
    </BackgroundLayout>
  )
}

export default Avater