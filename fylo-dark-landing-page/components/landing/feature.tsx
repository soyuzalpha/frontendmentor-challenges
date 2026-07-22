import Image from "next/image";
import React from "react";

const items = [
  {
    images: "/assets/images/icon-access-anywhere.svg",
    title: "Access your files, anywhere",
    desc: "  The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
  },
  {
    images: "/assets/images/icon-security.svg",
    title: "Access your files, anywhere",
    desc: "  The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
  },
  {
    images: "/assets/images/icon-collaboration.svg",
    title: "Access your files, anywhere",
    desc: "  The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
  },
  {
    images: "/assets/images/icon-any-file.svg",
    title: "Access your files, anywhere",
    desc: "  The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
  },
];

const Feature = () => {
  return (
    <section className="mt-44">
      <div className="max-w-lg lg:max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-28 items-center justify-center">
        {items?.map((item: any, index: number) => (
          <div key={index} className="space-y-5">
            <div className="flex items-center justify-center">
              <Image src={item?.images} width={500} height={500} alt={item?.title} className="max-w-22" />
            </div>

            <h5 className="text-center text-2xl font-heading tracking-wide font-bold">{item?.title}</h5>
            <p className="text-center text-lg font-body max-w-sm lg:max-w-lg mx-auto">{item?.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
