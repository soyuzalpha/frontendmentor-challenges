import Image from "next/image";
import React from "react";

const Cta = () => {
  return (
    <section className="mt-44 grid grid-cols-1 lg:grid-cols-2 space-y-10 lg:container mx-auto">
      <div className="flex items-center justify-center">
        <Image
          src={"/assets/images/illustration-stay-productive.png"}
          width={450}
          height={450}
          alt="illustration-stay-productive"
          className="flex items-center justify-center"
          loading="lazy"
        />
      </div>

      <div className="relative max-w-lg lg:max-w-6xl mx-auto space-y-6 p-6">
        <h1 className="font-heading text-center lg:text-left text-2xl tracking-wide font-semibold">
          Stay productive, wherever you are
        </h1>
        <div className="space-y-4 lg:max-w-xl">
          <p className="text-xl lg:text-lg font-medium">
            Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage
            needs.
          </p>
          <p className="text-xl lg:text-lg font-medium">
            Securely share files and folders with friends, family and colleagues for live collaboration. No email
            attachments required.
          </p>
        </div>

        <button className="flex items-end gap-3 text-teal-200 font-medium border-b border-teal-200 pb-2">
          See how Fylo works{" "}
          <span>
            <Image src={"/assets/images/icon-arrow.svg"} width={20} height={20} alt="arrow" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default Cta;
