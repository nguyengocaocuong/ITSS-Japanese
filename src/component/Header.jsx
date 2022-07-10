import React from 'react'
import '../assets/css/header.scss'
export const Header = ({content, changeContent}) => {
  return (
    <div id='header'>
        <ul>
            <li>Logo</li>
            <li className='input-search'><i className='bx bx-search-alt-2'></i><input type="text" /></li>
            <li onClick={()=> changeContent(content[0].id)}>{content[0].label}</li>
            <li onClick={()=> changeContent(content[1].id)}>{content[1].label}</li>
        </ul>    
    </div>
  )
}
