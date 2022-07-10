import React from 'react'
import '../assets/css/signup-form.scss'

export const SignupForm = ({ changeContent, changeLoginStatus }) => {
  return (
    <div className="signup-form__right">
      <div className="icon-close" onClick={() => changeContent(0)}><p>X</p></div>
      <div className="signup-form__input">
        <div className="group-input">
          <input type="text" placeholder='Username' />
        </div>
        <div className="group-input">
          <input type="email" placeholder='Email' />
        </div>
        <div className="group-input">
          <i className='bx bx-low-vision'></i>
          <input type="password" placeholder='Password' />
        </div>
        <div className="group-input">
          <i className='bx bx-low-vision'></i>
          <input type="password" placeholder='Confirm Password' />
        </div>
        <div className="button-group">
          <button onClick={()=>changeLoginStatus(true)}>Sign Up</button>
          <button onClick={() => changeContent(1)}>Sign In</button>
        </div>
        <div className="divider">
          <div className="divider__line"></div>
          <div className="divider__text">Or</div>
          <div className="divider__line"></div>
        </div>
      </div>
      <div className="signup-form__option">
        <div className="option-google"></div>
        <div className="option-facebook"></div>
      </div>
    </div>
  )
}
