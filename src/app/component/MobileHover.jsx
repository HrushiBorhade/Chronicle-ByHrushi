import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const MobileHover = () => {
  const imageRef = useRef();

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col items-start w-full ">
        <div className="flex items-center justify-center gap-1 mb-4">
          {" "}
          <div className="w-[18px] h-[18px]">
            <Image src="/star.svg" width={18} height={18} alt="star svg" />
          </div>
          <p className="text-[#A594FD] text-[24px] leading-[24px]">Workflow</p>
        </div>
        <div>
          <p className="text-[#F1F1EF] text-[86px] leading-[88px] font-semibold tracking-tight">
            Present
            <br /> anywhere.
            <br />
            Anytime.
          </p>
        </div>
        <div className="text-[#ADADAD] text-[16px] leading-[24px] font-light mt-4">
          Transform your stories into a bite-sized format tailored for mobile.{" "}
          <br />
          Quickly browse the summary and dive deeper when needed.
        </div>
      </div>
      <motion.div
        ref={imageRef}
        className="w-full"
        onMouseMove={(event) => {
          const rect = imageRef.current.getBoundingClientRect();
          const x = event.clientX - rect.left - rect.width / 2;
          const y = event.clientY - rect.top - rect.height / 2;
          const rotateX = (y / rect.height) * 30;
          const rotateY = (x / rect.width) * -30;
          imageRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }}
        onMouseLeave={() => {
          imageRef.current.style.transform = "";
        }}
      >
        <Image src="/mobile.svg" width={774} height={618} alt="mobile" />
      </motion.div>
    </div>
  );
};

export default MobileHover;
