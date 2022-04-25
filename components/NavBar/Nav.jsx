import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoClose, IoMenu } from "react-icons/io5";

// const NavItem = (props) => (
//   <li>
//     <Link href={`#${props.href}`}>
//       <a className="nav-link hover:text-ijikod-red">{props.text}</a>
//     </Link>
//   </li>
// );

function Nav(props) {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="h-8 w-20 relative">
        4eug
        {/* <Image
          layout="fill"
          objectFit="contain"
          priority
          src={"/Logo.png"}
          alt="ijikod logo"
        /> */}
      </div>

      <button
        className="white hidden md:block"
        onClick={() => props.setContactSideBar(true)}
      >
        <span>Let’s build</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28.732"
          height="16.616"
          viewBox="0 0 20.732 18.616"
          className="inline-block"
        >
          <g id="Message" transform="translate(0.75 0.75)">
            <path
              id="Path_445"
              d="M11.314,0,7.048,3.434a2.223,2.223,0,0,1-2.746,0L0,0"
              transform="translate(3.954 5.561)"
              fill="none"
              stroke="#030303"
              strokelinecap="round"
              strokelinejoin="round"
              strokemiterlimit="10"
              strokewidth="1.5"
            />
            <path
              id="Rectangle_511"
              d="M4.888,0h9.428A4.957,4.957,0,0,1,17.9,1.59a5.017,5.017,0,0,1,1.326,3.7v6.528a5.017,5.017,0,0,1-1.326,3.7,4.957,4.957,0,0,1-3.58,1.59H4.888C1.968,17.116,0,14.741,0,11.822V5.294C0,2.375,1.968,0,4.888,0Z"
              transform="translate(0 0)"
              fill="none"
              stroke="#030303"
              strokelinecap="round"
              strokelinejoin="round"
              strokemiterlimit="10"
              strokewidth="1.5"
            />
          </g>
        </svg>
      </button>

      <div className="block md:hidden ">
        <div
          className="inline-flex items-center justify-center p-2 text-black"
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
