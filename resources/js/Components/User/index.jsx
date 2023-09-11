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

function User({user}) {

    const calculateAge = (birthdate) => {
        const today = new Date();
        const birthDate = new Date(birthdate);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
    
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
    
        return age;
      };
    
      const age = calculateAge('1995-10-31');

    return (
    <>
        <div className='user' ref={user}>
            <div className='user__desc'>
                <h2>I'm Gaëtan ETAME, i'm {age} and a <span>fullstack</span> web developpeur</h2>
                <p>My goal is to help you to have the best website for your company and with the best experience for all the user.</p>
            </div>

            <div className='avatar'>
                <img src={Photo} alt='Gaetan'/>
            </div>
        </div>
    </>
    )
}

export default User