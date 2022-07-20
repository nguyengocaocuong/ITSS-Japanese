import React from 'react'
import '../assets/css/header.scss'
import { useLocation, Link } from "react-router-dom"

export const Header = ({ content }) => {
  const location = useLocation()
  return (
    <div id='header' className={location.pathname === '/home/profile' ? 'header-bg' : ''}>
      <ul>
        <li><Link to={'/home'}>Logo</Link></li>
        <li className='input-search'><i className='bx bx-search-alt-2'></i><input type="text" /></li>
        {
          content.map((i, id) => <li key={id}><Link to={i.path} onClick={i.handle ? i.handle : undefined}>{i.label}</Link></li>)
        }
      </ul>
    </div>
  )
}
