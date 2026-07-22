import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";

const menus = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Services",
    href: "#services",
  },
  {
    title: "Projects",
    href: "#projects",
  },
];

const socials = [
  {
    icon: FaFacebookSquare,
    href: "#",
  },
  {
    icon: FaInstagram,
    href: "#",
  },
  {
    icon: FaTwitter,
    href: "#",
  },
  {
    icon: FaPinterest,
    href: "#",
  },
];

const Footer = () => {
  return (
    <footer className="bg-footer-bg">
      <div className="container mx-auto flex flex-col items-center px-6 py-16">
        <Image
          src="/assets/images/logo.svg"
          alt="Sunnyside"
          width={170}
          height={34}
          className="mb-10 brightness-0 saturate-100 opacity-70"
        />

        <nav className="mb-20 flex items-center gap-10">
          {menus.map((menu) => (
            <Link
              key={menu.title}
              href={menu.href}
              className="font-semibold text-footer-text transition-colors duration-200 hover:text-white"
            >
              {menu.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-7">
          {socials.map(({ icon: Icon, href }, index) => (
            <Link
              key={index}
              href={href}
              className="text-2xl text-footer-text transition-colors duration-200 hover:text-white"
            >
              <Icon />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
