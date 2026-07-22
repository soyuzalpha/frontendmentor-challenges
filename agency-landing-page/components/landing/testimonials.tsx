import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Emily R.",
      role: "Marketing Director",
      avatar: "/assets/images/image-emily.jpg",
      quote:
        "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    },
    {
      id: 2,
      name: "Thomas S.",
      role: "Chief Operating Officer",
      avatar: "/assets/images/image-thomas.jpg",
      quote:
        "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
    },
    {
      id: 3,
      name: "Jennie F.",
      role: "Business Owner",
      avatar: "/assets/images/image-jennie.jpg",
      quote: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-24 lg:py-40">
      <h2 className="mb-20 text-center font-heading text-xl font-black uppercase tracking-[0.4em] text-grey-400">
        Client Testimonials
      </h2>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-8">
        {testimonials.map((item) => (
          <article key={item.id} className="flex flex-col items-center text-center">
            <Image src={item.avatar} width={72} height={72} alt={item.name} className="mb-14 rounded-full" />

            <p className="mb-16 leading-8 text-grey-600 max-w-sm">{item.quote}</p>

            <h3 className="font-heading text-2xl font-black text-grey-950">{item.name}</h3>

            <span className="mt-2 text-sm text-grey-400">{item.role}</span>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
