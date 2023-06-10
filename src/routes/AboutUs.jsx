import Hero from "components/Hero";
import Layout from "components/Layout";
import Testimonials from "components/Testimonials";
import Transform from "components/Transform";

const AboutUs = () => {
  return (
    <Layout>
      <Hero
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum omnis ex magnam ad illum neque sequi asperiores dolores eum modi."
        title="Results that speak for themselves">
        <div className="absolute top-10 -left-20 bg-white p-2">
          1saffffffffffffffffffff00%
        </div>
      </Hero>
      <div className="container py-5 md:py-20 px-4 md:px-0 flex flex-col gap-4 items-center justify-center">
        <h1 className="text-center">
          From startups to the world&apos;s largest companies
        </h1>
        <div className="flex flex-wrap items-center justify-center text-purple gap-10">
          {[1, 2, 3, 4, 5].map((item, index) => {
            return (
              <img
                src={`/company/Company logo-${item}.svg`}
                key={index}
                alt=""
              />
            );
          })}
        </div>
      </div>
      <Testimonials />
      <Transform />
    </Layout>
  );
};

export default AboutUs;
