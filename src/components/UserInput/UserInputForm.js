import React, { useState } from "react";
import styles from "./UserInputForm.module.css";
import { Redirect, useRouteMatch } from "react-router-dom";
const UserInputForm = (props) => {
  const [addedProduct, setAddedProducts] = useState(
    props.products ? props.products[props.index] : []
  );

  let match = useRouteMatch();
  let index = match.params.id;

  const [redirect, setRedirect] = useState(false);
  const handleChange = (event) => {
    setAddedProducts({
      ...addedProduct,
      [event.target.name]: event.target.value,
      id: Math.random().toString(36).substr(2, 9),
      isActive: false,
    });
  };

  const formInputValidation = (addedProduct) => {
    let isValid = false;
    const noOfRequiredKeys = 9; //simple object key validation for now
    const productValues = Object.values(addedProduct);
    let hasRequiredKeys = false;
    let keysHaveValues = false;

    noOfRequiredKeys === Object.keys(productValues).length
      ? (hasRequiredKeys = true)
      : (hasRequiredKeys = false);

    console.log(Object.keys(productValues).length);

    function noneEmpty(arr) {
      // for (let i = 0; i < arr.length; i++) {
      //   arr[i] = arr[i].trim();
      // }
      return arr.indexOf("") === -1;
    }

    keysHaveValues = noneEmpty(productValues);

    if (hasRequiredKeys && keysHaveValues) {
      isValid = true;
    } else isValid = false;

    console.log("keys " + hasRequiredKeys);
    console.log("values " + keysHaveValues);
    console.log("is valid " + isValid);
    return isValid;
  };
  console.log("form validation " + formInputValidation(addedProduct));

  return (
    <form className={styles.Form} id="product-submit-form">
      {redirect ? <Redirect to="/products"></Redirect> : null}
      <label className={styles.Label}>Enter Product Properties</label>
      <input
        className={styles.Input}
        type="text"
        placeholder="NAME"
        name="name"
        defaultValue={props.products ? props.products[props.index].name : null}
        onChange={handleChange}
      />
      <input
        className={styles.Input}
        type="text"
        placeholder="EAN"
        name="ean"
        defaultValue={props.products ? props.products[props.index].ean : null}
        onChange={handleChange}
      />
      <input
        className={styles.Input}
        type="text"
        placeholder="TYPE"
        name="type"
        defaultValue={props.products ? props.products[props.index].type : null}
        onChange={handleChange}
      />
      <input
        className={styles.Input}
        type="text"
        placeholder="WEIGHT"
        name="weight"
        defaultValue={
          props.products ? props.products[props.index].weight : null
        }
        onChange={handleChange}
      />
      <input
        className={styles.Input}
        type="text"
        placeholder="COLOR"
        name="color"
        defaultValue={props.products ? props.products[props.index].color : null}
        onChange={handleChange}
      />
      <input
        className={styles.Input}
        type="text"
        placeholder="PRICE"
        name="price"
        defaultValue={props.products ? props.products[props.index].price : null}
        onChange={handleChange}
      />
      <input
        className={styles.Input}
        type="text"
        placeholder="QUANTITY"
        name="quantity"
        defaultValue={
          props.products ? props.products[props.index].quantity : null
        }
        onChange={handleChange}
      />
      <input
        className={styles.SubmitButton}
        type="submit"
        value={props.products ? "Save" : "Add Product"}
        onClick={(event) => {
          if (formInputValidation(addedProduct)) {
            props.submitHandler(event, addedProduct, index);
            document.getElementById("product-submit-form").reset();
            setAddedProducts([]);
            if (props.products) {
              setRedirect(true);
            }
          } else {
            event.preventDefault();
          }
        }}
      />
    </form>
  );
};

export default UserInputForm;
