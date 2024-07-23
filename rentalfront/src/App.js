import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./components/Login";
import PrivateComponent from "./components/PrivateComponent";
import { Routes, Route,Navigate } from "react-router-dom";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <Login  setShowLogin={setShowLogin} /> : <></>}
      <div className="App">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route element={<PrivateComponent setShowLogin={setShowLogin}/>} >
          <Route path="/cart" element={<Cart />} />
          </Route>

        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
