import React from "react";
import styles from "./Preview.module.css";
import { useRouteMatch } from "react-router";

const Preview = (props) => {
  let match = useRouteMatch();
  let index = match.params.id;
  console.log(index);

  let previewCard = (
    <div>
      <p>Product does not exist!</p>
    </div>
  );

  if (props.products[index]) {
    return (previewCard = (
      <div className={styles.Container}>
        <div className={styles.PreviewCard}>
          <h1 className={styles.Name}>{props.products[index].name}</h1>
          <h2 className={styles.Type}>{props.products[index].type}</h2>
          <p>Color: {props.products[index].color}</p>
          <p>Weight: {props.products[index].weight}g</p>
          <p>EAN: {props.products[index].ean}</p>
        </div>
      </div>
    ));
  }

  return previewCard;
};

export default Preview;
