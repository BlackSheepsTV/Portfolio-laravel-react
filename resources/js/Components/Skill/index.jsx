import { useState } from 'react';
import { front, back, globalSkill } from '../../Datas/Skill'
import '../../utils/Styles/Skill.scss'
import { SlArrowRight, SlArrowLeft } from "react-icons/sl"

function Skill() {

    const [ slide, setSlide ] = useState()
    const [ showFront, setShowFront ] = useState(true)

    function changeToBack() {
        setSlide('mode-slide')
        setTimeout(() => setShowFront(false), 600)
    }

    function changeToFront() {
        setSlide('')
        setTimeout(() => setShowFront(true), 600)
    }

    return ( 

        <div className="box-wrapper skills">

            <div className={'skill-categories ' + slide}>

{/*----------------------------------------------------------- LEFT SIDE ----------------------------------------------------------------------*/}
            { showFront &&
                <>
                    <div className='skill'>
                        <div className='skill__title'>
                            <p>Front-end</p>
                            <SlArrowRight style={{right: '6px'}} onClick={() => setShowFront(false)}></SlArrowRight>
                        </div>

                        <div className='skill__container'>
                            {Object.entries(front)
                            .sort((a, b) => a[0].localeCompare(b[0]))
                            .map(([key, value], index) => (
                                <div className='skill__row' key={index}>
                                    {value !== null && (
                                        <div style={{ color: value.color }}>
                                            {value.svg}
                                        </div>
                                    )}
                                    <p>{ key }</p>
                                </div>
                            ))}
                        </div>
                    </div>                     
                </> 
            }

 {/*----------------------------------------------------------- RIGHT SIDE ----------------------------------------------------------------------*/}
            { !showFront &&                                    
                <div className='skill'>         
                    <div className='skill__title'>
                        <p>Back-end</p>
                        <SlArrowLeft style={{left: '6px'}} onClick={() => setShowFront(true)}></SlArrowLeft>
                    </div>
                    
                    <div className='skill__container'>
                        {Object.entries(back)
                        .sort((a, b) => a[0].localeCompare(b[0]))
                        .map(([key, value], index) => (
                            <div className='skill__row' key={index}>
                                {value !== null && (
                                    <div style={{ color: value.color }}>
                                        {value.svg}
                                    </div>
                                )}
                                <p>{ key }</p>
                            </div>
                        ))}
                    </div>
                </div>                                     
            }
            </div>

            <div className="skill skill--global">

                <div className='skill__title'>
                    <p className='title'>Global</p>
                </div>
                
                <div className='skill__container'>
                    {globalSkill
                    .sort((a, b) => a[0].localeCompare(b[0]))
                    .map((skill, index) => (
                        <div className='skill__row' key={index}>
                            <p>{ skill }</p>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>

      
    );
}

export default Skill