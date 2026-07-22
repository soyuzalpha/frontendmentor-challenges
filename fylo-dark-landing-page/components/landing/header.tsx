import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#team", label: "Team" },
    { href: "/signin", label: "Sign In" },
  ];

  return (
    <header className="container mx-auto flex items-center justify-between px-5 py-6">
      <Image
        src="/assets/images/logo.svg"
        alt="Fylo Logo"
        width={200}
        height={200}
        className="w-28 transition-transform duration-300 hover:scale-105"
      />

      <nav className="flex items-center gap-6">
        <Link href="#features" className="text-white/70 transition-colors duration-200 hover:text-white">
          Features
        </Link>

        <Link href="#team" className="text-white/70 transition-colors duration-200 hover:text-white">
          Team
        </Link>

        <Link href="/signin" className="text-white/70 transition-colors duration-200 hover:text-white">
          Sign In
        </Link>
      </nav>
    </header>
  );
};

export default Header;
