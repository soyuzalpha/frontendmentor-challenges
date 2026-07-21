import Image from "next/image";
import React from "react";

export const testimonials = [
  {
    id: 1,
    name: "Satish Patel",
    role: "Founder & CEO, Huddle",
    avatar: "/assets/images/profile-1.jpg",
    quote:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
  },
  {
    id: 2,
    name: "Bruce McKenzie",
    role: "Founder & CEO, Huddle",
    avatar: "/assets/images/profile-2.jpg",
    quote:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
  },
  {
    id: 3,
    name: "Iva Boyd",
    role: "Founder & CEO, Huddle",
    avatar: "/assets/images/profile-3.jpg",
    quote:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
  },
];

const Testimonials = () => {
  return (
    <section className="my-40 py-10 px-12 lg:container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-18 lg:gap-5">
        {testimonials.map((item) => (
          <article key={item.id} className="bg-navy-800 px-10 py-12 lg:py-8 rounded shadow">
            <p className="text-sm font-medium tracking-wide">{item.quote}</p>

            <div className="flex items-center gap-3 mt-6">
              <Image src={item.avatar} width={20} height={20} alt={item.name} className="size-8 rounded-full" />

              <div>
                <h3 className="text-sm font-medium tracking-wider">{item.name}</h3>
                <p className="text-xs tracking-wider">{item.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
