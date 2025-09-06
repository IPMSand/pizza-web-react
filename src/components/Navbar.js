import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/pi.avif';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div>
       <div className='leftNav'>
         <img src={Logo} alt='Logo here' />
       </div>

       <div className='rightNav'>
          <Link to="/">Home </Link>
          <Link to="/menu">Menu </Link>
       </div>


    </div>
  )
}

export default Navbar