import React from 'react'
import '../assets/css/chat.scss'
export const Chat = ({ user = { name: 'Tom' } }) => {
    return (
        <div id='chat'>
            <div className="chat-header">
                <i class='bx bx-chevron-left' ></i>
                <p>{user.name}</p>
            </div>
            <div className="chat-content">

            </div>
            <div className="chat-footer">
                <input type="text" />
                <i class='bx bx-smile' ></i>
                <i class='bx bxs-send' ></i>
            </div>
        </div>
    )
}
