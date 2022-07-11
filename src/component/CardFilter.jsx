import React from 'react'
import '../assets/css/card-filter.scss'
export const CardFilter = ({user}) => {
  return (
    <div id='card-filter'>
        <img src={user.avatar} alt="" />
    </div>
  )
}
