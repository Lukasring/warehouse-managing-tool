import React from "react";
import styles from "./UserInputForm.module.css";
const UserInputForm = (props) => {
  console.log(styles);
  return (
    <form className={styles.Form}>
      <label className={styles.Label}>Enter Product Properties</label>
      <input className={styles.Input} type="text" placeholder="NAME" />
      <input className={styles.Input} type="text" placeholder="EAN" />
      <input className={styles.Input} type="text" placeholder="TYPE" />
      <input className={styles.Input} type="text" placeholder="WEIGHT" />
      <input className={styles.Input} type="text" placeholder="COLOR" />
      <input
        className={styles.SubmitButton}
        type="submit"
        value="Add Product"
      />
    </form>
  );
};

export default UserInputForm;
