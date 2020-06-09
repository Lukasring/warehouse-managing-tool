import React from "react";
import styles from "./Preview.module.css";
import SimplePreview from "./SimplePreview";

const PreviewList = (props) => {
  const activeProducts = props.products.filter((product) => {
    return product.isActive === true;
  });

  let activeProductList = (
    <p className={styles.Message}>There are no active products!</p>
  );

  if (activeProducts.length > 0) {
    activeProductList = activeProducts.map((product, index) => {
      return (
        <SimplePreview
          name={product.name}
          ean={product.ean}
          type={product.type}
          weight={product.weight}
          color={product.color}
          price={product.price}
          quantity={product.quantity}
          key={index}
        ></SimplePreview>
      );
    });
  }

  return <div className={styles.PreviewList}>{activeProductList}</div>;
};

export default PreviewList;
