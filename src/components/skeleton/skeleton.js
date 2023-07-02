import React from "react";
import style from "./skeleton.module.css";

export default function skeleton(props) {
  return (
    <div
      className={style.skeletonLoader}
      style={{
        height: props.height ? props.height : "",
        width: props.width ? props.width : "",
        borderRadius: props.radius,
      }}
      {...props}
    ></div>
  );
}
