import React from 'react'
import './Styles.css';

export const Register = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">
                Bhavu Chat
            </span>
            <span className="title">
                Register
            </span>
            <form className='form-register'>
                <input className="input-register" type="text" placeholder='display name' />
                <input className="input-register" type= "email" placeholder='email' />
                <input className="input-register" type="password" name="" placeholder='password' id="" />
                <input style={{display:"none"}} className="input-register" type="file" id='file' />
                <label className='label' htmlFor="file"> <img src="./img/addAvatar.png" alt="" style={{width: "32px"}} /> <span>add an avatar</span></label>
                <button className='button-register'> Sign Up </button>
            </form>
            <p className="para-register"> you do have an account ? Login </p>


        </div>

    </div>
  )
}
