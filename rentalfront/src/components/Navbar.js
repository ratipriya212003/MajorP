import React, { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/logomain1.png";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";

function Navbar({ setShowLogin }) {
  //const [menu,setMenu]=useState("home")
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="Not Avail" className="logo" />
      <ul className="navbar-menu">
        <Link activeClass="active" to="frontPage">
          Home
        </Link>
        <Link activeClass="active" to="food-display">
          Rentals
        </Link>
        <Link to="aboutPage"> About </Link>
        <Link to="footer"> Contact </Link>
        <Link to="help"> Help </Link>
      </ul>
      <div className="navbar-right">
        <Link to="listVehicles" className="navbar-listvehicle-icon">
          <div className="nav_icon">
            <i class="bx bxs-add-to-queue"></i>
          </div>
        </Link>
        <RouterLink to="/cart" className="navbar-search-icon">
          <div className="nav_icon">
            <i class="bx bxs-car"></i>
          </div>
        </RouterLink>
      
          <button onClick={() => setShowLogin(true)}>Sign In</button>
      
      </div>
      <div className="mobMenu">
        <i
          class="bx bx-list-ul"
          style={{ color: "#e1700e", fontSize:"2rem"}}
          alt="Not Avail"
          onClick={() => setShowMenu(!showMenu)}
        ></i>
      </div>
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="food-display"
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Rental
        </Link>
        <Link
          activeClass="active"
          to="aboutPage"
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="footer"
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
        <Link
          activeClass="active"
          to="help"
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Help
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

