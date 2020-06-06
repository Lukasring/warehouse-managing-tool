import React from "react";
import styles from "./Preview.module.css";

const SimplePreview = (props) => {
  return (
    <div className={styles.Container}>
      <div className={styles.PreviewCard}>
        <h1 className={styles.Name}>{props.name}</h1>
        <h2 className={styles.Type}>{props.type}</h2>
        <p>Color: {props.color}</p>
        <p>Weight: {props.weight}g</p>
        <p>EAN: {props.ean}</p>
        <p>Price: {props.price}€</p>
        <p>Quantity: {props.quantity}</p>
      </div>
    </div>
  );
};

export default SimplePreview;
