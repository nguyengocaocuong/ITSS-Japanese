import { useState } from 'react';
import './assets/css/App.scss';
import { Header } from './component/Header';
import { Chat } from './page/Chat';
import { Home } from './page/Home';
import { Login } from './page/Login';

const loginContentMenu = [
  { id: 1, label: 'Log in' },
  { id: 2, label: 'Sign up' }
]
const homeContentMenu = [
  { id: 3, label: 'Profile' },
  { id: 4, label: 'Sign out' }
]

function App() {
  const [contentId, setContentId] = useState(undefined)
  const [loginStatus, setLoginStatus] = useState(false)
  return (
    <div className="App">
    <Header content={loginStatus? homeContentMenu : loginContentMenu} changeContent={setContentId} />
      {
        loginStatus ? <Home/> :<Login contentId={contentId} changeContent={setContentId} changeLoginStatus={setLoginStatus}/> 
      }
    </div>
  );
}

export default App;
