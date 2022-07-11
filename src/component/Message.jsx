import React from 'react'
import '../assets/css/message.scss'
import Avatar from '../assets/image/large_avatar.png'
export const Message = ({otherMessage}) => {
    return (
        <div id='message' className={otherMessage ? 'f-left' : 'f-right'}>
            <div className={`avatar ${otherMessage ? '' : 'd-none'}`}>
                <img src={Avatar} alt="" />
            </div>
            <div className="text">
                Hello!! My name is Cuong.
            </div>
        </div>
    )
}
