import React, { useState, createContext, useEffect, useRef } from 'react'

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
    
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
    const [color, setColor] = useState(localStorage.getItem('color') || 'blue')

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => setCurrentDate(new Date()), 1000);
    }, []);

    const user = useRef(null)
    const skill = useRef(null)
    const parcours = useRef(null)
    const quizz = useRef(null)
    const contact = useRef(null)

    const [sectionIntercept, setSectionIntercept] = useState()
    
    useEffect(() => {
        

        const storedTheme = localStorage.getItem('theme')
        const storedColor = localStorage.getItem('color')

        if (storedTheme !== null) {
          setTheme(storedTheme)
        }
        
        if (storedColor !== null) {
            setColor(storedColor)
          }
        
        if (storedTheme === 'dark') {
            document.getElementById('app').classList.add('dark')
            document.getElementById('app').classList.remove('light')
        } 
        else if(storedTheme === 'light') {
            document.getElementById('app').classList.remove('dark')
            document.getElementById('app').classList.add('light')
        }
    }, [theme, color])
 
    return (
        <GlobalContext.Provider value={{ theme, setTheme, color, setColor, currentDate, user, skill , parcours, quizz, contact, sectionIntercept, setSectionIntercept }}>
            {children}
        </GlobalContext.Provider>
    )
}
