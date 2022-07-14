import React from 'react'
import '../assets/css/profile.scss'
import Avatar from '../assets/image/large_avatar.png'
export const Profile = () => {
    return (
        <div id='profile'>
            <div className="profile-top">
                <div className="short-profile">
                    <img src={Avatar} alt="" />
                    <div className="short-info">
                        <div className="short-info__email">
                            nguyenngocaocuong@gmail.com
                        </div>
                        <div className="short-info__name">
                            Nguyễn Ngô Cao Cường
                        </div>
                        <div className="short-info__age">
                            22 Age
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
                <li>Age : <span>26</span></li>
                <li>Height : <span>174</span> cm</li>
                <li>Weight : <span>74</span> kg</li>
                <li>Address : <span>33 Nguyễn An Ninh</span></li>
                <li>Phone : <span>0818988544</span> </li>
            </ul>
            </div>
        </div>
    )
}
