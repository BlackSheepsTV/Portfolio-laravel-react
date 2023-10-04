import { useState } from 'react'
import { BsCalendar, BsClock, BsHouseDoor, BsBook, BsAward, BsQuestionCircle, BsEnvelope } from "react-icons/bs"

import styled from 'styled-components'
import { Link } from "react-router-dom"
import '../../utils/Styles/Header.scss'
import { useTheme, useDate, useHeader } from '../../utils/Hooks'

import Theme from './Theme'
import {allTheme} from '../../utils/Styles/Theme'

import {VisuallyHidden, useSwitch} from "@nextui-org/react"
import {MoonIcon} from "./MoonIcon"
import {SunIcon} from "./SunIcon"

const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  z-index: 100;

  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`

function Header() {

  const [showTheme, setShowTheme] = useState(false)

  const isDark = localStorage.getItem('theme') === 'dark'

  const { color, setTheme } = useTheme()
  const { currentDate } = useDate()
  const { user, skill, parcours, quizz, contact, sectionIntercept } = useHeader()

  const toggleDarkMode = () => {

    if(isDark) {
      setTheme('light')
      localStorage.setItem('theme', 'light')
      setDark(false)
    } else {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
      setDark(true)
    }
  }

  const ThemeSwitch = (props) => {
    const {
      Component, 
      slots, 
      isSelected, 
      getBaseProps, 
      getInputProps, 
      getWrapperProps
    } = useSwitch(props);
  
    return (
      <div className="flex flex-col gap-2">
        <Component {...getBaseProps()}>
            <VisuallyHidden>
              <input {...getInputProps()} />
            </VisuallyHidden>
            <div
              {...getWrapperProps()}
              className={slots.wrapper({
                class: [
                  "w-8 h-8",
                  "flex items-center justify-center",
                  "rounded-lg bg-default-100 hover:bg-default-200",
                ],
              })}
            >
              {isSelected ? <SunIcon/> : <MoonIcon/>}
            </div>
        </Component>
      </div>
    )
  }

  const scrollToSection = (elementRef) => {
    
    window.scrollTo({
      top : elementRef.current.offsetTop -20,
      behavior: 'smooth'
    })
  }

  return (
    <HeaderWrapper >
      <div className='date-wrapper-header bg-slate-200 dark:bg-slate-800 dark:text-'>
          <div className='date-row'>
            <BsCalendar></BsCalendar>
            <span className='date'>{currentDate.toLocaleDateString()}</span>
            TEST
            
          </div>
          <div className='date-row'>
            <BsClock></BsClock>
            <span className='date'>{currentDate.toLocaleTimeString()}</span>
          </div>
      </div>

      <nav>
        <ul>
          <li onClick={() => {scrollToSection(user)}} style={user.current === sectionIntercept || !sectionIntercept ? {background: 'rgba(0,0,0, 0.6)'} : {}}><Link to="/">
            <BsHouseDoor></BsHouseDoor>
          </Link></li>
          
          <li onClick={() => scrollToSection(skill)} style={skill.current === sectionIntercept ? {background: 'rgba(0,0,0, 0.6)'} : {}}><Link to="/">
            <BsBook></BsBook>
          </Link></li>

          <li onClick={() => scrollToSection(parcours)} style={parcours.current === sectionIntercept ? {background: 'rgba(0,0,0, 0.6)'} : {}}><Link to="/">
            <BsAward></BsAward>
          </Link></li>

          <li onClick={() => scrollToSection(quizz)} style={quizz.current === sectionIntercept ? {background: 'rgba(0,0,0, 0.6)'} : {}}><Link to="/">
            <BsQuestionCircle></BsQuestionCircle>
          </Link></li>

          <li onClick={() => scrollToSection(contact)} style={contact.current === sectionIntercept ? {background: 'rgba(0,0,0, 0.6)'} : {}}><Link to="/">
            <BsEnvelope></BsEnvelope>
          </Link></li>

         
         
          
          <li className='li-theme' onClick={() => setShowTheme(true)}>
            <div className='choose-theme' style={{background: color && allTheme[color].bg }}></div>
            {showTheme && <Theme setShowTheme={setShowTheme} /> }
          </li>

          <ThemeSwitch isSelected={isDark} onClick={() => toggleDarkMode()}></ThemeSwitch>

        </ul>
          
      </nav>
    </HeaderWrapper>
  )
}

export default Header;