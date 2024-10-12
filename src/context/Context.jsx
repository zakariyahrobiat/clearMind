import React, { useContext, useState, createContext } from 'react'
export const AppContext = createContext()
export function Context({children}) {
    const [count, setCount] = useState(0)
  return (
    <AppContext.Provider value={{count}}>{children}</AppContext.Provider>
  )
}


export const useAuth = () => {
  return useContext(AppContext)
}

