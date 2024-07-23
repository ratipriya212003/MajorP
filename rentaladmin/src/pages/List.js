import React, { useState, useEffect } from "react";
import "../styles/List.css";

import Cross_icon from "../assets/cross_icon.png";
import {url} from "../assets/assets";

function List() {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async() => {
    let result= await fetch(`${url}/list`);
    result= await result.json();
    setAllProducts(result);
  };

  useEffect(() => {
    fetchInfo();
  }, [])

  const removeProduct = async (id) => {
   let result= await fetch(`${url}/list/${id}`, {
      method: "Delete",
    });
    result=await result.json()
    if(result)
      {
        fetchInfo();
        alert ("record deleted")
      }
      else{
        alert("record not deleted");
      }
  };

  return (
    <div className="list-product">
      <h1>ALL Products List</h1>
      <div className="listproduct-format-main">
        <p>S.No</p>
        <p>Products</p>
        <p>Name</p>
        <p>Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product, index) => {
          return (
            <>
              <div key={product._id} className="listproduct-format-main listproduct">
                <p>{index+1}</p>
                <img
                  src={`${url}/images/`+product.image}
                  alt="Not Avail"
                  className="listproduct-product-icon"
                />
                <p>{product.name}</p>
                <p>${product.price}</p>
                <p>{product.category}</p>
                
                <img
                  onClick={() => {
                    removeProduct(product._id);
                  }}
                  src={Cross_icon}
                  className="listproduct-remove-icon"
                  alt="Not Avail"
                />
              </div>
              <hr />
            </>
        );
        })}
      </div>
    </div>
  );
}

export default List;
