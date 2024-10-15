import React from 'react'
import LandingPage from '../home/LandingPage'
import { FormContainer } from '../home/FormContainer'
import { createBrowserRouter } from 'react-router-dom'
import Avater from '../home/Avater'
const router = createBrowserRouter([
    {
        path:"/",
        element:<LandingPage/>
    },
    {
        path:"/Form",
        element:<FormContainer/>
    },
    {
        path:"/Avater",
        element:<Avater/>
    }
])


export default router