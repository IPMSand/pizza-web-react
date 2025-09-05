import React from 'react'
import Logo from '../assets/pi.avif';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div>
        <img src={Logo} alt='Logo here' />
    </div>
  )
}

export default Navbar