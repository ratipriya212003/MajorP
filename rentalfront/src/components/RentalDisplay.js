import React, { useContext } from "react";
import "../styles/RentalDisplay.css";
import { StoreContext } from "../Context/StoreContext";
import RentalItem from "./RentalItem";

function RentalDisplay({ category }) {
  const { rental_list,cartItems } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top rentals for you</h2>
      <div className="food-display-list">
        {rental_list.map((item,index)=>{
          const isInCart = cartItems[item._id] > 0;
        if(category==="All" || category===item.category){
          return <RentalItem 
          key={item._id}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                  />
        }
     
        })}
      </div>
    </div> 
    
  );
}

export default RentalDisplay;


