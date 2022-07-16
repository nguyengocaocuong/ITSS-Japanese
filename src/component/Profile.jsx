import React, { useState } from 'react'
import '../assets/css/profile.scss'
import Avatar from '../assets/image/large_avatar.png'

const exUser = {
    userId: 1,
    name: 'Nguyễn An Ninh',
    avatar: Avatar,
    sex: 0,
    email: 'nguyenanninh@gmail.com',
    age: 26,
    height: 174,
    weight: 74,
    address: '33 Nguyễn An Ninh',
    phone: '0818988577'
}
export const Profile = () => {
    const [user, setUser] = useState(exUser)
    return (
        <div id='profile'>
            <div className="profile-top">
                <div className="short-profile">
                    <img src={user.avatar} alt="" />
                    <div className="short-info">
                        <div className="short-info__email">
                            {user.email}
                        </div>
                        <div className="short-info__name">
                            {user.name}
                        </div>
                        <div className="short-info__age">
                            {user.age} Age
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-option">
                <ul>
                    <li className='active'><i className='bx bx-calendar' ></i>Info</li>
                    <li><i className='bx bx-bookmarks'></i>Bookmark</li>
                    <li><i className='bx bx-images' ></i>Image</li>
                </ul>
            </div>
            <div className="profile-title">
                INFOMATION
            </div>
            <div className="profile-content">
                <ul>
                    <li>Age : <span>{user.age}</span></li>
                    <li>Height : <span>{user.height}</span> cm</li>
                    <li>Weight : <span>{user.weight}</span> kg</li>
                    <li>Address : <span>{user.address}</span></li>
                    <li>Phone : <span>{user.phone}</span> </li>
                </ul>
            </div>
        </div>
    )
}
