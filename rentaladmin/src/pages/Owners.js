import React, { useState } from "react";
import "../styles/Owners.css";
import {url} from "../assets/assets";
import upload from "../assets/upload_area.png";

function Owners() {
  const [image, setImage] = useState(null);
  const [ownerName, setOwnerName] = useState("");
  const [ownerMobile, setOwnerMobile] = useState("");
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");



const addOwner=async(e)=>{
e.preventDefault();
const formData = new FormData();
    formData.append('image', image);
    formData.append('ownerName', ownerName);
    formData.append('ownerMobile', ownerMobile);
    formData.append('productName', productName);
    formData.append('category', category);
    formData.append('description', description);
    formData.append('price',Number( price));
try{
    //console.warn("ownername,ownermobile,category",ownerName,ownerMobile,category);
let response= await fetch(`${url}/owners`,{
    method:"POST",
    body:formData,
})
let data= await response.json();
console.log(data.success)
if(data.success)
{
alert("data added")
}
else {
    alert("data added");
}
}
catch(error){
console.warn("error",error);
}
}

  return (
    <div className="addOwners">
      <form className="flex-col" onSubmit={addOwner}>
        <div className="add-img-upload flex-col">
          <p>Owner Photo</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image):upload} alt="Not Available" />
          </label>
          <input type="file" name="image" id="image" onChange={(e)=>setImage(e.target.files[0])} hidden required />
        </div>

        <div className="add-owner-name flex-col">
          <p>Owner Name</p>
          <input
            type="text"
            name="ownerName"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            placeholder="Owner Name"
            required
          />
        </div>

        <div className="add-owner-number flex-col">
          <p>Mobile Number</p>
          <input
            type="text"
            name="ownerMobile"
            value={ownerMobile}
            onChange={(e) => setOwnerMobile(e.target.value)}
            placeholder="Owner Mobile"
            required
          />
        </div>

        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input
            type="text"
            name="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
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

export default Owners;
