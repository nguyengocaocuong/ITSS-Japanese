import React from 'react'
import { Header } from '../component/Header'
import { Footer } from '../component/Footer'
import { Outlet } from 'react-router-dom'
import './../assets/css/home.scss'

const homeContentMenu = [
  { id: 3, label: 'Profile',path:'/home/profile' },
  { id: 4, label: 'Sign out',path:'/login' }
]
export const Home = () => {

  return (
    <div>
      <Header content={homeContentMenu}/>
      <div id="home">
        <div className="top-bg">
        </div>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}
