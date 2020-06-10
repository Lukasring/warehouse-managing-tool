import React from "react";
import UserInputForm from "../UserInput/UserInputForm";
import { useRouteMatch } from "react-router";

const EditProduct = (props) => {
  let match = useRouteMatch();
  let index = match.params.id;
  const editWindow = (
    <UserInputForm
      submitHandler={props.saveEditHandler}
      products={props.products}
      namesText={props.namesText}
      namesNumbers={props.namesNumbers}
      index={index}
    ></UserInputForm>
  );
  return editWindow;
};

export default EditProduct;
