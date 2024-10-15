import React from 'react'
import LandingPage from '../home/LandingPage'
import { FormContainer } from '../home/FormContainer'
import { createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
    {
        path:"/",
        element:<LandingPage/>
    },
    {
        path:"/Form",
        element:<FormContainer/>
    }
])


export default router