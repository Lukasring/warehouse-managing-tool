import React, { useState } from "react";
import styles from "./UserInputForm.module.css";
import { Redirect, useRouteMatch } from "react-router-dom";
import Input from "./Input";
import MessagePopup from "./MessagePopup";

const UserInputForm = (props) => {
  const [addedProduct, setAddedProducts] = useState(
    props.products ? props.products[props.index] : []
  );

  let match = useRouteMatch();
  let index = match.params.id;

  const [redirect, setRedirect] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (event) => {
    setAddedProducts({
      ...addedProduct,
      [event.target.name]: event.target.value,
      id: props.products
        ? props.products[props.index].id
        : Math.random().toString(36).substr(2, 9),
      isActive: false,
    });
  };

  const formInputValidation = (addedProduct) => {
    let isValid = false;
    let hasRequiredKeys = false;
    let keysHaveValues = false;
    let noOfRequiredKeys;
    //simple object key validation for now
    if (props.namesText && !props.namesNumbers) {
      noOfRequiredKeys = props.namesText.length + 2;
    } else if (!props.namesText && props.namesNumbers) {
      noOfRequiredKeys = props.namesNumbers.length + 2;
    } else if (props.namesText && props.namesNumbers) {
      noOfRequiredKeys = props.namesText.length + props.namesNumbers.length + 2;
    }

    const productValues = Object.values(addedProduct);

    noOfRequiredKeys === Object.keys(productValues).length
      ? (hasRequiredKeys = true)
      : (hasRequiredKeys = false);

    function noneEmpty(arr) {
      return arr.indexOf("") === -1;
    }

    keysHaveValues = noneEmpty(productValues);

    if (hasRequiredKeys && keysHaveValues) {
      isValid = true;
    } else isValid = false;
    return isValid;
  };

  const message = <p>All fields must be filled!</p>;

  let textInputList;
  let numberInputList;
  if (props.namesText) {
    textInputList = props.namesText.map((name) => {
      return (
        <Input
          key={name}
          type="text"
          name={name}
          handleChange={handleChange}
          product={props.products ? props.products[index] : null}
        />
      );
    });
  }

  if (props.namesNumbers) {
    numberInputList = props.namesNumbers.map((name) => {
      return (
        <Input
          key={name}
          type="number"
          name={name}
          handleChange={handleChange}
          product={props.products ? props.products[index] : null}
        />
      );
    });
  }

  return (
    <form className={styles.Form} id="product-submit-form">
      {redirect ? <Redirect to="/products"></Redirect> : null}
      {showPopup ? (
        <MessagePopup confirm={() => setShowPopup(false)}>
          Product Added!
        </MessagePopup>
      ) : null}
      <label className={styles.Label}>{props.formTitle}</label>
      {textInputList}
      {numberInputList}
      <div className={styles.Message}>{showMessage ? message : null}</div>
      <div className={styles.Buttons}>
        <input
          className={styles.SubmitBtn}
          type="submit"
          value={props.products ? "Save" : "Add Product"}
          onClick={(event) => {
            event.preventDefault();
            if (formInputValidation(addedProduct)) {
              props.submitHandler(event, addedProduct, index);
              document.getElementById("product-submit-form").reset();
              setAddedProducts([]);
              setShowMessage(false);
              setShowPopup(true);
              if (props.products) {
                setRedirect(true);
              }
            } else {
              setShowMessage(true);
            }
          }}
        />
        <button
          className={styles.CancelBtn}
          onClick={(event) => {
            event.preventDefault();
            document.getElementById("product-submit-form").reset();
            setAddedProducts([]);
            if (props.products) {
              setRedirect(true);
            }
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UserInputForm;
