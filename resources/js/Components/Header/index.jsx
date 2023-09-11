import { useState } from 'react'
import { BsCalendar, BsClock, BsHouseDoor, BsBook, BsAward, BsQuestionCircle, BsEnvelope } from "react-icons/bs"

import styled from 'styled-components'
import { Link } from "react-router-dom"
import '../../utils/Styles/Header.scss'
import { useTheme, useIsReady, useDate, useHeader } from '../../utils/Hooks'

import Theme from './Theme'

import { CSSTransition} from 'react-transition-group'

const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  z-index: 100;
`

function Header() {

  const [showTheme, setShowTheme] = useState(false)

  const { theme } = useTheme()
  const { currentDate } = useDate()
  const { user, skill, parcours, quizz, contact, sectionIntercept } = useHeader()

  const scrollToSection = (elementRef) => {
    
    window.scrollTo({
      top : elementRef.current.offsetTop -20,
      behavior: 'smooth'
    })
  }

  return (
    <HeaderWrapper >
      <div className='date-wrapper-header'>
          <div className='date-row'>
            <BsCalendar></BsCalendar>
            <span className='date'>{currentDate.toLocaleDateString()}</span>
            
          </div>
          <div className='date-row'>
            <BsClock></BsClock>
            <span className='date'>{currentDate.toLocaleTimeString()}</span>
          </div>
      </div>

      <nav>
        <ul>
          <li onClick={() => {scrollToSection(user)}} style={user.current === sectionIntercept ? {background: 'rgba(0,0,0, 0.6)'} : {}}><Link to="/">
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
            <div className='choose-theme' style={{background: theme.bg}}></div>
            {showTheme && <Theme setShowTheme={setShowTheme} /> }
          </li>

        </ul>
          
      </nav>
    </HeaderWrapper>
  );
}

export default Header;