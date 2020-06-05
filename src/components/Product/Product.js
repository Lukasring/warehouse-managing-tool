import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

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
          <input
            type="checkbox"
            checked={props.active}
            onChange={props.isActive}
          ></input>
        </li>
        <li>
          <Link to={`/products/preview/${props.index}`}>
            <button>View</button>
          </Link>
        </li>
        <li>
          <button>Edit</button>
        </li>
        <li>
          <button onClick={props.removeItem}>Delete</button>
        </li>
      </ul>
    </div>
  );
};

export default Product;
