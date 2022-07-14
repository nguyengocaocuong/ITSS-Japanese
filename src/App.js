import { useEffect, useState } from 'react'
import './assets/css/App.scss'
import { Footer } from './component/Footer'
import { Header } from './component/Header'
import { Profile } from './page/Profile'
import { Home } from './page/Home'
import { Login } from './page/Login'
import { Chat } from './page/Chat'
import { useLocation } from 'react-router-dom'


import {
  Routes,
  Route
} from 'react-router-dom';

const loginContentMenu = [
  { id: 1, label: 'Log in',path:'' },
  { id: 2, label: 'Sign up',path:'' }
]
const homeContentMenu = [
  { id: 3, label: 'Profile',path:'/profile' },
  { id: 4, label: 'Sign out',path:'/login' }
]

function App() {
  const location = useLocation()
  const [contentId, setContentId] = useState(undefined)
  const [hiddentHeader, setHiddentHeader] = useState(false)
  const handleScroll = (event) => {
    if (event.currentTarget.scrollTop >= 844) {
      setHiddentHeader(true)
    } else
      setHiddentHeader(false)
  }
  useEffect(() => {
    return () => {
      if(location.pathname == '/chat')
        setHiddentHeader(true)
    }
  }, [location])
  
  return (
    <div className="App" onScroll={handleScroll}>
    {
      hiddentHeader ? '' :<Header content={location.pathname == '/home' ? homeContentMenu : loginContentMenu} changeContent={setContentId} />
    }
      <Routes path='/'>
        <Route index path='login' element={<Login contentId={contentId} changeContent={setContentId}/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;