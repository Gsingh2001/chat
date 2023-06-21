import React from 'react'
import Messages from './Messages';
import { Input } from './Input';

export const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Bhavu</span>
        <div className="chatIcons">
          <img className="img" src="./img/cam.png" alt="" />
          <img className="img" src="./img/add.png" alt="" />
          <img className="img" src="./img/More.png" alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}
