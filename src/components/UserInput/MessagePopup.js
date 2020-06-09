import React from "react";
import styles from "./UserInputForm.module.css";

const MessagePopup = (props) => {
  return (
    <div className={styles.Backdrop}>
      <div className={styles.Popup}>
        <h1>{props.children}</h1>
        <button onClick={props.confirm}>OK</button>
      </div>
    </div>
  );
};

export default MessagePopup;
