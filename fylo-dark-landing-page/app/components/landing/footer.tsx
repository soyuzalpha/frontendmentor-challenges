import { Circle, CircleCheck, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { RiFacebookFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-navy-950 pt-44 pb-32 px-10">
      <div className="lg:container mx-auto">
        <div className="mb-10">
          <Image src={"/assets/images/logo.svg"} alt="logo" width={400} height={400} className="w-48" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 ">
          <div className="flex gap-4">
            <div>
              <MapPin className="w-8 h-8 lg:w-5 lg:h-5" />
            </div>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nam aspernatur debitis reiciendis
              repudiandae,
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-6 lg:gap-3">
              <div>
                <Phone className="w-8 h-8 lg:w-5 lg:h-5" />
              </div>
              <div>
                <p>+1 234 5678 99</p>
              </div>
            </div>

            <div className="flex items-center gap-6 lg:gap-3">
              <div>
                <Mail className="w-8 h-8 lg:w-5 lg:h-5" />
              </div>
              <div>
                <p>example@fylo.com</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="grid grid-cols-1 gap-4">
              {["About Us", "Jobs", "Press", "Blog"].map((item: string, index: number) => (
                <p key={index}>{item}</p>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-1">
              {["Contact Us", "Terms", "Privacy"].map((item: string, index: number) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <div className="border border-white rounded-full w-fit h-fit p-2">
              <RiFacebookFill />
            </div>
            <div className="border border-white rounded-full w-fit h-fit p-2">
              <IoLogoTwitter />
            </div>
            <div className="border border-white rounded-full w-fit h-fit p-2">
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
