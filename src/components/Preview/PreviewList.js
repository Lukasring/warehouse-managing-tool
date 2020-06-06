import React from "react";
import styles from "./Preview.module.css";

const PreviewList = (props) => {
  const activeProducts = props.products.filter((product) => {
    return product.isActive === true;
  });
  console.log(activeProducts);
  return activeProducts.map((product, index) => {
    return (
      <div className={styles.Container}>
        <div className={styles.PreviewCard}>
          <h1 className={styles.Name}>{product.name}</h1>
          <h2 className={styles.Type}>{product.type}</h2>
          <p>Color: {product.color}</p>
          <p>Weight: {product.weight}g</p>
          <p>EAN: {product.ean}</p>
        </div>
      </div>
    );
  });
};

export default PreviewList;
