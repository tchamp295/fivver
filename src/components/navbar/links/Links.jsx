"use client";
import NavLink from "./navLink/NavLink";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { links } from "@/utils/data";
import Image from "next/image";

const Links = () => {
  const [navSticky, setNavSticky] = useState(false);

  useEffect(() => {
    const handler = () => {
      setNavSticky(window.scrollY >= 90);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const stickyStyle = navSticky ? "bg-[#ffffff]  shadow-sm" : "#ffffff";

  return (
    <div
      className={`fixed font-text top-0 w-full ${stickyStyle} transition-all dark:bg-[#121212] font-text duration-300 z-30`}
    >
      <div className="max-w-5xl px-3 mx-auto flex justify-between h-[10vh] text-neutralDGray items-center">
        <div className="">
          <Link
            href="/"
            className="flex gap-2 items-center "
          >
            <Image src={"/fivver.png"} width={70} height={70} />
            <div className="flex flex-col">
              <h1 className="text-orange-700">FIVVER</h1>
              <span className="text-xs">Technologies</span>
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden gap-4 md:flex">
            {links.map((link) => (
              <NavLink item={link} key={link.title} />
            ))}
          </div>
          <NavLink item={{ title: "Login", path: "/login" }} />

          <RxHamburgerMenu className="h-10 w-10 md:hidden rotate-180 v" />
        </div>
      </div>
    </div>
  );
};

export default Links;
