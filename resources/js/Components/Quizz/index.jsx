import { useState, useRef } from 'react';
import styled from 'styled-components';
import { QuizzQuestions } from '../../Datas/Quizz'
import '../../utils/Styles/Quizz.scss'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { CSSTransition} from 'react-transition-group'

import ProgressProvider from "./ProgressProvider";

const ChoiceRow = styled.span`
    
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    padding: 10px 30px;
    border-radius: 8px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, 0.4);
    }
    
`

function Quizz() {

    const [question, setQuestion] = useState(0)
    const [showConfirm, setShowConfirm] = useState(false)
    const [color, setColor] = useState('rgba(255, 255, 255, 0.2)')
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
        setColor('rgba(255, 255, 255, 0.4)')
    }

    function nextQuestion() {
        setAnswer(true)
        setDisable(true)
        setShowConfirm(false)

        if(selectedChoice !== QuizzQuestions[question].response) {
            setColor('red')
        }

        else {
            setColor('green') 
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
        <div className="box-wrapper box-quizz-wrapper">

            { !showResult &&
            <div className='questions-wrapper'>

                <span className='number-question'>Il y a {QuizzQuestions.length} questions</span>
                
                <div className='question-row'>
                    <span className='question-number'>Question {question + 1}</span>
                    <span className='question'>{QuizzQuestions[question].question}</span> 
                </div>

                <div className='choice-wrapper'>
                    {QuizzQuestions[question].choice.map((choice, index) => (
                        <ChoiceRow key={index} 
                        style={{...choice === selectedChoice ? {background: color} : {}, ...answer && choice === QuizzQuestions[question].response ? {background: 'green'} : {}}} 
                        onClick={disable ? () => {} : () => choiceClicked(choice)}>{choice}
                        </ChoiceRow>
                    ))}
                </div>

                {showConfirm && <button className='button button-yes' onClick={nextQuestion}>Confirmer</button>}

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
                    {selectedChoice !== QuizzQuestions[question].response ? <span>La bonne réponse est <span className='response'>{QuizzQuestions[question].response}</span></span> : <span>Bonne réponse</span>}
                </div>
                </CSSTransition>
                
            </div>
            }

            { showResult &&
            <div className='result-wrapper'>
                <span className='result-title'>Résultat</span>
                
                <div className='score-wrapper'>
                    <span className='score-title'>Votre score est de</span>
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
                        <button className='button button-tryagain' onClick={tryAgain}>Recommencer</button>
                    </div>
                </div>
            </div>
            }

        </div>

    );
}

export default Quizz