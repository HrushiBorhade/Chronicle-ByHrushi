import React, { useState, useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
const ContainerScroll = () => {
  const container = useRef(null);

  let { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  let y = useTransform(scrollYProgress, [0, 1], [0, 3]);
  const [colorState, setColorState] = useState(1);
  const [color, setColor] = useState("#DDD");

  useEffect(() => {
    const unsubscribe = y.onChange((value) => {
      const flooredValue = Math.floor(value);
      if (flooredValue >= 0 && flooredValue < 1) {
        setColor("#DDD");
        setColorState(1);
      } else if (flooredValue >= 1 && flooredValue < 2) {
        setColor("#383838");
        setColorState(2);
      } else if (flooredValue >= 2 && flooredValue < 3) {
        setColor("#1D1D1D");
        setColorState(3);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [y]);
  return (
    <div ref={container} className="w-full h-[200vh] ">
      <div className="sticky top-0 flex items-start w-full gap-20 px-4">
        <div className="sticky top-0 flex items-center w-full h-screen ">
          <div className="flex flex-col items-start justify-center">
            <div className="flex items-center justify-center gap-1 mb-4">
              {" "}
              <div className="w-[18px] h-[18px]">
                <Image src="/star.svg" width={18} height={18} alt="star svg" />
              </div>
              <p className="text-[#A594FD] text-[24px] leading-[24px]">
                Workflow
              </p>
            </div>
            <div>
              <p className="text-[#F1F1EF] text-[86px] leading-[88px] font-semibold tracking-tight">
                Create at
                <br /> the speed <br />
                of thought.
              </p>
            </div>
            <div className="text-[#ADADAD] text-[16px] leading-[24px] font-light mt-4">
              Focus on your getting your thoughts out and crafting the best
              <br />
              message while Chronicle does the heavy lifting for you
            </div>
          </div>
        </div>
        <div className="sticky top-0 flex items-center w-full h-screen gap-10">
          <div
            style={{ backgroundColor: color }}
            className="w-[505px] h-[560px] bg-[#DDD] transition-color rounded-[20px]"
          ></div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-[#ADADAD] text-[12px] mb-3 ml-1 leading-[18px]">
              0{colorState}
            </span>
            <div className="h-[400px] rounded-md bg-[#232323]">
              <div
                className="py-2 transition-all rounded-md slider"
                style={{
                  height: `${colorState * 33.33}%`,
                  backgroundColor: "#765df3",
                }}
              ></div>
            </div>
            <span className="text-[#ADADAD] text-[12px] leading-[18px] mt-4">
              03
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerScroll;
