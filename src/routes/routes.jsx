import React from 'react'
import LandingPage from '../home/LandingPage'
import { createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
    {
        path:"/",
        element:<LandingPage/>
    }
])


export default router