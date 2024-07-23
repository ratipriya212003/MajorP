import React, { useState } from "react";
import { Link } from "react-scroll";
import Header from "../components/Header";
import ExploreMenu from "../components/ExploreMenu";
import RentalDisplay from "../components/RentalDisplay";
import About from "../components/About";
import ListVehicle from "../components/ListVehicle";
import Help from "../components/Help";

//import "../styles/Home.css";
function Home() {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <RentalDisplay category={category} />
      <About />
      <ListVehicle />
      <Help />
    </div>
  );
}

export default Home;
