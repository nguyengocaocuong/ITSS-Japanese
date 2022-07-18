import React from 'react'
import '../assets/css/card-filter.scss'
export const CardFilter = ({user}) => {
  return (
    <div id='card-filter'>
        <img src={user.image} alt="" />
        <div className="cart-filter__info">
          <p className="name">{user.name}</p>
          <p className="address">{user.address}</p>
        </div>
    </div>
  )
}
