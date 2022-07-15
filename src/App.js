import React from 'react'
import { LoginForm } from './component/LoginForm'
import { SignupForm } from './component/SignupForm'
import { Login } from './page/Login'
import { Home } from './page/Home'
import {
  Routes,
  Route
} from 'react-router-dom';
import { Profile } from './component/Profile'
import { UserHome } from './component/UserHome'
import './assets/css/App.scss'
import { Chat } from './page/Chat';
import { PageNotFound } from './page/PageNotFound';


function App() {
  return (
    <div className="App" >
      <Routes path='/'>
        <Route path='user'>
          <Route path='home' element={<Home />}>
            <Route index element={<UserHome />} />
            <Route path='profile' element={<Profile />} />
          </Route>
          <Route path='chat/:id' element={<Chat />} />
        </Route>
        <Route path='login' element={<Login />}>
          <Route path='login-form' element={<LoginForm />} />
          <Route path='signup-form' element={<SignupForm />} />
          <Route path='*' element={<div></div>} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;