import English from "../../lang/en/home";
import Amharic from "../../lang/am/home";
import Awi from "../../lang/aw/home";
import { useContext } from "react";
import { LanguageContext } from "@/useContext/context";
import styles from "./home.module.css";
import Image from "next/image";
import Button from "@/components/button";

export default function Home() {
  const { language } = useContext(LanguageContext);
  const l = language === "am" ? Amharic : language === "aw" ? Awi : English;
  return (
    <div className={styles.container}>
      <div className="">
        <h1>{l.textLong}</h1>
        <p>{l.longText}</p>
      </div>
      <div className={styles.card}>
        <Image
          src={"/638234588ae82dfc9e4fa065_Hero-1.webp"}
          alt="no"
          width={500}
          style={{ userSelect: "none" }}
          height={300}
        />
        <div>Hailemelekot</div>
        <Button name={"HAILE"} size={20} />
      </div>
    </div>
  );
}
