import React from "react";
import styles from "./Header.module.css";

const Header = (props) => {
  return <header className={styles.Header}>{props.headerText}</header>;
};

export default Header;
