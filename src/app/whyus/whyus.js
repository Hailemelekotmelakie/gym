import React from "react";
import styles from "./whyus.module.css";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { IconHeart } from "@tabler/icons-react";

export default function Whyus() {
  return (
    <div className={styles.container}>
      <div className={styles.reasons}>SOME REASONES</div>
      <div className={styles.whyUs}>WHY CHOOSE US?</div>
      <div className={styles.listContainers}>
        <div className={styles.lists}>
          <img src="/IconCircleCheckFilled.svg" alt="icon" />
          <div className={styles.label}>OVER 10 COATCHS</div>
        </div>
        <div className={styles.lists}>
          <img src="/IconCircleCheckFilled.svg" alt="icon" />
          <div className={styles.label}>TRAIN SMARTER THAN BEFOR</div>
        </div>
        <div className={styles.lists}>
          <img src="/IconCircleCheckFilled.svg" alt="icon" />
          <div className={styles.label}>RELIABLE PARTNERS</div>
        </div>
        <div className={styles.lists}>
          <img src="/IconCircleCheckFilled.svg" alt="icon" />
          <div className={styles.label}>OPEN FOR 16 PER 24 HOURS OVER </div>
        </div>
        <div className={styles.lists}>
          <img src="/IconCircleCheckFilled.svg" alt="icon" />
          <div className={styles.label}>RELIABLE PARTNERS</div>
        </div>
        <div className={styles.lists}>
          <img src="/IconCircleCheckFilled.svg" alt="icon" />
          <div className={styles.label}>OPEN FOR 16 PER 24 HOURS OVER </div>
        </div>
      </div>
    </div>
  );
}
