const Transform = ({ full = true }) => {
  const long = () => (
    <div className="container py-10 min-h-screen lg:h-screen flex flex-col justify-center px-4 md:px-0 gap-10 lg:gap-32 items-center">
      <div className="flex flex-col">
        <p className="text-neutral-400 text-sm text-center">
          How does it work?
        </p>
        <h1 className="text-purple text-center font-bold text-[24px] md:text-[32px] md:leading-[52px]">
          Are you ready to transform your life?
        </h1>
        <p className="text-neutral-400 text-center text-[14px] md:text-[16px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui dicta
          voluptatibus nulla non ullam ipsa earum natus eius omnis dolore.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 w-full gap-8 lg:gap-12">
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center items-center">
              <img
                src="/communication.svg"
                alt=""
                className="w-10 mb-4 md:mb-10"
              />
              <h1 className="font-bold text-center text-purple md:text-lg">
                Ready to start? Let&apos;s talk!
              </h1>
              <p className="text-neutral-400 text-center text-[12px] md:text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                dolorem vel reprehenderit, sint molestias provident.
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );

  const short = () => (
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
            amet consectetur adipisicing elit. Non quae placeat laborum officiis
            quos? Dignissimos!
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
  );

  return full ? long() : short();
};

export default Transform;
