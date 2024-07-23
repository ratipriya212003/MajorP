import React, { createContext, useEffect, useState } from 'react';
import { menu_list } from '../assets/assets';

export const StoreContext = createContext(null);

export function StoreContextProvider(props) {
  const [cartItems, setCartItems] = useState({});
  const [rental_list,setRentalList] =useState([]);
  const [owners,setOwners]=useState([]);

const url="https://easydrive212003.vercel.app/";


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
     try {
      const response = await fetch('https://easydrive212003.vercel.app/api/Rental/products', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Correct placement of credentials
      });
      const data = await response.json();
      setRentalList(data);
    } catch (error) {
      console.error('Error fetching rental list:', error);
    }
  };
  }
  useEffect(()=>{
    fetchRentalList();
  },[])
  
  const fetchOwnerList=async()=>{
     try {
      const response = await fetch('https://easydrive212003.vercel.app/api/Rental/owners', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Correct placement of credentials
      });
      const data = await response.json();
      console.log("Fetched owner:", data);
      setOwners(data);
    } catch (error) {
      console.error('Error fetching owner list:', error);
    }
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



