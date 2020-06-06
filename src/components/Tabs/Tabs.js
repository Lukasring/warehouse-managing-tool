import React, { useState } from "react";
import styles from "./Tabs.module.css";

const Tabs = (props) => {
  const [active, setActive] = useState([props.types[0]]);

  return (
    <div>
      <div className={styles.TabGroup}>
        {props.types.map((type) => (
          <button
            className={styles.Tab}
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <p />
      {console.log(props.contents)}
      {props.contents[active]}
    </div>
  );
};

export default Tabs;
