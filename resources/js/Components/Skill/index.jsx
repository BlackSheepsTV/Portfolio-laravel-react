import { useState } from 'react';
import { front, back, globalSkill } from '../../Datas/Skill'
import '../../utils/Styles/Skill.scss'

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

        <div className="box-wrapper box-skill-wrapper">

            <div className={'front-back-wrapper ' + slide}>

{/*----------------------------------------------------------- LEFT SIDE ----------------------------------------------------------------------*/}
    
                <div className='side-wrapper'>

                    { showFront &&
                    <div className='skill-frontback-wrapper skill-front-wrapper'>
                    
                        <div className='skill-title'>
                            <span className='title'>Front</span>
                        </div>

                        <div className='skill-wrapper'>
                            {front.map((skill, index) => (
                                <div className='skill' key={index}>
                                    <span>{ skill }</span>
                                </div>
                            ))}
                        </div>

                    </div>
                    } 

                    {!showFront && 
                    <div className='skill-frontback-wrapper side'>
                        <span>Envie de voir le front ?</span>
                        <div className='border-animation'>
                            <button className='button' onClick={changeToFront}>Voir</button>
                        </div>
                        
                    </div>
                    }
                </div>

 {/*----------------------------------------------------------- RIGHT SIDE ----------------------------------------------------------------------*/}

                <div className='side-wrapper'>

                    { !showFront &&
                    <div className='skill-frontback-wrapper skill-back-wrapper'>         
                        <div className='skill-title'>
                            <span className='title'>Back</span>
                        </div>
                        
                        <div className='skill-wrapper'>
                            {back.map((skill, index) => (
                                <div className='skill' key={index}>
                                    <span>{ skill }</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    }

                    {showFront && 
                    <div className='skill-frontback-wrapper side'>
                        <span>Envie de voir le back ?</span>
                        <div className='border-animation'>
                            <button className='button' onClick={changeToBack}>Voir</button>
                        </div>
                    </div>
                    }
                </div>

            </div>

            <div className="skill-global-wrapper">

                <div className='skill-title'>
                    <span className='title'>Global</span>
                </div>
                
                <div className='skill-wrapper'>
                    {globalSkill.map((skill, index) => (
                        <div className='skill' key={index}>
                            <span>{ skill }</span>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>

      
    );
}

export default Skill