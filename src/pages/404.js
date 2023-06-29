import English from "../lang/en/404";
import Amharic from "../lang/am/404";
import Awi from "../lang/aw/404";
import { LanguageContext } from "@/useContext/context";
import { useContext } from "react";

export default function Custom404() {
  const { language } = useContext(LanguageContext);
  const l = language === "am" ? Amharic : language === "aw" ? Awi : English;
  return <h1>{l.P404}</h1>;
}
