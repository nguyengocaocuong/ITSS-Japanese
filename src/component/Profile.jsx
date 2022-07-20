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
    const [isEdit, changeEditState] = useState(false)

    const onEditClickHandle = () => {
        changeEditState(!isEdit);
    }

    return (
        <div id='profile'>
            <div className="profile-top">
                <div className="short-profile">
                    <img src={user.avatar} alt="" />
                    <div className="short-info">

                        <input readOnly={!isEdit} type="text" className="short-info__email border-none" defaultValue={"nguyenngocaocuong@gmail.com"} />                           
                        <input readOnly={!isEdit} type="text" className="short-info__name border-none" defaultValue={"Nguyễn Ngô Cao Cường"} />
                        <div className="short-info__age old-area">
                            <input readOnly={!isEdit} type="number" className="input-50 border-none" defaultValue={22} />
                            <span className='age-text'>
                                years old
                            </span>
                        </div>
                    </div>
                </div>
                
            </div>
            {/* <div className="profile-option">
                <ul>
                    <li className='active'><i className='bx bx-calendar' ></i>Info</li>
                    <li><i className='bx bx-bookmarks'></i>Bookmark</li>
                    <li><i className='bx bx-images' ></i>Image</li>
                </ul>
            </div> */}
            <div style={{display: "block"}}>
                <button hidden={isEdit} className="btn btn-edit" onClick={() => onEditClickHandle()}>Edit</button>
                <button hidden={!isEdit} className="btn btn-save" onClick={() => onEditClickHandle()}>Save</button>
            </div>
            <div className="profile-title">
                INFOMATION
            </div>
            <div className="profile-content">

            <ul>
                <li>Sex : 
                    <select className={`border-none ${isEdit? "" : "select-read-only"}`} defaultValue={"male"}>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                </li>
                <li>Age : <input readOnly={!isEdit} type="number" className="border-none" defaultValue={26} /> </li>
                <li>Height : <input readOnly={!isEdit} type="number" className="border-none input-50" defaultValue={175} /> cm </li>
                <li>Weight : <input readOnly={!isEdit} type="number" className="border-none input-50" defaultValue={60} /> kg</li>
                <li>Address : <input readOnly={!isEdit} type="text" className="border-none" defaultValue={"Hanoi"} />  </li>
                <li>Phone : <input readOnly={!isEdit} type="phone" className="border-none" defaultValue={123456789} /> </li>
            </ul>
            </div>
        </div>
    )
}
