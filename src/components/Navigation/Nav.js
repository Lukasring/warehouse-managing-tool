import React from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.MainNav}>
      <ul className={styles.NavItems}>
        <li className={styles.NavItem}>Product List</li>
        <li className={styles.NavNewProduct}>New Product</li>
      </ul>
    </nav>
  );
};

export default Nav;
