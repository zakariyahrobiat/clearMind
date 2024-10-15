import React from 'react'
export const BackgroundLayout = ({children}) => {
  return (
    <main className='flex bg-backgroundColor justify-center items-center w-screen font-Nunito'>
        <div>
          {children}
            </div>
        </main>
  )
}