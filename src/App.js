import { React, useEffect } from 'react'
import { LoginForm } from './component/LoginForm'
import { SignupForm } from './component/SignupForm'
import { Login } from './page/Login'
import { Home } from './page/Home'
import {
  Routes,
  Route,
  useNavigate
} from 'react-router-dom';
import { Profile } from './component/Profile'
import { UserHome } from './component/UserHome'
import './assets/css/App.scss'
import { Chat } from './page/Chat';


function App() {
  const navigate = useNavigate()
  useEffect(() => {
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('use')) : null
    if (!user)
      navigate('login')
  }, [])

  return (
    <div className="App" >
      <Routes path='/'>
        <Route path='login' element={<Login />}>
          <Route path='login-form' element={<LoginForm />} />
          <Route path='signup-form' element={<SignupForm />} />
          <Route path='*' element={<div></div>} />
        </Route>
        <Route path='home' element={<Home />}>
          <Route index element={<UserHome />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='chat' element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;