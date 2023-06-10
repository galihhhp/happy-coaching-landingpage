import Hero from "components/Hero";
import Layout from "components/Layout";
import Star from "components/Star";

const Guide = () => {
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
      <div className="flex justify-between items-center py-8 px-4 md:px-0 container">
        <div className="flex flex-col gap-4">
          <p className="text-neutral-400 text-sm">Testimonials</p>
          <h1 className="text-purple lg:w-[700px] font-bold text-[32px] md:text-[40px] md:leading-[40px]">
            Results that speak for themselves
          </h1>
        </div>
        <button className="bg-tosca w-40 rounded-lg text-white p-2">
          Get Started
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 container gap-4 lg:px-40 px-4 md:px-0 py-10">
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-2 justify-center items-center border border-neutral-300 rounded-lg md:px-20 p-4">
              <p className="text-center text-sm text-purple">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatem aliquid, vero tempora eveniet in labore illo iusto
                eos et atque.
              </p>
              <img src="/avatar-circle.png" alt="" />
              <h1 className="font-bold text-purple">Naam</h1>
              <p className="text-neutral-400">Indonesia</p>
              <Star />
            </div>
          );
        })}
      </div>
      <div className="bg-light-yellow py-10 px-4 md:px-0">
        <div className="flex md:flex-row flex-col gap-4 container">
          <div className="flex flex-col w-full md:pr-20 gap-4">
            <p className="text-neutral-400">How does it work?</p>
            <h1 className="text-purple font-bold text-[32px] lg:text-[40px] md:leading-[40px]">
              Are you ready to transform your life?
            </h1>
            <p className="text-neutral-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae
              placeat laborum officiis quos? Dignissimos! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Non quae placeat laborum
              officiis quos? Dignissimos!
            </p>
          </div>
          <div className="w-full flex flex-col justify-center gap-4 md:gap-10">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-purple">Online Consultation</h1>
              <p className="text-neutral-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                quidem!
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-purple">
                Ready to start? Lets talk!
              </h1>
              <p className="text-neutral-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                quidem!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container gap-10 py-10 px-4 md:px-0 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-purple text-center lg:w-[700px] font-bold text-[32px] md:text-[44px] lg:text-[56px] md:leading-[52px]">
            Don&apos;t miss out on my{" "}
            <span className="text-tosca">
              &apos;Live life at the full potential&apos;
            </span>
            free guide
          </h1>
          <p className="text-center text-neutral-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            consequatur dicta laudantium animi. Reiciendis corporis nulla vel
            vero quia illum rem, molestiae aliquid, nostrum magni cupiditate
            tenetur ut eaque recusandae assumenda quasi. Neque eaque ea dolorum
            similique sapiente numquam ipsam. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Reiciendis consequatur dicta
            laudantium animi. Reiciendis corporis nulla vel vero quia illum rem,
            molestiae aliquid, nostrum magni cupiditate tenetur ut eaque
            recusandae assumenda quasi. Neque eaque ea dolorum similique
            sapiente numquam ipsam.
          </p>
        </div>
        <button className="bg-tosca rounded-lg text-white p-2">
          Download my free guide
        </button>
        <div className="flex flex-col justify-center items-center text-sm gap-2">
          <p className="text-neutral-400">More than 100+ 5 star review</p>
          <Star />
        </div>
      </div>
    </Layout>
  );
};

export default Guide;
