import React from "react";

const GridSection = () => {
  return (
    <section>
      <section>
        <ContentSection
          title="Transform your brand"
          description="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
          desktopImage="/assets/images/desktop/image-transform.jpg"
          mobileImage="/assets/images/mobile/image-transform.jpg"
          reverse
        />

        <ContentSection
          title="Stand out to the right audience"
          description="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
          desktopImage="/assets/images/desktop/image-stand-out.jpg"
          mobileImage="/assets/images/mobile/image-stand-out.jpg"
        />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative">
          <picture>
            <source media="(min-width: 768px)" srcSet="/assets/images/desktop/image-graphic-design.jpg" />

            <img src="/assets/images/mobile/image-graphic-design.jpg" alt="Hero" className="w-full" />
          </picture>
          <div className="absolute inset-x-0 bottom-12 mx-auto max-w-sm text-center space-y-6">
            <h3 className="font-heading text-5xl text-center lg:text-left font-black lg:text-5xl"> Graphic design</h3>
            <p>
              Great design makes you memorable. We deliver artwork that underscores your brand message and captures
              potential clients’ attention.
            </p>

            <button className="font-heading text-xl font-black uppercase">Learn more</button>
          </div>
        </div>

        <div className="relative">
          <picture>
            <source media="(min-width: 768px)" srcSet="/assets/images/desktop/image-photography.jpg" />

            <img src="/assets/images/mobile/image-photography.jpg" alt="Hero" className="w-full" />
          </picture>

          <div className="absolute inset-x-0 bottom-12 mx-auto max-w-sm text-center space-y-6">
            <h3 className="font-heading text-5xl text-center font-black lg:text-5xl">Photography</h3>
            <p>
              Increase your credibility by getting the most stunning, high-quality photos that improve your business
              image
            </p>

            <button className="font-heading text-xl font-black uppercase">Learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridSection;

type ContentSectionProps = {
  title: string;
  description: string;
  desktopImage: string;
  mobileImage: string;
  reverse?: boolean;
};

const ContentSection = ({ title, description, desktopImage, mobileImage, reverse = false }: ContentSectionProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {/* Image */}
      <div className={reverse ? "lg:order-2" : ""}>
        <picture>
          <source media="(min-width: 1024px)" srcSet={desktopImage} />

          <img src={mobileImage} alt={title} className="h-full w-full object-cover" />
        </picture>
      </div>

      {/* Content */}
      <div className={`flex items-center justify-center px-8 py-16 lg:px-24 ${reverse ? "lg:order-1" : ""}`}>
        <div className="max-w-md space-y-8 text-center lg:text-left">
          <h3 className="font-heading text-4xl font-black lg:text-5xl">{title}</h3>

          <p className="leading-8 text-grey-550">{description}</p>

          <button className="font-heading text-xl font-black uppercase">Learn more</button>
        </div>
      </div>
    </div>
  );
};
