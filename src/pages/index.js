import React from "react";
import dynamic from "next/dynamic";
import HomeRender from "@/app/home/home";
import Subscription from "@/app/subscription/subscription";
import AboutRender from "@/app/about/about";

import Head from "next/head";
import Footer from "@/app/footer/footer";
const MapWithNoSSR = dynamic(() => import("@/app/map/map"), {
  ssr: false,
});

export default function index() {
  return (
    <>
      <Head>
        <title>Gym</title>
        <meta name="Gym description" content="Gym content" />
        <link rel="icon" href="/nexst.svg" />
      </Head>
      <HomeRender />
      <Subscription />
      <AboutRender />
      <MapWithNoSSR />
      <Footer />
    </>
  );
}
