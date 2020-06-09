import React from "react";
import styles from "./UserInputForm.module.css";

const Input = (props) => {
  return (
    <div className={styles.Input}>
      <label className={styles.InputLabel}>
        {`${props.name.charAt(0).toUpperCase() + props.name.slice(1)}:`}
      </label>
      <input
        className={styles.InputField}
        type={props.type}
        placeholder={props.name.toUpperCase()}
        name={props.name}
        defaultValue={props.product ? props.product[props.name] : null}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default Input;
