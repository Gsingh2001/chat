import React from 'react'

export const Login = () => {
  return (
    <div className='formContainer'>
    <div className="formWrapper">
        <span className="logo">
            Bhavu Chat
        </span>
        <span className="title">
            Login
        </span>
        <form className='form-register'>
            <input className="input-register" type= "email" placeholder='email' />
            <input className="input-register" type="password" name="" placeholder='password' id="" />
            <button className='button-register'> Sign In </button>
        </form>
        <p className="para-register"> you don't have an account ? Register </p>


    </div>

</div>
  )
}
