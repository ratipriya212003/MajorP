import React, { useState } from "react";
import "../styles/Add.css";
import upload from "../assets/upload_area.png";

function Add() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const addProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image',image);
    formData.append('name', name);
    formData.append('description',description);
    formData.append('category',category);
    formData.append('price',Number(price));

    try {
      let responseData = await fetch("http://localhost:5000/addproduct", {
        method: "POST",
        body: formData,
      });

      // if (!responseData.ok) {
      //   throw new Error("Failed to add product");
      // }

      let data = await responseData.json();
      if (data.success) {
        alert("Product added successfully");
      } else {
        alert("Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product. Please try again later.");
    }
  };

  return (
    <div className="addproduct">
      <form className="flex-col" onSubmit={addProduct}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : upload}
              alt="Not Available"
            />
          </label>
          <input
            onChange={imageHandler}
            type="file"
            name="image"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Product Name"
            required
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description of the product"
            rows="6"
            required
          />
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Scooty">Scooty</option>
              <option value="Bike">Bike</option>
              <option value="Electric">Electric</option>
              <option value="5-Seater">5-seater</option>
              <option value="7-Seater">7-seater</option>
              <option value="Bullet">Bullet</option>
              <option value="Manual">Manual</option>
              <option value="Automatic">Automatic</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="650"
              required
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
}

export default Add;

