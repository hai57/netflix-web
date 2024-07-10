import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import logo from '@/assets/logo.png'

const Login = () => {

  const navigate = useNavigate()
  const [signState, setSignState] = useState("Sign In")

  const handleLogoClick = () => {
    navigate('/')
  }
  return (
    <div className='login'>
      <img src={logo} className='login-logo' onClick={handleLogoClick} alt="logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form >
          {signState === "Sign Up" ? <input type="text" placeholder='Your name' /> : <></>}
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          {signState === "Sign Up" ? <input type="password" placeholder='Confirm Password' /> : <></>}
          <button className='btn-signin'>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id='rememberMe' />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ?
            <p>New to Netflix? <button onClick={() => { setSignState("Sign Up") }}>Sign Up Now</button> </p>
            : <p>Already have account?  <button onClick={() => { setSignState("Sign In") }}>Sign In Now </button></p>
          }
        </div>
      </div>
    </div>
  )
}

export default Login
