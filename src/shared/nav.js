import Amharic from "../lang/am/navs";
import English from "../lang/en/navs";
import Awi from "../lang/aw/navs";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "@/useContext/context";
import styles from "./nav.module.css";

export default function Nav() {
  const { language, setLanguage } = useContext(LanguageContext);
  const l = language === "am" ? Amharic : language === "aw" ? Awi : English;

  const [theme, setTheme] = useState("light");
  const [isHeaderOn, setHeaderOn] = useState(false);
  const navs = [
    {
      name: l.home,
    },
    {
      name: l.about,
    },
    {
      name: l.map,
    },
  ];

  useEffect(() => {
    document.getElementById("head").style.right = isHeaderOn ? "200%" : "0%";
  }, [isHeaderOn]);

  useEffect(() => {
    setLanguage(localStorage.getItem("Language"));
  });

  useEffect(() => {
    let root = document.querySelector(":root");
    if (localStorage.getItem("theme") == undefined) {
      localStorage.setItem("theme", "light");
    }
    if (localStorage.getItem("theme") == "dark") {
      root.classList.remove("light");
      root.classList.add("dark");
      document.getElementById("checkbox").checked = true;
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
      document.getElementById("checkbox").checked = false;
    }
  }, [theme]);

  return (
    <div className={styles.container}>
      <div
        className={styles.menu}
        onClick={() => {
          setHeaderOn(!isHeaderOn);
        }}
      >
        {isHeaderOn ? (
          <>
            <div className={styles.menuLine}></div>
            <div className={styles.menuLine}></div>
            <div className={styles.menuLine}></div>
          </>
        ) : (
          <>
            <div className={styles.upline}></div>
            <div className={styles.downline}></div>
          </>
        )}
      </div>

      <div id="head" className={styles.linksContainer}>
        {navs.map((link, i) => (
          <div className={styles.links} key={i}>
            {link.name}
          </div>
        ))}
        <div>
          <select
            className={styles.navSelect}
            value={language}
            onChange={(e) => {
              localStorage.setItem("Language", e.target.value);
              setLanguage(e.target.value);
            }}
          >
            <option value={"en"}>Eng </option>
            <option value={"am"}> አማርኛ </option>
            <option value={"aw"}> አዊ </option>
          </select>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={() => {
              let root = document.querySelector(":root");
              if (localStorage.getItem("theme") == "dark") {
                root.classList.remove("dark");
                root.classList.add("light");
                setTheme("light");
                localStorage.setItem("theme", "light");
              } else {
                root.classList.remove("light");
                root.classList.add("dark");
                setTheme("dark");
                localStorage.setItem("theme", "dark");
              }
            }}
            className={styles.checkbox}
            id="checkbox"
          />
          <label for="checkbox" className={styles.label}>
            <div className={styles.ball}></div>
          </label>
        </div>
      </div>
    </div>
  );
}
