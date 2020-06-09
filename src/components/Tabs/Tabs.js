import React, { useState } from "react";
import styles from "./Tabs.module.css";

const Tabs = (props) => {
  const [active, setActive] = useState(props.types[0]);
  return (
    <div className={styles.Container}>
      <div className={styles.TabGroup}>
        {props.types.map((type) => (
          <button
            className={`${styles.Tab} ${active === type ? styles.Active : ""}`}
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <div className={styles.TabContent}>{props.contents[active]}</div>
    </div>
  );
};

export default Tabs;
