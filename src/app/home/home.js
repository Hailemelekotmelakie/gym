import English from "../../lang/en/home";
import Amharic from "../../lang/am/home";
import Awi from "../../lang/aw/home";
import { useContext, useState } from "react";
import { LanguageContext } from "@/useContext/context";
import styles from "./home.module.css";
import Button from "@/components/button/button";

export default function Home() {
  const { language } = useContext(LanguageContext);
  const l = language === "am" ? Amharic : language === "aw" ? Awi : English;
  const [coachCounter, setCoachCounter] = useState(0);
  const [userCounter, setUserCounter] = useState(0);
  const [spaceCounter, setSpaceCounter] = useState(0);

  const coachCounterFunction = () => {
    if (coachCounter < 10) {
      setCoachCounter(coachCounter + 1);
    }
    if (userCounter < 700) {
      setUserCounter(userCounter + 1);
    }
    if (spaceCounter < 100) {
      setSpaceCounter(spaceCounter + 1);
    }
  };

  setTimeout(coachCounterFunction, 70);

  return (
    <>
      <img
        className={styles.backgroundAbstract}
        src="/floating green abstract smoke effect_5475139.png"
        alt="..."
      />

      <div id="home" className={styles.container}>
        <div className={styles.labelsContainer}>
          <p className={styles.p}>The best fitness club in the town</p>
          <div className={styles.labelBoldContainer}>
            <div className={styles.outlineText}>
              {l.shape}&nbsp;
              <span className={styles.boldHeader}>{l["YOUR IDEAL BODY"]}</span>
            </div>
          </div>
          <div className={styles.labelsmallestContainer}>
            {l["long description"]}
          </div>
          <div className={styles.counters}>
            <div className={styles.counterContainer}>
              <div className={styles.count}>{coachCounter}+</div>
              <div className={styles.countLabel}>{l["EXPERT COACHES"]}</div>
            </div>
            <div className={styles.counterContainer}>
              <div className={styles.count}> {userCounter}+</div>
              <div className={styles.countLabel}>{l.Joined}</div>
            </div>
            <div className={styles.counterContainer}>
              <div className={styles.count}>
                {spaceCounter}+km<sup>2</sup>
              </div>
              <div className={styles.countLabel}>{l["SPACE FOR WORK"]}</div>
            </div>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <img
            className={styles.dembellImage}
            src="/Gym-Bodybuilding-Transparent-Images.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
