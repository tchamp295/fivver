"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathname = usePathname();
  return (
    <Link
      href={item.path}
      key={item.title}
      className={`${
        pathname === item.path ? " text-teal-400 font-bold" : ""
      }  relative font-semibold  capitalize  after:block after:content-[''] after:absolute after:h-[2px] after:bg-teal-500 text-[#49557e] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right dark:text-gray-400`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
