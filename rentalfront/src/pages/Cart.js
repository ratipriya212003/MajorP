import React, { useState, useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import { useNavigate } from "react-router-dom";
import emailjs from 'emailjs-com';
import "../styles/Cart.css";

function Cart() {
  const { cartItems, rental_list,owners, removeFromCart, url } =
    useContext(StoreContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  emailjs.init('ratipriya212003@gmail.com')

  const submitDetails = async (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Please fill out all fields.");
      return;
    }
  

    const formData={
      name:name,
      email:email,
      cartItems: rental_list
        .filter(item => cartItems[item._id] > 0)
        .map(item => ({
          category: item.category
        }))
    };

   
    let messageBody = `Hello ${name}, your cart details:\n`;
    formData.cartItems.forEach((cartItem) => {
      const ownersWithCategory = owners.filter(owner => owner.category === cartItem.category);
      if (ownersWithCategory.length > 0) {
        ownersWithCategory.forEach(owner => {
          messageBody += `Category: ${cartItem.category}, Owner: ${owner.ownerName}, WhatsApp: ${owner.ownerMobile}\n`;
        });
      } else {
        messageBody += `Category: ${cartItem.category} (No owner details found)\n`;
      }
    });

    try {
      const templateParams = {
        from_name: 'EasyDrive',
        to_name: name,
        to_email: email,
        message: messageBody,
      };

      const response = await emailjs.send('service_3l6mpom', 'template_siemhog', templateParams,'jC5OZ9h4BTFc9-Mfe');
      console.log('Email sent successfully:', response);

      alert('Check your mail!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again.');
    }
  };

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Rental Item</p>
          <p>Title</p>
          <p>Category</p>
          <p>Price</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {rental_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="Not Available" />
                  <p>{item.name}</p>
                  <p>{item.category}</p>
                  <p>{item.price}</p>
                  <p
                    className="cart-items-remove-icon"
                    onClick={() => removeFromCart(item._id)}
                  >
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="info">
        <form onSubmit={submitDetails}>
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) =>{ setName(e.target.value)}}
            required
            maxLength={50}
          />
          <br />
          <label>Your Email</label>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            required
           
          />

          <div className="cart-bottom">
            <button type="submit" >GET DETAILS</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cart;
