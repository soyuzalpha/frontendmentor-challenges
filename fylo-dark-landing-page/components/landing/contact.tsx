import React from "react";

const Contact = () => {
  return (
    <section className="-mb-32 relative z-10 p-5">
      <div className="mx-auto max-w-4xl rounded-xl bg-navy-850 p-10 shadow-2xl space-y-12">
        <div className="space-y-6">
          <h1 className="font-heading text-2xl text-center font-bold">Get early access today</h1>
          <p className="text-center text-xl">
            It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
            questions, our support team would be happy to help you.{" "}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 gap-10 lg:gap-4">
          <input
            type="email"
            className="w-full lg:flex-1 bg-white rounded-full flex-1 py-5 px-6 lg:py-3 placeholder:text-gray-300 placeholder:text-xs"
            placeholder="email@example.com"
          />
          <button className="lg:max-w-xs w-full flex-1 bg-teal-200 text-lg lg:text-xs rounded-full p-5 lg:p-4 font-semibold">
            Get Started For Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
