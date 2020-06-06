import React from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={styles.MainNav}>
      <ul className={styles.NavItems}>
        <Link className={styles.Link} to="/products">
          <li className={styles.NavItem}>Product List</li>
        </Link>
        <Link className={styles.Link} to="/products/preview">
          <li className={styles.NavItem}>Preview</li>
        </Link>
        <Link className={styles.Link} to="/products/create">
          <li className={styles.NavNewProduct}>New Product</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
