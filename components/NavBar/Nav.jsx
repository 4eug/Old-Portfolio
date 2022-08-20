import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { IoClose, IoMenu } from "react-icons/io5";
import LinkButton from "../utilities/Buttons/button";
import Mode from "../utilities/Buttons/mode";
import AboutButton from "../utilities/Buttons/button";

function Nav(props) {
  return (
    <nav>
      <div className="h-8 w-20 relative text-xl">
        <Link href="/">
        <a>
        <Image
          layout="fill"
          objectFit="contain"
          priority
          src={"/Logo.svg"}
          alt="ijikod logo"
        />
        </a>
        </Link>
      </div>
      <div className="pl-8 md:pl-12">
      <Mode />
      </div>
      <AboutButton/>

      <div className="block md:hidden ">
        <div
          className="inline-flex items-center justify-center p-2"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open Menu</span>
          <span
            className="cursor-pointer"
            onClick={() => props.setSideBar((isOpen) => !isOpen)}
          >
            {!props.sideBar ? <IoMenu size={35} /> : <IoClose size={35} />}
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
