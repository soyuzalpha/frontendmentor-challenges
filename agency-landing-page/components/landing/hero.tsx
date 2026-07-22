import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative">
      <picture>
        <source media="(min-width: 768px)" srcSet="/assets/images/desktop/image-header.jpg" />

        <img src="/assets/images/mobile/image-header.jpg" alt="Hero" className="w-full" />
      </picture>

      <div className="w-full absolute top-30 left-0 right-0 text-white text-2xl font-heading mx-auto">
        <div>
          <h1 className="max-w-xl text-center uppercase mx-auto text-6xl tracking-widest">We are creatives</h1>
        </div>

        <div className="mx-auto flex items-center justify-center mt-20">
          <Image
            src={"/assets/images/icon-arrow-down.svg"}
            alt="arrow"
            width={300}
            height={300}
            className="w-14 h-60"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
