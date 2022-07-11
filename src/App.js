import { useState } from 'react';
import './assets/css/App.scss';
import { Header } from './component/Header';
import { Footer } from './component/Footer';
import { Home } from './page/Home';
import { Login } from './page/Login';
import { useLocation } from 'react-router-dom';

import {
  Routes,
  Route
} from 'react-router-dom';

const loginContentMenu = [
  { id: 1, label: 'Log in' },
  { id: 2, label: 'Sign up' }
]
const homeContentMenu = [
  { id: 3, label: 'Profile' },
  { id: 4, label: 'Sign out' }
]

function App() {
  const location = useLocation()
  console.log()
  const [contentId, setContentId] = useState(undefined)
  const [loginStatus, setLoginStatus] = useState(false)
  return (
    <div className="App">
      <Header content={location.pathname != 'home' ? homeContentMenu : loginContentMenu} changeContent={setContentId} />
      <Routes path='/'>
        <Route index path='login' element={<Login contentId={contentId} changeContent={setContentId} changeLoginStatus={setLoginStatus} />} />
        <Route path='/home' element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
