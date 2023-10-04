import { useState, useRef } from 'react'
import { QuizzQuestions } from '../../Datas/Quizz'
import '../../utils/Styles/Quizz.scss'
import {allTheme} from '../../utils/Styles/Theme'
import { useTheme } from '../../utils/Hooks'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { CSSTransition} from 'react-transition-group'

import ProgressProvider from "./ProgressProvider"

function Quizz() {

    const { color } = useTheme()

    const [question, setQuestion] = useState(0)
    const [showConfirm, setShowConfirm] = useState(false)
    const [colorChoice, setColorChoice] = useState('rgba(255, 255, 255, 0.2)')
    const [disable, setDisable] = useState(false)
    const [selectedChoice, setSelectedChoice] = useState()
    const [answer, setAnswer] = useState(false)
    const [score, setScore] = useState(0)
    const [showResult, setShowResult] = useState(false)

    const nodeRef = useRef(null)

    const percentage = score / QuizzQuestions.length * 100
    

    function choiceClicked(index) {
        setShowConfirm(true) 
        setSelectedChoice(index)
        setColorChoice(`rgba(${allTheme[color].color2}, 0.4)`)
    }

    function nextQuestion() {
        setAnswer(true)
        setDisable(true)
        setShowConfirm(false)

        if(selectedChoice !== QuizzQuestions[question].response) {
            setColorChoice('red')
        }

        else {
            setColorChoice('green') 
            setScore(score + 1) 
        }

        if(question + 1 < QuizzQuestions.length) {

            setTimeout(() => {
                setQuestion(question + 1)
                setSelectedChoice()
                setDisable(false)
                setAnswer(false)
            }, 2000)

        }
        else {
            setTimeout(() => {
                setShowResult(true)
            }, 2000)
            
        }
    }

    function tryAgain() {
        setQuestion(0)
        setShowConfirm()
        setDisable(false)
        setSelectedChoice()
        setAnswer(false)
        setScore(0)
        setShowResult(false) 
    }

    return (
        <div className="box-wrapper box-quizz-wrapper" id='quizz'>

            { !showResult &&
            <div className='questions-wrapper'>

                <span className='number-question'>There is {QuizzQuestions.length} questions</span>
                
                <div className='question-row'>
                    <span className='question-number text-white'>Question {question + 1}</span>
                    <span className='question'>{QuizzQuestions[question].question}</span> 
                </div>

                <div className='choice-wrapper'>
                    {QuizzQuestions[question].choice.map((choice, index) => (
                        <div className='choice-row button-bg text-white' key={index} 
                        style={{...choice === selectedChoice ? {background: colorChoice} : {}, ...answer && choice === QuizzQuestions[question].response ? {background: 'green'} : {}}} 
                        onClick={disable ? () => {} : () => choiceClicked(choice)}>{choice}
                        </div>
                    ))}
                </div>

                {showConfirm && <button className='button button-yes' onClick={nextQuestion}>Confirm</button>}

                <CSSTransition
                in={answer}
                timeout={500}
                classNames="show-quizz-answer"
                unmountOnExit
                nodeRef={nodeRef}
                onEnter={() => setTimeout(() => setAnswer(false), 2000)}
                exit={false}
                >
                <div ref={nodeRef} className='answer-wrapper' style={selectedChoice !== QuizzQuestions[question].response ? {background: '#ff4d4d', color: '#990000'} : 
                {background: '#80ff80', color: '#003300'}}>
                    {selectedChoice !== QuizzQuestions[question].response ? <span>The correct answer is <span className='response'>{QuizzQuestions[question].response}</span></span> : <span>Correct</span>}
                </div>
                </CSSTransition>
                
            </div>
            }

            { showResult &&
            <div className='result-wrapper'>
                <span className='result-title'>Result</span>
                
                <div className='score-wrapper'>
                    <span className='score-title'>Your score is</span>
                    <span className='score'>{score} / {QuizzQuestions.length}</span>

                    <div className='percentage-wrapper'>
                    
                    <ProgressProvider valueStart={0} valueEnd={percentage}>
                        {value => 
                        <CircularProgressbar value={value} text={`${value}%`}
                        styles={buildStyles({
                            pathColor: '#00b300',
                            textColor:'#00b300',
                            trailColor: 'red',
                            pathTransitionDuration: 1
                        })}
                        />}
                    </ProgressProvider>

                    </div>
    
                    <div className='border-animation'>
                        <button className='button button-tryagain' style={{fontSize: '14px'}} onClick={tryAgain}>Try again</button>
                    </div>
                </div>
            </div>
            }

        </div>

    );
}

export default Quizz