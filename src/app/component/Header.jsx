"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useState, useRef } from "react";
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
  cubicBezier,
  circOut,
} from "framer-motion";
const Header = () => {
  const [cursorStyle, setCursorStyle] = useState({});
  const [angle, setAngle] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 0.4], [0, -80]);
  const [degree, setDegree] = useState(0);

  useEffect(() => {
    return rotate.onChange((v) => {
      setDegree(Math.round(v));
    });
  }, [rotate]);
  const mouseEnter = () => {
    setCursorStyle({
      cursor: "url('/hover-pointer.svg') 6 6, auto",
    });
  };

  const mouseLeave = () => {
    setCursorStyle({});
  };

  return (
    <motion.div
      className="flex items-start mt-6 justify-center h-[95vh] w-full"
      style={{ perspective: "2000px" }}
    >
      <motion.div
        ref={ref}
        className="relative "
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        style={{
          ...cursorStyle,
        }}
        animate={{
          rotateX: degree,
        }}
        // transition={{
        //   rotateX: {
        //     type: "spring",
        //     stiffness: 10,
        //     damping: 5,
        //   },
        // }}
      >
        <Image
          src="/header.png"
          width={4096}
          height={2282}
          className="w-[1168px] h-[651px]"
          alt="header-img"
          style={{}}
          priority={true}
        />
        <motion.div className="absolute top-0 flex items-center justify-around w-full h-full gap-2 p-6 px-16 ">
          <div className="relative flex-[0.5] flex flex-col items-start justify-center gap-4">
            <div className="bg-[#7053FF] h-[26px] flex items-center justify-center p-1 px-2 rounded-2xl gap-1 hover:gap-3 transition-all ease-in duration-200">
              <p className="text-[12px] leading-[18px] text-white ">
                ✨ $7.5M seed raised with Accel & Square Peg
              </p>
              <div>
                <Image
                  src="/arrow-right.svg"
                  width={12}
                  height={8}
                  alt="arrow-right"
                />
              </div>
            </div>
            <h1 className="text-6xl font-bold text-white leading-[66px] ">
              Impactful
              <br /> stories. <br />
              made <br />
              effortlessly
            </h1>
            <p className="text-[#79787B]  font-light text-[16px]  ">
              Chronicle is a modern format of presentations.
              <br /> Deliver impressive, interactive stories without <br />
              the design guesswork!{" "}
            </p>
            <div className="absolute right-[95px] bottom-[120px]">
              <Image
                src="/header-pointer1.png"
                width={72}
                height={24}
                alt="pointer"
              />
            </div>
            <div className="absolute right-[180px] -bottom-6">
              <Image
                src="/header-pointer2.png"
                width={72}
                height={24}
                alt="pointer"
              />
            </div>
          </div>
          <div
            className="flex-[0.5] mr-8
        flex flex-col items-start"
          >
            <Image
              src="/header-frame.svg"
              width={477}
              height={363}
              className="w-[477px] h-[363px] "
              alt="header-frame"
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
