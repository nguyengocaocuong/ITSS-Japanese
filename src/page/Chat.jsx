import React from 'react'
import '../assets/css/chat.scss'
import { Message } from '../component/Message'
export const Chat = ({ user = { name: 'Tom' } }) => {
    return (
        <div id='chat'>
            <div className="chat-header">
                <i className='bx bx-chevron-left' ></i>
                <p>{user.name}</p>
            </div>
            <div className="chat-content">
                <Message otherMessage={true}/>
                <Message otherMessage={false}/>
                <Message otherMessage={true}/>
                <Message otherMessage={false}/>
                <Message otherMessage={true}/>
                <Message otherMessage={false}/>
                <Message otherMessage={true}/>
                <Message otherMessage={false}/>
                <Message otherMessage={true}/>
                <Message otherMessage={false}/>
                <Message otherMessage={true}/>
            </div>
            <div className="chat-footer">
                <input type="text" />
                <i className='bx bx-smile' ></i>
                <i className='bx bxs-send' ></i>
            </div>
        </div>
    )
}