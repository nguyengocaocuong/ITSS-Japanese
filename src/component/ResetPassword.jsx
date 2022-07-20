import React from 'react'
import '../assets/css/login-form.scss'
import { useNavigate } from 'react-router-dom';

export const ResetPassword = () => {
  const navigation = useNavigate();
    return (
        <div className="login-form__right">
            <div className="icon-close"><p onClick={() => navigation('/login/login-form')}>X</p></div>
            <div className="login-form__input">
                <div className="group-input">
                    <input type="text" placeholder='Username' />
                </div>
                <div className="group-input">
                    <i className='bx bx-low-vision'></i>
                    <input type="password" placeholder='New Password' />   
                </div>
                <div className="group-input">
                    <i className='bx bx-low-vision'></i>
                    <input type="password" placeholder='Retype Password' />   
                </div>

                <button className="btn" >Submit</button>
                
            </div>
            
        </div>
    )
}