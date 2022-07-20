import React, { useEffect } from 'react'
import '../assets/css/login.scss'
import { Header } from '../component/Header'
import {
    Outlet,
    useLocation,
    useNavigate
} from 'react-router-dom';


const loginContentMenu = [
    { id: 1, label: 'Log in', path: '/login/login-form' },
    { id: 2, label: 'Sign up', path: '/login/signup-form' }
]
export const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
        if (user)
            navigate('/user/home')
    }, [navigate])
    return (
        <div>
            <Header content={loginContentMenu} />
            <div id='login'>
                <div className={`login-container ${location.pathname === '/login' ? 'd-none' : ''}`}>
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
