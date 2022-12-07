import styled from 'styled-components'
import '../../utils/Styles/User.scss'
import { userInfo } from '../../Datas/User'
import Photo from '../../Assets/Gaetan.jpg'
import { useState, useRef } from 'react'

const Vigilent = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    color: #ff6600;

    .vigilent {
        margin: 0 10px;
    }

`

function User() {

    return (
    
        <div className="profile-wrapper">
            <Vigilent>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>

                <span className="vigilent">Soyez vigilent ! Il y aura un quizz à la fin.</span>

                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg> 
            </Vigilent>

            <div className="box-wrapper welcome-wrapper">

                <div className='avatar'>
                    <img className='test' src={Photo} alt='Gaetan' />
                </div>

                <div className="userdata-wrapper">
                    {userInfo.map((info, index) => (
                        <div className="data-wrapper" key={index} style={info.title === 'Email :' ? {marginRight: '5px'} : {}}>

                            <div className="title-wrapper">
                                {info.icon && <span className="icon">{info.icon}</span> }
                                <span className="title">{ info.title }</span>
                            </div>

                            <div className="data-row">
                                <span className="data">{info.data}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <span className="confidentiel">*Vous trouverez mon email et numéro sur CV papier, par mesure de sécurité.</span>

            </div>

        </div>
    )
}

export default User