import React from 'react'
import "../styles/Navbar.css";
import logo from "../assets/logomain.png";
import profile from "../assets/profile_image.png";

function Navbar() {
  return (
    <div className='navbar'>
        <img className='logo' src={logo} alt='Not Avail'/>
        <h3>Admin Page</h3>
        <div className='profileIcon'>
        <i class='bx bxs-user-account' style={{color:'#e27208'}}  ></i>
        </div>
    </div>
  )
}

export default Navbar