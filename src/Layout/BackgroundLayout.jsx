import React from 'react'
export const BackgroundLayout = ({children}) => {
  return (
    <main className='flex bg-black justify-center items-center w-100vw text-white'>
        <div>{children}
            </div>
        </main>
  )
}
