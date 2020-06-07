import React from "react";
import Tabs from "../Tabs/Tabs";
import SimplePreview from "./SimplePreview";
// import styles from "./Preview.module.css";
import { useRouteMatch } from "react-router";

const DetailedPreview = (props) => {
  let match = useRouteMatch();
  let index = match.params.id;
  console.log(index);

  const types = ["Details", "Price History", "Quantity History"];

  const detailsContent = (
    <SimplePreview
      name={props.products[index].name}
      type={props.products[index].type}
      color={props.products[index].color}
      weight={props.products[index].weight}
      ean={props.products[index].ean}
      price={props.products[index].price}
      quantity={props.products[index].quantity}
    ></SimplePreview>
  );

  const tabContents = {
    Details: detailsContent,
    "Price History": "Price History",
    "Quantity History": "Quantity History",
  };

  let previewCard = (
    <div>
      <p>Product does not exist!</p>
    </div>
  );

  previewCard = <Tabs types={types} contents={tabContents}></Tabs>;

  return previewCard;
};

export default DetailedPreview;
