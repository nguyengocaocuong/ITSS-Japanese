import React from 'react'
import '../assets/css/header.scss'
import { useNavigate,useLocation,Link } from "react-router-dom"

export const Header = ({content, changeContent}) => {
  const location = useLocation()
  const navigation = useNavigate();
  const handleClick = (id)=>{
    if(content[id].path)
      navigation(content[id].path)
  }
  return (
    <div id='header' className={location.pathname == '/profile' ? 'header-bg' : ''}>
        <ul>
            <li><Link to={'/home'}>Logo</Link></li>
            <li className='input-search'><i className='bx bx-search-alt-2'></i><input type="text" /></li>
            <li onClick={()=> {changeContent(content[0].id);handleClick(0)}}>{content[0].label}</li>
            <li onClick={()=> {changeContent(content[1].id);handleClick(1)}}>{content[1].label}</li>
        </ul>    
    </div>
  )
}
