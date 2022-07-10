import React from 'react'
import '../assets/css/login-form.scss'

export const LoginForm = ({changeContent,changeLoginStatus}) => {
    return (
        <div className="login-form__right">
            <div className="icon-close" onClick={()=> changeContent(0)}><p>X</p></div>
            <div className="login-form__input">
                <div className="group-input">
                    <input type="text" placeholder='Username' />
                </div>
                <div className="group-input">
                    <i className='bx bx-low-vision'></i>
                    <input type="password" placeholder='Password'/>
                    <p>Forgot password?</p>
                </div>
                <div className="divider">
                    <div className="divider__line"></div>
                    <div className="divider__text">Or</div>
                    <div className="divider__line"></div>
                </div>
            </div>
            <div className="login-form__option">
                <div className="option-google"></div>
                <div className="option-facebook"></div>
            </div>
            <div className="new-account">
                <p >
                    Create Account
                </p>
            </div>
        </div>
    )
}