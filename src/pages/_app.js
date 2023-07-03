import React, { useState } from "react";
import Nav from "../app/header/nav";
import "../styles/globals.css";
import { LanguageContext } from "@/useContext/context";

export default function Home({ Component, pageProps }) {
  const [language, setLanguage] = useState("am");
  return (
    <>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <Nav />
        <Component {...pageProps} />
      </LanguageContext.Provider>
    </>
  );
}
