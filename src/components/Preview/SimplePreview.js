import React from "react";
import styles from "./Preview.module.css";

const SimplePreview = (props) => {
  return (
    <div
      className={`${styles.PreviewCard} ${
        props.quantity === "0" ? styles.Empty : ""
      }`}
    >
      <h1 className={styles.Name}>{props.name}</h1>
      <h2 className={styles.Type}>{props.type}</h2>
      <p>Color: {props.color}</p>
      <p>Weight: {props.weight}g</p>
      <p>EAN: {props.ean}</p>
      <p>Price: {props.price}€</p>
      <p>Quantity: {props.quantity}</p>
    </div>
  );
};

export default SimplePreview;
