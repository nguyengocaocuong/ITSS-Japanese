import React from 'react'
import '../assets/css/card-filter.scss'
export const CardFilter = ({user}) => {
  return (
    <div id='card-filter'>
        <img src={user.image} alt="" />
        <div className="cart-filter__info">
          <p className="name">Nguyễn Ngô Cao Cường</p>
          <p className="address">Số 33 Nguyễn An Ninh</p>
        </div>
    </div>
  )
}
