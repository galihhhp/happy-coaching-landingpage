import Hero from "components/Hero";
import Layout from "components/Layout";
import Transform from "components/Transform";

const ExtraSales = () => {
  return (
    <Layout>
      <Hero
        bg="bg-transform"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum omnis ex magnam ad illum neque sequi asperiores dolores eum modi."
        title="Results that speak for themselves">
        <div className="absolute top-10 -left-20 bg-white p-2">
          1saffffffffffffffffffff00%
        </div>
      </Hero>
      <Transform />
      <Transform full={false} />
    </Layout>
  );
};

export default ExtraSales;
