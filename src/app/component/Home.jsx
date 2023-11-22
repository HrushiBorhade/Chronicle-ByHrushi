"use client";

import TextGradientScroll from "./TextGradientScroll";
import "node_modules/locomotive-scroll/dist/locomotive-scroll";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { AnimatePresence } from "framer-motion";
import Preloader from "./Preloader";
import Image from "next/image";
import Header from "./Header";
import ContainerScroll from "./ContainerScroll";
import MobileHover from "./MobileHover";
import ParallaxScroll from "./ParallaxScroll";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        if (typeof window !== "undefined") {
          // Your client-side code that uses window goes here
          window.scrollTo(0, 0);
        }
      }, 1000);
    })();
  }, []);
  return (
    <div className="relative bg-black">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <div className="min-h-screen mx-auto bg-black max-w-7xl">
        <div className="flex flex-col w-full min-h-screen ">
          <div className="w-full h-screen header-bg">
            <Navbar />
            <Header />
          </div>
          <TextGradientScroll />
        </div>

        <ContainerScroll />

        <MobileHover />
      </div>
    </div>
  );
}
