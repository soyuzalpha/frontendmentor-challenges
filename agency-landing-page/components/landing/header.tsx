"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiMenuFill, RiCloseLine } from "react-icons/ri";

const menus = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const Header = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <header className="bg-hero-blue w-full absolute left-0 z-30">
      <nav className="container relative mx-auto flex items-center justify-between p-6">
        <Image src="/assets/images/logo.svg" width={170} height={35} alt="logo" className="w-32" />

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {menus.map((menu) => (
            <Link key={menu.name} href={menu.href} className="text-white/80 transition hover:text-white">
              {menu.name}
            </Link>
          ))}

          <button className="rounded-full bg-white px-7 py-4 font-heading font-bold uppercase text-grey-950 transition hover:bg-white/30 hover:text-white">
            Contact
          </button>
        </div>

        {/* Mobile Button */}
        <button onClick={() => setOpenMenu(!openMenu)} className="text-3xl text-white md:hidden">
          {openMenu ? <RiCloseLine /> : <RiMenuFill />}
        </button>

        {/* Mobile Menu */}
        {openMenu && (
          <div className="absolute left-6 right-6 top-full mt-6 bg-white p-8 shadow-xl md:hidden">
            <div className="flex flex-col items-center gap-8">
              {menus.map((menu) => (
                <Link
                  key={menu.name}
                  href={menu.href}
                  onClick={() => setOpenMenu(false)}
                  className="text-lg text-grey-550 transition hover:text-grey-950"
                >
                  {menu.name}
                </Link>
              ))}

              <button className="rounded-full bg-yellow-500 px-8 py-4 font-heading font-black uppercase text-grey-950">
                Contact
              </button>
            </div>

            {/* Segitiga kanan atas */}
            <div className="absolute -top-6 right-0 h-0 w-0 border-b-24 border-l-24 border-b-white border-l-transparent" />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
