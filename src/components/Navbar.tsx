"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavbarLink from "./NavbarLink";

const links = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Portfolio", url: "/portfolio" },
  { title: "Contact", url: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (

    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-lg">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavbarLink link={link} key={link.title}/>
        ))}
      </div>

      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-between"
        >
          <span className="text-white mr-1">Yohanse</span>
          <span className="w-12 h-8 bg-white rounded flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>

      {/* SOCIAL */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="">
          <img src="/github.png" alt="" height={24} width={24}/>
        </Link>
        <Link href="">
          <img src="/linkedin.png" alt="" height={24} width={24}/>
        </Link>
        <Link href="">
          <img src="/code-forces.svg" alt="" height={24} width={24}/>
        </Link>
        <Link href="">
          <img src="/leetcode.svg" alt="" height={24} width={24}/>
        </Link>
        <Link href="">
          <img src="/instagram.png" alt="" height={24} width={24}/>
        </Link>
      </div>

      {/* RESPONSIVE MENU */}
      <div className="md:hidden">

        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
        </button>

        {/* MENU LIST */}
        {open && (
          <div className="absolute left-0 top-0 h-screen w-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl">
            {links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
