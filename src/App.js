import { useState } from 'react';
import './assets/css/App.scss';
import { Footer } from './component/Footer';
import { Header } from './component/Header';
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
  const [hiddentHeader, setHiddentHeader] = useState(false)
  const handleScroll = (event) => {
    if (event.currentTarget.scrollTop >= 844) {
      setHiddentHeader(true)
    } else
      setHiddentHeader(false)
  }
  return (
    <div className="App" onScroll={handleScroll}>
      {
        hiddentHeader ? '' : <Header content={loginStatus ? homeContentMenu : loginContentMenu} changeContent={setContentId} />
      }
      {
        loginStatus ? <Home /> : <Login contentId={contentId} changeContent={setContentId} changeLoginStatus={setLoginStatus} />
      }
      <Footer />

    </div>
  );
}

export default App;

//       <Profile/>
//       <Footer/>