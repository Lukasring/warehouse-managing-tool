import React, { useState } from "react";
import styles from "./UserInputForm.module.css";
const UserInputForm = (props) => {
  const [addedProducts, setAddedProducts] = useState([
    // { name: "", ean: "", type: "", weight: "", color: "" }
  ]);

  const handleChange = (event) => {
    setAddedProducts({
      ...addedProducts,
      [event.target.name]: event.target.value,
    });
  };

  // console.log(addedProducts);

  return (
    <form className={styles.Form}>
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
          props.submitHandler(event, addedProducts);
        }}
      />
    </form>
  );
};

export default UserInputForm;
