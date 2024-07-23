import React from 'react'
import {Navigate,Outlet} from "react-router-dom";

function PrivateComponent({setShowLogin}) {
const auth=localStorage.getItem("user")

if (!auth) {
  alert('Login or Signup is required to access the cart.');
  setShowLogin(true);
  return <Navigate to="/" />;
}

return <Outlet />;
}


export default PrivateComponent