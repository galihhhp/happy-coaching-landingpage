import ClientReview from "components/ClientReview";
import Hero from "components/Hero";
import Layout from "components/Layout";
import Session from "components/Session";
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
      <ClientReview />
      <div className="bg-light-yellow min-h-screen md:h-screen px-4 md:px-0 py-10">
        <div className="container flex flex-col h-full justify-evenly gap-10 items-center">
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-sm text-neutral-400">
              This is not for everyone!
            </p>
            <h1 className="text-center text-purple font-bold text-[32px] lg:text-[40px] md:leading-[40px]">
              This program is perfect for you if
            </h1>
          </div>
          <div className="flex flex-col md:flex-row w-full gap-4 md:px-32">
            <div className="w-full md:w-1/2 flex flex-col justify-center gap-16 items-center p-4">
              <h1 className="font-bold">This is NOT for you if...</h1>
              <div className="flex flex-col gap-4">
                {[1, 2, 3, 4].map((item, index) => {
                  return (
                    <div key={index} className="flex flex-row gap-2">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-16 bg-white rounded-lg p-4">
              <h1 className="font-bold">This is for you if...</h1>
              <div className="flex flex-col gap-4">
                {[1, 2, 3, 4].map((item, index) => {
                  return (
                    <div key={index} className="flex flex-row gap-2">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Session />
      <div className="container flex flex-col gap-4 justify-center items-center px-4 md:px-0 py-10">
        <img src="/guarantee.svg" alt="" />
        <h1 className="text-center text-purple font-bold text-[32px] lg:text-[40px] md:leading-[40px]">
          Guarantee
        </h1>
        <p className="text-center text-neutral-400 md:w-96">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore et
          aspernatur eum nisi quasi asperiores maiores provident natus ratione
          rem.
        </p>
      </div>
    </Layout>
  );
};

export default ExtraSales;
