import React, { useEffect, useState } from 'react'
import { Message } from '../component/Message'
import { useNavigate, useParams } from "react-router-dom"
import '../assets/css/chat.scss'

const exMessage = [
    { sendUserId: 1, message: 'Hello!!! My name is Cuong.', sendTime: '28/10/2019' },
    { sendUserId: 2, message: 'Hello!!! My name is Cuong.', sendTime: '28/10/2019' },
    { sendUserId: 1, message: 'Hello!!! My name is Cuong.', sendTime: '28/10/2019' },
    { sendUserId: 2, message: 'Hello!!! My name is Cuong.', sendTime: '28/10/2019' },
    { sendUserId: 2, message: 'Hello!!! My name is Cuong.', sendTime: '28/10/2019' },
    { sendUserId: 1, message: 'Hello!!! My name is Cuong.', sendTime: '28/10/2019' },
    { sendUserId: 1, message: 'Hello!!! My name is Cuong.', sendTime: '28/10/2019' },
    { sendUserId: 2, message: 'Hello!!! My name is Cuong.', sendTime: '28/10/2019' },
]

export const Chat = ({ user = { name: 'Tom' } }) => {
    const navigate = useNavigate()

    const params = useParams()
    const [listMessages, setListMessage] = useState(exMessage)
    const [inputMessage, setInputMessage] = useState('')

    useEffect(() => {
        const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
        if (!user)
            navigate('login')
    }, [navigate])

    const handleClickSendButton = () => {
        setListMessage([
            ...listMessages,
            {
                sendUserId: window.user?.id,
                message: inputMessage,
                sendTime: new Date().toLocaleDateString('en-US')
            }
        ])
    }
    return (
        <div id='chat'>
            <div className="chat-header">
                <i className='bx bx-chevron-left' onClick={() => navigate(-1)} ></i>
                <p>{user.name}</p>
            </div>
            <div className="chat-content">
                {
                    listMessages.map((i, index) => <Message key={index} message={i} otherId={parseInt(params.id)}/>)
                }
            </div>
            <div className="chat-footer">
                <input type="text" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} />
                <i className='bx bx-smile' ></i>
                <i className='bx bxs-send' onClick={handleClickSendButton}></i>
            </div>
        </div>
    )
}