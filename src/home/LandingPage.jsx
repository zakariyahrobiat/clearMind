import React from 'react'
import { useAuth } from '../context/context'
import { BackgroundLayout } from '../Layout/BackgroundLayout'
function LandingPage() {
    const {count} = useAuth()
  return (
    <BackgroundLayout>
        <p >LandingPage</p>
        <p >{count}</p>
    </BackgroundLayout>
  )
}

export default LandingPage