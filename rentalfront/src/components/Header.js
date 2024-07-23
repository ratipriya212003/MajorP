import React from 'react'
import "../styles/Header.css";
import { Link } from "react-scroll";
function Header() {
  return (
    <div className='header' id='frontPage'>
    <div className='header-contents'>
        <h2>Book your road trip now !</h2>
       <p>Plan your Road trip with your friends and pick up the vehicle that suits your journey.....</p>
       <Link to="explore-menu">
        <button>View Rentals</button>
        </Link> 
    </div>
</div>

  )
}

export default Header;