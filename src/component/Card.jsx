import React from 'react'
import '../assets/css/card.scss'
export const Card = ({ user }) => {
    return (
        <div id='card'>
            <img src={user.image} alt="" className="image" />
            <p>{user.name}</p>
            <div className="card-footer">
                <div className="icon-avatar">
                    <img src={user.avatar} alt="" className="avatar" />
                </div>
                <div className="icon-message">
                    <i class='bx bx-message-dots' ></i>
                </div>
            </div>
        </div>
    )
}
