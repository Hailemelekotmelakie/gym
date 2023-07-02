import React from "react";
import styles from "./subscription.module.css";
import { IconCheckbox, IconX } from "@tabler/icons-react";
import Button from "@/components/button/button";

export default function Subscription() {
  return (
    <div className={styles.container}>
      <div className={[styles.subscription + " " + styles.subscription1]}>
        <div className={styles.rainbow}>
          <div className={[styles.pentagonGold + " " + styles.pentagonBasic]}>
            <div className={styles.header}>BASIC</div>
            <div className={styles.price}>ETB 30</div>
          </div>
          <div className={styles.pentagon}></div>
        </div>
        <div className={styles.plane}>
          <div className={[styles.labelContainer + " " + styles.labelBasic]}>
            <IconCheckbox />
            <p>One day plan</p>
          </div>
          <div className={[styles.labelContainer + " " + styles.labelBasic]}>
            <IconCheckbox />
            <p>Access to every materials</p>
          </div>
          <div className={[styles.labelContainer + " " + styles.labelBasic]}>
            <IconX style={{ color: "#990000" }} />
            <p>No shower</p>
          </div>
          <div className={styles.labelContainer}>
            <IconX style={{ color: "#990000" }} />
            <p>Not assistance given by coach</p>
          </div>
          <div className={styles.labelContainer}>
            <IconX style={{ color: "#990000" }} />
            <p>No drinks available at all</p>
          </div>
          <Button
            icon
            plane="basic"
            bg="white"
            color="black"
            name="Order Now"
            mt={24}
          />
        </div>
      </div>
      <div className={[styles.subscription + " " + styles.subscription2]}>
        <div className={styles.rainbow}>
          <div
            className={[styles.pentagonGold + " " + styles.pentagonStandard]}
          >
            <div className={styles.header}>STANDARD</div>
            <div className={styles.price}>ETB 300</div>
          </div>
          <div className={styles.pentagon}></div>
        </div>
        <div className={styles.plane}>
          <div className={[styles.labelContainer + " " + styles.labelStandard]}>
            <IconCheckbox />
            <p>Monthly plan</p>
          </div>
          <div className={[styles.labelContainer + " " + styles.labelBasic]}>
            <IconCheckbox />
            <p>Access to every materials</p>
          </div>

          <div className={[styles.labelContainer + " " + styles.labelStandard]}>
            <IconCheckbox />
            <p>Shower available</p>
          </div>
          <div className={styles.labelContainer}>
            <IconCheckbox />
            <p>Assisted by coach</p>
          </div>
          <div className={styles.labelContainer}>
            <IconX style={{ color: "#990000" }} />
            <p>Extra charge to drink</p>
          </div>
          <Button
            icon
            plane="standard"
            bg="white"
            color="black"
            name="Order Now"
            mt={24}
          />
        </div>
      </div>
      <div className={[styles.subscription + " " + styles.subscription3]}>
        <div className={styles.rainbow}>
          <div className={[styles.pentagonGold + " " + styles.pentagonPremium]}>
            <div className={styles.header}>PREMIUM</div>
            <div className={styles.price}>ETB 3,000</div>
          </div>
          <div className={styles.pentagon}></div>
        </div>
        <div className={styles.plane}>
          <div className={styles.labelContainer}>
            <IconCheckbox />
            <p>Yearly plan</p>
          </div>
          <div className={[styles.labelContainer + " " + styles.labelBasic]}>
            <IconCheckbox />
            <p>Access to every materials</p>
          </div>
          <div className={styles.labelContainer}>
            <IconCheckbox />
            <p>Shower available</p>
          </div>
          <div className={styles.labelContainer}>
            <IconCheckbox />
            <p>Assisted by coach</p>
          </div>
          <div className={styles.labelContainer}>
            <IconCheckbox />
            <p>One cup of beso drink every week</p>
          </div>
          <Button
            icon
            plane="premium"
            bg="white"
            color="black"
            name="Order Now"
            mt={24}
          />
        </div>
      </div>
    </div>
  );
}
