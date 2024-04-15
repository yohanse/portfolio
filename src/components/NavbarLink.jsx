import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavbarLink = ({ link }) => {
  const pathName = usePathname();
  return (
    <Link
      className={`rounded p-1 ${pathName == link.url && "bg-black text-white"}`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavbarLink;
