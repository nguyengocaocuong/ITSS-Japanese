import React from 'react'
import { Message } from '../component/Message'
import { Link, useNavigate } from "react-router-dom"
import '../assets/css/chat.scss'

const exMessage = [
    
]

export const Chat = ({ user = { name: 'Tom' } }) => {
    const navigation = useNavigate()
    return (
        <div id='chat'>
            <div className="chat-header">
                <i className='bx bx-chevron-left' onClick={()=> navigation(-1)} ></i>
                <p>{user.name}</p>
            </div>
            <div className="chat-content">
                <Message otherMessage={true} />
                <Message otherMessage={false} />
                <Message otherMessage={true} />
                <Message otherMessage={false} />
                <Message otherMessage={true} />
                <Message otherMessage={false} />
            </div>
            <div className="chat-footer">
                <input type="text" />
                <i className='bx bx-smile' ></i>
                <i className='bx bxs-send' ></i>
            </div>
        </div>
    )
}