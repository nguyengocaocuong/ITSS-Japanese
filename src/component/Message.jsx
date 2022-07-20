import React from 'react'
import '../assets/css/message.scss'
import Avatar from '../assets/image/large_avatar.png'
export const Message = ({ message, ortherId }) => {
    return (
        <div id='message' className={message.sendUserId === ortherId ? 'f-left' : 'f-right'}>
            {
                message.sendUserId === ortherId ? (
                    <div className={'avatar'}>
                        <img src={Avatar} alt='' />
                    </div>
                ) : ''
            }

            <div className="text" title={`Send by ${message.sendUserId === ortherId ? 'Mr.Canh' : 'You'} ${message.sendTime}`}>
                {message.message}
            </div>
        </div>
    )
}
