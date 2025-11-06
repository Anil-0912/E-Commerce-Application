import React, { createContext, useState } from 'react'

export const ThemeContext=createContext()

const ThemeToggle = ({children}) => {

    const [theme,setTheme]=useState(false)
    const handleToggle=()=>{
setTheme(!theme)
    }
  return (
    <ThemeContext.Provider value={{theme,handleToggle}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeToggle