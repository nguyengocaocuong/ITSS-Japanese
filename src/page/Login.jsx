import React from 'react'
import '../assets/css/login.scss'
import { Header } from '../component/Header'
import {
    Outlet, useLocation
} from 'react-router-dom';


const loginContentMenu = [
    { id: 1, label: 'Log in', path: '/login/login-form' },
    { id: 2, label: 'Sign up', path: '/login/signup-form' }
]
export const Login = () => {
    const location = useLocation()
    return (
        <div>
            <Header content={loginContentMenu} />
            <div id='login'>
                <div className={`login-container ${location.pathname == '/login' ? 'd-none' : ''}`}>
                    <div className="content">
                        <div className="content__left"></div>
                        <div>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
