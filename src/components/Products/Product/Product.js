import React from "react";
import styles from "./Product.module.css";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <div className={styles.Product}>
      <ul>
        <li>{props.name}</li>
        <li>{props.ean}</li>
        <li>{props.type}</li>
        <li>{props.weight}</li>
        <li>{props.color}</li>
        <li>{props.price}</li>
        <li>{props.quantity}</li>
        <li>
          <input
            type="checkbox"
            checked={props.active}
            onChange={props.isActive}
          ></input>
        </li>
      </ul>
      <Link to={`/products/preview/${props.index}`}>
        <button className={styles.View}>View</button>
      </Link>
      <Link to={`/products/${props.index}/edit`}>
        <button className={styles.Edit}>Edit</button>
      </Link>
      <button className={styles.Delete} onClick={props.removeItem}>
        Delete
      </button>
    </div>
  );
};

export default Product;
