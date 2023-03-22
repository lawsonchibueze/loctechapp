import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
import { SiBookstack } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between mx-1 my-6 max-w-6xl sm:mx-auto items-center">
      <div className="flex flex-row">
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="About" address="/about" Icon={BsInfoCircleFill} />
        <MenuItem title="Course" address="/courses" Icon={SiBookstack} />
        <MenuItem title="Partners" address="/partners" Icon={GrGroup} />
      </div>
      <div className="">
        <Link href="/">
          <Image
            src="/assets/logo8.png"
            width={80}
            height={60}
            priority
            alt="logo"
            className="font-bold bg-slate-800 py-1 px-1 mt-2 rounded-lg"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
