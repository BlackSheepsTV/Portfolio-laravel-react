import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import MainStyle from '../../utils/Styles/Page'
import User from '../../Components/User'
import Skill from '../../Components/Skill'
import Parcours from '../../Components/Parcours'
import Formation from '../../Components/Formation'
import Quizz from '../../Components/Quizz'
import Footer from '../../Components/Footer'

import { useHeader } from '../../utils/Hooks'

const SectionRow = styled.div`
  width: 92%;
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
  
  const { user, skill , parcours, quizz , contact, setSectionIntercept } = useHeader()
  const [allRef, setAllRef] = useState([
    user,
    skill,
    parcours,
    quizz,
    contact,
  ])

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.95
    }
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setSectionIntercept(entry.target)
        }
      })
    }, options)
  
    allRef.forEach(ref => {
      observer.observe(ref.current)
    })
  
    setTimeout(() => setSectionIntercept(user.current), 10)
    
  }, []);

  return (
  <>
    <MainStyle>
      <div className='page-wrapper'>
        <User user={user}/>
        
        <div className='section-wrapper easy' ref={skill}>
          <div className='section-title'>
            <h2>Skills</h2>
          </div>
          
          <Skill />
        </div>

        <SectionRow>
          <div className='section-flex' ref={parcours}>
            <div className='section-title'>
              <h2>Career</h2>
            </div>

            <Parcours />
            
          </div>
          
          <div className='section-flex'>
            <div className='section-title'>
              <h2>Training</h2>
            </div>

            <Formation />
            
          </div>
        </SectionRow>
        
        <div className='section-quizz' ref={quizz}>
          <h2>Quizz</h2>
          <Quizz />
        </div>
      </div>                        
    </MainStyle>
    <Footer contact={contact}/>
  </>
  )
}

export default Home;
