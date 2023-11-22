import React from "react";
import Image from "next/image";
const ParallaxScroll = () => {
  return (
    <div className="relative w-full h-screen mt-[30vh]  ">
      <div className="flex flex-col items-start justify-center ml-20">
        <div className="flex items-center justify-center gap-1 mb-4">
          {" "}
          <div className="w-[18px] h-[18px]">
            <Image src="/star.svg" width={18} height={18} alt="star svg" />
          </div>
          <p className="text-[#A594FD] text-[24px] leading-[24px]">
            Introducing Blocks
          </p>
        </div>
        <div>
          <p className="text-[#F1F1EF] text-[88px] leading-[88px] font-semibold tracking-tight">
            A new, easy
            <br /> way to create.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParallaxScroll;
