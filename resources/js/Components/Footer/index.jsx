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
               
                <span className='contact-title'>Pour me contacter test</span>

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
                            <span>Objet<span className='star'>*</span></span>
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
                            <span>Votre message<span className='star'>*</span></span>
                            <textarea 
                            className={inputsValue.hasOwnProperty('message') && inputsValue['message'] !== '' ? 'focused' : ''}
                            name='message'
                            placeholder='Taper votre message...'
                            rows={5} cols={33} 
                            value={inputsValue.names} 
                            onChange={handleChange}
                            maxLength={400}></textarea>
                            <span className='count'>{count}/400</span>
                        </label>
                    </div>

                    <div className='submit-wrapper'>
                        <input className='button button-yes' type="submit" value="Envoyer"/>
                    </div>
                    
                </form>
            </div>
            
            <div className='link-wrapper'>
                <a href='https://github.com/BlackSheepsTV' target='_blank' className='link'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                </a>
            
                <a href='https://www.linkedin.com/in/ga%C3%ABtan-etame/'  target='_blank' className='link'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                </a>
            </div>

            
           
        </footer>    
    )      
}

export default Footer