import React from "react";
import "../styles/Sidebar.css";
import addIcon from "../assets/add_icon.png";
import { NavLink } from "react-router-dom";
import orderIcon from "../assets/order_icon.png";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/addproduct" className="sidebar-option">
          <img src={addIcon} alt="Not Avail" />
          <p>Add Items</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-option">
          <img src={addIcon} alt="Not Avail" />
          <p>Product List</p>
        </NavLink>
        <NavLink to="/help" className="sidebar-option">
          <img src={orderIcon} alt="Not Avail" />
          <p>Help</p>
        </NavLink>
        <NavLink to="/owners" className="sidebar-option">
          <img src={orderIcon} alt="Not Avail" />
          <p>Owners</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
