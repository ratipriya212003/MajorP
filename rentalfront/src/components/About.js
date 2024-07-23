import React from 'react';
import "../styles/About.css";
//import logo1 from "../assets/child-regular-24.png";
function About () {
  return (
    <div className='aboutPage' id='aboutPage'>
      <h1>Why Choose EasyDrive?</h1>
      <p className='facility-text'>We give you a list of options as to why choose EasyDrive...</p>
      <div className="facilities-container">
        <div className="facility-item">
       <div className='menu-icon'>
       <i class='bx bxs-offer'></i></div>
          <h3 className="facility-heading">Different Flexible Packages</h3>
          <p className="facility-description">Grab daily, weekly, fortnight and monthly packages at discounted rates</p>
        </div>

        <div className="facility-item">
        <div className='menu-icon'>
        <i class='bx bx-cycling'></i></div>
          <h3 className="facility-heading">Wide Range</h3>
          <p className="facility-description">Looking for a particular brand of vehicle? We probably got it.</p>
        </div>

        <div className="facility-item">
        <div className='menu-icon'>
        <i class='bx bxs-car-mechanic'></i></div>
          <h3 className="facility-heading">Highly Maintained Fleet</h3>
          <p className="facility-description">Get high quality and serviced vehicles</p>
        </div> 

        <div className="facility-item">
        <div className='menu-icon'>
        <i class='bx bxs-time-five'></i></div>
          <h3 className="facility-heading">24*7 At Service</h3>
          <p className="facility-description">Day or night, rent a vehicle</p>
        </div> 

        <div className="facility-item">
        <div className='menu-icon'>
        <i class='bx bxs-message-rounded-dots'></i></div>
          <h3 className="facility-heading">Ask Query Anytime</h3>
          <p className="facility-description">Flexibility to ask query anytime</p>
        </div> 

        <div className="facility-item">
        <div className='menu-icon'>
        <i class='bx bx-rupee'></i></div>
          <h3 className="facility-heading">Affordable Prices</h3>
          <p className="facility-description">We help you get the best prices for the rental vehicle under your budget</p>
        </div>

      </div>
    </div>
  );
}

export default About;
