import React, { createContext, useEffect, useState } from 'react';
import { menu_list } from '../assets/assets';

export const StoreContext = createContext(null);

export function StoreContextProvider(props) {
  const [cartItems, setCartItems] = useState({});
  const [rental_list,setRentalList] =useState([]);
  const [owners,setOwners]=useState([]);

const url="https://easydrivebackend.onrender.com";


  const addToCart = (itemId) => {
    if(!cartItems[itemId]){
      setCartItems({
       
        [itemId]: 1
      });
    }
    else{
      setCartItems((prev) => ({
        ...prev,
        [itemId]:prev[itemId]+ 1
      }))
    }

  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,[itemId]:0}));
  };

  useEffect(()=>{
    console.log(cartItems);
  },[cartItems])


  const fetchRentalList=async()=>{
    const response=await fetch(`${url}/api/Rental/products`);
    const data=await response.json();
    setRentalList(data)
  }
  useEffect(()=>{
    fetchRentalList();
  },[])
  
  const fetchOwnerList=async()=>{
    const response=await fetch(`${url}/api/Rental/owners`);
    const data=await response.json();
    console.log("fetched owner",data);
    setOwners(data);
  }
useEffect(()=>{
  fetchOwnerList();
},[])

  const contextValue = {
    menu_list,
    rental_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    fetchOwnerList,
    owners,
    url
  };



  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
}

export default StoreContextProvider;



