import React, { useContext } from 'react';
import "../styles/ExploreMenu.css";
import { StoreContext } from '../Context/StoreContext';

function ExploreMenu({ category, setCategory }) {
  const { menu_list } = useContext(StoreContext) || { menu_list: [] };

  return (
    <div className='explore-menu' id="explore-menu">
      <h1>Explore our Rentals</h1>
      <p className='explore-menu-text'>Choose from a diverse delectable array of Rentals. Our mission is to make yourroad trip a memorable one</p>
      <div className='explore-menu-list'>
        {menu_list && menu_list.map((item, index) => {
          return (
            <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='explore-menu-list-item'>
              <img src={item.menu_image} className={category === item.menu_name ? "active" : ""} alt="Not Avail" />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu;


