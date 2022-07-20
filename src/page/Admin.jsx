import React, { useEffect } from 'react'
import { Header } from '../component/Header'
import { Footer } from '../component/Footer'
import { Outlet, useNavigate } from 'react-router-dom'
import {AdminTable} from '../component/AdminTable'

export const Admin = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
    if (!user)
      navigate('/admin/login-form')
  }, [navigate])

  const handleLogOut = () => {
    localStorage.removeItem('user')
  }

  const homeContentMenu = [
    { id: 4, label: 'Logout', path: 'login', handle: handleLogOut }
  ]

  return (
    <div>
      <Header content={homeContentMenu} />
      <div id="home">
        <AdminTable />
      </div>
      <Footer />
    </div>
  )
}
