import React from "react";
import style from "./modal.module.css";

export default function Modal() {
  return (
    <div id="myModal" className={style.modal}>
      <div className={style.modalContent}>
        <div className={style.modalHeader}>
          <span id="spannedText" className={style.close}>
            &times;
          </span>
          <h2>
            How <strong>website</strong> helps to grow business?
          </h2>
        </div>
        <div className={style.modalBody}>
          <li className={style.textInModal}>Helps to find customers</li>
          <li className={style.textInModal}>Builds credibility</li>
          <li className={style.textInModal}>Get more customer</li>
          <li className={style.textInModal}>Decrease time wastage</li>
          <li className={style.textInModal}>Gain compitative advantage</li>
          <div className={style.needWebsite}>
            Do you need a website? &rarr;{" "}
            <a href="tel:+251947053537"> +251 947 053 537</a>
          </div>
        </div>
      </div>
    </div>
  );
}
