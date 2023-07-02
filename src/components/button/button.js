import React, { useState } from "react";
import styles from "./button.module.css";
import { IconArrowRight } from "@tabler/icons-react";

export default function Button(props) {
  const [hover, setHover] = useState(false);
  return (
    <>
      <button
        {...props}
        className={styles.button}
        style={{
          fontSize: props.size ?? 16,
          backgroundColor: props.bg,
          color: props.color,
          cursor: props.cursor ?? "pointer",
          padding: props.padding ?? "10px 30px",
          boxShadow: hover && `inset 1px  3px 90px var(--${props.plane})`,
          marginTop: props.mt ?? "",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {props.name}
        {props.icon && (
          <>
            &nbsp;
            <IconArrowRight
              className={styles.arrowRight}
              size={props.size ? props.size - 4 : 20}
            />
          </>
        )}
      </button>
    </>
  );
}
