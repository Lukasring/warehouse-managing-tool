import React from "react";
import Tabs from "../Tabs/Tabs";
import SimplePreview from "./SimplePreview";
import ChangeLogChart from "../ChangeLogChart/ChangeLogChart";
// import styles from "./Preview.module.css";
import { useRouteMatch } from "react-router";

const DetailedPreview = (props) => {
  let match = useRouteMatch();
  let index = match.params.id;

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

  const priceHistoryChart = (
    <ChangeLogChart
      title="Price History"
      id={props.products[index].id}
      change="price"
    />
  );

  const quantityHistoryChart = (
    <ChangeLogChart
      title="Quantity History"
      id={props.products[index].id}
      change="quantity"
    />
  );

  const tabContents = {
    Details: detailsContent,
    "Price History": priceHistoryChart,
    "Quantity History": quantityHistoryChart,
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
