import React, { useState } from "react";
import styles from "./button.module.css";
import { IconArrowRight } from "@tabler/icons-react";

export default function Button({ size, name }) {
  const [hover, setHover] = useState(false);
  return (
    <>
      <button
        className={styles.button}
        style={{
          fontSize: size ? size : 30,
          backgroundColor: hover ? "var(--button-color)" : "transparent",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {name} &nbsp;
        <IconArrowRight
          className={styles.arrowRight}
          size={size ? size - 4 : 34}
        />
      </button>
    </>
  );
}
