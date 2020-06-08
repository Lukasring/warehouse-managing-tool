import React from "react";
import styles from "./Product/Product.module.css";

const ProductsHeader = (props) => {
  return (
    <div className={`${styles.ProductsHeader}`}>
      <ul>
        <li>{props.names[0]}</li>
        <li>{props.names[1]}</li>
        <li>{props.names[2]}</li>
        <li>{props.names[3]}</li>
        <li>{props.names[4]}</li>
        <li>{props.names[5]}</li>
        <li>{props.names[6]}</li>
        <li>{props.names[7]}</li>
      </ul>
    </div>
  );
};

export default ProductsHeader;
