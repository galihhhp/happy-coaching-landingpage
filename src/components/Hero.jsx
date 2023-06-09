const Hero = () => {
  return (
    <div className="h-[calc(100vh-5rem)] bg-light-yellow">
      <div className="container h-full flex">
        <div className="flex flex-col justify-center gap-4 h-full w-1/2 pr-32">
          <p className="text-neutral-400 text-sm">
            Proven strategies backed by science for success.
          </p>
          <h1 className="text-[72px] leading-[80px] text-purple font-extrabold">
            Live life at the full potential
          </h1>
          <p>
            I help people to discover their true potential and live a fulfilling
            life... Discover the simple 3 steps that I discovered to hack
            productivity. It just works and it is begin using backed by science.
            Wanna transform your life?
          </p>
          <button className="bg-tosca rounded-lg text-white p-2">
            Get your free guide now
          </button>
        </div>
        <div className="w-1/2 flex py-16 justify-center items-center">
          {/* <img src="/pexels-andrea-piacquadio-3978564 1.png" alt="" /> */}
          <div className="bg-hero-home relative w-full h-full bg-no-repeat bg-contain">
            <div className="absolute top-10 -left-20 bg-white p-2">
              1saffffffffffffffffffff00%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
