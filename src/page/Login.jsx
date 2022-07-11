import React from 'react'
import '../assets/css/login.scss'
import { LoginForm } from '../component/LoginForm'
import { SignupForm } from '../component/SignupForm'





export const Login = ({ contentId, changeContent,changeLoginStatus }) => {
    const getContent = () => {
        switch (contentId) {
            case undefined:
                return '';
            case 1:
                return <LoginForm changeContent={changeContent} changeLoginStatus={changeLoginStatus}/>;
            case 2:
                return <SignupForm changeContent={changeContent} />;
        }
    }
    return (
        <div id='login'>
            {
                contentId ? (
                    <div className="login-container">
                        <div className="content">
                            <div className="content__left"></div>
                            <div>
                                {getContent()}
                            </div>
                        </div>
                    </div>
                ) : ''
            }
        </div>
    )
}
