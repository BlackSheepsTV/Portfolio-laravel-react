import React, { useState, createContext, useEffect, useRef } from 'react'
import { allTheme } from '../Styles/Theme'


export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
    
    const [theme, setTheme] = useState(allTheme[0])
    const toggleTheme = (color) => {
        setTheme(color)
    }

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
 
    return (
        <GlobalContext.Provider value={{ theme, toggleTheme, currentDate, user, skill , parcours, quizz, contact, sectionIntercept, setSectionIntercept }}>
            {children}
        </GlobalContext.Provider>
    )
}
