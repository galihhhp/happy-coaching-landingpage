const Session = () => {
  return (
    <div className="container lg:h-screen py-8 lg:py-20 px-4 md:px-0">
      <div className="bg-light-yellow h-full rounded-lg flex">
        <div className="w-full flex flex-col justify-center p-20 gap-4">
          <h1 className="font-bold text-purple text-xl lg:text-3xl">
            Get 15-Minutes Complimentary online session.
          </h1>
          <p className="text-neutral-400">Limited Period Offer. Claim Now.</p>
          <button className="bg-tosca rounded-lg text-white p-2">
            Book Now
          </button>
        </div>
        <img
          src="/3_2 screen mockup.png"
          alt=""
          className="w-1/2 h-[80%] self-end hidden md:block"
        />
      </div>
    </div>
  );
};

export default Session;
