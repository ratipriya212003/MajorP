import React from 'react';
import "../styles/ListVehicle.css";


function ListVehicle() {



  return (
    <div className='listVehicles' id='listVehicles'>
      <h1>Be a part of EasyDrive</h1>
      <p className='listVehicle-text'>List your second-hand vehicle and earn extra income...</p>
      <div className='listVehicle'>
        <div className='notify_icon'><i className='bx bxs-bell-ring'></i></div>
        <h3 className='notification'>List Your Vehicle</h3>
        <div className='notify_heading'>
          <h1>Want to list your unused two-wheeler or four-wheeler and earn extra income</h1>
          <p>List your motorcycles, scooters, and cars in India's fastest-growing mobility platform. Just connect to turn them into earning members of your family.</p>
        </div>
        <div className='notify_button'>
        <button ><a href="https://wa.me/917015985174" target="_blank" rel="noopener noreferrer">WhatsApp to Register</a></button>
        </div>

      </div>
    </div>
  );
}

export default ListVehicle;
