import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import PageStyle from '../../utils/Styles/Page'
import Welcome from '../../Components/Welcome'
import User from '../../Components/User'
import Skill from '../../Components/Skill'
import Parcours from '../../Components/Parcours'
import Formation from '../../Components/Formation'
import Quizz from '../../Components/Quizz'
import Footer from '../../Components/Footer'

import { useHeader, useIsReady } from '../../utils/Hooks'
import { CSSTransition} from 'react-transition-group'

const SectionRow = styled.div`
  width: 80%;
  min-width: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .section-flex:first-child {
    margin-bottom: 60px;
  }

  @media (min-width: 1150px) {
    max-width: 900px;

    
  }

  @media (min-width: 1450px) {
    width: 90%;
    max-width: none;
    flex-direction: row;
    align-items: flex-start;

    .section-flex:first-child {
      margin-bottom: 0px;
    }
  }
`

function Home() {
  
  const { isReady, setIsReady } = useIsReady()
  const { welcome, skill , parcours, quizz , contact, setSectionIntercept, sectionIntercept } = useHeader()
  const [allRef, setAllRef] = useState([
    welcome,
    skill,
    parcours,
    quizz,
    contact,
  ])

  const nodeRef = useRef(null)

  useEffect(() => {
    setSectionIntercept(welcome.current)
  }, [])

  useEffect(() => {
    
    if(isReady) {
      setTimeout(() => setSectionIntercept(welcome.current),10)
      
      const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1
      }

      const observer = new IntersectionObserver((entries) => {
        entries.map(entry => {
          setSectionIntercept(entry.target)
        })
      }, options)

      allRef.map((ref) => {
        observer.observe(ref.current)
      })
    }
  }, [isReady]);

  return (
    <PageStyle>

      <Welcome isReady={isReady} setIsReady={setIsReady} welcome={welcome}/>

     <CSSTransition
      in={isReady}
      timeout={1500}
      classNames="fade-in"
      unmountOnExit
      nodeRef={nodeRef}
      >
      <div className='page-wrapper'ref={nodeRef}>
      
        <div className='section-wrapper' >
          <User />
        </div>
       
        <div className='section-wrapper easy' ref={skill}>
          <div className='section-title'>
            <h2>Compétences</h2>
          </div>
          
          <Skill />
        </div>

        <SectionRow>
          <div className='section-flex' ref={parcours}>
            <div className='section-title'>
              <h2>Parcours</h2>
            </div>

            <Parcours />
            
          </div>
          
          <div className='section-flex'>
            <div className='section-title'>
              <h2>Formations</h2>
            </div>

            <Formation />
            
          </div>
        </SectionRow>
        
        <div className='section-quizz' ref={quizz}>
          <h2>Quizz</h2>
          <Quizz />
        </div>
        
        <Footer contact={contact} />
        
      </div> 
      </CSSTransition>

    </PageStyle>
  );
}

export default Home;
