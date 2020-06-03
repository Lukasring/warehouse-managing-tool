import React from "react";
import "./Product.css";

const Product = (props) => {
  return (
    <div className="product-item">
      <ul>
        <li>{props.name}</li>
        <li>{props.ean}</li>
        <li>{props.type}</li>
        <li>{props.weight}</li>
        <li>{props.color}</li>
        <li>
          <input type="checkbox"></input>
        </li>
        <li>
          <button>View</button>
        </li>
        <li>
          <button>Edit</button>
        </li>
        <li>
          <button>Delete</button>
        </li>
      </ul>
    </div>
  );
};

export default Product;