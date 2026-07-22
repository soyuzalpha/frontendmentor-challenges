import React from "react";

const BottomGrid = () => {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4">
      <picture>
        <source media="(min-width: 768px)" srcSet="/assets/images/desktop/image-gallery-milkbottles.jpg" />

        <img src="/assets/images/mobile/image-gallery-milkbottles.jpg" alt="Hero" className="w-full" />
      </picture>

      <picture>
        <source media="(min-width: 768px)" srcSet="/assets/images/desktop/image-gallery-orange.jpg" />

        <img src="/assets/images/mobile/image-gallery-orange.jpg" alt="Hero" className="w-full" />
      </picture>

      <picture>
        <source media="(min-width: 768px)" srcSet="/assets/images/desktop/image-gallery-cone.jpg" />

        <img src="/assets/images/mobile/image-gallery-cone.jpg" alt="Hero" className="w-full" />
      </picture>

      <picture>
        <source media="(min-width: 768px)" srcSet="/assets/images/desktop/image-gallery-sugarcubes.jpg" />

        <img src="/assets/images/mobile/image-gallery-sugar-cubes.jpg" alt="Hero" className="w-full" />
      </picture>
    </section>
  );
};

export default BottomGrid;
