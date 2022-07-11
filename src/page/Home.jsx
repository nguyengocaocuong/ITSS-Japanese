import { React, useState } from 'react'
import { Card } from '../component/Card'
import './../assets/css/home.scss'
import Image1 from '../assets/image/avatar/avatar1.png'
import Image2 from '../assets/image/avatar/avatar2.png'
import Image3 from '../assets/image/avatar/avatar3.png'
import Image4 from '../assets/image/avatar/avatar4.png'
import Image5 from '../assets/image/avatar/avatar5.png'
import Image6 from '../assets/image/avatar/avatar6.png'
import Image7 from '../assets/image/avatar/avatar7.png'
import Image8 from '../assets/image/avatar/avatar8.png'
import Image9 from '../assets/image/avatar/avatar9.png'
import Avatar1 from '../assets/image/avatar/image1.png'
import Avatar2 from '../assets/image/avatar/image2.png'
import Avatar3 from '../assets/image/avatar/image3.png'
import Avatar4 from '../assets/image/avatar/image4.png'
import Avatar5 from '../assets/image/avatar/image5.png'
import Avatar6 from '../assets/image/avatar/image6.png'
import Avatar7 from '../assets/image/avatar/image7.png'
import Avatar8 from '../assets/image/avatar/image8.png'
import Avatar9 from '../assets/image/avatar/image9.png'
import { CardFilter } from '../component/CardFilter'

export const Home = ({ }) => {
  const listOptions = [{ id: 1, label: 'All' }, { id: 2, label: 'Male' }, { id: 3, label: 'Female' }]
  const [currentOption, setCurrentOption] = useState(1)
  return (
    <div id="home">
      <div className="top-bg">
      </div>
      <div className="bottom-bg">
        <div className="left-content">
          <div className="filter-option">
            <ul>
              {
                listOptions.map((i, id) => <li key={id} className={i.id == currentOption ? 'active' : ''} onClick={() => setCurrentOption(i.id)} >{i.label}</li>)
              }
            </ul>
          </div>
          <div className="card-content">
            <div className="card-col">
              <Card user={{ image: Image9, name: 'Kono Dio Da!!!',avatar:Avatar1 }} />
              <Card user={{ image: Image3, name: 'Hey bro whatsup' ,avatar:Avatar2}} />
              <Card user={{ image: Image2, name: 'Kono sekai wa itami wo',avatar:Avatar3 }} />
            </div>
            <div className="card-col">
              <Card user={{ image: Image4, name: 'Kono Dio Da!!!' ,avatar:Avatar4}} />
              <Card user={{ image: Image5, name: 'Kono Dio Da!!!' ,avatar:Avatar5}} />
              <Card user={{ image: Image6, name: 'Kono Dio Da!!!',avatar:Avatar6 }} />

            </div>
            <div className="card-col">
              <Card user={{ image: Image7, name: 'Kono Dio Da!!!',avatar:Avatar7 }} />
              <Card user={{ image: Image8, name: 'Kono Dio Da!!!',avatar:Avatar8 }} />
              <Card user={{ image: Image1, name: 'Kono Dio Da!!!',avatar:Avatar9 }} />
            </div>
          </div>
        </div>
        <div className="right-content">
          <div className="filter-text">
            <input type="text" placeholder='Enter key' />
          </div>
          <div className="filter-content">
              <CardFilter user={{avatar:Image1}}/>
              <CardFilter user={{avatar:Image2}}/>
              <CardFilter user={{avatar:Image3}}/>
              <CardFilter user={{avatar:Image4}}/>
      
          </div>
        </div>
      </div>
    </div>
  )
}
