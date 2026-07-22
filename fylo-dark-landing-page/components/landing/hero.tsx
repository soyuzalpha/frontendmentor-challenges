import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative">
      <div className="container mx-auto">
        <div className="w-full flex items-center justify-center">
          <Image
            src={"/assets/images/illustration-intro.png"}
            width={500}
            height={500}
            alt="hero-image"
            className="max-w-7xl"
            loading="lazy"
          />
        </div>

        <div className="w-full flex flex-col items-center justify-center py-4 space-y-8">
          <h1 className="text-center text-4xl font-semibold max-w-lg lg:max-w-xl font-heading">
            All your files in one secure location, accessible anywhere.
          </h1>

          <p className="text-center text-foreground text-lg tracking-wide max-w-sm lg:max-w-xl">
            Fylo stores all your most important files in one secure location. Access them wherever you need, share and
            collaborate with friends family, and co-workers.
          </p>

          {/* <button className="min-w-xs bg-teal-200 text-lg rounded-full p-4 font-semibold">Get Started</button> */}
          <button
            className="
    min-w-xs
    rounded-full
    bg-teal-200
    p-4
    text-lg
    font-semibold
    transition-all
    duration-200
    hover:brightness-110
    hover:shadow-lg
    active:scale-95
  "
          >
            Get Started
          </button>
        </div>

        <div className="absolute inset-x-0 bottom-0 -z-10">
          <Image
            src="/assets/images/bg-curvy-desktop.svg"
            width={1440}
            height={449}
            alt=""
            className="hidden w-full lg:block"
          />

          <Image
            src="/assets/images/bg-curvy-mobile.svg"
            width={375}
            height={141}
            alt=""
            className="block w-full lg:hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
