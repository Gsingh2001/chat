import React from 'react'

export const Input = () => {
  return (
    <div className='input'>
      <input className='Input' type="text" placeholder='Type Something...' />
      <div className="send">
        <img className="img" src="./img/attach.png" alt="" />
        <input type="file" style={{display:"none"}} id='file' />
        <label htmlFor="file">
          <img className="img" src="./img/img.png" alt="" />
        </label>
        <button className="button">Send</button>
      </div>
    </div>
  )
}
