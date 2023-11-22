import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="w-full  mt-8  h-[50px] ">
      <div className="flex items-center justify-between">
        <div>
          <Image src="/nav-logo.svg" width={139} height={44} alt="logo" />
        </div>
        <div className="flex items-start justify-center h-[24px] gap-[16px] px-[227px]">
          <Link
            href="  "
            className=" text-white tracking-wide text-[14px] underline underline-offset-4 decoration-white"
          >
            Product
          </Link>
          <Link href="" className="text-[#ADADAD] text-[14px]">
            Our story
          </Link>
          <Link href="" className="text-[#ADADAD] text-[14px]">
            Careers
          </Link>
        </div>
        <div className="">
          <Link
            href=""
            className=" hover:bg-purple-400 text-[18px] font-medium leading-[18px] transition-colors flex items-center justify-center bg-white text-black rounded-[11.2px] px-4  h-[44px]"
          >
            Join Beta
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
