import React, { useState } from 'react'
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import logo from '../../assets/logo.png'
import { CgMenuGridO } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  
  const handleLogin=()=>{
    navigate('/login')
  }

  const [active,setActive]=useState('navBarMenu')
  const showNavBar = ()=>{
    setActive('navBarMenu  showNavBar')
  }

  const removeNavBar = ()=>{
    setActive('navBarMenu  removeNavBar')
  }


  const [noBg,addBg]=useState('navBarTwo')
  const addBgColor = ()=>{
      if(window.scrollY >=10){
        addBg('navBarTwo  navbar_With_Bg')
      }else{
        addBg('navBarTwo')
      }
  }
window.addEventListener('scroll',addBgColor)
 

  return (
    <div className='navBar flex'>
      <div className="navBarOne flex">
        <div>
        <SiConsul className='icon'/>
        </div>

        <div className='none flex'>
              <li className="flex"><BsPhoneVibrateFill className='icon' /> Support</li>
              <li className="flex"> <AiOutlineGlobal className='icon' /> Languages</li>
        </div>

        <div className="atb flex">
          <span>Sign Up</span>
          <span onClick={handleLogin}>Log In</span>
        </div>
      </div>

      <div className={noBg}>
        <div className="logoDiv">
          <img src={logo}  className="logo" />
        </div>

        <div className={active}>
          <ul className="menu flex">
            <li onClick={removeNavBar} className="listItem">Home</li>
            <li onClick={removeNavBar} className="listItem">About</li>
            <li onClick={removeNavBar} className="listItem">Offers</li>
            <li onClick={removeNavBar} className="listItem">Seats</li>
            <li onClick={removeNavBar} className="listItem">Destination</li>
          </ul>

          <button onClick={removeNavBar} className='btn flex btnOne'>
              Contact
          </button>
        </div>

        <button className='btn flex btnTwo'>
              Contact
          </button>

          <div onClick={showNavBar} className='toggleIcon'>
          <CgMenuGridO  className='icon'/>
          </div>
      </div>
    </div>
  )
}

export default Navbar