import React, { useState } from 'react';
import { SiConsul } from "react-icons/si";
import logo from '../../assets/logo.png';
// import './styles.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle email and password login here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  

  return (
    <div className='navBar flex'>
      <div className="navBarOne flex">
        <div>
          <SiConsul className='icon'/>
        </div>

        <div className='none flex'>
          <li className="flex">Abhinav Airways</li>
          <li className="flex"> 
            <img src={logo} style={{ width: '20%' }} className="logo" />
          </li>
        </div>
      </div>

      <div className='loginContainer'>
        <h2>Login</h2>
        <form onSubmit={handleLogin} className='loginForm'>
          <div className='formGroup'>
            <label>Email:</label>
            <input 
              type='email' 
              value={email} 
              onChange={handleEmailChange} 
              required 
            />
          </div>
          <div className='formGroup'>
            <label>Password:</label>
            <input 
              type='password' 
              value={password} 
              onChange={handlePasswordChange} 
              required 
            />
          </div>
          <button type='submit' className='loginButton'>Login</button>
        </form>
        <div className='googleLogin'>
         
        </div>
      </div>
    </div>
  );
}

export default Login;
