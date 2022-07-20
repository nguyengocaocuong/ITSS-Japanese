import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {Table} from './Table';

const styleBtn = "block mb-3 w-48 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
const styleClickedBtn = "block mb-3 w-48 bg-blue-400 text-white font-bold py-2 px-4 rounded-l"

export const AdminTable = () => {
    const navigate = useNavigate();
    const [type, setType] = useState('user')
    const [btnStatistic, setBtnStatistic] = useState(styleBtn)
    const [btnUser, setBtnUser] = useState(styleClickedBtn)

    const handleClick = (type) =>{
        if(type === 'user'){
            setBtnUser(styleClickedBtn)
            setBtnStatistic(styleBtn)
        }
        else{
            setBtnStatistic(styleClickedBtn)
            setBtnUser(styleBtn)
        }
        setType(type)
    }

    return (
        <div className="container mx-auto mt-32 flex">
            <div className="button-group">
                <button className={btnUser} onClick={()=>handleClick('user')}>User</button>
                <button className={btnStatistic} onClick={()=>handleClick('statistic')}>Statistic</button>
            </div>
            <div className="panel ml-12 h-screen bg-white w-screen rounded-md shadow-lg">
                <Table type={type}/>
            </div>
        </div>
    )
}