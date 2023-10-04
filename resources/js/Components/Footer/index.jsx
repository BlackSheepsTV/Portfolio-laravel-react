import { useEffect, useState, useRef} from 'react';
import '../../utils/Styles/Footer.scss'
import { inputs } from '../../Datas/Inputs'
import axios from 'axios';
import { CSSTransition} from 'react-transition-group'

function Footer({contact}) {

    const nodeRef = useRef(null)
    
    const [inputsValue, setInputsValue] = useState({});
    const [count, setCount] = useState(0);
    
    const [apiStatus, setApiStatus] = useState();
    const [apiResponse, setApiResponse] = useState();
    const [showAnswer, setShowAnswer] = useState(false)

    const handleChange = (event) => {
        const names = event.target.name;
        const value = event.target.value;
        
        setInputsValue(values => ({...values,[names]: value}))
    }

    async function handleSubmit (event) {
        event.preventDefault()
        setShowAnswer(false)
        try {
    
            const response = await axios.post('api/v1/contact', { ...inputsValue })
                
            if(response.status === 200) {
                    setApiStatus(response.status)
                    setApiResponse(response.data.success) 
                
                    event.target.reset()
                    setInputsValue('') 
                    setShowAnswer(true)
                    setTimeout(() => setShowAnswer(false), 5000)
            }

        }

        catch(e) {
            setApiStatus(e.response.status)

            if(e.response.status === 422) {
                setApiResponse('Veuillez remplir tous les champs !')
                setShowAnswer(true)
            }

            else {
                setApiResponse('Une erreur est survenue !')
                setShowAnswer(true)
            } 
        }
    }


    useEffect(() => {
        if(inputsValue.message) {
            setCount(inputsValue.message.length)  
        }
        else {
            setCount(0)
        }   
        
    }, [inputsValue])
   
    return (
        <footer ref={contact}>
            <div className="contact-wrapper">
               
                <span className='contact-title'>Contact me</span>

                <CSSTransition
                in={showAnswer}
                timeout={1000}
                classNames="showanswer"
                unmountOnExit
                nodeRef={nodeRef}
                onEntered={() => {setApiStatus === 200 ? setTimeout(() => setShowAnswer(false), 5000) : {}} }
                >
                <div ref={nodeRef} className='answer-wrapper' style={apiStatus === 200 ? {background: '#80ff80', color: '#003300'} : {background: '#ff4d4d', color: '#990000'}}>
                    <span>{apiResponse}</span>
                </div>
                </CSSTransition>
               
                <form className='form-wrapper' onSubmit={handleSubmit}>

                {inputs.map((input, index) => (
                    <div className={'input-row ' + input.class} key={index}>
                        
                        <label>
                            <span>{input.label}<span className='star'>*</span></span>
                            <input 
                            className={inputsValue.hasOwnProperty(input.name) && inputsValue[input.name] !== '' ? 'focused' : ''} 
                            type={input.type} 
                            name={input.name}
                            placeholder={input.placeholder}  
                            pattern={input.regex} 
                            value={inputsValue.names} 
                            onChange={handleChange}></input>
                        </label>
                    </div>

                   ))}

                   <div className='input-row small-input'>
                        <label>
                            <span>Object<span className='star'>*</span></span>
                            <input  
                            className={inputsValue.hasOwnProperty('subject') && inputsValue['subject'] !== '' ? 'focused' : ''}
                            type='text'
                            name='subject'
                            placeholder='Mon objet' 
                            pattern='([a-zA-Zéèàç])+'
                            value={inputsValue.names} 
                            onChange={handleChange}></input>
                        </label>
                   </div>

                    <div className='textarea-wrapper'>
                        <label>
                            <span>Your message<span className='star'>*</span></span>
                            <textarea 
                            className={inputsValue.hasOwnProperty('message') && inputsValue['message'] !== '' ? 'focused' : ''}
                            name='message'
                            placeholder='Type your message...'
                            rows={5} cols={33} 
                            value={inputsValue.names} 
                            onChange={handleChange}
                            maxLength={400}
                            style={{fontSize: '14px'}}
                            ></textarea>
                            <span className='count'>{count}/400</span>
                        </label>
                    </div>

                    <div className='submit-wrapper'>
                        <input className='button button-yes' type="submit" value="Submit"/>
                    </div>
                    
                </form>
            </div>  
        </footer>    
    )      
}

export default Footer