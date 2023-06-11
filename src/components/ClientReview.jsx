import Star from "./Star";

const ClientReview = () => {
  return (
    <>
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
    </>
  );
};

export default ClientReview;
