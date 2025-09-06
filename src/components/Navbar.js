import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';

import Logo from '../assets/pi.avif';
import '../styles/Navbar.css';

function Navbar() {

  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () =>{
    setOpenLinks(!openLinks);
  }


  return (
    <div>
      
      <div className='navbar'>

         <div className='leftNav' id={openLinks? "open":"close"}>
           <img src={Logo} alt='Logo here' />
           <div className='hiddenLinks'>
              <Link to="/">Home </Link>
              <Link to="/menu">Menu </Link>
              <Link to="/about">About </Link>
              <Link to="/contact">Contact </Link>
            </div>
        </div>

       <div className='rightNav'>
          <Link to="/">Home </Link>
          <Link to="/menu">Menu </Link>
          <Link to="/about">About </Link>
          <Link to="/contact">Contact </Link>

          <button onClick={toggleNavbar}><ReorderIcon /></button>
            
         
       </div>

      </div>

    </div>
  )
}

export default Navbar