import React, { useState } from "react";
import styles from "./UserInputForm.module.css";
const UserInputForm = (props) => {
  const [addedProduct, setAddedProducts] = useState([
    // { name: "", ean: "", type: "", weight: "", color: "" }
  ]);

  const handleChange = (event) => {
    setAddedProducts({
      ...addedProduct,
      [event.target.name]: event.target.value,
    });
  };

  const formInputValidation = (addedProduct) => {
    let isValid = false;
    const noOfRequiredKeys = 5; //simple object key validation for now
    const productValues = Object.values(addedProduct);
    let hasRequiredKeys = false;
    let keysHaveValues = false;

    noOfRequiredKeys === Object.keys(productValues).length
      ? (hasRequiredKeys = true)
      : (hasRequiredKeys = false);

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
      <label className={styles.Label}>Enter Product Properties</label>
      <input
        className={styles.Input}
        type="text"
        placeholder="NAME"
        name="name"
        onChange={handleChange}
      />
      <input
        className={styles.Input}
        type="text"
        placeholder="EAN"
        name="ean"
        onChange={handleChange}
      />
      <input
        className={styles.Input}
        type="text"
        placeholder="TYPE"
        name="type"
        onChange={handleChange}
      />
      <input
        className={styles.Input}
        type="text"
        placeholder="WEIGHT"
        name="weight"
        onChange={handleChange}
      />
      <input
        className={styles.Input}
        type="text"
        placeholder="COLOR"
        name="color"
        onChange={handleChange}
      />
      <input
        className={styles.SubmitButton}
        type="submit"
        value="Add Product"
        onClick={(event) => {
          if (formInputValidation(addedProduct)) {
            props.submitHandler(event, addedProduct);
            document.getElementById("product-submit-form").reset();
            setAddedProducts([]);
          } else {
            event.preventDefault();
          }
        }}
      />
    </form>
  );
};

export default UserInputForm;
