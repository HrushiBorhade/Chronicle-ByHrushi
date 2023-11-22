"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "./anim";
import Image from "next/image";

export default function Preloader() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="w-full h-screen flex items-center justify-center fixed z-[99] bg-zinc-900"
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            variants={opacity}
            initial="initial"
            animate="enter"
            className="flex font-medium text-[42px] text-white items-center absolute z-[1] animate-fade-in opacity-0 "
          >
            <Image
              src="/logo.svg"
              width={250}
              height={72}
              alt="logo"
              className=""
            />
          </motion.p>
          <svg className="absolute top-0 w-[100%] h-[calc(100%)]">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
              fill="rgb(24 24 27 / var(--tw-bg-opacity))"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}
