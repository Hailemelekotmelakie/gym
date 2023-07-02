import English from "../../lang/en/about";
import Amharic from "../../lang/am/about";
import Awi from "../../lang/aw/about";
import { useContext } from "react";
import { LanguageContext } from "@/useContext/context";
import Skeleton from "@/components/skeleton/skeleton";

export default function About() {
  const { language } = useContext(LanguageContext);
  const l = language === "am" ? Amharic : language === "aw" ? Awi : English;
  return (
    <div id="about">
      <h1>{l.about}</h1>
      <h1>{l.about}</h1>
      <h1>{l.about}</h1>
      <h1>{l.about}</h1>
      <h1>{l.about}</h1>
      <h1>{l.about}</h1>
      <h1>{l.about}</h1>
      <h1>{l.about}</h1>
      <h1>{l.about}</h1>

      {/* <Skeleton /> */}
    </div>
  );
}
