import { useState, useRef } from 'react';
import { useLocation } from "react-router-dom";

import styled from 'styled-components'
import { Link } from "react-router-dom"
import '../../utils/Styles/Header.scss'
import { useTheme, useIsReady, useDate, useHeader } from '../../utils/Hooks'

import Theme from './Theme'

import { CSSTransition} from 'react-transition-group'

const HeaderWrapper = styled.header`
  position: fixed;
  height: 100vh;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-left: 1%;
 
  z-index: 100;
`

function Header() {

  const [showTheme, setShowTheme] = useState(false)

  const { theme } = useTheme()
  const { isReady } = useIsReady()
  const { currentDate } = useDate()
  const { welcome, skill, parcours, quizz, contact, sectionIntercept } = useHeader()

  const { pathname } = useLocation();

  const nodeRef = useRef(null);

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
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
            </svg>
            <span className='date'>{currentDate.toLocaleDateString()}</span>
            
          </div>
          <div className='date-row'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
            </svg>
            <span className='date'>{currentDate.toLocaleTimeString()}</span>
          </div>
      </div>

      <nav>
        <ul>
          <li onClick={() => {pathname === '/' && isReady === true && scrollToSection(welcome)}} style={welcome.current === sectionIntercept ? {background: 'rgba(0,0,0, 0.6)'} : {}}><Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"/>
            </svg>
          </Link></li>
          
          {pathname === '/' &&
          <CSSTransition
                in={isReady}
                timeout={1000}
                classNames="showanswer"
                unmountOnExit
                nodeRef={nodeRef}
                >

          <div className='' ref={nodeRef}>
            <li onClick={() => scrollToSection(skill)} style={skill.current === sectionIntercept ? {background: 'rgba(0,0,0, 0.6)'} : {}}><Link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-book" viewBox="0 0 16 16">
              <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
              </svg>
            </Link></li>

            <li onClick={() => scrollToSection(parcours)} style={parcours.current === sectionIntercept ? {background: 'rgba(0,0,0, 0.6)'} : {}}><Link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-award" viewBox="0 0 16 16">
              <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/>
              <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
              </svg>
            </Link></li>

            <li onClick={() => scrollToSection(quizz)} style={quizz.current === sectionIntercept ? {background: 'rgba(0,0,0, 0.6)'} : {}}><Link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-question-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
              </svg>
            </Link></li>

            <li onClick={() => scrollToSection(contact)} style={contact.current === sectionIntercept ? {background: 'rgba(0,0,0, 0.6)'} : {}}><Link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
              </svg>
            </Link></li>

          </div>
          </CSSTransition>}
          
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