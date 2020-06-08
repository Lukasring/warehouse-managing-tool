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
      <div className={styles.Details}>
        <div className={styles.DetailsPair}>
          <p>Color:</p>
          <p>{props.color}</p>
        </div>
        <div className={styles.DetailsPair}>
          <p>Weight:</p>
          <p>{props.weight}g</p>
        </div>
        <div className={styles.DetailsPair}>
          <p>EAN:</p>
          <p>{props.ean}</p>
        </div>
        <div className={styles.DetailsPair}>
          <p>Price:</p>
          <p>{props.price}€</p>
        </div>
        <div className={styles.DetailsPair}>
          <p>Quantity:</p>
          <p>{props.quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default SimplePreview;
